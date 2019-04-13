const { Router } = require('express');
const router = Router();

const { Marks } = require('../sequelize/sequelize');

router.get('/', (req, res) => {
  Marks.findAll()
    .then(response => {
      res.json(response).status(200);
    })
    .catch(err => {
      res.json({ 'error': JSON.stringify(err) }).status(400);
    })
})

router.get('/:id', (req, res) => {
  Marks.findByPk(req.params.id).then(response => {
    res.json(response).status(200);
  }).catch(err => {
    res.json({ 'error': JSON.stringify(err) }).status(400);
  })
})

router.post('/', (req, res) => {
  const obj = new Marks();
  obj.marks1 = req.body.marks1;
  obj.marks2 = req.body.marks2;
  obj.marks3 = req.body.marks3;
  obj.marks4 = req.body.marks4;
  obj.marks5 = req.body.marks5;
  obj.studentId = req.body.studentId;
  obj.save()
    .then(response => {
      res.json(response).status(200);
    })
    .catch(err => {
      res.json({ 'error': JSON.stringify(err) }).status(400);
    })
})

router.put('/:id', (req, res) => {
  Marks.update(req.body, {
    where: { id: req.params.id }
  }).then(response => {
    res.json(response).status(200);
  })
    .catch(err => {
      res.json({ 'error': JSON.stringify(err) }).status(400);
    })
})

router.delete("/:id", (req, res) => {
  Marks.destroy({
    where: { id: req.params.id }
  }).then(response => {
    res.json(response).status(200);
  }).catch(err => {
    res.json({ 'error': JSON.stringify(err) }).status(400);
  })
})

module.exports = router;
const { Router } = require('express');
const router = Router();

const { Student, Marks } = require('../sequelize/sequelize');

router.get('/', (req, res) => {
  Student.findAll({
    include: [{
      model: Marks
    }]
  })
    .then(response => {
      res.json(response).status(200);
    })
    .catch(err => {
      res.json({ 'error': JSON.stringify(err) }).status(400);
    })
})

router.get('/:id', (req, res) => {
  Student.findByPk(req.params.id).then(response => {
    res.json(response).status(200);
  }).catch(err => {
    res.json({ 'error': JSON.stringify(err) }).status(400);
  })
})

router.post('/', (req, res) => {
  const obj = new Student();
  obj.firstName = req.body.firstName;
  obj.lastName = req.body.lastName;
  obj.standard = req.body.standard;
  obj.gender = req.body.gender;
  obj.dob = req.body.dob;
  obj.email = req.body.email;
  obj.password = req.body.password;
  obj.mobile = req.body.mobile;
  obj.save()
    .then(student => {
      res.json(student).status(200);
    })
    .catch(err => {
      res.json({ 'error': JSON.stringify(err) }).status(400);
    })
})

router.put('/:id', (req, res) => {
  Student.update(req.body, {
    where: { id: req.params.id}
  }).then(response => {
    res.json(response).status(200);
  })
  .catch(err => {
    res.json({ 'error': JSON.stringify(err) }).status(400);
  })
})

router.delete("/:id", (req, res) => {
  Student.destroy({
    where: { id: req.params.id }
  }).then(response => {
    res.json(response).status(200);
  }).catch(err => {
    res.json({ 'error': JSON.stringify(err) }).status(400);
  })
})

module.exports = router;
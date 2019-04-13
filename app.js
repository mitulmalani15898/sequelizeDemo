const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const studentRoute = require('./routes/student.route')
const marksroute = require('./routes/marks.route')

let app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/student', studentRoute);
app.use('/api/marks', marksroute);

app.get('/', (req, res) => {
  res.send("Hello Node!!!")
});

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
    detail: err
  }).status(err.status || 500);
})

app.listen(8088, () => {
  console.log('server is runnning on port ' + 8088)
})
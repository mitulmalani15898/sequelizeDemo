const Sequelize = require('sequelize');
const { host, database, username, password } = require('../configs/database');

const StudentModel = require('../models/student.model');
const MarksModel = require('../models/marks.model');

const Op = Sequelize.Op;

const sequelize = new Sequelize(database, username, password, { 
  host,
  dialect: 'mysql',
  operatorAliases: Op,
  port: 3306
});

const Student = StudentModel(sequelize, Sequelize);
const Marks = MarksModel(sequelize, Sequelize);

Student.hasMany(Marks, {foreignKey: 'studentId'});
Marks.belongsTo(Student, {foreignKey: 'id'});

sequelize.authenticate()
  .then(() => {
    console.log('MySQL connnection has been established Successfully.')
  })
  .catch(err => {
    console.log('Unable to connect to database', err)
  })

module.exports = { Student, Marks };
module.exports = (sequelize, type) => {
  return sequelize.define('Marks', {
    id: {
      type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    studentId: type.INTEGER,
    marks1: type.INTEGER,
    marks2: type.INTEGER,
    marks3: type.INTEGER,
    marks4: type.INTEGER,
    marks5: type.INTEGER
  })
}
module.exports = (sequelize, type) => {
  return sequelize.define('Student', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: type.STRING,
    lastName: type.STRING,
    standard: type.INTEGER,
    gender: type.INTEGER,
    dob: type.DATE,
    email: {
      type: type.STRING,
      validate: {
        isEmail: true
      }
    },
    password: type.STRING,
    mobile: type.BIGINT(11)
  }, {
      timeStamps: false,
      freezeTableName: true,
      tableName: 'student'
    })
}

// Student.sync({ force: false })
//   .then(() => {
//     console.log("Student Table Created Successfully...")
//   })
//   .catch(() => {
//     console.log("Student Table can't Created...")
//   })

// module.exports= { Student };
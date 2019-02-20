'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lecturer = sequelize.define('Lecturer', {
    lecturer_name: DataTypes.STRING
  }, {});
  Lecturer.associate = function(models) {
    // associations can be defined here
    Lecturer.hasOne(models.Course, {
      foreignKey: 'lecturer_id',
      as: 'lecturer',
    });
  };
  return Lecturer;
};
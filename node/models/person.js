'use strict';
module.exports = (sequelize, DataTypes) => {
  const person = sequelize.define('person', {
    name: DataTypes.STRING,
    designation: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    timestamps: false, 
    freezeTableName: true,
    tableName: 'person'});
  return person;
};
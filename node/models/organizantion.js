'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organizantion = sequelize.define('organizantion', {
    name: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    timestamps: false, 
    freezeTableName: true,
    tableName: 'organizantion'});
  return Organizantion;
};
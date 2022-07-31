'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //define association here
      this.associate = (models) => {
        this.belongsTo(models.User, {
          as: 'userInfo',
          foreignKey: {
            fieldName: 'userId',
            allowNull: false
          }
        });
      };
    }
  };

  Course.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Title is required.' }}
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { notEmpty: { msg: 'Description is required.' }}
    },
    estimatedTime: {
        type: DataTypes.STRING
    },
    materialsNeeded: {
        type: DataTypes.STRING
    }
    }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};

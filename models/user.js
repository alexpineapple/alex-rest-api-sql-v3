'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //define association here
    this.associate = (models) => {
        this.hasMany(models.Course, {
          as: 'userInfo',
          foreignKey: {
            fieldName: 'userId',
            allowNull: false
          }
        });
      };
    }
  };

  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'First name is required.' }}
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Last name is required.' }}
    },
    emailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: { msg: 'Email address is required.'},
          isEmail: { msg: 'Email address is invalid.'}
      },
      unique: {
        args: true,
        msg: 'Email address is already in use.'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: { msg: 'Password is required.' }}
    }
    }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

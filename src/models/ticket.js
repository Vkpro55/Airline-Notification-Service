'use strict';
const {
  Model
} = require('sequelize');

const { Enums } = require("../utils/common");
const { PENDING, SUCCESS, FAILED } = Enums.NOTIFICATION_STATUS;

module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {

    static associate(models) {

    }
  }
  Ticket.init({
    subject: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipientEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: [PENDING, SUCCESS, FAILED],
      defaultValue: PENDING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};
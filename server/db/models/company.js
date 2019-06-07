const Sequelize = require('sequelize')
const db = require('../db')

const Company = db.define(
  'company',
  {
    externalId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    // use companyId for uniqueness
    // maybe trademark law could change so that
    // companies can have the same name
    indexes: [{unique: true, fields: ['externalId']}]
  }
)

module.exports = Company

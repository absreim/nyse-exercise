const Sequelize = require('sequelize')
const db = require('../db')

const SharePrice = db.define('sharePrice', {
  price: {
    // integer representing 1/10 of a cent
    type: Sequelize.INTEGER,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  comment: {
    type: Sequelize.STRING(256),
    allowNull: false
  }
})

module.exports = SharePrice

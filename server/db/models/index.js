const Company = require('./company')
const SharePrice = require('./share-price')

Company.hasMany(SharePrice)
SharePrice.belongsTo(Company)

module.exports = {
  Company,
  SharePrice
}

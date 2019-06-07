const router = require('express').Router()

const {Company, SharePrice} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const companiesWithPrices = await Company.findAll({
      include: [{model: SharePrice}]
    })
    res.send(companiesWithPrices)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  const {name, id} = req.body
  if (!(name && id)) {
    const err = new Error()
    err.status = 400
    next(err)
    return
  }
  try {
    const created = await Company.create(
      {
        externalId: id,
        name
      },
      {
        returning: true
      }
    )
    res.send(created)
  } catch (err) {
    next(err)
  }
})

module.exports = router

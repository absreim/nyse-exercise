const router = require('express').Router()
const multer = require('multer')
const papa = require('papaparse')

const {Company} = require('../db/models')

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

router.post('/', upload.single('prices'), async (req, res, next) => {
  const file = req.file
  const fileString = file.buffer.toString()
  const csv = papa.parse(fileString)
  const {data} = csv
  try {
    for (let row of data) {
      const [companyId, companyName, date, price, comment] = row
      const [upsertedCompany, _] = await Company.upsert(
        {
          externalId: companyId,
          name: companyName
        },
        {
          returning: true
        }
      )
      await upsertedCompany.createSharePrice({
        price,
        date,
        comment
      })
    }
  } catch (err) {
    next(err)
    return
  }
  res.json({rows: data.length})
})

module.exports = router

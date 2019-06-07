const router = require('express').Router()
const multer = require('multer')
const papa = require('papaparse')

const {Company, Model} = require('../db/models')

const storage = multer.memoryStorage()
const upload = multer({storage: storage})

router.post('/', upload.single('prices'), async (req, res, next) => {
  const file = req.file
  const fileString = file.buffer.toString()
  console.log('string rep of file:')
  console.log(fileString)
  const csv = papa.parse(fileString)
  console.log('csv rep of file:')
  console.log(csv)
  res.sendStatus(200)
})

module.exports = router

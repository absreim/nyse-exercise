const router = require('express').Router()
module.exports = router

router.use('/upload', require('./upload'))
router.use('/companies', require('./companies'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

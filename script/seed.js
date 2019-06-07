'use strict'

const db = require('../server/db')
const {Company, SharePrice} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const companies = await Promise.all([
    Company.create({externalId: 1, name: 'Foo Corp'}, {returning: true}),
    Company.create({externalId: 2, name: 'Bar LLC'}, {returning: true})
  ])

  const [fooCompany, barCompany] = companies
  const prices = await Promise.all([
    fooCompany.createSharePrice({
      price: 10000,
      date: Date.now(),
      comment: 'trustworth data source :)'
    }),
    barCompany.createSharePrice({
      price: 2000,
      date: Date.now(),
      comment: 'questionable data source :('
    })
  ])

  console.log(`seeded ${companies.length} companies`)
  console.log(`seeded ${prices.length} prices`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed

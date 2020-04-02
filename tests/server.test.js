const test = require('tape')
const router = require('../router')
const supertest = require('supertest')

// Test for the home route
test('Check status code is 200 on homepage', t => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('content-type', 'text/html')
    .end((error, response) => {
      t.error(error)
      t.equal(response.text.includes('Recipes project'), true)
      t.end()
    })
})

//Check breakfast route is 200 (refactor for other recipe routes)
test('Check status code is 200 for Breakfast page', t => {
  supertest(router)
    .get('/breakfast')
    .expect(200)
    .expect('content-type', 'text/html')
    .end((error, response) => {
      t.error(error)
      t.equal(response.text.includes('Breakfast'), true)
      t.end()
    })
})

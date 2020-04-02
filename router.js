// const homeHandler = require('./handlers/homeHandler')
// const missingHandler = require('./handlers/missingHandler')
// const formHandler = require('./handlers/formHandler')
const recipesHandler = require('./handlers/recipesHandler')
const handlers = require('./handlers/handlers')

function router(request, response) {
  const url = request.url
  if (url === '/') {
    handlers.homeHandler(request, response)
  } else if (url === '/form') {
    handlers.formHandler(request, response) //displays the form
  } else if (url === '/submit' || request.method === 'POST') {
    handlers.submit(request, response) //deals with form post request
  } else if (url === '/breakfast') {
    recipesHandler.breakfastHandler(request, response)
  } else if (url === '/lunch') {
    recipesHandler.lunchHandler(request, response)
  } else if (url === '/dinner') {
    recipesHandler.dinnerHandler(request, response)
  } else if (url === '/dessert') {
    recipesHandler.dessertHandler(request, response)
  } else if (url === '/snacks') {
    recipesHandler.snacksHandler(request, response)
  } else if (url.includes('public/')) {
    handlers.public(request, response)
  } else {
    handlers.missingHandler(request, response)
  }
}

module.exports = router

const homeHandler = require('./handlers/home_handler')
const publicHandler = require('./handlers/public_handler')
const missingHandler = require('./handlers/missing_handler')

function router(request, response) {
  const url = request.url
  if (url === '/') {
    response.writeHead(200, { 'content-type': 'text/html' })
    home_handler(request, response)
    // }else if (url === /*the directory for CSS etc*/){
  } else {
    response.writeHead(404, { 'content-type': 'text/html' })
    response.end(`<h1>Not Found</h1>`)
  }
}

module.exports = router

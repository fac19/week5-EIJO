const templates = require('../templates')

function formHandler(request, response) {
  response.writeHead(200, { 'content-type': 'text/html' })
  const formHtml = templates.form()
  response.end(formHtml)

  response.on('error', error => {
    console.log(error)
    response.writeHead(500, { 'content-type': 'text/html' })
    response.end(`<h1>Internal server error oops!</h1>`)
  })
}

module.exports = formHandler

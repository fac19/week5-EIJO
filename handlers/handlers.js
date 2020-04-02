const templates = require('../templates')
const databaseMethods = require('../model')
const fs = require('fs')
const path = require('path')
const { parse } = require('querystring')

function public(request, response) {
  const types = {
    css: 'text/css',
    //   js: "application/javascript",
  }

  const requestURl = request.url // assets/style.css
  const pathNames = requestURl.split('/') // [public, style.css]
  const extension = requestURl.split('.')[1] // [public/style, css]
  const newPath = path.join(__dirname, '..', ...pathNames)

  fs.readFile(newPath, (error, file) => {
    if (error) {
      console.error(error)
    } else {
      let type = types[extension]
      response.writeHead(200, { 'content-type': type })
      response.end(file)
    }
  })
}

function homeHandler(request, response) {
  response.writeHead(200, { 'content-type': 'text/html' })
  const homeHtml = templates.home()
  response.end(homeHtml)

  response.on('error', error => {
    console.error(error)
    response.writeHead(500, { 'content-type': 'text/html' })
    response.end(`<h1>Internal server error oops!</h1>`)
  })
}

function formHandler(request, response) {
  response.writeHead(200, { 'content-type': 'text/html' })
  const formHtml = templates.form()
  response.end(formHtml)

  response.on('error', error => {
    console.error(error)
    response.writeHead(500, { 'content-type': 'text/html' })
    response.end(`<h1>Internal server error oops!</h1>`)
  })
}

function submit(request, response) {
  let bodyContent = ''

  request.on('data', chunk => {
    bodyContent += chunk.toString()
  })

  request.on('end', () => {
    const recipeObj = parse(bodyContent)
    databaseMethods.createNewEntry(recipeObj)
    response.writeHead(301, { location: `/${recipeObj.type}` })
    response.end()
  })
}

function missingHandler(request, response) {
  response.writeHead(404, { 'content-type': 'text/html' })
  response.end('<h1>Page does not exist</h1>')
}

module.exports = { homeHandler, formHandler, missingHandler, public, submit }

// const homeHandler = require('./handlers/homeHandler')
// const missingHandler = require('./handlers/missingHandler')
// const formHandler = require('./handlers/formHandler')
const recipesHandler = require("./handlers/recipesHandler");
const handlers = require("./handlers/handlers");

function router(request, response) {
  const url = request.url;
  if (url === "/") {
    handlers.homeHandler(request, response);
  } else if (url === "/form") {
    handlers.formHandler(request, response); //displays the form
    // } else if (url === "/post-form" && method === POST) {
    //   postFormHandler(request, response); //deals with form post request
  } else if (url === "/breakfast") {
    recipesHandler(request, response);
  } else if (url === "/lunch") {
    recipesHandler(request, response);
  } else if (url === "/dinner") {
    recipesHandler(request, response);
  } else if (url === "/dessert") {
    recipesHandler(request, response);
  } else if (url === "/snacks") {
    recipesHandler(request, response);
  } else if (url.includes("public/")) {
    handlers.public(request, response);
  } else {
    handlers.missingHandler(request, response);
  }
}

module.exports = router;

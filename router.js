const recipesHandler = require("./handlers/recipesHandler");
const handlers = require("./handlers/handlers");

function router(request, response) {
  const url = request.url;
  if (url === "/") {
    handlers.homeHandler(request, response);
  } else if (url === "/form") {
    handlers.formHandler(request, response); //displays the form
  } else if (url === "/submit" || request.method === "POST") {
    handlers.submit(request, response); //deals with form post request
  } else if (
    url === "/breakfast" ||
    url === "/lunch" ||
    url === "/dinner" ||
    url === "/dessert" ||
    url === "/snacks"
  ) {
    recipesHandler(request, response);
  } else if (url.includes("public/")) {
    handlers.public(request, response);
  } else {
    handlers.missingHandler(request, response);
  }
}

module.exports = router;

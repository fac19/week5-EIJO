function breakfastHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  response.end("<h1>Breakfast Recipes</h1>");
}

function lunchHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  response.end("<h1>Lunch Recipes</h1>");
}

function dinnerHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  response.end("<h1>Dinner Recipes</h1>");
}

function dessertHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  response.end("<h1>Dessert Recipes</h1>");
}

function snacksHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  response.end("<h1>Snacks</h1>");
}
module.exports = {
  breakfastHandler,
  lunchHandler,
  dinnerHandler,
  dessertHandler,
  snacksHandler
};

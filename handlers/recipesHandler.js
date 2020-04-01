function breakfastHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  response.end("<h1>Breakfast Recipes</h1>");
}

function lunchHandler(request, response) {
  response.writeHead(200, { "content-type": "text/html" });
  response.end("<h1>Lunch Recipes</h1>");
}

function dinnerHandler(requestz, response) {
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

// function serveAllStaticElements(request, response) {
//   const fs = require("fs");
//   const path = require("path");

//   const types = {
//     html: "text/html",
//     css: "text/css",
//     js: "application/javascript",
//     jpg: "image/jpeg",
//     ico: "image/x-icon"
//   };

//   const url = request.url;
//   const urlArray = url.split(".");
//   const extension = urlArray[1];
//   const type = types[extension];

//   fs.readFile(path.join(__dirname, "..", url), (error, file) => {
//     if (error) {
//       console.log(error);
//       response.writeHead(404, { "content-type": "text/html" });
//       response.end("<h1>File not found</h1>");
//     } else {
//       response.writeHead(200, { "content-type": type });
//       response.end(file);
//     }
//   });
// }

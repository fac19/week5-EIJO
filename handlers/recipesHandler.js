const model = require("../model");
const template = require("../templates");

function postHandler(request, response) {
  const url = request.url;
  const string = url.replace("/", "");

  const recipeDisplay = model.getPostsByType(string);
  //   .then(post => template.createRecipes(post));

  recipeDisplay.then(thing => {
    console.log(thing);
  });

  response.writeHead(200, { "content-type": "text/html" });
  response.end(`<h1>${string} Recipes</h1>`);
}

module.exports = postHandler;

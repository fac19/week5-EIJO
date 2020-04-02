const model = require("../model");
const template = require("../templates");

function postHandler(request, response) {
  const url = request.url;
  const string = url.replace("/", "");

  model
    .getPostsByType(string)
    .then(post => {
      const page = template.createRecipes(post);
      response.writeHead(200, { "content-type": "text/html" });
      response.end(page);
    })
    .catch(console.error());
}

module.exports = postHandler;

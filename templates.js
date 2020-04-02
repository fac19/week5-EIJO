const handler = require("./handlers/recipesHandler");

function sharedLayout(bodyContent) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
      <title>Recipes Project</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='stylesheet' href="public/style.css"
        
      </head>
      <body>${bodyContent}</body>
    </html>
    `;
}

function home() {
  return sharedLayout(`
       <h1 class="title">Recipes project</h1>
       <section class="links-wrapper">
         <a class="links-wrapper__form" href="/form">Write A Recipe!</a>
         <a class="links-wrapper__recipes" href="/breakfast" aria-label="Breakfast recipes">Breakfast!</a>
         <a class="links-wrapper__recipes" href="/lunch" aria-label="Lunch recipes">Lunch!</a>
         <a class="links-wrapper__recipes" href="/dinner" aria-label="Dinner recipes">Dinner!</a>
         <a class="links-wrapper__recipes" href="/dessert" aria-label="Dessert recipes">Dessert!</a>
         <a class="links-wrapper__recipes" href="/snacks" aria-label="Snack recipes">Snacks!</a>
       </section> 
       <section class ="footer" aria-label="contact-details">
       <p>all the random footer stuff and the contacts?</p>
       </section>
    `);
}

function form() {
  return sharedLayout(`
      <section>
        <form class="form" action="/post-form">
        <label class="form__label" for="recipe-title">Recipe Title:</label>
        <input class="form__input" type="text" name="recipe-title" placeholder="Pizza" required> 
        
        <label class="form__label" for="recipe-category">Choose a category:</label>
        <select name="recipe-category">
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snacks">Snacks</option>
          <option value="desserts">Desserts</option>
        </select>
        <label class="form__label" for="dietary-req">Vegetarian:</label>
        <input class="form__input" type="checkbox" name="dietary-req" required> 
        <label class="form__label" for="ingredients">Ingredients:</label>
        <textarea class="form__textbox" form="form" name="ingredients" placeholder="1 egg" required></textarea>
        <label class="form__label" for="ingredients">Method:</label>
        <textarea class="form__textbox" form="form" name="method" placeholder="oven it" required></textarea>
        <button class="form__button" aria-label="button to add recipe" type="submit">Add Recipe!</button>
        </form>
      </section>
`);
}

function createRecipes(post) {
  return sharedLayout(
    post.map(item => {
      `<section class='recipe__card'>
    <h1 class='recipe__card-title'>${item.recipeTitle}</h1>
    <h2 class='recipe__card-subtitle'>Ingredients</h2>
    <p class='recipe__card-subtext'>${item.ingredients}</p>
    <h2 class='recipe__card-subtitle'>Method</h2>
    <p class='recipe__card-subtext'>${item.method}</p>
    <i class="fas fa-seedling"></i>

  </section>`;
    })
  );
}

module.exports = {
  home,
  form,
  createRecipes
};

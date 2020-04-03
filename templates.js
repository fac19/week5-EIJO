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
       <div class="home_wrapper">
        <h1 class="title">Cookvid-19</h1>
        <p class="tagline"> Can't rely on Deliveroo or Ubereats no more? Have no fear, Cookvid has your back with some recipes</p>
        <section class="links-wrapper">
          <a class="links-wrapper__form" href="/form">Write A Recipe!</a>
          <a class="links-wrapper__recipes" href="/breakfast" aria-label="Breakfast recipes">Breakfast!</a>
          <a class="links-wrapper__recipes" href="/lunch" aria-label="Lunch recipes">Lunch!</a>
          <a class="links-wrapper__recipes" href="/dinner" aria-label="Dinner recipes">Dinner!</a>
          <a class="links-wrapper__recipes" href="/dessert" aria-label="Dessert recipes">Dessert!</a>
          <a class="links-wrapper__recipes" href="/snacks" aria-label="Snack recipes">Snacks!</a>
        </section> 
          <footer aria-label="contact-details">
            <p>Bought to you by Team EIJO</p>
        </footer>
      </div>
    `);
}

function form() {
  return sharedLayout(`
      <section>
        <form class="form" id="form" action="/submit" method="POST">
        <a class="link__home" href="/">Back to Home Page!</a>
        <label class="form__label" for="recipeTitle">Recipe Title:</label>
        <input class="form__input" id="recipeTitle" type="text" name="recipeTitle" placeholder="Pizza" required> 
        
        <label class="form__label" for="recipeCategory">Choose a category:</label>
        <select id="recipeCategory" class="recipe__category" name="type" required>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snacks">Snacks</option>
          <option value="desserts">Desserts</option>
        </select>
        <label class="form__label" for="ingredients">Ingredients:</label>
        <textarea class="form__textbox" id="ingredients" form="form" name="ingredients" placeholder="1 egg" required></textarea>
        <label class="form__label" for="ingredients">Method:</label>
        <textarea class="form__textbox" form="form" id="method" name="method" placeholder="oven it" required></textarea>
        <label class="form__label" for="vegetarian">Vegetarian:</label>
        <select id="vegetarian" name="vegetarian" class= "dietary__req" required>
          <option value="true">yes</option>
          <option value="false">no</option>
        </select>
        <button class="form__button" aria-label="button to add recipe" type="submit">Add Recipe!</button>
        </form>
      </section>
`);
}

function createRecipes(posts) {
  let str = "";
  posts.map(item => {
    return (str += `<section class='recipe__card'>
    <h1 class='recipe__card-title'>${item.recipetitle}</h1>
    <h2 class='recipe__card-subtitle'>Ingredients</h2>
    <p class='recipe__card-subtext'>${item.ingredients}</p>
    <h2 class='recipe__card-subtitle'>Method</h2>
    <p class='recipe__card-subtext'>${item.method}</p>
    <a class="link__home" href="/">Back to Home Page!</a>
    <a class="link__form" href="/form">Write A Recipe!</a>
    <i class="fas fa-seedling"></i>
  </section>`);
  });
  return sharedLayout(str);
}

module.exports = {
  home,
  form,
  createRecipes
};

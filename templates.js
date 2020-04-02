function sharedLayout(bodyContent) {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='stylesheet' href="public/style.css"
        <title>Document</title>
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

module.exports = {
  home
};

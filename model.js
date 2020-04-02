const db = require('./database/connection')

function getTitles() {
  return db.query('SELECT recipeTitle FROM recipes')
    .then(result => result.rows)
}

function getOneEntry(title){
  return db.query (`SELECT * FROM recipes WHERE recipeTitle='${title}'`)
  .then(result => result.rows[0])
}


function createNewEntry(data){
  const values = [data.recipeTitle, data.type, data.ingredients, data.method, data.vegetarian];
  return db.query(`INSERT INTO recipes(recipeTitle, type, ingredients, method, vegetarian) VALUES($1, $2, $3, $4, $5)`, values);
}

function getAllPosts(){

}




module.exports = { getTitles, getOneEntry, createNewEntry }

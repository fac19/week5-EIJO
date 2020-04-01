const db = require('./database/connection')

function getTitles() {
  return db.query('SELECT recipeTitle FROM recipes').then(result => result.rows)
}

module.exports = { getTitles }

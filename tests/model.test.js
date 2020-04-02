const test = require("tape");
const db = require("../database/connection");
const build = require("../database/build");

const { getTitles, getOneEntry, createNewEntry } = require("../model");

test("tests are running!", t => {
  const x = 5;
  t.equal(x, 5, "this is working");
  t.end();
});

test("Can get recipe titles!", t => {
  build().then(() => {
    getTitles()
      .then(title => {
        const firstTitle = title[0];
        t.equal(firstTitle.recipetitle, "Pesto pasta");
        t.equal(title.length, 3);
        t.end();
      })
      .catch(error => {
        t.error(error);
        t.end();
      });
  });
});

test("Can get one entry from title", t => {
  build().then(() => {
    const title = "pancakes";
    getOneEntry(title)
      .then(data => {
        t.equal(data.vegetarian, true),
          t.equal(data.type, "breakfast"),
          t.end();
      })
      .catch(err => {
        t.error(err), t.end();
      });
  });
});

test("Can get title of new recipe!", t => {
  build().then(() => {
    const data = {
      recipeTitle: "Spaghetti Bolognese",
      type: "dinner",
      ingredients: "spaghetti, mince, tomato",
      method: "Cook",
      vegetarian: false
    };
    createNewEntry(data)
      .then(getTitles)
      .then(title => {
        const lastTitle = title[title.length - 1];
        t.equal(lastTitle.recipetitle, "Spaghetti Bolognese"), t.end();
      })
      .catch(err => {
        t.error(err), t.end();
      });
  });
});

test("Can create new recipe!", t => {
  build().then(() => {
    const data = {
      recipeTitle: "Spaghetti Bolognese",
      type: "dinner",
      ingredients: "spaghetti, mince, tomato",
      method: "Cook",
      vegetarian: false
    };
    createNewEntry(data)
      .then(() => {
        const title = "Spaghetti Bolognese";
        getOneEntry(title).then(entry => {
          t.equal(entry.ingredients, "spaghetti, mince, tomato"),
            t.equal(entry.method, "Cook"),
            t.end();
        });
      })
      .catch(err => {
        t.error(err), t.end();
      });
  });
});

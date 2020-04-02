const test = require("tape");
const db = require("../database/connection");
const build = require("../database/build");

const { getTitles } = require("../model");

test("tests are running!", t => {
  const x = 5;
  t.equal(x, 5, "this is working");
  t.end();
});

// test('Can get recipe titles!', t => {
//   build().then(() => {
//     getTitles()
//       .then(title => {
//         const firstTitle = title[0]
//         t.equal(firstTitle.recipetitle, 'Pesto pasta')
//         t.equal(title.length, 3)
//         t.end()
//       })
//       .catch(error => {
//         t.error(error)
//         t.end()
//       })
//   })
// })

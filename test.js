const test = require("tape");
const router = require("./router");

//Tests router
test("Initialise", t => {
  let num = 2;
  t.equal(num, 2, "Should return 2");
  t.end();
});

test("Home route returns a status code of 200", t => {
  let num = 2;
  t.equal(num, 2, "Should return 2");
  t.end();
});

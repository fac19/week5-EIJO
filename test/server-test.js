const test = require("tape");
const router = require("../router");
const supertest = require("supertest");

//Tests router (will need to add supertest here)
test("Initialise", t => {
  let num = 2;
  t.equal(num, 2, "Should return 2");
  t.end();
});

//Test for the home route

// test("Check status code is 200 on homepage", t => {
//   supertest(router)
//     .get("/")
//     .expect(200)
//     .expect("content-type", /html/)
//     .end((error, response) => {
//       t.error(error);
//       t.equal(response.text.includes("<h1>Home Page</h1>"), true);
//       t.end();
//     });
// });

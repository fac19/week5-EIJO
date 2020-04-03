const pg = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.DATABASE_URL;

if (!url) {
  console.error();
}

const db = new pg.Pool({
  connectionString: url
  // if we have a database URL (e.g. from Heroku we'll use that)
  // otherwise it'll default to your local .env variables
});

module.exports = db;

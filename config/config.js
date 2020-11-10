module.exports = {

  "development": {
    "username": "dreamteam",
    "password": "testpassword",
    "database": "jobbyist",
    "host": "localhost",
    "dialect": "postgres"
  },
  "test": {
    "username": "dreamTeam",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_LOCAL,
    "dialect": "postgres"
  }

}
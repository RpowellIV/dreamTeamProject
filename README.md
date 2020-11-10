![last commit](https://img.shields.io/github/last-commit/RpowellIV/dreamTeamProject)
![open issues](https://img.shields.io/github/issues-raw/RpowellIV/dreamTeamProject)
![contributors](https://img.shields.io/github/contributors/RpowellIV/dreamTeamProject)
![license](https://img.shields.io/github/license/RpowellIV/dreamTeamProject)
![languages](https://img.shields.io/github/languages/count/RpowellIV/dreamTeamProject)
![top language](https://img.shields.io/github/languages/top/RpowellIV/dreamTeamProject)

# Jobbyist

Jobbyist is a job posting app geared toward those who would like to be payed for doing the things they love and people who are looking for others with unique hobbyist skills.

Want to learn how to play the guitar? Check out Jobbyist! Want to teach people how to skydive? Make a post on Jobbyist!

Jobbyist will be hosted and deployed by Heroku at (insert url here)

---

## Running Jobbyist
1. Need to have [Node.js](https://nodejs.org/en/download/) installed.
1. Clone the repository.
1. Install node packages  
   `npm install`
1. Create an app for Google oauth on the Google Cloud Platform.
1. Create a `.env` file in the root of the project and place the following variables in this file.
   1. DB_USER= `your database user`
   1. DB_Pass= `your database user password`
   1. DB_LIB= `your database name`
   1. DB_HOST= localhost
   1. GOOGLE_CLIENT_ID= `your google client ID`
   1. GOOGLE_CLIENT_SECRET= `your google client secret`
   1. GOOGLE_CLIENT_CALLBACK = `http://localhost:3000/auth/google/callback`
1. Start the server  
   `npm start`
1. App will run on at `http://localhost:3000`

## Technologies Used

---

Express.js, Passport.js, Postgres, Google OAuth,EJS, Node.js, Javascript

## APIs Used

   - [Adzuna APi](https://developer.adzuna.com/activedocs#!/adzuna/search)

## Team Members

---

Ben Varnum - (http://github.com/bensvarnum)

John Loftin - (http://github.com/JohnLoftin)

Robert Powell - (http://github.com/RpowellIV)

Stephen Roach - (http://github.com/Stephen-Roach)

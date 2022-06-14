
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db.sqlite", (error) => {
  if (error) {
    // Kunde inte öppna databasen
    console.error(error.message);
    throw error;
  }

  // Här kan vi anta att vi är anslutna
  console.log("Ansluten till vår databas");

  const statement = `
  CREATE TABLE books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    author TEXT,
    genre TEXT)`

  db.run(statement, (error) => {
    if (error) {
      // Om tabellen redan finns
      console.error(error.message);
      return;
    } else {

      const insert = `INSERT INTO books
    (title, author, genre)
    VALUES(?,?,?)`;

      db.run(insert, [
        "Vroooom",
        "Team Porsche",
        "Racing",
      ]);
    }


  })



});




module.exports = db;
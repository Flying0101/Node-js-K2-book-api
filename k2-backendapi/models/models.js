const db = require('../database');


// GET all books here!
function allBooks() {

  const sql = "SELECT * FROM books";

  return new Promise((resolve, reject) => {
    db.all(sql, (error, rows) => {

      if (error) {
        console.error(error.message);
        reject(error);
      }


      resolve(rows);

    });
  });
}

// -------------------------------------------------------------
// POST METHOD / ADD NEW BOOK
function newBook(bookData) {

  const sql = "INSERT INTO books (title, author, genre) VALUES (?, ?, ?)";


  return new Promise((resolve, reject) => {
    db.run(sql, [bookData.title, bookData.author, bookData.genre], (error) => {
      if (error) {
        reject(error);
      }
      resolve();

    });
  });
}



//-------------------------------------------------------------------
// DELETE METHOD / DELETE ONE BOOK


function delFunc(id) {

  const sql = "DELETE FROM books WHERE id = ?";
  return new Promise((resolve, reject) => {

    db.run(sql, id, (error) => {
      if (error) {
        reject(error);
      }
      resolve();
    })
  })


}

//--------------------------------------------------------------------
//GET ONE BOOK

function thisBook(id) {

  const sql = "SELECT * FROM books WHERE id = ?";
  return new Promise((resolve, reject) => {
    db.get(sql, id, (error, rows) => {
      if (error) {
        reject(error);
      }
      resolve(rows);
    })
  })

}


//---------------------------------------------------------------------
//PUT METHOD BOOK


function changeBook(id, information) {

  const sql = `UPDATE books SET title = '${information.title}', author = '${information.author}', genre = '${information.genre}', id = ${id} WHERE id = ${id}`

  return new Promise((resolve, reject) => {
    db.run(sql, (error) => {
      if (error) {
        reject(error);
      }
      resolve();

    });
  });
}


//-----------------------------------------------------------------------
// PATCH METHOD BOOK

function partChangeBook(id, title) {

  const sql = `UPDATE books SET title = '${title}' WHERE id = ${id}`;

  return new Promise((resolve, reject) => {

    db.run(sql, (error) => {
      if (error) {
        reject(error);
      }
      resolve();
    })
  })


}










// all the model functions / exports
module.exports = {
  allBooks,
  newBook,
  delFunc,
  thisBook,
  changeBook,
  partChangeBook
}
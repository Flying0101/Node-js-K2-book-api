

const express = require('express');

const app = express();

const controllers = require('./controllers/controller');

app.use(express.json())

// get all books
app.get('/books', controllers.acquireBook);

// post new book
app.post('/books', controllers.addBook);

//delete one book by id.
app.delete('/books/:id', controllers.deleteBook);

// get one book by id
app.get('/books/:id', controllers.oneBook);

// put(method) one book by id
app.put('/books/:id', controllers.puutBook);

// patch(mehtod) one book by id
app.patch('/books/:id', controllers.paatchBook);


app.listen(4000, () => {
    console.log('Servern är igång i port: 4000');
})
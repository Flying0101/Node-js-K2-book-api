

const models = require('../models/models');


// get all books! 

async function acquireBook(req, res) {
    // const receive = models.allBooks();

    const receive = await models.allBooks();

    res.json(receive);
    res.status(200);


}


// post method function / post one new book
async function addBook(req, res) {


    const bookData = {
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
    };

    if (!req.body.author || !req.body.title || !req.body.genre) {
        return res.status(400).send("missing/wrong data format!");
    } else {
        const reData = await models.newBook(bookData);
        res.status(201).json({ status: "success", bookData });
        res.json(reData);
    }



}


//delete one book by id 

async function deleteBook(req, res) {

    const id = req.params.id;
    const theOne = await models.thisBook(id);
    if (!theOne) {

        res.status(404);
        console.log("ERROR 404");
        res.json("ID ERROR")

    } else {

        const gone = await models.delFunc(id);
        console.log(`the ID:${id} was deleted!`);
        res.json({ status: "delete success", data: gone });

        res.status(200);


    }

}



//get one book by id
async function oneBook(req, res) {

    const id = req.params.id;
    const theOne = await models.thisBook(id);

    if (!theOne) {
        res.status(404);
        console.log("ERROR 404");
        res.json("ID ERROR")

    } else {

        res.json(theOne)
        res.status(200);
    }
}



// put one book by id

async function puutBook(req, res) {

    const id = req.params.id;
    const title = req.body.title;
    const author = req.body.author;
    const genre = req.body.genre;




    if (!title || !author || !genre) {
        res.status(404);
        console.log("error, missing all data!");
        res.json(info = "you need title, author and genre to run PUT")
    }
    else {
        const information = { title, author, genre };

        await models.changeBook(id, information);

        res.json({ status: "PUT success", data: information });
        res.status(200);
    }
}



// patch one book by id

async function paatchBook(req, res) {
    const id = req.params.id;
    const title = req.body.title;


    const theOne = await models.thisBook(id);

    if (!theOne || !title) {
        console.log("ERROR DATA/ID PROBLEM ");
        res.status(404).send({ status: "error 404" });

    } else {
        const theBook = await models.partChangeBook(id, title);

        res.json({ status: "success", data: theBook })
        res.status(200);
    }


}



// exports

module.exports = { acquireBook, addBook, deleteBook, oneBook, puutBook, paatchBook };
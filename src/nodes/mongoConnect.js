var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyparser.json());

const Books = require('./books.js');
const Genres = require('./genres.js');

var db = {
    host : 'localhost',
    database : 'testDb'
};

var conUrl = 'mongodb://'+db.host+'/'+db.database;

// Connect to mongodb db
mongoose.connect(conUrl);
var con = mongoose.connection;

app.get('/', function(req, res){
    res.send('Connecting to database');
});

// Get all books
app.get('/api/books', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Books.getBooks(function(err, books){
        if(err)
            throw err;
        else{
            console.log('Books ',books);
            res.json(books);
        }
    })
});

// Get limited set books
app.get('/api/books/:_limit', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    Books.getBooks(function(err, books){
        if(err)
            throw err;
        else{
            console.log('Books ',books);
            res.json(books);
        }
    })
});

// Get books by book name
app.get('/api/books/name/:_name', function(req, res){
    console.log('Data recved ',req.params._name);
    Books.getBooksByName(req.params._name, function(err, books){
        if(err)
           throw err;
        else{
           res.json(books);
        }
    })
});

// Add a new book
app.post('/api/books', function(req, res){
    var book = req.body;
    Books.addBook(book, function(err, book){
        if(err)
            throw err;
        else{
            res.json(book);
        }
    })
});

// Update a book details
app.put('/api/books/:_name', function(req, res){
    var book = req.body;
    Books.addBook(req.params._name, book, {},  function(err, book){
        if(err)
            throw err;
        else{
            res.json(book);
        }
    })
});

// Remove a book
app.delete('/api/books/:_name', function(req, res){
    Books.deleteBook(req.params._name, function(err, book){
        if(err)
            throw err;
        else{
            res.write('Book Deleted');
            res.redirect('/api/books');
        }
    });
});

// get list of genres
app.get('/api/genres', function(req, res){
    Genres.getGenres(function(err, genres){
        if(err)
            throw err;
        else{
            console.log('Genres ',genres);
            res.json(genres);
        }
    })
});

// add a new genre
app.post('/api/genres', function(req, res){
    var genre = req.body;
    Genres.addGenre(genre, function(err, genre){
        if(err)
            throw err;
        else
            res.redirect('/api/genres');
    })
});

// delete a genre
app.delete('/api/genres/:_name', function(req, res){
    console.log(req.params._name);
    Genres.deleteGenre(req.params._name, function(err, genre){
        if(err)
            throw err;
        else
            res.redirect('/api/genres');
    })
});



app.listen(3001);


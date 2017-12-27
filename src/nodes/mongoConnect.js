var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

const Books = require('./books.js');

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

app.get('/api/books', function(req, res){
    Books.getBooks(function(err, books){
        if(err)
            throw err;
        else{
            console.log('Books ',books);
            res.json(books);
        }
    })
});

app.get('/api/books/name/:_name', function(req, res){
    Books.getBooksByName(req.params._name, function(err, books){
        if(err)
           throw err;
        else{
           res.json(books);
        }
    })
});

app.listen(3001);


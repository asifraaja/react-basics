var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    genre : {
        type : Array,
        required : true
    },
    descp : {
        type : String,
        required : false
    },
    publisher : {
        type : String,
        required : true
    },
    pages : {
        type : String,
        required : false
    }
});

var Book = module.exports = mongoose.model('Books', bookSchema);

module.exports.getBooks = function(callback, limit){
   Book.find(callback).limit(limit);
};

module.exports.getBooksByName = function(name, callback, limit){
    Book.find({'name':name}, callback).limit(limit);
};

module.exports.addBook = function(book, callback){
    Book.create(book, callback);
};

module.exports.deleteBook = function(name, callback){
    var book = Book.find({'name':name});
    if(book.name == name){
        Book.remove({'name':name}, callback);
    }else{
        callback;
    }
};


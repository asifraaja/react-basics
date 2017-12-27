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
        required : false
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

module.exports.getBooks = function(callback, limit){
   Book.find(callback).limit(limit);
};

module.exports.getBooksByName = function(name, callback, limit){
    Book.find(name, callback).limit(limit);
};

80706534 - 23755918
2685137  - 1925818
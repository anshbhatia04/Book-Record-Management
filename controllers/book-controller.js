const {UserModel, BookModel} = require("../models");

exports.getAllBooks = async(req, res) => {
    const books = await BookModel.find();

    if(books.length === 0){
        return res.status(404).json({
            success: false,
            message: "No Books Found",
        });
    };
    res.status(200).json({
        success: true,
        data: books,
    });
};

exports.getSingleBookbyId = async(req, res) => {
    const { id } = req.params;
    const book = await BookModel.findById(id);

    if(!books) {
        return res.status(404).json({
            success: false,
            message: "Book Not Found",
        });
    };
    res.status(200).json({
        success: true,
        message: "Found The Book By its Id!",
        data: book,
    });
};

exports.getAllIssuedBooks = async(req, res) => {
    const users = await UserModel.find({
        issuedBook: {$exists: true}
    }).populate("issuedBook");

    // Data Transfer Object (DTO)
    // const issuedBooks = users.map(each) => new issuedBook(each);

    if (issuedBooks.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No Book Have Been Issued Yet..",
        });
    }
    return res.status(200).json({
        success: true,
        message: "Users With The Issued Books...",
        data: issuedBooks,
    });
};




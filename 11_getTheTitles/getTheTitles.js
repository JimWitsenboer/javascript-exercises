const getTheTitles = function(books) {
  let titlesOfBooks =  books.map(function(book) {
    return book.title;
  });
  return titlesOfBooks;
};

// Do not edit below this line
module.exports = getTheTitles;

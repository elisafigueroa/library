//return number of books inside array
//single parameter - books
function getTotalBooksCount(books) {
  return books.length;
}

//return total # accts
function getTotalAccountsCount(accounts) {
  let total = 0;
  accounts.forEach((account) => {
    total += 1;
  });
  return total;
}

//return total of checked out books. 
function getBooksBorrowedCount(books) {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    for (let k = 0; k < books[i].borrows.length; k++) {
      if (books[i].borrows[k].returned === false) {
        total += 1;
      }
    }
  }
  return total;
}



//return array with top 5 genres, descending 
//each object in returned array has two keys: 
  //name -> name of genre
  //count -> times genre occurs
function getMostCommonGenres(books) {
  let genres = []; 
  books.forEach((book) => {
    let result = genres.find((genre) => genre.name === book.genre) 
    if (result === undefined) {
      genres.push({name: book.genre, count: 1})
    } 
    else {
      result.count++; 
    }
  });
  genres.sort((a, b) => b.count - a.count);
  genres.splice(5) 
  return genres; 
}


//top 5 most borrowed books
  // each object in returned array has two keys: 
    //name -> title of the book
    //count -> number of times book has been borrowed
function getMostPopularBooks(books) {
  let mostPopular = []; 
  books.forEach((book) => {
    let result = mostPopular.find((popular) => popular.name === book.title)
    if (result === undefined) {
      mostPopular.push({name: book.title, count: book.borrows.length})
  }
  else {
    result.count++; 
  }
});
  mostPopular.sort((a,b) => b.count - a.count); 
  mostPopular.splice(5); 
  return mostPopular; 
}



// 5 most popular authors books have been checked out the most
  //output: {name: first + last name of author, count: borrowed by author}
function getMostPopularAuthors(books, authors) {
  let popularAuthors = []; 
  authors.forEach((author) => {
    let authorObj = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
    }; 
  books.forEach((book) => {
    if (book.authorId === author.id) {
      authorObj.count += book.borrows.length;
    }
  }); 
  popularAuthors.push(authorObj)
  }); 
  
  return fiveAuthors(popularAuthors); 
}
function fiveAuthors(array) {
  let popularAuthors = array
    .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
    .slice(0, 5);
  return popularAuthors;
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

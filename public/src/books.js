//return author object with matching ID
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

//return book object with matching ID
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

//return array with two arrays inside 
// 1. checked out books  .filter status books.borrows.returned === false
// 2. returned books .filter status books.borrows.returned === true
function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true));
  let booksBorrowed = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
  let finalArray = [[...booksBorrowed], [...booksReturned]];
  return finalArray;
}


//return array of then or fewer acct objs 
//array repesents accounts given by the IDs in the provided book's `borrows` array
/*each acct obj should include the `returned` entry from the corresponding 
 transaction obj in the `borrows` array */ 
//match book.id with accounts.id
function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => {
      let account = accounts.find((account) => account.id === borrow.id);
      return { ...borrow, ...account };
    })
    .slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus, 
  getBorrowersForBook,
};

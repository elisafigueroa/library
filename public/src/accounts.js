//return account with matching ID
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

//return sorted array of accounts. sort by last name
function sortAccountsByLastName(accounts) {
  accounts.sort((lastA, lastB) =>
    lastA.name["last"].toLowerCase() > lastB.name["last"].toLowerCase() ? 1 : -1
  );
  return accounts;
}

//return # times account ID appears in a book's borrows array
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((accumulator, book) => {
    return (accumulator + book.borrows
        .filter(borrow => borrow.id === account.id)
        .reduce((accumulatorBorrows, borrow) => accumulatorBorrows + 1, 0)
    );
  }, 0);
}

//return array of books, checked out by account
//must have author object nested inside of it
function getBooksPossessedByAccount(account, books, authors) {
  let myBooks = [];
  books.forEach((book) => {
    if (book.borrows.find((borrow) => borrow.id === account.id 
        && borrow.returned === false)) {
      const author = authors.find((author) => author.id === book.authorId)
       myBooks.push({...book, author});
    }
  });
  return myBooks;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};

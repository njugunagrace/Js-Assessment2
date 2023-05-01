
const books = [
{ title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
isAvaitlable: true },
{ title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
isAvailable: false },
{ title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
1866, isAvailable: true },
{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
isAvailable: false },
{ title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
];

  // Create a function called getAvailableBooks that returns an array of all available
// books.

function getAvailableBooks() {
    return books.filter(x => x.isAvailable);
  }
  console.log(getAvailableBooks());
  

// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

function getBooksByAuthor(author) {
    return books.filter(x =>x.author == author);
  }
console.log(getBooksByAuthor("Charles Dickens"));


// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).
function addNewBook(newItem){
    books.addAll=newItem
}
console.log(addNewBook("Born a crime"));

// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.

function checkoutBook(title) {
    let book = books.findIndex(x => x.title === title);
    if (book !== -1) {
      books[book].isAvailable = false;
    } else {
      console.log("Not available in the library");
    }
  }
checkoutBook("Great expectations");


  

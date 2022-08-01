/* eslint-disable linebreak-style */
export default class Book {
  constructor() {
    this.booksArray = [
    ];
    this.booksArray = this.getBooks();
  }

  getBooks() {
    if (!this.checkBook()) {
      const localBook = localStorage.getItem('books');
      this.booksArray = JSON.parse(localBook);
      return this.booksArray;
    }
    return this.booksArray;
  }

  // eslint-disable-next-line class-methods-use-this
  checkBook() {
    return (localStorage.getItem('books') === null);
  }

  updateBooks() {
    localStorage.removeItem('books');
    localStorage.setItem('books', JSON.stringify(this.booksArray));
  }

  addBook(book) {
    if (this.booksArray.some((el) => el.title === book.title && el.author === book.author)) {
      return;
    }
    this.booksArray.push(book);
    this.updateBooks();
  }

  removeBook(book) {
    const oldBook = [...this.booksArray];
    if (book) {
      this.booksArray = oldBook
        .filter((el) => el.title !== this.book.title && el.name !== this.book.author);
      this.updateBooks();
    }
  }
}

class Book {
    booksArray = [];

    constructor(book) {
      this.book = book;
    }

    addBook() {
      if (this.book) {
        this.booksArray.push(this.book);
      }
    }

    removeBook() {
      const oldBook = [...this.booksArray];
      if (this.book) {
        this.booksArray = oldBook
          .filter((el) => el.title !== this.book.title && el.name !== this.book.author);
      }
    }
}

exports = Book;
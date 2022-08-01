class Book {
    booksArray = [];

    get getBooks() {
      if (this.checkBook) {
        const localBook = localStorage.getItem('books');
        this.booksArray = JSON.parse(localBook);
        return this.booksArray;
      }
      return this.booksArray;
    }

    // eslint-disable-next-line class-methods-use-this
    checkBook() {
      return localStorage.getItem('books') !== null;
    }

    updateBooks() {
      localStorage.setItem('books', this.booksArray);
    }

    addBook(book) {
      if (book) {
        this.booksArray.push(this.book);
        this.updateBooks();
      }
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

exports = Book;
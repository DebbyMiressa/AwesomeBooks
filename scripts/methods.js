/* eslint-disable linebreak-style */
const bookForm = document.getElementById('bookForm');
const parent = document.querySelector('.container');

const bookList = document.createElement('div');
bookList.className = 'bookList';

const bookData = [];

function dataLoader() {
  if (!localStorage.getItem('bookData')) {
    bookList.innerHTML = 'Empty Book List!!';
  } else {
    const bookObjects = JSON.parse(localStorage.getItem('bookData'));
    bookList.innerHTML = '';
    Object.values(bookObjects).forEach((val, i) => {
      bookList.innerHTML
        += `
            ${val.title}   ${val.author}<br>
        `;
    });
  }
  parent.insertBefore(bookList, bookForm);
  bookList.getBoundingClientRect();
}
window.addEventListener('load', dataLoader);

class Methods {
  constructor(title = null, author = null) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    const obj = { title: this.title, author: this.author };
    bookData.push(obj);
    localStorage.setItem('bookData', JSON.stringify(bookData));
    dataLoader();
  }

  removeBook() {
    const au = this.author;
  }
}

const submitBtnn = document.querySelector('.submit');
const title = document.getElementById('title');
const author = document.getElementById('author');
submitBtnn.addEventListener('click', () => {
  new Methods(title.value, author.value).addBook();
});

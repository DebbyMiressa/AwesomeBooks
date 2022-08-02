/* eslint-disable linebreak-style */
const bookForm = document.getElementById('bookForm');
const parent = document.querySelector('.container');
const bookList = document.createElement('div');
bookList.className = 'bookList';
// window.localStorage.clear();
let bookData = [];

function dataLoader() {
  if (!localStorage.getItem('bookData')) {
    bookList.innerHTML = 'Empty Book List!!';
  } else {
    const bookObjects = JSON.parse(localStorage.getItem('bookData'));
    bookList.innerHTML = '';
    Object.values(bookObjects).forEach((val, i) => {
      bookList.innerHTML
        += `
            <div class="book_${i} d-flex justify-content-between"><span class="p-2">"${val.title}" by ${val.author}</span><span class="ml-auto p-2"><button type="button" id="${i}" class="remove">Remove</button></span></div>
        `;
    });
  }
  parent.insertBefore(bookList, bookForm);
  bookList.getBoundingClientRect();
  console.log(localStorage.getItem('bookData'));
  bookData = JSON.parse(localStorage.getItem('bookData'));
  const len = bookData.length;
  for (let i = 0; i < len; i += 1) {
    if (i % 2 === 0) {
      document.querySelector(`.book_${i}`).style.backgroundColor = 'gray';
    } else {
      document.querySelector(`.book_${i}`).style.backgroundColor = 'white';
    }
  }
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

  removeBook(index) {
    bookData.splice(index, 1);
    // eslint-disable-next-line prefer-const
    let obj = JSON.parse(localStorage.getItem('bookData'));
    obj.splice(index, 1);
    localStorage.setItem('bookData', JSON.stringify(obj));
    this.author = null;
    dataLoader();
  }
}

const submitBtnn = document.querySelector('.submit');
const title = document.getElementById('title');
const author = document.getElementById('author');
submitBtnn.addEventListener('click', () => {
  new Methods(title.value, author.value).addBook();
});

parent.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    let i = 0;
    while (e.target.id !== `${i}`) {
      i += 1;
    }
    new Methods().removeBook(`${i}`);
  }
});

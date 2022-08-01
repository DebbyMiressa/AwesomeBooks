import Book from './book.js';

const bookForm = document.getElementById('bookForm');
const titleCheck = document.querySelector('.title-check');
const authorCheck = document.querySelector('.author-check');

const validateForm = (title, author) => {
  if (title === '' || title === undefined) {
    titleCheck.style.display = 'block';
  }
  if (author === '' || author === undefined) {
    authorCheck.style.display = 'block';
  }

  if (!title || !author || author === '' || title === '') {
    return false;
  }
  return true;
};

bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = bookForm.elements.title.value;
  const author = bookForm.elements.author.value;
  const valid = validateForm(title, author);
  if (!valid) return;
  const nbook = {
    title,
    author,
  };
  const book = new Book();
  book.addBook(nbook);
  setTimeout(() => {
    window.location.reload();
  }, 2000);
});

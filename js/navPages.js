/* eslint-disable linebreak-style */

const timeDisplay = document.getElementById('date');

function refreshTime() {
  const dateString = new Date().toString();
  const formattedString = dateString.replace('AM', 'am');
  timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1000);

const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');
const alist = document.getElementById('list');
const anew = document.getElementById('add-new');
const acontact = document.getElementById('contact');

alist.addEventListener('click', () => {
  list.style.display = 'block';
  addNew.style.display = 'none';
  contact.style.display = 'none';
  alist.style.color = 'darkblue';
  anew.style.color = 'black';
  acontact.style.color = 'black';
});

anew.addEventListener('click', () => {
  list.style.display = 'none';
  addNew.style.display = 'block';
  contact.style.display = 'none';
  alist.style.color = 'black';
  anew.style.color = 'darkblue';
  acontact.style.color = 'black';
});

acontact.addEventListener('click', () => {
  list.style.display = 'none';
  addNew.style.display = 'none';
  contact.style.display = 'block';
  alist.style.color = 'black';
  anew.style.color = 'black';
  acontact.style.color = 'darkblue';
});

window.onload(
  list.style.display = 'block',
  addNew.style.display = 'none',
  contact.style.display = 'none',
  alist.style.color = 'darkblue',
  anew.style.color = 'black',
  acontact.style.color = 'black',
);

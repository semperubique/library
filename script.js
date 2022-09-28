const cardWrapper = document.querySelector(".card-wrapper");
const newBook = document.querySelector('#new_book');
const form = document.querySelector(".modal");
const closeForm = document.querySelector('#close-form');
const submitBook = document.querySelector('#submit-book');


let myLibrary = [];

function Book(name, author, year) {
  this.name = name
  this.author = author
  this.year = year
}

function addBookToLibrary(name, author, year) {
    myLibrary.push(new Book(name, author, year));
}

function displayLibraryOnScreen() {
    cardWrapper.textContent = "";
    myLibrary.forEach(function(book) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = 
        `<h3>${book.name}</h3>
        <span>By: ${book.author}</span>
        <span>Published: ${book.year}</span>
        `;
        cardWrapper.appendChild(card);
    })
}

function newBookForm() {
    form.classList.add('active');
}


displayLibraryOnScreen(); // test to see if it works always after adding a new book


newBook.addEventListener('click', () => newBookForm());

closeForm.addEventListener('click', () => {
    form.classList.remove('active');
})

submitBook.addEventListener('click', () => {
    addBookToLibrary(document.querySelector('#name').value, document.querySelector('#author').value, document.querySelector('#year').value);
    form.classList.remove('active');
    displayLibraryOnScreen()
});


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
        <button class="material-icons delete-book" style="background: none; border: none;" id="${book.name}">delete</button>
        `;
        cardWrapper.appendChild(card);
    })
}

function newBookForm() {
    form.classList.add('active');
}

addBookToLibrary("Murad","Jale", 1972);
displayLibraryOnScreen();



newBook.addEventListener('click', () => newBookForm());

closeForm.addEventListener('click', () => {
    form.classList.remove('active');
})

submitBook.addEventListener('click', () => {
    addBookToLibrary(document.querySelector('#name').value, document.querySelector('#author').value, document.querySelector('#year').value);
    form.classList.remove('active');
    displayLibraryOnScreen();
    deleteBookFunc();
});

function deleteBookFunc() {
    let deleteBook = document.querySelectorAll('.delete-book');
    deleteBook.forEach(button => button.addEventListener("click", (e) => {
        const indexOfBookInArray = myLibrary.findIndex(object => {return object.name === e.target.id});
        myLibrary.splice(indexOfBookInArray, 1);
        displayLibraryOnScreen();
    }));
}

deleteBookFunc();

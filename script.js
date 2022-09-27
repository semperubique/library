const cardWrapper = document.querySelector(".card-wrapper");


let myLibrary = [];

function Book(name, author, year) {
  this.nam = name
  this.author = author
  this.year = year
}

function addBookToLibrary(name, author, year) {
    myLibrary.push(new Book(name, author, year));
}

function displayLibraryOnScreen() {
    myLibrary.forEach(function(book) {
        let card = document.createElement('div');
        card.classList.add('card');
        card.textContent = "book";
        cardWrapper.appendChild(card);
    })
}

addBookToLibrary("Ishmael","Lambard A.", 1922);
addBookToLibrary("Granderoba","Shebzul B.", 1933);

displayLibraryOnScreen();
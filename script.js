const Book = (name, author, year) => {
    return {name, author, year};
}

const libraryUX = (() => {
    let myLibrary = [];

    const addBook = (name, author, year) => {
            myLibrary.push(Book(name, author, year));
    };

    const removeBook = (bookID) => {
        const indexOfBookInArray = myLibrary.findIndex(object => {return object.name === bookID});
        myLibrary.splice(indexOfBookInArray, 1);
    };

    const openForm = (form) => {
        form.classList.add('active');    
    };
    const closeForm = (form) => {
        form.classList.remove('active');
    };

    const updateLibrary = (bookCardContainer) => {
        bookCardContainer.textContent = "";
        myLibrary.forEach(function(book) {
            const bookCard = document.createElement('div');
            bookCard.classList.add('card');
            bookCard.innerHTML = 
            `<h3>${book.name}</h3>
            <span>By: ${book.author}</span>
            <span>Published: ${book.year}</span>
            <button class="material-icons delete-book" type="button" style="background: none; border: none;" id="${book.name}">delete</button>
            `;
            bookCardContainer.appendChild(bookCard);
        });
        const removeBookButtons = document.querySelectorAll('.delete-book');
        removeBookButtons.forEach(removeBookButton => {
            removeBookButton.addEventListener("click", (e) => {
                removeBook(e.target.id);
                updateLibrary(bookCardContainer);
        })
        });

    };

    return {
        addBook, 
        removeBook,
        openForm, 
        closeForm,
        updateLibrary
    };
})();

const libraryUI = (() => {
    const cardWrapper = document.querySelector(".card-wrapper");

    const form = document.querySelector(".modal");

    const openFormButton = document.querySelector('#open_form_button');
    openFormButton.addEventListener('click', () => {
        libraryUX.openForm(form);
    });

    const closeFormButton = document.querySelector('#close-form');
    closeFormButton.addEventListener('click', () => { 
        libraryUX.closeForm(form);
    });

    const submitBookButton = document.querySelector('#submit-book');
    submitBookButton.addEventListener('click', () => {
        libraryUX.addBook(document.querySelector('#name').value, document.querySelector('#author').value, document.querySelector('#year').value);
        libraryUX.closeForm(form);
        libraryUX.updateLibrary(cardWrapper);
    });

    return {};
})();



// const cardWrapper = document.querySelector(".card-wrapper");
// const newBook = document.querySelector('#new_book');
// const form = document.querySelector(".modal");
// const closeForm = document.querySelector('#close-form');
// const submitBook = document.querySelector('#submit-book');

// let myLibrary = [];

// function Book(name, author, year) {
//   this.name = name
//   this.author = author
//   this.year = year
// }

// function addBookToLibrary(name, author, year) {
//     myLibrary.push(new Book(name, author, year));
// }

// function displayLibraryOnScreen() {
//     cardWrapper.textContent = "";
//     myLibrary.forEach(function(book) {
//         let card = document.createElement('div');
//         card.classList.add('card');
//         card.innerHTML = 
//         `<h3>${book.name}</h3>
//         <span>By: ${book.author}</span>
//         <span>Published: ${book.year}</span>
//         <button class="material-icons delete-book" style="background: none; border: none;" id="${book.name}">delete</button>
//         `;
//         cardWrapper.appendChild(card);
//     })
// }

// function newBookForm() {
//     form.classList.add('active');
// }

// displayLibraryOnScreen();



// newBook.addEventListener('click', () => newBookForm());

// closeForm.addEventListener('click', () => {
//     form.classList.remove('active');
// })

// submitBook.addEventListener('click', () => {
//     addBookToLibrary(document.querySelector('#name').value, document.querySelector('#author').value, document.querySelector('#year').value);
//     form.classList.remove('active');
//     displayLibraryOnScreen();
//     deleteBookFunc();
// });

// function deleteBookFunc() {
//     let deleteBook = document.querySelectorAll('.delete-book');
//     deleteBook.forEach(button => button.addEventListener("click", (e) => {
//         const indexOfBookInArray = myLibrary.findIndex(object => {return object.name === e.target.id});
//         myLibrary.splice(indexOfBookInArray, 1);
//         displayLibraryOnScreen();
//     }));
// }

// deleteBookFunc();

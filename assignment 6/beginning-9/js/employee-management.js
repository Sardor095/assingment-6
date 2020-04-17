// SORRY BOSS THIS IS ALL I CAME UP WITH!!
// HOPEFULLY YOU WILL GIVE ME CREDIT FOR IT!
//THANKS FOR EVERYTHING!
class Book {
    constructor(name, title, extantion) {
        this.name = name;
        this.title = title;
        this.extantion = extantion;
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayBooks() {

        const books = Store.getBooks();

        books.forEach((book) => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.name}</td>
        <td>${book.title}</td>
        <td>${book.extantion}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className){
        const div = document.createElement('div');

        div.className = `alert alert-${className}`;

        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');

        const form = document.querySelector('#book-form');

        container.insertBefore(div, form);

        //Vanishing 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(),1000)
    }

    static clearFields() {
        document.querySelector('#name').value = '';
        document.querySelector('#title').value = '';
        document.querySelector('#extantion').value = '';
    }
}

//Store Class: Handles Storage
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(extantion) {
        const books = Store.getBooks();

        books.forEach((book, index) => {
            if(book.extantion === extantion) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}  

// Event: Display Book
document.addEventListener('DOMContentLoaded', UI.displayBooks);


// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // prevent actual submit
    e.preventDefault();
    
    
    // GET FORM VALUES
    const name = document.querySelector('#name').value;
    const title = document.querySelector('#title').value;
    const extantion = document.querySelector('#extantion').value;

    // VALIDATE
    if(name == '' || title == '' || extantion == ''){
        UI.showAlert('Please fill in all fields', 'danger');
    } else {

    // INSTATIATE BOOK
    const book = new Book(name, title, extantion);

    //Add Book to UI
    UI.addBookToList(book);

    // Add book to store
    Store.addBook(book);

    // Show success message
    UI.showAlert('Job Added', 'success')

    // Clear Fields
    UI.clearFields();
    
    }

});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    //Remove book from UI
    UI.deleteBook(e.target)

    //Remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

        // Remove a Book
        UI.showAlert('Job Removed', 'success')

});
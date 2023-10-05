const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    const remove = () => {
        myLibrary.splice(myLibrary.indexOf(this), 1);
    };
}
const addButton = document.querySelector("#addBook");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".close-button");
const updateButton = document.querySelector("#updateBook");

updateButton.addEventListener("click", () => {
    addBookToLibrary();
});
addButton.addEventListener("click", () => {
    toogleModal();
});
closeButton.addEventListener("click", () => {
    toogleModal();
});
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        toogleModal();
    }
});

function toogleModal() {
    modal.classList.toggle("show-modal");
}

const testBook = new Book("test", "test", 123, true);
myLibrary.push(testBook);
myLibrary.push(testBook);
myLibrary.push(testBook);
myLibrary.push(testBook);
console.log(myLibrary);
myLibrary.forEach((book) => {
    displayBook(book);
});

//change color of button to green and red when clicked
const bookCards = document.querySelectorAll(".book-card");
bookCards.forEach((bookCard) => {
    const readButton = bookCard.querySelector("button");
    readButton.addEventListener("click", () => {
        readButton.classList.toggle("read-button");
        readButton.textContent =
            readButton.textContent === "Have read"
                ? "Have not read"
                : "Have read";
        readButton.style.backgroundColor =
            readButton.textContent === "Have read" ? "green" : "red";
    });
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    bookCard.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        bookCard.remove();
    });
});

function addBookToLibrary() {
    // add object Book to myLibrary
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#haveRead").checked;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBook(book);
    toogleModal();
    // clear input fields
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#haveRead").checked = false;
}
function displayBook(book) {
    const bookCard = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const read = document.createElement("button");

    bookCard.classList.add("book-card");
    read.classList.add("read-button");
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read ? "Have read" : "Have not read";

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    document.querySelector(".book-grid").appendChild(bookCard);
}

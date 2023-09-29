const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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

function addBookToLibrary() {
    // add object Book to myLibrary
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#haveRead").checked;
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
    toogleModal();
    // clear input fields
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#haveRead").checked = false;
}
function displayBooks() {
    // display all books in myLibrary
    myLibrary.forEach((book) => {
        const bookCard = document.createElement("div");
        const title = document.createElement("p");
        const author = document.createElement("p");
        const pages = document.createElement("p");
        const read = document.createElement("p");

        bookCard.classList.add("book-card");

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read;

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);
        document.querySelector(".book-grid").appendChild(bookCard);
    });
}

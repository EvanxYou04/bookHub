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
}

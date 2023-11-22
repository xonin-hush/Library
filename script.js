const myLibrary = [];
// Book = {
//   author: "1414",
//   pages: "141",
//   readStatus: "on",
//   title: "123"
// }, Book = {
//   author: "something",
//   pages: "141",
//   readStatus: "on",
//   title: "something?"
// }, Book = {
//   author: "something",
//   pages: "141",
//   readStatus: "on",
//   title: "something?"
// }

let card = ""
const dialog = document.querySelector("dialog")
const showButton = document.querySelector("#show-button")
const cancel = dialog.querySelector("#cancel")
const submit = dialog.querySelector("#submit")
const cards = document.querySelector(".cards")
let displayTemp = document.querySelector(".title")
addBookToLibrary()
showButton.addEventListener("click", () => {
  dialog.showModal()
});
function addBookToLibrary() {
  submit.addEventListener("click", (event) => {
    event.preventDefault(); // We don't want to submit this fake form
    var title = document.querySelector("#book-name")
    var temp = title.value
    var author = document.querySelector("#author-name")
    var pages = document.querySelector("#pages-number")
    var readStatus = document.querySelector("#read-status")
    temp = new Book(title.value, author.value, pages.value, readStatus.value)
    myLibrary.push(temp)
    dialog.close(dialog.value); // Have to send the select box value here.
    showBooks()
  });
}


function Book(title, author, pages, readStatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
}

function showBooks() {

  while (cards.firstChild) { //prevent cards to duplicate
    cards.removeChild(cards.lastChild);
    cards.classList.add('cards')
  }

  myLibrary.forEach(Book => { //creates each card in array
    let card = document.createElement('div')
    cards.appendChild(card)
    card.classList.add('card')

    for (let element in Book) {
      let text = document.createElement('div')
     if(element=="title"){
      text.textContent = "Title: "+Book[element]
      card.appendChild(text)
     }
     if(element=="author"){
      text.textContent = "Author: "+Book[element]
      card.appendChild(text)
     }
     if(element=="pages"){
      text.textContent = "Pages: "+Book[element]
      card.appendChild(text)
     }
     if(element=="readStatus"){
      text.textContent = "Status: "+Book[element]
      card.appendChild(text)
     }

    }
  });
}
cancel.addEventListener("click", () => {

  dialog.close()
})
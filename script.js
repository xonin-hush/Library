const myLibrary = [];

let card = ""
const dialog = document.querySelector("dialog")
const showButton = document.querySelector("#show-button")
const cancel = dialog.querySelector("#cancel")
const submit = dialog.querySelector("#submit")
const cards = document.querySelector(".cards")
let displayTemp = document.querySelector(".title")
let removeButton = ""


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

  while (cards.firstChild) { //prevent cards from duplicating
    cards.removeChild(cards.lastChild);
    cards.classList.add('cards')
  }
  i = 0
  myLibrary.forEach(Book => { //creates each card in array
    let card = document.createElement('div')
    cards.appendChild(card)
    card.classList.add('card')


//fills card with info
    for (let element in Book) {
      let text = document.createElement('div')
      if (element == "title") {
        text.textContent = "Title: " + Book[element]
        card.appendChild(text)
      }
      if (element == "author") {
        text.textContent = "Author: " + Book[element]
        card.appendChild(text)
      }
      if (element == "pages") {
        text.textContent = "Pages: " + Book[element]
        card.appendChild(text)
      }
      if (element == "readStatus") {
        text.textContent = "Status: " + Book[element]
        card.appendChild(text)
      }

    }
    let removeButton = document.createElement('button')
    removeButton.value = i
    console.log(removeButton.value)
    // parseInt(removeButton.value)
    // console.log(typeof(removeButton.value))
    removeButton.textContent = removeButton.value
    card.appendChild(removeButton)

    i = i + 1
  });

}
cancel.addEventListener("click", () => {

  dialog.close()
})


function removeBook() {
  cards.addEventListener("click", function (e) {
    myLibrary.splice(e.target.value,1)
    showBooks()
  });
}
removeBook()
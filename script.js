const myLibrary = [];
const dialog = document.querySelector("dialog")
const showButton = document.querySelector("#show-button")
const cancel = dialog.querySelector("#cancel")
const submit = dialog.querySelector("#submit")
const cards = document.querySelector(".cards")
var statusButton = document.createElement('button')
var displayTemp = document.querySelector(".title") //?
var card = ""
addBookToLibrary()
removeBook()
handleStatus()
function Book(title, author, pages, readStatus) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = readStatus
}

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
    temp = new Book(title.value, author.value, pages.value, "on")
    myLibrary.push(temp)
    dialog.close(dialog.value); // Have to send the select box value here.
    showBooks()
  });
}

function showBooks() {
  while (cards.firstChild) { //prevent cards from duplicating
    cards.removeChild(cards.lastChild);
    cards.classList.add('cards')
  }

  i = 0
  myLibrary.forEach(Book => { //creates each card in array
    var card = document.createElement('div')
    card.setAttribute('id', 'card')
    cards.appendChild(card)
    card.classList.add('card')
    //fills card with info
    for (var element in Book) {
      var text = document.createElement('div')
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
        if (Book[element] === "on") {
          text.textContent = "Status: " + "To Read"
          card.appendChild(text)
        }
        else {
          text.textContent = "Status: " + Book[element]
          card.appendChild(text)
        }
      }
    }
    var removeIcon = document.createElement('img')
    removeIcon.setAttribute('id', 'removeButton')
    removeIcon.src = "/images/minus-circle-outline.svg"
    removeIcon.classList.add('img')
    removeIcon.value = i
    card.appendChild(removeIcon)
    //status button
    var statusButton = document.createElement('button')
    statusButton.value = i
    statusButton.setAttribute('id', `changeStatus-${i}`)
    statusButton.classList.add('button')
    if (Book.readStatus !== "on") {
      statusButton.textContent = Book.readStatus
    }
    else {
      statusButton.textContent = "To Read"
    }
    card.appendChild(statusButton)

    i++
  });
}
cancel.addEventListener("click", () => {
  dialog.close()
})

function removeBook() {
  cards.addEventListener("click", function (e) {
    if (e.target.getAttribute('id') === "removeButton") {
      myLibrary.splice(e.target.value, 1)
      showBooks()
    }
  });
}
function handleStatus() {
  cards.addEventListener("click", function (e) {
    temp=e.target.getAttribute('id')
    if(temp.includes("changeStatus")){
    cardNumber = e.target.value
    statusButton = document.querySelector(`#changeStatus-${cardNumber}`)
    if (myLibrary[cardNumber].readStatus === 'on') {
      myLibrary[cardNumber].readStatus = "To Read"
    }
    if (myLibrary[cardNumber].readStatus === 'To Read') {
      myLibrary[cardNumber].readStatus = "Read"
    } else if (myLibrary[cardNumber].readStatus === 'Reading') {
      myLibrary[cardNumber].readStatus = "To Read"
    } else if (myLibrary[cardNumber].readStatus === 'Read') {
      myLibrary[cardNumber].readStatus = "Reading"
    }
    showBooks()}
  })

}
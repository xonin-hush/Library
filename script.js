const myLibrary = [];
const dialog = document.querySelector("dialog")
const showButton = document.querySelector("#show-button")
const cancel = dialog.querySelector("#cancel")
const submit = dialog.querySelector("#submit")
const cards = document.querySelector(".cards")
var statusButton = ""
var displayTemp = document.querySelector(".title") //?
var card = ""
addBookToLibrary()
removeBook()

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
    temp = new Book(title.value, author.value, pages.value, readStatus.value)
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
    console.log(Book)
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
    // console.log(myLibrary[0[3]])
    //handles the remove icon
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

    // handleStatus(statusButton, card) backup
    i++
  });
}

handleStatus()

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
// function handleStatus(statusButton, card) { backup
function handleStatus() {
  cards.addEventListener("click", function (e) {
    altTemp = e.target.value
    console.log("me " + myLibrary[altTemp].readStatus)
    statusButton = document.querySelector(`#changeStatus-${altTemp}`)
    console.log(altTemp)
    if (myLibrary[altTemp].readStatus === 'on') {
      // statusButton.textContent = "To Read"
      myLibrary[altTemp].readStatus = "To Read"
    }
    if (myLibrary[altTemp].readStatus === 'To Read') {
      console.log(statusButton.textContent)
      // statusButton.textContent = "Read"
      myLibrary[altTemp].readStatus = "Read"
      console.log('1true')

      // card.appendChild(statusButton)

    } else if (myLibrary[altTemp].readStatus === 'Reading') {
      // statusButton.textContent = "To Read"
      myLibrary[altTemp].readStatus = "To Read"

      console.log('3true')
      // card.appendChild(statusButton)

    } else if (myLibrary[altTemp].readStatus === 'Read') {
      // statusButton.textContent = "Reading"
      myLibrary[altTemp].readStatus = "Reading"

      console.log('2true')
      // card.appendChild(statusButton)


    }
    showBooks()
    // if (statusButton.textContent === 'To Read') {
    //   console.log(statusButton.textContent)
    //   statusButton.textContent = "Read"
    //   myLibrary[altTemp].readStatus="Read"

    //   console.log('1true')

    //   // card.appendChild(statusButton)

    // } else if (statusButton.textContent === 'Reading') {
    //   statusButton.textContent = "To Read"
    //   myLibrary[altTemp].readStatus="To Read"

    //   console.log('3true')
    //   // card.appendChild(statusButton)

    // } else if (statusButton.textContent === 'Read') {
    //   statusButton.textContent = "Reading"
    //   myLibrary[altTemp].readStatus="Reading"

    //   console.log('2true')
    //   // card.appendChild(statusButton)


    // }
  })

}
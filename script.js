const myLibrary = [Book = {
  author: "1414",
  pagesNum: "141",
  readStatus: "on",
  title: "123"
}, Book = {
  author: "something",
  pagesNum: "141",
  readStatus: "on",
  title: "something?"
}];



const dialog = document.querySelector("dialog")
const showButton = document.querySelector("#show-button")
const cancel = dialog.querySelector("#cancel")
const submit = dialog.querySelector("#submit")
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
    console.log(title.value, author.value, pages.value, readStatus.value)
    temp = new Book(title.value, author.value, pages.value, readStatus.value)
    console.log('temp', temp)
    myLibrary.push(temp)
    console.log(title)
    console.log('myLibrary', myLibrary)
    dialog.close(dialog.value); // Have to send the select box value here.
  });
}


function Book(title, author, pagesNum, readStatus) {
  this.title = title
  this.author = author
  this.pagesNum = pagesNum
  this.readStatus = readStatus
}
cancel.addEventListener("click", () => {
  dialog.close()
})

myLibrary.forEach(Book => {
  for (let element in Book) {
    let test = document.createElement('div')
    test.textContent = Book[element]
    let cards = document.querySelector(".cards")
    cards.appendChild(test)
    console.log(Book[element])
  }
})





// submit.addEventListener("change", (e) => {
//   confirmBtn.value = selectEl.value;
// });
// dialog.addEventListener("close", (e) => {
//   outputBox.value =
//     dialog.returnValue === "default"
//       ? "No return value."
//       : `ReturnValue: ${dialog.returnValue}.`
// })
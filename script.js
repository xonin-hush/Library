const myLibrary = [];

function Book(title, author, pagesNum, readStatus) {
  this.title = title
  this.author = author
  this.pagesNum = pagesNum
  this.readStatus = readStatus
}
//random books (fixed)
// const atomicHabits= new Book("atomic habits","james clear","544","read")
// const somethingNew= new Book("new book","james clear","544","read")
// myLibrary.push(atomicHabits)
// myLibrary.push(somethingNew)
// console.log(myLibrary)
// console.log(atomicHabits)

//form input 


function addBookToLibrary() {
  // do stuff here
}
// some dialog code
const dialog = document.querySelector("dialog")
const showButton = document.querySelector("#show-button")
const cancel = dialog.querySelector("#cancel")
const submit = dialog.querySelector("#submit")
showButton.addEventListener("click", () => {
  dialog.showModal()
});

cancel.addEventListener("click", () => {
  dialog.close()
})

submit.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});

dialog.addEventListener("close", (e) => {
  outputBox.value =
    dialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${dialog.returnValue}.`
})

submit.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  var name1 = document.querySelector("#book-name")
  var author = document.querySelector("#author-name")
  var pages = document.querySelector("#pages-number")
  var status1 = document.querySelector("#read-status")
  console.log(name1.value, author.value, pages.value, status1.value)
  //dialog.close(selectEl.value); // Have to send the select box value here.
  function Book(title, author, pagesNum, readStatus) {
    this.title = title
    this.author = author
    this.pagesNum = pagesNum
    this.readStatus = readStatus
  }
  var name1 = new this.Book(name1.value, author.value, pages.value, status1.value)
  myLibrary.push(name1)
  console.log(name1)
  console.log(myLibrary)
});

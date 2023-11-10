const myLibrary = [];
const dialog = document.querySelector("dialog")
const showButton = document.querySelector("#show-button")
const cancel = dialog.querySelector("#cancel")
const submit = dialog.querySelector("#submit")
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
  });
  return title.value;
}

submit.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});

dialog.addEventListener("close", (e) => {
  outputBox.value =
    dialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${dialog.returnValue}.`
})
//dialog.close(selectEl.value); // Have to send the select box value here.
function Book(title, author, pagesNum, readStatus) {
  this.title = title
  this.author = author
  this.pagesNum = pagesNum
  this.readStatus = readStatus
}

cancel.addEventListener("click", () => {
  dialog.close()
})
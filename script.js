const myLibrary = [];

function Book(title,author,pagesNum,readStatus) {
  this.title=title
  this.author=author
  this.pagesNum=pagesNum
  this.readStatus=readStatus
}
//random books (fixed)
// const atomicHabits= new Book("atomic habits","james clear","544","read")
// const somethingNew= new Book("new book","james clear","544","read")
// myLibrary.push(atomicHabits)
// myLibrary.push(somethingNew)
// console.log(myLibrary)
// console.log(atomicHabits)

function addBookToLibrary() {
  // do stuff here
}
// some dialog code
const dialog=document.querySelector("dialog")
const showButton=document.querySelector("#show-button")
const hideButton=document.querySelector("#hide-button")
showButton.addEventListener("click",()=>{
dialog.showModal()
});
hideButton.addEventListener("click",()=>{
  dialog.close()
})


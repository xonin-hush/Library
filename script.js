const myLibrary = [];

function Book(title,author,pagesNum,readStatus) {
  this.title=title
  this.author=author
  this.pagesNum=pagesNum
  this.readStatus=readStatus
}
const atomicHabits= new Book("atomic habits","james clear","544","read")
const somethingNew= new Book("new book","james clear","544","read")
myLibrary.push(atomicHabits)
myLibrary.push(somethingNew)
console.log(myLibrary)
console.log(atomicHabits)
function addBookToLibrary() {
  // do stuff here
}

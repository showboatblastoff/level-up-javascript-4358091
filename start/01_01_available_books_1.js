// Write your code here
function Book (title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  
  }

Book.prototype.getAvailability = function() {
  if (numCopies === 0) {
    return "Out of Stock";
  } else if (this.numCopies <= 10) {
    return "Low Stock";
  }
  return "In Stock";
  }

Book.prototype.sell = function(numCopiesSold = 1) {
  this.numCopies -= numCopiesSold;
}
Book.prototype.restock = function(numCopiesStocked = 5) {
  this.numCopies += numCopiesStocked;
}
}


const BookemDanno = new Book("Bookem Danno", "Spartan Dave", "101", 20);
console.log(BookemDano.getAvailability());
const TigersForFree = new Book("Tigers For Free", "Tony Tigerman", "102", 7);
console.log(TigersForFree.getAvailability());
const WasntMeAgain = new Book("Wasn't Me, Again", "Crime Guy", "103", 15);
console.log(WasntMeAgain.getAvailability());
const TryThatIDareYou = new Book("Try That, I Dare You", "Sen EfBen", "104", 10);
console.log(TryThatIDareYou.getAvailability());
const ImNotMakingFaces = new Book("I'm Not Making Faces", "Giovanni Ribisi", "105", 10);
console.log(ImNotMakingFaces.getAvailability());
const DrumCircle = new Book("Drum Circle", "Tom Tomclub", "106", 10);
console.log(DrumCircle.getAvailability());
const NotSoFunkyMedina = new Book("Not So Funky Medina", "Tone Loc", "107", 10);
console.log(NotSoFunkyMedina.getAvailability());

DrumCircle.restock(12);
console.log(DrumCircle.getAvailability());

NotSoFunkyMedina.sell(3);
console.log(NotSoFunkyMedina.getAvailability());

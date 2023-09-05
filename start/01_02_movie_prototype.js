// Write your code here
class Film {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  get overview() {
    return this.getOverview();
  }

  getOverview() {
    return `${this.title} , a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
  }
}

const MoviePhone = new Film("Movie Phone","Johnny Knoxville", "horror", 2021, 4)
const Kelp = new Film("Kelp","Water Beatleman", "comedy", 1973, 10)
const Nerd = new Film("Nerd","Guillermo DelToro", "drama", 2006, 3)
const Oopsie = new Film("Oopsie","Bean Lunchman", "horror", 2021, 4)
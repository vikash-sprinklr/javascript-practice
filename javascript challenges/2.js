class Movie{
    constructor(title, director, genre, release, rating){
        this.title = title
        this.director = director
        this.genre = genre
        this.release = release
        this.rating = rating
    };

    getOverview(){
        var s = this.title + ", a " + this.genre + " directed by " + this.director + " was released in " + this.release + ". It received a rating of " + this.rating
        return s
    }
}

var movie = new Movie('a','b','c','d','e')
console.log(movie.getOverview())
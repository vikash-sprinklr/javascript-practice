class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

    addFavoriteBook = function (bookName) {
        if (!bookName.includes("Great")) {
            this.favoriteBooks.push(bookName);
        }
    }
    
    printFavoriteBooks = function () {
        console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
        for (let bookName of this.favoriteBooks) {
            console.log(bookName);
        }
    }

	// TODO: define methods `addFavoriteBook(..)`
	// and `printFavoriteBooks()`
};

var BOOK_API = "https://some.url/api";

function loadBooks( bookShelf_object ) {
	// TODO: call fakeAjax( .. );
    fakeAjax(BOOK_API, function onBooks(bookList){
        // console.log(bookList)
        for(let book of bookList){
            bookShelf_object.addFavoriteBook(book)
        }
        bookShelf_object.printFavoriteBooks()
    })
}


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

var bookShelf_object = new Bookshelf()
loadBooks(bookShelf_object)

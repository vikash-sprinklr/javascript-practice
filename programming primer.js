favourite = []

function addFavouriteBook(bookName){
    if(bookName.includes("Great")){
        favourite.push(bookName);
    }
}

var testRun = [
    "A song of ice and fire",
    "the Great gatsby",
    "crime and punishment",
    "Great expectations",
    "you dont know js"
];

for(test of testRun){
    addFavouriteBook(test)
}

console.log(favourite);
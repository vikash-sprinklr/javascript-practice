//http://csbin.io/iterators

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1

function sumFunc(arr) {
  // YOUR CODE HERE
	var sum = 0
  for(var i of arr){
    sum += i
  }
  
  return sum;
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  // YOUR CODE HERE
  var i = 0;
  const inner = () =>{
      ++i
      return arr[i-1]
    }

    return inner
}

// Uncomment the lines below to test your work
const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'



// CHALLENGE 2

function nextIterator(arr) {
  // YOUR CODE HERE
  var i = 0
  
  const inner = () => {
    ++i
    return arr[i-1]
  }
  
  const obj = {
    next:inner
  }
  
  return obj

}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(arr) {
  // YOUR CODE HERE
  // use your nextIterator function
  var iteratorWithNext = nextIterator(arr)

  var i = 0, sum = 0
  while(i < arr.length){
    sum += iteratorWithNext.next()
    ++i
  }
  
  return sum;
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

function setIterator(set) {
  // YOUR CODE HERE
  var arr = [...set]
  var i = 0
  const inner = () => {
    ++i
    return arr[i-1]
  }
  
  const obj = {
    next:inner
  }
  
  return obj

}

// Uncomment the lines below to test your work
const mySet = new Set('hey');
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

function indexIterator(arr) {
  // YOUR CODE HERE
  var i = 0
  const inner = () => {
    ++i
    return [i-1,arr[i-1]]
  }
  
  const obj = {
    next:inner
  }
  
  return obj
}

// Uncomment the lines below to test your work
const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
  // YOUR CODE HERE
	var arr = this.str.split(" ")
  var i = 0;
  const inner = () => {
    ++i
    if(i > arr.length){
      return {done:true}
    }
    return {done:false, value:arr[i-1]}
  }
  
  const obj = {
    next:inner
  }
  
  return obj
}

// Uncomment the lines below to test your work
const helloWorld = new Words('Hello World');
for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(arr){
	var i = 0
  const inner = () => {
    ++i
    var s = ""
    if(i == 1){
       s = "It is the first"
    }else{
      var s = String(arr[i-1]) + " was found after index " + String(i-1)
    }
    
    return s
  }
  
  const obj = {
    sentence:inner
  }
  return obj
}

const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {


}

console.log(createConversation('english').next());



//CHALLENGE 9
function waitForVerb(noun) {
	return noun + " run"
}

async function f(noun) {
	var sentence = waitForVerb(noun)
  setTimeout(()=>{
    console.log(sentence)
  },3000)
}

f("dog");


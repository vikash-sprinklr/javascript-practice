function reduce(arr, fn, initial) {

  function rec(currentIndex, prevValue){
    if(currentIndex >= arr.length){
      return initial
    }

    return rec(currentIndex+1, fn(prevValue, arr[currentIndex], currentIndex, arr))
  }

  return rec(0, initial)

  }
  
  module.exports = reduce
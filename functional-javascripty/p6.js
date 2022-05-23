function countWords(inputWords) {
    var result = inputWords.reduce((previousValue, currentValue)=>{
        if(previousValue[currentValue] == undefined){
            previousValue[currentValue] = 1
        }else{
            previousValue[currentValue] = previousValue[currentValue] + 1
        }

        // console.log(previousValue)

        return previousValue
    },{})

    return result
  }

//   var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
//   console.log(countWords(inputWords))
  
  module.exports = countWords
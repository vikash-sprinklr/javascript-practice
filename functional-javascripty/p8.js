function duckCount() {
    
    var arrOfArguments = Array.prototype.slice.call(arguments) // .call and .apply let you manually set the value of this in a function
    var arr = arrOfArguments.filter((obj) => {
        // console.log(obj)
      return Object.prototype.hasOwnProperty.call(obj, 'quack')
    })

    return arr.length
  }

//   var a = {quack:true}
//   var b = {hi:true}

//   var fn = duckCount(a,b)
//   console.log(fn(a,b))
//   console.log(fn)
  
  module.exports = duckCount
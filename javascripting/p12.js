var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
var temp = numbers.filter((ele)=>{
    return ele%2 == 0
})

console.log(temp)
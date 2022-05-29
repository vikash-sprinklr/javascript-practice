function sumOne(num1){
    return function sum(num2){
        return num1 + num2
    }
}

module.exports = sumOne
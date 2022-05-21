const oncify = (functionToRun)=>{
    let counter = 0;
    const inner = (input)=>{
        if(counter == 0){
            const output = functionToRun(input)
            ++counter
            return output
        }

        return "Sorry we can't run it again"
    }

    return inner 
}

const multiplyBy2 = (num) => num * 2
const oncifiedMultipliedBy2 = oncify(multiplyBy2)
console.log(oncifiedMultipliedBy2(5))
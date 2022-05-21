const functionCreator = ()=>{
    let counter = 0;
    const add3 = (num) => {
        return num + 3
    }

    return add3
}

const generatedFunc = functionCreator()
const generatedFunc2 = functionCreator()
console.log(generatedFunc)

console.log(generatedFunc == generatedFunc2)

const result = generatedFunc(2);
console.log(result)
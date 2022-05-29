// adding in function prototype to make sure that this is globally available 
// for all the functions

Function.prototype.custom_bind = function(obj){
    // this
    // 'this' here refers to the function from which we are calling
    // example
    // function check(){}
    // check.custom_bind(....)
    // here this refers to check only

    // if this is not a function
    if(typeof this != 'function'){
        return 'Error'
    }

    const functionToApply = this // that means from where it is called
    // console.log("this = ", this)
    // console.log("obj = ", obj)
    const initialArguments = [...arguments].slice(1)
    // console.log(initialArguments)

    return function bindedFunction(){
        const final_list_of_arguments = [...initialArguments, ...arguments]
        // console.log(argumentsReceived, initialArguments)
        // initialArguments.concat(argumentsReceived)
        // console.log(final_list_of_arguments)

        // now apply the original calling function behaviour
        // return functionToApply.apply(obj, initialArguments.concat(argumentsReceived))

        // console.log(obj)
        const uniqueId = new Date().getTime().toString()    // this will always be unique
        obj[uniqueId] = functionToApply

        let args = []
        for(let i=0; i<final_list_of_arguments.length; ++i){
            args.push('final_list_of_arguments[' + i + ']')
        }

        const eval_string = "obj[uniqueId](" + args + ")"
        // console.log(initialArguments)
        // console.log(eval_string)
        const result = eval(eval_string)
        // console.log(obj)

        delete obj[uniqueId]
        console.log(obj)
        return result
    }
}

// make own apply

const info = {
    name:"vikash",
    age:12
}

function display(city, country){
    console.log(this.name, this.age, city, country)
}

// display.custom_bind(info, 'delhi', 'india')()
const b = display.custom_bind(info, 'delhi')
b('india')

// const b = display.bind(info, 'delhi')
// b('india')
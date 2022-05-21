const outer = () => {
    let counter = 0;
    const incrementCounter = ()=>{
        ++counter
        console.log(counter)
    }

    return incrementCounter
}

const newFunction = outer()
newFunction()
newFunction()

// here when we return the incrementCounter function,
// javascript automatically links the local memory near that function
// into an imaginary backpack
// this makes sure that whenever the function is invoked later in the future
// it has all the necessary components to run it.
// this backpack is completely private and preserved for the function to run
// and can't be accessed
// this data stored in backpack is known as PLSR data
// Persistent Lexical Stored Referenced

// this backpack is known as CLOSURE 

// lexical scoping is the concept which says that functions get a connection to their surrounding memory
// in which they were saved
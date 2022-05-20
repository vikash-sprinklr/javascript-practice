var a = function(){
    console.log("print1")
}

var b = function b(){
    console.log("print2")
}

// a.call()
// b.call()

// console.log(b)

var teacher = "xyz";

(
    function printTeacher(){
        console.log(teacher)
        teacher = "abc";
        console.log(teacher)
    }
)()

// printTeacher()

// console.log(teacher)

function temporary(){
    let teacher = "ajdsfnsk";
    console.log(teacher)
    var subject = "maths"
}

temporary()
console.log(teacher)

// console.log(maths)
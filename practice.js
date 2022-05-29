// object
/*let student = {
    name:'vikash',
    age:20,
    printName_traditional(){
        console.log("this = ", this)
        console.log("name = ", this.name)
    },
    printName_arrow : ()=>{
        console.log("this = ", this)
        console.log("name = ", this.name)
    }
}

student.printName_arrow()   // prints undefined because this refers to window object here
student.printName_traditional()*/

// function 
/*function Student(){
    this.name = 'vikash'
    this.age = 20
    this.printName_traditional = function(){
        console.log("this = ", this)
        console.log("name = ", this.name)
    }
    this.printName_arrow = ()=>{
        console.log("this = ", this)
        console.log("name = ", this.name)
    }
}

let stu = new Student()
stu.printName_arrow();          //both will print correct output
stu.printName_traditional()     // because both will have this as the current object they are referring

let func = stu.printName_traditional
func()                          // undefined, because traditional method will lose its this context here and will point to global object

let func2 = stu.printName_arrow // arrow function still holds the context
func2()*/

/*
class Student{
    constructor(){
        this.name = 'vikash',
        this.age = 20
    }

    printName_traditional(){
        console.log("this = ", this)
        console.log("name = ", this.name)
    }

    printName_arrow = ()=>{
        console.log("this = ", this)
        console.log("name = ", this.name)
    }
}

let stu = new Student()
stu.printName_arrow()
stu.printName_traditional()

let func = stu.printName_traditional
func()*/
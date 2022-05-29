// function Human(){
//     this.name = 'vikash'
//     this.age = 10
//     this.getHumanDetails = function(){
//         console.log("name = ", this.name, " age = ", this.age)
//     }
// }

// function Student(){
//     this.rollNumber = 100
//     this.college = 'DTU',
//     this.getStudentDetails = function(){
//         console.log("roll number = ", this.rollNumber, " college = ", this.college)
//     }
// }

// Student.prototype = new Human() // this sets the student prototype as the object of Human
// console.log(Student)

// let student1 = new Student()
// console.log(student1.rollNumber)
// student1.getStudentDetails()
// student1.getHumanDetails()

// Object.setPrototypeOf(Student, Human)
// console.log(Student.prototype)

let human = {
    name:'vikash',
    age:20,
    getHumanDetails(){
        console.log("name = ", this.name, " age = ", this.age)
    }
}

let student = {
    rollNumber:20,
    college:'DTU',
    getStudentDetails(){
        console.log("roll number = ", this.rollNumber, " college = ", this.college)
    }
}

// console.log(human)
// console.log(student)

Object.setPrototypeOf(student, human)     // this sets the prototype of student as human
                                          // now student has the access to all the properties of human

// now the chaining is

// student --> human.prototype --> Object.prototype --> null


// Alternative way

let student2 = {}
Object.setPrototypeOf(student2, student)

// now the chaining is
// student2 --> student.prototype --> human.prototype --> Object.prototype --> null

console.log(student2)

// console.log(student2.rollNumber)
// console.log(student2.name)
// console.log(student2.age)
// console.log(student2.college)
// student2.getHumanDetails()
// student2.getStudentDetails()

let student3 = Object.create(student)
console.log(student3)

// human.getHumanDetails()

// console.log(human.__proto__)

human.__proto__.someMethod = function(){            // now this some method function is accessible to student, student1, student2 
    console.log("this is some method")
}

// human.someMethod()
student2.someMethod()       // pass

// Parameter shadowing

student2.name = 'Rahul'    // by doing this, the original 'name' value is not manipulated, a new field 'name' is created and its value
                           // is assigned as Rahul 
console.log(student2.name)
console.log(student2)

console.log(student3.name)  // this has the original value

// here we are changing the value in prototype, so the changes are reflected in all the objects

// student3.__proto__.name = 'Rahul'
// console.log(student3)
// console.log(student2.name)




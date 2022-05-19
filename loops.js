a = [10,20,30,40,50]
console.log(a.length)

// method 1
for(var i=0; i<a.length; ++i){
    console.log(a[i])
}

// method 2
for(i of a){
    console.log(i)
}

// method 3
for(i in a){
    console.log(a[i])
}

students = ["vikash", "mitansh", "akshat"]

while(students.length > 0){
    let s = students.pop();
    console.log(`hi ${s}`)
}
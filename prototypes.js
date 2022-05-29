function test(){
    this.a = 10
    this.b = 10
}

let t = new test()
console.log(t)

test.prototype.c = 50

t.__proto__.d = 100
console.log(t)

let t2 = new test()
console.log(t2)
var workshop = {
    teacher:"kyle",
    ask(question){
        console.log(this)
        console.log(this.teacher)
        console.log(question)
    }
}

workshop.ask("what is implicit binding")

function ask(question){
    console.log(this.teacher, question)
}

function otherClass(){
    var myContext = {
        teacher:"Suzy"
    };
    ask(myContext, "q1")
    ask.call(myContext, "q2")
}

otherClass()

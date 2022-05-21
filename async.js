console.log(1)

setTimeout(() => {
    console.log(2)
}, 1000);

setTimeout(() => {
    console.log(3)
}, 10);

console.log(4)

// there are two types of queue
// event queue and microservices queue
// any browser running process like setTimer after completion, goes to event queue
// any browser running process which has a component attached in javascript and has to update the value in
// javascript goes to microservices queue
// microservices queue always has the higher priority than event queue
// es6
/*
class Vehicle{
    #engine
    constructor(wheels, numberPlate){
        this.wheels = wheels,
        this.numberPlate = numberPlate
        this.#engine = 'xyz0880'
    }

    getVehicleDetails(){
        console.log("wheels = ", this.wheels, " number plate = ", this.numberPlate, " engine = ", this.#engine)
    }
}

class Car extends Vehicle{
    constructor(wheels, numberPlate, name, mileage){
        super(wheels, numberPlate)
        this.name = name
        this.mileage = mileage
    }

    getDetails(){
        console.log("wheels = ", this.wheels, " number plate = ", this.numberPlate, " name = ", this.name, " mileage = ", this.mileage)
    }
}

let c1 = new Car(4, 'abc123', 'maruti', 10)
c1.getDetails()
c1.getVehicleDetails()
// console.log(c1.getDetails())
*/


// es5

function Airplane(wheels, numberPlate, engine){
    this.wheels = wheels
    this.engine = engine
    this.numberPlate = numberPlate   
}

function Vehicle(wheels, numberPlate, engine){
    this.wheels = wheels
    this.engine = engine
    this.numberPlate = numberPlate
}

Vehicle.prototype.getVehicleDetails = function(){
    console.log("wheels = ", this.wheels, " number plate = ", this.numberPlate, " engine = ", this.engine)
}

function Car(argument_obj){
    Vehicle.call(this, argument_obj.wheels, argument_obj.numberPlate, argument_obj.engine)
    this.name = argument_obj.name
    this.mileage = argument_obj.mileage
}

console.log(Car.prototype)

Car.prototype.getDetails = function(){
    console.log("wheels = ", this.wheels, " number plate = ", this.numberPlate, " name = ", this.name, " mileage = ", this.mileage)
}

Car.prototype = new Vehicle()
console.log(Car.prototype)
// Car.prototype = new Airplane()
// Car.prototype.constructor = Car

let c1 = new Car({
    name:'maruti',
    wheels:4,
    numberPlate:'1234',
    engine:'abc123',
    mileage:10
})
// c1.getDetails()
c1.getVehicleDetails()
console.log(c1)
// let v1 = new Vehicle(4, 'abc123', 'xyz')
// v1.getVehicleDetails()
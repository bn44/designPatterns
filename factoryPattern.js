
// Types.js - Constructors used behind the scenes
// A constructor for defining new cars
console.log('Start : Hi There! from BdR!');

function Car( options ) {
  // some defaults
  this.doors = options.doors || 'not specified by the user';
  this.state = options.state;
  this.color = options.color;
}

// A constructor for defining new trucks
function Truck( options){
    
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}

// FactoryExample.js
// Define a skeleton vehicle factory
function VehicleFactory() {}

// Define the prototypes and utilities for this factory

// Our default vehicleClass is Car

VehicleFactory.prototype.vehicleClass = Car;


 

// Our Factory method for creating new Vehicle instances

VehicleFactory.prototype.createVehicle = function ( options ) {

 
  if( options.vehicleType === "car" ){

    this.vehicleClass = Car;

  }else{

    this.vehicleClass = Truck;

  }

 

  return new this.vehicleClass( options );

};


// Create an instance of our factory that makes cars

var carFactory = new VehicleFactory();

var myCar = carFactory.createVehicle( {

            vehicleType: "car",
            color: "yellow",
            
            state: "used"
            
            });

// Test to confirm our car was created using the vehicleClass/prototype Car

 

// Outputs: true

console.log( myCar instanceof Car );

 

// Outputs: Car object of color "yellow", doors: 6 in a "brand new" state

console.log( myCar );

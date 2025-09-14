// Car constructor function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add getMakeModel method to Car prototype
Car.prototype.getMakeModel = function() {
  return `${this.make} ${this.model}`;
};

// SportsCar constructor function inheriting from Car
function SportsCar(make, model, topSpeed) {
  // Call Car constructor to initialize make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit Car's prototype methods
SportsCar.prototype = Object.create(Car.prototype);

// Set constructor property correctly for SportsCar
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
const car = new SportsCar("Ferrari", "Testarossa", 200);
console.log(car.getMakeModel()); // Ferrari Testarossa
console.log(car.getTopSpeed());  // 200

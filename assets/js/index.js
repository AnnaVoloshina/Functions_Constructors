"use strict";

function Auto(name, color, movementTime, startVelocity, finalVelocity) {
  this.name = name;
  this.color = color;
  this.movementTime = movementTime;
  this.acceleration = function () {
    return (finalVelocity - startVelocity) / movementTime;
  };
  this.state = function () {
    if (this.finalVelocity > 0) {
      return "Авто стоит на месте";
    } else {
      //   return `Авто едет со скоростью ${this.finalVelocity}.`;
      return "Авто стоит на месте";
    }
  };
}

const auto1 = new Auto("Volvo", "red", 30, 0, 40);
const auto2 = new Auto("Toyota", "blue", 60, 40, 40);
const auto3 = new Auto("Lanos", "white", 200, 30, 40);
const auto4 = new Auto("Chevrolet", "black", 350, 40, 0);

console.log(auto1.state());
console.log(auto1.acceleration());
console.log(auto1, auto2, auto3, auto4);
console.log(auto4.acceleration());

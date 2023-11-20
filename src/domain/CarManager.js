import Car from "./Car.js";
import { carNameValidator } from "../utils/Validator.js";

class CarManager {
  #cars = [];

  constructor(carsName) {
    carNameValidator(carsName);
    this.#carsSetting(carsName);
  }

  #carsSetting(carsName) {
    carsName
      .split(',')
      .forEach((carName) => this.#cars.push(new Car(carName)));
  }

  move(randomArray) {
    this.#cars.forEach((car, index) => {
      if (randomArray[index] >= 4) {
        car.forward();
      }
      if (randomArray[index] < 4) {
        car.stop();
      }
    });
  }

  getCarsNumber() {
    return this.#cars.length;
  }

  getCarsPosition() {
    return this.#cars.map((car) => {
      return [car.getName(), car.getPosition()];
    });
  }

  getWinners() {
    const scoreArray = this.#cars.map((car) => car.getPosition());
    const winnerScore = Math.max(...scoreArray);
    

    return this.#cars.filter((car) => car.getPosition() === winnerScore).map((car) => car.getName());
  }
}

export default CarManager;

/*
const a = new CarManager('a,b,c', '3');

a.move([2,2,9]);
a.move([4,4,4]);
a.move([0,0,9]);
a.move([9,0,0]);
a.move([9,0,0]);

console.log(a.getWinners());*/
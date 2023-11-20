
class Car {

  #position = 0;

  #carName = 0;

  constructor(carName) {
    this.#carName = carName;
  }

  forward() {
    this.#position += 1;
  }

  stop() {
    this.#position += 0;
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#carName;
  }
}

export default Car;

import { randomGenerator } from "../utils/RandomGenerator.js";
import CarManager from "../domain/CarManager.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { Console } from "@woowacourse/mission-utils";

class RacingController {
  attemptNumber = 0;
  carManager;
  constructor() {

  }

  async gameSetting() {
    this.carManager = new CarManager(await InputView.getCarsName());
    this.attemptNumber = await InputView.getAttemptNumber();

    Console.print('');
    OutputView.printProlog();

    this.startRacing();
  }

  startRacing() {
    let playTime = 0;
    while (playTime < this.attemptNumber) {
      this.carManager.move(randomGenerator(this.carManager.getCarsNumber()));
      playTime += 1;
      OutputView.printCarsPosition(this.carManager.getCarsPosition());
      Console.print('');
    }
    
    this.showWinners();
  }

  showWinners() {
    OutputView.printWinners(this.carManager.getWinners());
  }
}

export default RacingController;

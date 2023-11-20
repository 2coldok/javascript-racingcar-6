import { Console } from "@woowacourse/mission-utils";
import { QUESTION } from "../constants/GameMesseage.js";

const InputView = {
  async getCarsName() {
    return await Console.readLineAsync(`${QUESTION.carsName}\n`);
  },

  async getAttemptNumber() {
    return await Console.readLineAsync(`${QUESTION.attemptNumber}\n`);
  },
};

export default InputView;

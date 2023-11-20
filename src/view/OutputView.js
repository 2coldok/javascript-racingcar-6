import { Console } from "@woowacourse/mission-utils";
import { ANSWER } from "../constants/GameMesseage.js";
import { convertNumberToRoad, convertWinners } from "../constants/Formatter.js";

const OutputView = {
  printProlog() {
    Console.print(ANSWER.prolog);
  },

  printCarsPosition(carsPositionArray) {
    const resultArray = convertNumberToRoad(carsPositionArray);
    
    resultArray.forEach((element) => Console.print(element));
    Console.print('');
  },

  printWinners(winnersArray) {
    Console.print(convertWinners(winnersArray));
  },
};

export default OutputView;
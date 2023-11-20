import { Random } from "@woowacourse/mission-utils";

export const randomGenerator = (carsNumber) => {
  const randomArray = [];
  
  while(randomArray.length < carsNumber) {
    randomArray.push(Random.pickNumberInRange(0, 9));
  }

  return randomArray;
}

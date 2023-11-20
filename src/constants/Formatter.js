import { ANSWER } from "./GameMesseage.js";

// [ [ 'a', 1 ], [ 'b', 1 ], [ 'c', 3 ] ]
export const convertNumberToRoad = (carsPositionArray) => {
  const result = carsPositionArray.map((element) => {
    const [carName, positionNumber] = element;
    
    return `${carName} : ${''.padStart(positionNumber, '-')}`
  });

  return result;
};

// input
// [ 'a', 'c' ]
export const convertWinners = (winnersArray) => {
  const winnersStirng = winnersArray.join(', ');
  const result = `${ANSWER.winners}${winnersStirng}`; 
  
  return result;
}
/*
console.log(convertNumberToRoad([ [ 'a', 1 ], [ 'b', 1 ], [ 'c', 3 ] ]));
*/


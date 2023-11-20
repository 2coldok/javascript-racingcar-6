
export const carNameValidator = (carNames) => {
  const carsNameArray = carNames.split(',');
  carsNameArray.forEach((element) => {
    if (element.length > 5) {
      throw new Error('[ERROR]');
    }
  });
};

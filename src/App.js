import RacingController from "./controller/RacingController.js";

class App {
  async play() {
    const racingController = new RacingController();
    await racingController.gameSetting();
  }
}

export default App;

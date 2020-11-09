const Jupitr = require("./structures/Client");
const newClient = new Jupitr();

const Calculator = require("./Commands/utility/calc");
const newCalc = new Calculator();

newCalc.startCalculator();
newClient.initBot();

const Car = require('./js/Car.js');

const volvo = new Car('Volvo', 'black');
const audi = new Car('Audi', 'silver');
const tesla = new Car('Tesla', 'red');

volvo.turnOn();
volvo.drive(10);
volvo.turnOn();
volvo.drive(15);


// audi.changeColor('yellow')


// volvo.statusReport();
// audi.statusReport();
// tesla.statusReport();


const Bird = require('./Bird.js');

/*
Chicken:
- parametrus: name, color, sound, wingsCount, canFly
- metodai: voice, introduce, flyAway
*/

class Chicken extends Bird {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Cip cip';
        this.canFly = false;
    }
}

module.exports = Chicken;
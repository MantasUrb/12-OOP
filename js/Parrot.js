const Bird = require('./Bird.js');

/*
Parrot:
- parametrus: name, color, sound, wingsCount, canFly
- metodai: voice, introduce, flyAway
*/

class Parrot extends Bird {
    constructor(name, color) {
        super(name, color);
        this.sound = 'I am a captain ' + name;
    }
}

module.exports = Parrot;
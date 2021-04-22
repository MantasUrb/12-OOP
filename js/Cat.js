const Pet = require('./Pet.js');

/*
Cat:
- parametrus: name, color, sound
- metodai: voice, introduce
*/

class Cat extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Miau miau';
    }
}

module.exports = Cat;
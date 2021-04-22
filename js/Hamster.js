const Pet = require('./Pet.js');

/*
Hamster:
- parametrus: name, color, sound
- metodai: voice, introduce
*/

class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Nom nom';
        this.canEatTillDeath = true;
    }
}

module.exports = Hamster;
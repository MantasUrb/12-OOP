/*
Pet:
- parametrus: name, color, sound
- metodai: voice, introduce
*/

class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.sound = 'Au miau nom';
    }

    voice() {
        console.log(`${this.name}: ${this.sound}!`);
    }

    introduce() {
        console.log(`As esu ${this.name}, mano kailis ${this.color} ir moku sakyti "${this.sound}".`);
    }
}

module.exports = Pet;
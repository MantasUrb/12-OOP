/*
Bird:
- parametrus: name, color, sound, wingsCount, canFly
- metodai: voice, introduce, flyAway
*/

class Bird {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.sound = 'Cip captain';
        this.wingsCount = 2;
        this.canFly = true;
    }

    voice() {
        console.log(`${this.name}: ${this.sound}!`);
    }

    introduce() {
        console.log(`As esu ${this.name}, mano kailis ${this.color} ir moku sakyti "${this.sound}".`);
    }

    flyAway() {
        if (this.canFly) {
            console.log(`${this.name}: flew away...`);
        } else {
            console.log(`${this.name}: can not fly away :(`);
        }
    }
}

module.exports = Bird;
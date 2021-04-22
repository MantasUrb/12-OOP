class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.isEngineOn = false;
        this.distance = 0;
    }

    turnOn() {
        if (this.isEngineOn) {
            console.log(`ka dirbi?! nori sudeginti starteri?! (${this.name})`);
        } else {
            this.isEngineOn = true;
            console.log(`${this.name} engine is turned ON!`);
        }
    }

    turnOff() {
        if (this.isEngineOn) {
            this.isEngineOn = false;
            console.log(`${this.name} engine is turned OFF!`);
        } else {
            console.log(`tai kad varyklis isjungtas... :/ (${this.name})`);
        }
    }

    statusReport() {
        // Car name: car is [color] and it's engine is [on/off].
        console.log(`${this.name}: car is ${this.color} and it's engine is ${this.isEngineOn ? 'on' : 'off'}.`);
    }

    changeColor(newColor) {
        this.color = newColor;
    }

    drive(distance) {
        if (!this.isEngineOn) {
            console.log(`${this.name}: masina negali vaziuoti, kol neijungei varyklio.`);
            return;
        }

        this.distance += distance;
        console.log(`${this.name}: drived extra ${distance}km (total: ${this.distance}).`);
    }
}

module.exports = Car;
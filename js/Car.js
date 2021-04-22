class Car {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.isEngineOn = false;
        this.distance = 0;
    }

    turnOn() {
        if (this.isEngineOn) {
            console.log(`variklis ${this.name} jau ijungtas`);
        } else {
        this.isEngineOn = true;
        console.log(`${this.name} variklis ijungtas`);
        }   
    }
    turnOff() {
        this.isEngineOn = false;
    }
    statusReport() {
        //Car name: engine is [on/off]
        console.log(`${this.name}: car is ${this.color} and it's engine is ${this.isEngineOn ? 'on' : 'off'}`);
    }
    changeColor(newColor) {
        this.color = newColor;
    }
    drive(distance) {
        if (!this.isEngineOn) {
            console.log(`${this.name} negali vaziuoti kol nejungei variklio`);
            return
        }
        this.distance += distance;
        console.log(`${this.name}: drived extra ${distance}km (total: ${this.distance}).`);
    }
}

module.exports = Car;
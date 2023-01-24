// OOPS classes in TS
// create Class
class Car {
    color;
    hp;
    model;
    _license;
    // create class in constructor 
    constructor(color, hp, model) {
        this.color = color;
        this.hp = hp;
        this.model = model;
    }
    // create getter setter
    get license() {
        return this._license;
    }
    set license(val) {
        this._license = val;
    }
    displayAll() {
        return `color: ${this.color} hp: ${this.hp} model: ${this.model}}`;
    }
    carStart() {
        return `car is start`;
    }
    carGear() {
        console.log('car gear change');
    }
    carStop() {
        return "car is stop";
    }
}
const cultus = new Car('red', "1000cc", 1000);
const civic = new Car('blur', "1100cc", 1500);
const Alto = new Car('green', "1200cc", 2000);
Alto.license = 'al2026';
civic.license = 'cv2026';
cultus.license = 'cl2026';
console.log(cultus.displayAll(), Alto._license);
console.log(civic.displayAll(), civic._license);
console.log(Alto.displayAll(), Alto._license);
console.log(Alto._license);
console.log(civic._license);
console.log(cultus._license);
console.log(Alto.license);
export {};

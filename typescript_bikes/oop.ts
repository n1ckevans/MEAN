class Bike {
  price: number;
  max_speed: number;
  miles: number;

  constructor(price: number, max_speed: number) {
    this.price = price;
    this.max_speed = max_speed;
    this.miles = 0;
  }

  displayInfo() {
    console.log(`Price: ${this.price}, Max Speed: ${this.max_speed}, Miles: ${this.miles}`)
  }

  ride() {
    console.log("Riding Durty");
    this.miles += 10;
  }

  reverse() {
    if (this.miles <= 4) {
      console.log("Can't pull over any farther...")
    } else {
      console.log("Back that thang up");
      this.miles -= 5;
    }
  }
}

const harley = new Bike(666, 420);
harley.ride();
harley.ride();
harley.ride();
harley.reverse();
harley.displayInfo();
const tinyBicicelta = new Bike(10, 20);
tinyBicicelta.ride();
tinyBicicelta.ride();
tinyBicicelta.displayInfo();
const bmx = new Bike(100, 40);
bmx.reverse();
bmx.reverse();
bmx.displayInfo();
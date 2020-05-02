//ES6

class Ninja {

  constructor(name)
  {
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }

    sayName(){
      console.log(`My Ninja name is ${this.name}!` )
    }

    showStats(){
      
      return `Name: ${this.name}, Health: ${this.health}, Strength: ${this.speed}, Speed: ${this.strength}`;
    }
    drinkSake(){
      this.health += 10;
      console.log(`Health is now: ${this.health}`)
    }

}

const Goemon = new Ninja("Goemon")
Goemon.sayName()
Goemon.showStats()
Goemon.sayName()
Goemon.drinkSake()

class Sensei extends Ninja {
  constructor(name, health, speed, strength, wisdom){
    super(health, speed, strength);
    this.name = name;
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  senseiStats(){
    const senStats = super.showStats(); 
    
    
    console.log(`${senStats}, Wisdom: ${this.wisdom}`);
  }

  speakWisdom(){
    const takeDrink = super.drinkSake();
   console.log("Cash Rules Everything Around Me");
   return takeDrink;
  }

}

const Splinter = new Sensei("Master Splinter")
Splinter.sayName()
Splinter.senseiStats()
Splinter.speakWisdom()




//ES5

function Ninja(name) {
  var self = this;
  var speed = 50;
  var strength = 5;

  this.name = name;
  this.health = 100;
  this.sayName = function() {
  console.log(`My Ninja name is ${this.name}!` )
  }
  
  this.showStats = function() {
      console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${speed}, Speed: ${strength}` )
    }
  
  this.drinkSake = function() {
      this.health += 10;
      console.log(`Health is now: ${this.health}`)
    }

this.showStrength = function() {
    return strength;
  }

}


var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
blueNinja.sayName()
blueNinja.showStats()
blueNinja.drinkSake()



Ninja.prototype.punch = function(ninja) {
if (ninja instanceof Ninja == false){
  console.log("You must enter a Ninja to attack!")
 
}
else {

ninja.health -= 5;
console.log(`${ninja.name} was punched by ${this.name} and lost 5 Health!`)
}
};


redNinja.punch(blueNinja);

Ninja.prototype.kick = function(ninja){
if (ninja instanceof Ninja == false){
  console.log("You must enter a Ninja to attack!")

}
else {
var healthLost = this.showStrength() * 15;
 console.log(`${ninja.name} was kicked by ${this.name} and lost ${healthLost} Health!`)
}
};

blueNinja.kick(redNinja);

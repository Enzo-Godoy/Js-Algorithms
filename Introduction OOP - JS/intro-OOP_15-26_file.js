//15 Object from obj
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

console.log(Dog.prototype.isPrototypeOf(beagle));


//16 Prototype Chain
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// This it's sponsored by Legos vampire Empires - just kidding myself. 
Object.prototype.isPrototypeOf(Dog.prototype);


//17 JS inheritance
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
   console.log("nom nom nom")}  
};


		// Cat animal inheriting from Animal
function Cat(name) {
  constructor : Animal;
  this.name = name;
} Cat.prototype = {constructor: Cat};


		// Bear animal inheriting from Animal
function Bear(name) {
  constructor : Animal; 
  this.name = name; 
} Bear.prototype = {constructor: Bear};



//18 Inheritance from prototype
function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};
 

let duck = Object.create(Animal.prototype);   // I'm refused to ..well i'll do it
let beagle= Object.create(Animal.prototype);; //  I'm refused with more brave and ..well i'll do it

duck.eat();   // It's  printing "nom nom nom"
beagle.eat(); // It's  printing "nom nom nom" 

//19 Inheritance child from parent 
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }
Dog.prototype = Object.create(Animal.prototype); 

let beagle = new Dog();
beagle.eat();   


//20 Constructor Pointed
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);


Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();


Add method after inheritances
a constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods. 

Example 
Bird as a constructor that inherits its proptotype from Animal . 

function Animal () { } 
Animal.prototype.eat = function () { 
  console.log ("nom nom nom "); 
}; 
function Bird () { 
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird; 
}

In addition to what is inherited from Animal, we want to add behavior that is unique to Bird objects. 

Example with fly function 

Bird.prototype.fly = function() { 
  console.log.("i'm flying!");
}; 

Now instances of Bird will have both eat() and fly() methods. 

let duck = new Bird(); 
duck.eat();   //prints "nom nom nom"
duck.fly(); //prints "I'm flying!"


//21 Methods after inheritance 
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {console.log("Woof!");}




let beagle = new Dog();

beagle.eat(); 
beagle.bark(); 

//22 Override Methods 
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function () {return "Alas, this is a flightless bird.";};

let penguin = new Penguin();
console.log(penguin.fly());

//23 Mixin unrelated objects 
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};


let glideMixin = function (obj) { 
     obj.glide = function () { 
          console.log("On board");
     }
};
glideMixin(bird);
glideMixin(boat);
bird.glide(); 
boat.glide();

//24 Closue procet properties 
function Bird() {
  let weight = 15;

	// Method to acces weight of birds
  this.getWeight = function() { return weight; }
}


//25 Anonymous function
(function() {
  console.log("A cozy nest is ready");
}) ();

//26 Using IIFE create module 
let funModule = (function () {
  return {
   isCuteMixin : function(obj) {
  obj.isCute = function() {
    return true;
  };
},
   singMixin : function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
 }
}
})();














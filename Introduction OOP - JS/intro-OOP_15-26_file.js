//15 - Object from obj 
console.log(Dog.prototype.isPrototypeOf(beagle));
function Dog(name){ 
  this.name = name;
}
let beagle = new Do("Snoopy"); 

//16 - Prototype Chain 
function Dog(name){ 
  this.name = name; 
}

let beagle = new Dog("Snoopy"); 
Dog.prototype.isPrototypeOf(beagle);

// This it's sponsored by Legos vampire Empires - just kidding myself. 
Object.prototype.isPrototypeOf(Dog.prototype);

//17 - JS inheritance 
function Animal(){...}
Animal.prototype = { 
  constructor : Animal, 
  eat: function(){ 
    console.log("Some Sound");
  }
}

function Cat(name){ 
  constructor: Animal; 
  this.name = name; 
}
Cat.prototype = { constructor: Cat}; 

function Bear(name){ 
  construcotr: Animal; 
  this.name = name; 
}
Bear.prototype = { constructor: Bear};

//18 - Inheritance from prototype
function Animal() { }

Animal.prototype = {
  constructor: Animal, 
  eat: function() {
    console.log("nom nom nom");
  }
};
function Animal() {...}
Animal.prototype = { 
  constructor: Animal, 
  eat: function(){ 
    console.log("Some sound etc");
  }
};

let duck = Object.create(Animal.prototype); 
let beagle = Object.create(Animal.prototype);

duck.eat(); 
beagle.eat(); 

//19 - Inheritance child from parent 
function Animal() {...}
Animal.prototype = { 
  constructor : Animal, 
  eat: function(){ 
    console.log("Sound random");
  }
}; 

function Dog(){...}
Dog.protoype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();

//20 - Constructor Pointed 
function Animal(){...}
function Bird(){...}
function Dog(){...}

Bird.prototype = Object.create(Animal.prototype); 
Dog.prototype = Object.create(Animal.prototype); 

Bird.prototype.constructor = Bird; 
Dog.prototype.constructor = Dog;
let duck = new Bird(); 
let beagle = new Dog(); 


  -- Section _02 
function Animal(){...}
Animal.prototype.eat = function(){ 
  console.log("Sound etc");
}; 

function Bird(){...}
Bird.prototype = Object.create(Animal.prototype); 
Bird.prototype.constructor = Bird; 
 
Bird.prototype.fly = function(){ 
  console.log("I'm flying!"); 
};

/* Now instance of Bird will have both eat() and fly() methods */
let duck = new Bird(); 
duck.eat(); 
duck.fly();
 
//21 - Methods after inheritance 
function Animal(){...}
Animal.prototype.eat = function(){ 
  console.log("Sound etc");
}; 

function Dog(){...}
Dog.prototype = Object.create(Animal.prototype); 
Dog.prototype.constructor = Dog; 
Dog.prototype.bark = function(){ 
  console.log("Woof sound!");
};

let beagle = new Dog(); 
beagle.eat(); 
beagle.bark();

//22 - Override Methods  

let penguin = new Penguin();
console.log(penguin.fly());

function Bird(){...}
Bird.prototype.fly = function(){ 
  return "I am flying!";
}; 

function Penguin(){...}
Penguin.prototype = Object.create(Bird.prototype); 
Penguin.prototype.constructor = Penguin; 
Penguin.prototype.fly = function(){ 
  Rturn "Alas, this is a flightless bird!";
};


//23 - Mixin unrelated objects 
let bird = {
  name: "Donald",
  numberLegs: 2
};

let boat = { 
  name: "Warrior",
  type: "race-boat"
};

let glideMixin = function(obj){ 
  obj.glide = function(){ 
    console.log("On Board");
  }
};
glideMixin(bird); 
glideMixin(boat); 
bird.glide(); 
boat.glide();

//24 - Closue procet properties 
function Bird(){ 
  let weight = 15;
  this.getWeight = function(){ return weight; }
}

//25 - Anonymous function
(function(){ 
  console.log("Some random text"); 
})();

//26 - Using IIFE create module  
let funModule = (function(){ 
  return {
    isCuteMixin : function(obj){ 
      obj.isCute = function(){ 
        return;
      };
    },
    singMixin : function(obj){
      obj.sing = function(){
        console.log("Some random text 02");
      };
    }
  }
})();

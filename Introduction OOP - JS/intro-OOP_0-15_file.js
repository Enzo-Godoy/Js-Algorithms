//01 - JS Object 
let dog = {
  name : "Locky", 
  numberLegs : 2
};

//02 - JS dot notation 
let dog = {
  name : "Spot",
  numberLegs: 4
};
 
console.log(dog.name); 
console.log(dog.numberLegs);

//03 - JS property within an object.
dog.sayLegs();
let dog = {
  name : "Spot",
  numberLegs: 4, 
  sayLegs : function(){ return "This dog has" + dog.numberLegs + "legs."; }
};

//04 - This used within an object
dog.sayLegs();
let dog = {
  name : "Spot",
  numberLegs : 4, 
  sayLegs: function(){ return "This dog has "+ this.numberLegs + "legs. ";}
}; 
dog.sayLegs();

//05 - Constructor for an object 
function Dog(){ 
  this.name = "Saturno"; 
  this.color = "Blue"; 
  this.numberLegs = 2;
}

//06 - Construct inheritance 01
function Dog(){ 
  this.name = "Rupert"; 
  this.color = "Brown"; 
  this.numberLegs = 4;
}

let hound = new Dog();

//07 - Constructor Inheritance 02 
function Dog(name, color){ 
  this.name = name; 
  this.color = color; 
  this.numberLegs = 4;
}
let terrier = new Dog("Hugo", "Green");

//08 - Constructor instanceof   
function House(numBedRooms){ 
  this.numBedRooms = numBedRooms;
}
let myHouse = new House(4);
console.log(myHouse instanceof House);

//09 - Own property
function Bird(name){ 
  this.name = name; 
  this.numberLegs = 2;
}

let canary = new Bird("Tweety"); 
let ownProps = [];

for(let property in canary){
    if(canary.hasOwnProperty(property)){
      ownProps.push(property);
    }
}

//10 - Prototype properties 
function Dog(name){ 
  this.name = name;
}

Dog.prototype.numberLegs = 2; 
let beagle = new Dog("Snoopy"); 
console.log(beagle.numberLegs);


//11 - Iterate over properties 
function Dog(name){ 
  this.name = name;
}

Dog.prototype.numLegs = 4; 
let beagle = new Dog("Snoopy"); 
let ownProps = []; 
let prototypePRops = []; 

for(let property in beagle){ 
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

//12 - Iterate constructor property 
function Dog(name){ 
  this.name = name;
}
 
let Chiwi = new Dog("Chewbacca");
function joinDogFraternity(candidate){ 
  if(candidate.constructor === Dog){ return true; }
  else{ return false; }
}
 
console.log(joinDogFraternity(Chiwi));

//13 - Change Prototype  dog props
function Dog(name){ 
  this.name = name;
}
Dog.prototype = { 
  numberLegs : 2, 
  eat : function(){
    console.log("Some output after eat");
  }, 
  describe: function(){ 
    console.log("My name is " + Dog.name + "and etc");
  }
};

//14 - Constructor prototype
function Dog(name){ 
  this.name = name;
}
//15 - Constructer defined 
Dog.prototype = { 
  constructor : Dog, 
  numberLegs : 2, 
  eat : function(){ 
    console.log("My name is" + this.name);
  }
};
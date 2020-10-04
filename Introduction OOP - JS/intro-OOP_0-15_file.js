//01 JS Object 
let dog = {
  name  : "Locky",
  numLegs : 2 
};


//02 JS dot notation 
let dog = {
  name: "Spot",
  numLegs: 4
};


console.log(dog.name);
console.log(dog.numLegs);

//03 JS property within an object
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs : function () { return "This dog has "+ dog.numLegs + " legs.";}
};

dog.sayLegs();


//04 This used within an object
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

//05 - Constructor for an object 
function Dog () {
  this.name = "Saturno"; 
  this.color = "Blue"; 
  this.numLegs = 2; 
}


//06 Construct inheritance 01
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
} 

let hound = new Dog();


//07 Constructor Inheritance 02
function Dog(name, color) {
  this.name = name; 
  this.color = color; 
  this.numLegs = 4;
}

let terrier = new Dog("Hugo", "Green");

//08 Constructor instanceof
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

let myHouse = new House (4); 
console.log(myHouse instanceof House);


//09 - Own property
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];


for (let property in canary){
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
 
}

//10  Prototype properties
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 2;
let beagle = new Dog("Snoopy");

console.log(beagle.numLegs);


//10  Iterate over properties 
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) { 
   if(beagle.hasOwnProperty(property)) { 
     ownProps.push(property);
   } else { 
     prototypeProps.push(property); 
   }
}



//12 Iterate constructor property 
function Dog(name) {
  this.name = name;
}

let Chiwi= new Dog("chewbacca");
// Add your code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog){return true}
  else{return false;}
}

console.log(joinDogFraternity(Chiwi));

//13 Change Prototype  dog props
function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  numLegs : 2 , 
  eat : function() { 
    console.log("Some output after eat"); 
  }, 
  describe : function (){ 
    console.log("My name is " + Dog.name + "and i'm the best friend of chewbacca");
  }
};

//14 Constructor prototype
function Dog(name) {
  this.name = name; 
}

//15-  Constructer defined 
Dog.prototype = { 
  constructor : Dog, 
  numLegs : 2, 
  eat : function() { 
     console.log("nom nom nom");
  }, 
  describe : function() { 
    console.log("My name is " + this.name); 
  }
}; 




//Some random object about clothers 
var myClothesObj = {
	"hat"   : "ballcap", 
	"shirt" : "jersey", 
	"shoes" : "cleats" 
}; 

let hatValue   = myClothesObj.hat ; 
let shirtValue = myClothesObj.shirt ; 
let shoesValue = myClothersObj.shoes; 

var someFoodObj = {
	"food_1" : "hamburguer", 
	"food_2" : "veggies",
	"food_3" : "water"
}; 


let food1Value = someFoodObj.food_1;
let food2Value = someFoodObj.food_2;
let food3Value = someFoodObj.food_3;


/* If the keys of the object has any space it needs to be called by bracket syntax*/ 
var someFish = {
	"dragon of water" : "Fydius", 
	"red fish" : "tiburoncin", 
	"blue charming fish" : "lucy"
}

let fishDragon = someFish["dragon of water"];
let fishTiny   = someFish["red fish"];
let fishCharming = someFish["blue charming fish"]; 


 //Accesing keys of an object by using vars 

 var teamSport {
 	32 : "Namath",
 	21 : "Sybellius",
 	54 : "Aracnok"
 }

 let teamType = 32; 
 let teamName = (teamSport[teampType]); 

 console.log(teamName); 

 var myPet = { 
 	"name" : "Cypre",
 	"legs" : 4 , 
 	"tails": 1 , 
 	"friends" : ["water", "cats"]
 }; 

 myPet.name = "Rufus"; 
 console.log(myPet["name"]); 



 //Adding keys to an existing object  
 var wildAnimal = { 
 	"name"  : "Leon",
 	"legs"  : 4, 
 	"tails" : 1, 
 	"food"  : "carnivorous"
 	"colour" : "canary yellow"
 }; 

wildAnimal.speed = 24.7;  
wildAnimal.name  = "Ribbon";
delete wildAnimal.colour;
 
 

//Function to lookup thrugh an object 
function nameInstitution(nameAssigned) {
	let output = "";
	let nameInstitute = {
	"Adams" : "St.Alpes Institution",
	"Bravo" : "Boston Academy",
	"Delta" : "Denver law institute"
	};
	
	//Better to check null case
	output = nameInstitute[nameAssigned]; 
	return output; 
}

nameInstitution(Bravo);

/* <===========================================================> */ 

// Sample of objects for gift 
var myGift = { 
	"gift" : "horse",
	"pet"  : "snake",
	"cards": "Destiny Game"; 
}

function checkGifts(checkGift){ 
	if(myGifts.hasOwnProperty(checkGift)){
		return myGift(checkGift); 
	}else {
		return console.log("Gift not found"); 
	}
}

myGift("pet");
 

// Another case by checking planets 
var space = { 
	"galaxy" : "orion",
	"way" 	 : "milky", 
	"planets" : "earth"
}; 

function checkOrbitLife(planetFromOrbit){ 
	if(space.hasOwnProperty("planets")){
		return space["planetFromOrbit"]; 
	}
	else {	return console.log("Not in this space");	}
}

checkOrbitLife("Aurasnus"); 
//Function with comparison 
function testIfPrepared(notes, average){
	if(notes > average){
		return "Greather than the average you\'re in "; 

	}
	else if ( notes < average) { 
		return "You need to work your skills a little more"; 
	}
}

 /* Value average 25 */
testIfPrepared(23); 

//function more comparisons 
function furnitureAllowed(furnitureSize){
	if( furnitrueSize < 7){
		return "Sure, it will pass";
	}
	if ( furnitureDize < 10 ){
		return "It will pass";
	}
	else {
		return "Sorry, but it won\'t do it";
	}
}
 
 //function to more comparisons , animals in meters
 function animalSize(size){
  if ( size < 1) { return "Tiny" }
  else if (num < 2) {return "Small"}
  else if (num < 5) {return "Medium"}
  else if (num <= 10) {return "Large"}
  else if (num >= 40) {return "Huge"}
 } 

/* It will return  'Large' */
animalSize(10);

var names = ["Hole-in-one!",
 "Eagle", 
 "Birdie", 
 "Par", 
 "Bogey", 
 "Double Bogey", 
 "Go Home!"];


function golfScore(par, strokes) {
  if (strokes == 1) {return names[0]}
  else if (strokes <= par-2 ) {return names[1]}
  else if (strokes == par -1) {return names[2]}
  else if (strokes == par) {return names[3]}
  else if (strokes == par +1) {return names[4]}
  else if (strokes == par +2) {return names[5]}
  else if (strokes  >= par +3 ) {return names [6]}
}


golfScore(5, 4);


// function with case 
function caseWave(waveType){ 
 var output = ""; 
 switch(waveType){
 	case 1: 
 		output = "alpha";
 		break;
 	case 2: 
 		output = "beta";
 		break;
 	case 3: 
 		output = "gamma";
 		break;
 	case 4: 
 		output = "delta";
 		break;
 	default : 
 		output = "No wave";
 		break;
 	}
 	return output;
 }

 
// Delta wave
caseWave(4);
 

 // Function case generic 
 function moreCoffeNeeded(energyLeft){
 	var output = ""; 
 	swtich(energyLeft){
 		case 1: 
 		case 2: 
 		case 3: 
 			output = "Low - Yes";
 			break; 
 		case 4: 
 		case 5: 
 		case 6: 
 			output = "Mid - Can wait"; 
 			break; 
 		case 7: 
 		case 8: 
 		case 9: 
 			output = "High - Not at all";
 			break; 
 		default : 
 			output = "You\'re energy it\'s out of control";
 	}
 	return output; 
 }

 /* "High - Not at all" */
moreCoffeNeeded(8);
 

// Sample of objects in js 
var myDog = {
	"name" : "Hitchok",
	"legs" : 4, 
	"friends" : ["bubbles", "trees"]
}

var myCat =  {
	"name" : "Tom", 
	"legs" : 4, 
	"friends" : ["lasagna", "Garfield the cat"];
}
 
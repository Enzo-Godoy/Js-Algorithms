//item removed
function nextItem (array, item){
	array.push(item);
	var itemRemoved = array.shift(); 
	return numRemove;
}

//Making an object into a string 
var testMyObj= [1,2,3,4,5]; 

console.log("Before: " + JSON.stringify(testMyObj));
console.log(nextItem(testMyObj, 23)); 
console.log("After: " ´JSON.stringify(testerArr)); 

//function conditional 
function conditionMutant(mutantBlood){
	if(mutantBlood){
		return "Yes, it\'s true"; 
	}
	return "No, it\'s false";
}
 

 // Comparing numbers function 
 function testMadness(valueNum){
 	if(valueNum == 22){
 		return "You\'re crazy";
 	}
 	return "Come back next week";
 }

//Test your number here
testMadness(13);

/* Comparing strictly */ 
function theWill(valueHerency){
	if(valueHerency === 25){
		return "You\'re the inheritor";
	}
	return "We\'re sorry your not the inheritor";
}

//Comparing differnts 
function buyGroceries(article, priceGroceries){
	if(priceGroceries == 20 || priceGroceries > 19){
		return "Don\'t buy it";
	}
	else if( product === "Pinneaple" && priceGroceries < 30){
		return "Buy it anyways";
	}
	return "Go home";
} 
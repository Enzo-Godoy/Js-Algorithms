--1
var someSir = [22, "Stimpson"];
var someHouse = ["The", "The house" , "was habited by "]; 

someSir.shift(); 
someSir.unshift("Mr.s");

someHouse.unshift(); 

console.log( someHouse + someSir); 

// some list inside an array 
var myList = [
["Lettuce",22],
["Lemonade",12],
["Cheese",33],
["Cereals", 21]
];

console.log(myList);  

//a function reusable 
function paymentDone(){
	console.log("The payment was done already."); 
}

function paymentIssue(){
	console.log("There's an issue with the payment, try again");
}
 

//Function with parameters 
function reportPresence(alumn, classTopic){
	console.log("The " + alumn + "assist to the class " + classTopic); 
}

function notesYear(firstSemester, secondSemester){
	let noteAnual = (firstSemester + secondSemester ) / 3 ;
	console.log(noteAnual); 
}


function debtCardCheck(month){
  console.log("We need to check payments for " + month);
}


/* <=============================> */ 
var someGlobalVar ; 

function  avoidUndefined() {
	var output = ""; 
	if ( typeof someGlobalVar != "undefined") { 
		output += " The global var" + someGlobalVar;
	}
	console.log(someGlobalVar);
}
 
// Some practices and notes about functions and scopes. 

/* Just to let as documentation a few ywars ago var it was used for local vars,
now the new definition followed indicated to do this use 'let' declaration kyword*/

//deprecated-var
function myLocalScope() {
  var using='use strict'; //IDK
  var myVar=5;
  console.log(myVar);
}
myLocalScope();

 
 /* 
 It's possible to have both local and global variables with the same name. 
 When we do this, the local variable takes precedence over the global variable. 
*/

// Example local above global. 
var someName = "Arthur"; 
var concedPower = "The blade it was succesfully removed"; 

function allowRemoveBlade(){
	let someName =" King Arthur"; 
	let endStory;
	if(someName.contains(Arthur)){
		letStory = concedPower;
	}else {
		letStory = "You're not allowed";
	}
	//we send back values out of the function with the keyword 'return'
	return endStory;
} 
 
 
function countHolidays(day,holidaysDay){
	let daysCounted = 0; 
	let retrievement ;
	if(day == holidaysDay){
		/*Logic to retrieve data form a ws into {$retrievement}  */
		daysCounted += retrievement;
		return daysCounted;
	}
	else { 

	}
}
  
// function outfit in winter
function myOutfit(outerWear) { 
  let outfit = [ "Apple","Jacket", "Scarf", "gloves", "hat"]
  outfit.push(outerWear);
  outshift.shift(); 

  return outfit;
}

 
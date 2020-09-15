//Playing with last letters 
var someQuote = "You miss 100 percent of the shots you never take. random";
var someQuoteCleaned= someQuote.[someQuote.length - 5]; 

var quoteRandom = "I'm out of quotes RRR";
var quoteCleaned = firstName[quoteRandom.length - 3];

 console.log(someQuoteCleaned)
 console.log(quoteCleaned);

 //Function to concat words 
 function someWords( subject, someAdjective, someVerb)
 {
 	var quote = subject + " it was " + someAdjective + " but not so " + someVerb;
 	return quote ;
 }

 /* Test the function by output */ 
 console.log(wordBlancks("Superman", "strong", "fast");
 console.log(wordBlancks("The car", "elegant", "quietly");

// Using arrays  
var someFirstArray  = ["randomWord", 22]; 
var someSecondArray = ["randomPerson", 35];

//Using sub-arrays 
var someMultiArrays = [["The first being", 2000], ["some noise", 101001]]; 
var someQuoteInArrays = [["The guy it was", 23],[10,"quick to learn" ]] ;

var quote = [someQuoteInArrays...];
var presentedQuote = quote [1][1] + quote [2][2] + "And it was just " + quote[1][2]; 
 
console.log(presentedQuote + quote[2][1]); 

 // Pushing new values to an array 
 var someQuote = ["The first phrase"]; 

 someQuote.push([" it doesn't make sense", 4]); 

 var someExplanation = someQuote[1] + someQuote[2][1]; 
 var lastExplanation = someExplanation + "But after" + someQuote[2][2] + "it does";
 
//Removing values from an array  at the end.
var quoteOldy = ["The first villain", "it was", 'he-man enemy'];
var renowedQuote = quoteOldy.pop(); 

var quoteVillain = quoteOldy + " The Joker";

console.log(quoteVillain);  


//Removing values from an array at the beggining 
var quoteNewest = [" Today" ,"we announce", " a natural disaster", "going on", "St.monica"];
var quoteToOldy = quoteNewest.shift()

quoteOldy.unshift("Yesterday");

console.log(quoteToOldy);
 


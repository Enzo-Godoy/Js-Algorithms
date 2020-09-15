//Values from an array backward 
var firstArr  = []; 
var secondArr = []; 

for(var i = 10; i > 0 ; i -= 2) {
  firstArr.push(i); 
} 

for(var j = 9; j > 0 ; j -= 2){
  secondArr.push(j);
}

console.log(secondArr);

//Sum values from an array iterated 
var firstArr  = [9, 10, 11, 12]; 
var valuesArr = 0;
for (var i = 0; i < firstArr.length; i++){
  valuesArr += firstArr[i];
}

console.log(valuesArr); 

//function to iterate and multiply by-dimensional arrays 
function multiplyArrValues(array){ 
var result = 1; 
  for( let i = 0; i < array.length; i++) { 
    for (let j = 0; j < array[i].length ; j++){
      result *= array[i][j]; 
    }
  }
  return result;
}

multiplyArrValues([[1,2],[3,4],[5,6,7]]);

 /* <=================================> */ 

 //Adding values to an array with do-while 
 var firstArr = []; 
 var index = 10; 

 do{ 
  firstArr.push(index); 
  index--; 
 }while( index > 1);
 
 console.log(firstArr.length); 

 /* <================================> */ 

 //function using random native function 
 function randomNumber(){ 
  let numberRand = Math.floor(Math.random()); 
  return numberRand; 
 }

 console.log(randomNumber());

 /* <================================> */ 

 //Function parserToInt 
 function parserToInt(stringNumber){
  let number = parseInt(stringNumber); 
  return number; 
 }

var success= "";
let boolParser = (parserToInt(4) === 4);

{
  if (boolParser){
    succes = "ok, it\'s working";
  }
  else { sucess = "fail"; }
}

console.log(success);

/* Checking values with third condition operator */ 
function checkPrice(productA, productB){ 
  let product = "Buy product";
return ( productA < productB) ? product + " A":  product + " A";

}


let productToBuy = checkPrice(23, 54);
console.log(productToBuy);

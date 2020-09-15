//An array with objects as elements 
var myMovies = [ 
  {
  "Director" : "Mr.Leizpick". 
  "title" : "The night in the day", 
  "release_year" : 1999, 
  "formats" : ["vinyl", "dvd", "streaming"], 
  "price" : 99.32 
}, {
  "Director" : "Mr.Cyllus". 
  "title" : "The life of the silents", 
  "release_year" : 1943, 
  "formats" : [ "dvd", "streaming"], 
  "price" : 33.23
} ] ; 

 
// An object with sub-objects as properties 
var myFruits = { 
"type" : {
  "name"    : "Apple",
  "details" : "fruit",
  "country" : "Noruega",
  "price"   :  2.33
},
  "property" : {
    "colour" : "red", 
    "vitamins" "A family"
  }
};


var fruitDetail = myFruits.property.colour["Green"];
console.log(fruitDetail); 
 

/* <======================================> */

var myCars = [
  {
    type : "Fiat", 
    list : [ 
    "Amodel-1",
    "Amodel-2",
    "Amodel-3",
    ]
  }, 
  {
    type : "Ford", 
    list : [ 
    "Bmodel-1",
    "Bmodel-2",
    "Bmodel-3",
    ]

  }
];
  
/* Value Bmodel-2 */ 
var secondCars = myCars[1].list[2]; 
console.log(secondCars); 


  
// A single array one dimension 
var theArray = [] ; 

var i = 0; 
while ( i < 5 ) {
   theArray.push(i); 
   i++;
}


//Adding value to an array with a foor loop 
var firstArray  = [] ; 
var secondArray = [] ; 

for ( var i = 1 ; i < 5; i++){
  firstArray.push(i); 
}

for ( var j = 1; j < 7 ; j++) {
  secondArray.push(j)
}

let sizeOfArrays = firstArray.length + secondArray.length; 
console.log(sizeOfArrays); 

// Same that before but incrementing by 2 each time, it means even numbers 
var firstEven  = []; 
var secondEven = []; 

for ( var i = 0; i < 10; i += 2){
  firstEven.push(i); 
}

for( var j = 0 ; j < 8; j += 2){
  secondEven.push(j);
}

console.log(secondEven);
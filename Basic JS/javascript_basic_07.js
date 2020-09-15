var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  
  {"artist": "Drylland",
    "title": "Heaven Man",
    "release_year": 1977,
    "formats": [
      "CD", 
      "LP"
    ]
  }
  
];


--2
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents =myStorage.car.inside["glove box"] ;

console.log(gloveBoxContents);


--3
// Setup
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];


var secondTree = myPlants[1].list[1]; 
console.log(secondTree);


--4
var count = 0;

function cc(card) {
  var bet = " Bets";
  var holds = "  Hold";
  switch(card){
   //Positive cases
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          count++;
          break;
 //Decrement  cards
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
          count--;
          break;
      }

      if (count > 0){
        return count + bet;
      } else {
        return count + hold;
      }

}

// Add/remove calls to test.
cc(2); cc(3); cc(7); cc('K'); cc('A');

--5
// Setup
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha": "Adams",      
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  };
  result = lookup[val];
  return console.log(result);
}

//Code to test
phoneticLookup("delta");

--6
 Example of a complex data structure.
 var ourMusic = [
  {
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": ["CD","Cassette","LP"],
  "gold": true
  }

 ];

 --7
 var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [ 
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist" : "La renga",
    "title" : "Detonador de sueños",
    "release_year": 2006,
    "formats" : ["DVD","CD", "LP"]
  }  
];


--8
// Setup
var myArray = [];

// Code while
var i = 0;
while ( i < 5) { 
      myArray.push(i);
      i++;
}



--9
// Example
var ourArray = [];
var myArray = [];

//for ourArray
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// for myArray
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

console.log(myArray);



--9
// Example
var ourArray = [];
var myArray = [];

//Code of example
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

//Changing initialization so we can count by odd numbers
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}


console.log(myArray);




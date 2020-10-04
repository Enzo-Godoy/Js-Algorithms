--Sample of function celsiusToFarenheit 
function convertToF(celsius) {
	let fahrenheit; 
	fahrenheit = celsius * 9/5 + 32;
	return fahrenheit
}

#Execution 
convertToF(24); 

--Sample of function reverString 
function reverseString(str) {
	let myStr = str.split(''); 
	let myStr1 = myStr.reverse(''); 
	let myStr2 = myStr1.join(''); 

	return myStr2;
}

#Execution 
reverseString("Hello");

-- Sample of function factorialize (Recursion) 
function factorialize(num) {
	if(num == 0){ 
	return 1;
	}
	else {
		return factorialize(num-1) * num;
	}
}

#Execution
factorialize(6); 

-- Sample of function findLongestWordLength(str) {
	let arrayStr = str.split(' '); 
	let largeStr = 0; 
		for(let i = 0; arrayStr.length > i; i++) {
			if(arrayStr[i].length > largeStr) {
				largeStr = arrayStr[i].length;
			}
		}
		return largeStr;
}

#Execution 
findLongestWordLength("Some phrase to be use unintentionally");

-- Sample of function largest of Four 
function largestOfFour(arr){
	let myArray = []; 
	for(let i = 0; arr.length > i ; i++){
		let myComparisonVer = arr[i][0]; 
		for(let n = 1; arr[i].length > n; n++){
			if(arr[i][n] > myComparisonVer) { 
				myComparisonVer = arr[i][n]; 
			}
		}
		myArray[i] = comparisonVer; 
	}
	return myArray;
}

#Execution 
largestOfFour([4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

-- Sample of confirmEnding(str, target) {
	let comparison = str-slice(str.length - target.length); 
	if(comparison == target ) { 
		return true;
	}
	else { 
		return false;
	}
}

#Execution - Kind of endWith function
confirmEnding("Bastian", "n");



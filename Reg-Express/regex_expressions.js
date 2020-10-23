-- Sample test function 01 
let myString = "Hello, World!"; 
let myRegex = /Hello/; 
let result = myRegex.test(myString); 
console.log(result); 

-- Sample test function 02 
let waldoIsHidinh = "Somewhere Waldo is hidinh in this text."; 
let waldoRegex = waldoRegex.test(waldoIsHiding); 
let result = waldoRegex.test(waldoIsHiding); 
console.log(result); 

-- Sample test multiple patterns 
let petString = "James has a pet cat."; 
let petRegex = /change|cat|bird|fish/; 
let result = petRegex.test(petString); 
console.log(result); 

-- Sample with flags 
let myString = "Some regex"; 
let anyRegex = /some/i; 
let result = anyRegex.test(myString); 

-- Sample test match method 
let extractStr = "Extract the word 'coding' from this string."; 
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); 
console.log("Great hour of " + result);

-- Sample test match multiples 
let someRandomStr = "Some, random string to search"; 
let rdmRegex = /random/i;
let result = someRandomStr.match(rdmRegex);
console.log(result);

-- Sample test dot Wildcard 
let exampleStr = "Let's have fun with regular expressions!"; 
let unRegex = /.un/; 
let result = unRegex.test(exampleStr); 
console.log(result); 

-- Sample test with multiple wildcard 
let quoteSample = "Beware of errors in writings, as night procede to show their dark"; 
let vowelRegex = /[aeiou]/ig; 
let result = quoteSample.match(vowelRegex); 

-- Sample test match method not letters, numbers. 
let quoteSample = "3 Blind mice."; 
let myRegex = /[^aeiou0-9]/ig; 
let result = quoteSample.match(myRegex); 

-- Sample test match char multiple times. 
let difficultSpelling = "Mississippi"; 
let myRegex = /s+s/g; 
let result = difficultSpelling.match(myRegex); 

-- Sample test match method >> Char multiple times 
let chewieQuote = "Aaaaaaaaaaaaaaaarrgh!"; 
let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex); 

-- Sample test exer criminals 
let crowd = 'P3232DP0000CCC00DAPWP22';
let reCriminals = /C+/ig; 
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals); 

-- Sample test begg string pattern 
let rickyAndCal = "Cal and Ricky both like racing."; 
let calRegex = /^Cal/; 
let result = carRegex.test(rickyAndCal); 

-- Sample test last string pattern 
let caboose = The last car on a train is the caboose"; 
let lastRegex = /caboose$/; 
let result = lastRegex.test(caboose); 

-- Sample test letter strin number 
let quoteSample = "The five boxing wizards jump quickly."; 
let alphabetRegexV2 = /\w/g; 
let result = quoteSample.match(alphabetRegexV2).length; 

-- Sample test oposite letter string, number. 
let quoteSample = "The five boxing wizards jump quickly."; 
let nonAlphabetRegex = /\W/g; 
let result = quoteSample.match(nonAlphabetRegex).length; 

-- Sample test number pattern char 
let numString = "Your sandiwch will be  $5.00"; 
let numRegex = /\d/g; 
let result = numString.match(numRegex).length; 

-- Sample test oposite number find 
let numString = "Your sandwich will be $5.00#; 
let noNumRegex = /\D/g; 
let result = numString.match(noNumRegex).length; 

-- Sample test pass_usernames 
let username = "JackOfAllTrades"; 
let userCheck = /[a-z]{2,}\d*$/i; 
let result = userCheck.test(username); 

-- Sample test match whitespace 
let sample = "Whitespace is important in separating words"; 
let countWhiteSpace = /\s/g; 
let result = sample.match(countWhiteSpace); 

-- Sample test opposite match whitespaces 
let sample ="Whitespace is important in separating words."; 
let countNonWhiteSpace = /\S/g; 
let result = sample.match(countNonWhiteSpace); 

-- Sample test nums match chart 
let ohStr = "Ohh no"; 
let ohRegex = /Oh{3,6}\sno/; 
let result = ohRegex.test(ohStr); 

-- Sample test nums match chart without limit 
let haStr = "Hazzzah"; 
let haRegex = /Haz{4,}ah/; 
let result = haRegex.test(haStr); 

-- Sample test nums match chart specified. 
let timStr = "Timmmmber"; 
let timRegex = /Timñ4}ber/i; 
let result = timRegex.test(timStr); 

-- Sample test nums match chart might 
let favWord = "favorite"; 
let favRegex = /favour?rite/; 
let result = favRegex.test(favWord); 

-- Sample lookahead positive, negative. 
let sampleWord = "astronaut"; 
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; 
let result = rwRegex.test(sampleWord); 

-- Sample test reuse patterns  
let repeatNum = "42 42 42"; 
let reRegex = /^(d+)\s\1\s\1$/; 
let result = reRegex.test(repeatNum); 

-- Sample test capture replace method 
let huhText = "This sandwich is good."; 
let fixRegex = /good/; 
let replaceText = "okey-dokey"; 
let result = huhText.replace(fixRegex, replaceText); 

-- Sample test remove whitesáces 
let hello = "hello, World!"; 
let wsRegex = /^\s+|\s+$/g; 
let result = hello.replace(wsRegex, ''); 











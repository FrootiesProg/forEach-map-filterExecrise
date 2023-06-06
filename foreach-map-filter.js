/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
  // Create an empty array to store the doubled values
  var doubledArray = [];

  // Iterate over each value in the original array
  for (var i = 0; i < arr.length; i++) {
    // Double the current value and push it into the doubled array
    doubledArray.push(arr[i] * 2);
  }

  // Return the new array with doubled values
  return doubledArray;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
  // Create an empty array to store the even values
  var evenArray = [];

  // Iterate over each value in the original array
  for (var i = 0; i < arr.length; i++) {
    // Check if the current value is even
    if (arr[i] % 2 === 0) {
      // If it's even, push it into the even array
      evenArray.push(arr[i]);
    }
  }

  // Return the new array with even values
  return evenArray;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
  // Create an empty array to store the first and last characters
  var firstAndLastArray = [];

  // Iterate over each string in the original array
  for (var i = 0; i < arr.length; i++) {
    var currentString = arr[i];

    // Get the first character of the string
    var firstCharacter = currentString.charAt(0);

    // Get the last character of the string
    var lastCharacter = currentString.charAt(currentString.length - 1);

    // Create a new string with the first and last characters
    var firstAndLastString = firstCharacter + lastCharacter;

    // Push the new string into the firstAndLastArray
    firstAndLastArray.push(firstAndLastString);
  }

  // Return the new array with first and last characters
  return firstAndLastArray;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
  // Iterate over each object in the array
  for (var i = 0; i < arr.length; i++) {
    // Add the new key-value pair to each object
    arr[i][key] = value;
  }

  // Return the modified array
  return arr;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
  // Convert the string to lowercase for case insensitivity
  var lowercaseStr = str.toLowerCase();

  // Define an array of vowels
  var vowels = ["a", "e", "i", "o", "u"];

  // Create an empty object to store vowel counts
  var vowelCountObj = {};

  // Iterate over each character in the string
  for (var i = 0; i < lowercaseStr.length; i++) {
    var currentChar = lowercaseStr[i];

    // Check if the current character is a vowel
    if (vowels.includes(currentChar)) {
      // If it's a vowel, check if it exists as a key in the object
      if (vowelCountObj[currentChar]) {
        // If the key exists, increment the count
        vowelCountObj[currentChar]++;
      } else {
        // If the key doesn't exist, initialize it with count 1
        vowelCountObj[currentChar] = 1;
      }
    }
  }

  // Return the object with vowel counts
  return vowelCountObj;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
  // Use the map method to create a new array with doubled values
  var doubledArray = arr.map(function (value) {
    return value * 2;
  });

  // Return the new array
  return doubledArray;
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {
  // Use the map method to create a new array with values multiplied by their index
  var multipliedArray = arr.map(function (value, index) {
    return value * index;
  });

  // Return the new array
  return multipliedArray;
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {
  // Use the map method to extract the value of the specified key from each object
  var extractedValues = arr.map(function (obj) {
    return obj[key];
  });

  // Return the new array with extracted values
  return extractedValues;
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
  // Use the map method to extract the concatenated full names from each object
  var fullNames = arr.map(function (obj) {
    return obj.first + " " + obj.last;
  });

  // Return the new array with extracted full names
  return fullNames;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
  // Use the filter method to create a new array with objects that contain the specified key
  var filteredArray = arr.filter(function (obj) {
    return obj.hasOwnProperty(key);
  });

  // Return the new array
  return filteredArray;
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/
function find(arr, value) {
  // Use the find method to search for the first element with the specified value
  var foundElement = arr.find(function (element) {
    return element === value;
  });

  // Return the found element or undefined if not found
  return foundElement;
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/
function findInObj(arr, key, value) {
  // Use the find method to search for the first object with the specified key and value
  var foundObject = arr.find(function (obj) {
    return obj[key] === value;
  });

  // Return the value of the specified key in the found object or undefined if not found
  return foundObject ? foundObject[key] : undefined;
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Define the vowels to be removed
  var vowels = ["a", "e", "i", "o", "u"];

  // Use the replace method with a regular expression to remove the vowels
  var newStr = str.replace(new RegExp(vowels.join("|"), "g"), "");

  // Return the new string without vowels
  return newStr;
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
  // Use the filter method to keep only the odd numbers
  var oddNumbers = arr.filter(function (num) {
    return num % 2 !== 0;
  });

  // Use the map method to double each odd number
  var doubledNumbers = oddNumbers.map(function (num) {
    return num * 2;
  });

  // Return the new array with doubled odd numbers
  return doubledNumbers;
}

// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y
}console.log(product(10,5))

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0 )
  return true;
  else {
    return false; 
  }
}
// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

  


// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > b ) {
    return a 
  } else if (b > a && b >c ){
    return b
  }else if (c > a && c > b)
  return c
    
  }
// Calculate the sum of an array of numbers
function sumArray(numbers) {
  const reductor = (accumulator, currentValue) => accumulator + currentValue;
  if (numbers == "" ) {
    return 0 ;
  }else{
    return numbers.reduce(reductor);

  }
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max(...numbers); 
}
// Return the longest string in an array
/*function longestString(strings) {
    strings.sort(function(a,b ) => (a.length-b.length )
}return strings[0];
  
*/

// Return whether a word is in an array
/*function doesWordExist(wordsArr, word) {
 for (var i= 0 ; i<wordArr.length ; i++){

 if (word.lenght=word ){
  return true 
 }else {
   false 
 }*/
 


// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
}
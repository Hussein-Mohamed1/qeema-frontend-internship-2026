/* =========================================================
   JAVASCRIPT PRACTICE SHEET
   Instructions: Read each problem in the comments and write
   your solution directly below it, inside the function.
   Do NOT delete the comments — they are your instructions.
   ========================================================= */

/* =========================================================
   SECTION 1: VARIABLES & BASIC OPERATORS
   ========================================================= */

// 1.1 - Declare two variables, `a` and `b`, assign them numbers,
// and return their sum.
function addTwoNumbers(a, b) {
  return a + b;
}

// 1.2 - Given a number, return true if it's even, false if odd.
function isEven(num) {
  return num % 2 === 0;
}

/* =========================================================
   SECTION 2: STRINGS
   ========================================================= */

// 2.1 - Concatenate firstName and lastName into a full name,
// separated by a space. Example: "John" + "Doe" -> "John Doe"
function concatNames(firstName, lastName) {
  return firstName + " " + lastName;
}

// 2.2 - Reverse a given string without using .reverse() directly
// on a string (hint: convert to array first, or use a loop).
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
// console.log(reverseString("hello"));

// 2.3 - Count how many times a specific character appears in a string.
// Example: countChar("banana", "a") -> 3
function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

// 2.4 - Check if a string is a palindrome (reads the same forwards
// and backwards). Example: "racecar" -> true
function isPalindrome(str) {
  return str === reverseString(str);
}
// console.log(isPalindrome("racecar"));

// 2.5 - Capitalize the first letter of each word in a sentence.
// Example: "hello world" -> "Hello World"
function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

/* =========================================================
   SECTION 3: ARRAYS - LOOPS, MAP, FILTER, REDUCE
   ========================================================= */

// 3.1 - Given an array of numbers, return the sum of all elements
// using a for loop.
function sumArrayForLoop(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// 3.2 - Given an array of numbers, return the sum of all elements
// using the .reduce() method.
function sumArrayReduce(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// 3.3 - Given an array of numbers, return a NEW array where each
// number is doubled. Use .map().
// Example: [1, 2, 3] -> [2, 4, 6]
function doubleNumbers(numbers) {
  return numbers.map((num) => num * 2);
}

// 3.4 - Given an array of numbers, return a NEW array containing
// only the even numbers. Use .filter().
// Example: [1, 2, 3, 4, 5, 6] -> [2, 4, 6]
function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}

// 3.5 - Given an array of strings, return a NEW array containing
// only strings longer than 3 characters. Use .filter().
function filterLongWords(words) {
  return words.filter((word) => word.length > 3);
}

// 3.6 - Combine .filter() and .map(): given an array of numbers,
// return a new array with only the even numbers, each squared.
// Example: [1, 2, 3, 4] -> [4, 16]
function evenNumbersSquared(numbers) {
  return numbers.filter((num) => num % 2 === 0).map((num) => num * num);
}

// 3.7 - Find the maximum number in an array WITHOUT using Math.max().
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// 3.8 - Given an array of objects representing people ({ name, age }),
// return an array of just their names using .map().
// Example: [{name:"Ana", age:20}] -> ["Ana"]
function getNames(people) {
  return people.map((person) => person.name);
}

// 3.9 - Given an array of numbers, use .find() to return the first
// number greater than a given threshold.
function findFirstGreaterThan(numbers, threshold) {
  return numbers.find((num) => num > threshold);
}

// 3.10 - Remove duplicate values from an array and return a new array.
// Example: [1, 2, 2, 3, 3, 3] -> [1, 2, 3]
function removeDuplicates(numbers) {
  return [...new Set(numbers)];
}

/* =========================================================
   SECTION 4: OBJECTS
   ========================================================= */

// 4.1 - Given an object, return an array of its keys.
function getObjectKeys(obj) {
  return Object.keys(obj);
}

// 4.2 - Given an object, return an array of its values.
function getObjectValues(obj) {
  return Object.values(obj);
}

// 4.3 - Given an array of objects (products) with a "price" property,
// return the total price using .reduce().
// Example: [{price: 10}, {price: 20}] -> 30
function sumProductPrices(products) {
  return products.reduce((sum, product) => sum + product.price, 0);
}

/* =========================================================
   SECTION 5: FUNCTIONS & LOGIC
   ========================================================= */

// 5.1 - Write a function that returns the factorial of a number.
// Example: factorial(5) -> 120
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 5.2 - Write a function that checks if a number is prime.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

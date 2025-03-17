console.log("Assignment One:-");
console.log("=".repeat(20));
//--------------- 1 -------------------------

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false,num)); // ["Ahmed", "Elham", "Osama"];

myFriends.pop();
// Method 2
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//--------------- 2 -------------------------
console.log("=".repeat(20));
console.log("Assignment Two:-");
console.log("=".repeat(20));

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]

//--------------- 3 -------------------------
console.log("=".repeat(20));
console.log("Assignment Three:-");
console.log("=".repeat(20));

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = finalArr.concat(arrOne,arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

//--------------- 4 -------------------------
console.log("=".repeat(20));
console.log("Assignment Four:-");
console.log("=".repeat(20));

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.slice(true + true)[0][0].split(" ").join().substring(true + true).toUpperCase()); // ZERO

//console.log(words[0] = "Zero".toUpperCase()); // ZERO

//--------------- 5 -------------------------
console.log("=".repeat(20));
console.log("Assignment Five:-");
console.log("=".repeat(20));

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found ");
}

if (haystack.indexOf(needle) === 1) {
    console.log("Found");
}

if (haystack.lastIndexOf(needle) === 1) {
    console.log("Found");
} 
    
//--------------- 6 -------------------------
console.log("=".repeat(20));
console.log("Assignment Six:-");
console.log("=".repeat(20));

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

arr1.shift();
arr2.shift();

allArrs = allArrs.concat(arr1, arr2).sort();
allArrs.shift();

console.log(allArrs.slice(true).join("").toLowerCase()); // fxy

// allArrs.push(arr2[arr2.length - (true + true)]); // "F"
// allArrs.push(arr1[arr1.length - true]);          // "X"
// allArrs.push(arr2[arr2.length - true]);          // "Y"

// console.log(allArrs.join("").toLowerCase()); // fxy

//--------------- Array Challenge -------------------------
console.log("=".repeat(20));
console.log("Array Challenge");
console.log("=".repeat(20));

/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here
my = my.slice(zero, ++counter).reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]

console.log(); // "Elzero"

console.log(); // "rO"


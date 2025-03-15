console.log("Assignment One:-");
console.log("=".repeat(20));
//--------------- 1 -------------------------

let userName = "Elzero";
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.split("")[0].toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.match("E")[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase().repeat(3)); // eee

//--------------- 2 -------------------------
console.log("=".repeat(20));
console.log("Assignment Two:-");
console.log("=".repeat(20));

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

//---------------  String Challenge -------------------------
console.log("=".repeat(20));
console.log(" String Challenge");
console.log("=".repeat(20));
/*
  String Challenge
  All Solutions Must Be In One Chain
  You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3,6)); // Zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(" ",1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0,7)}${a.substr(11)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(); // eLZERO WEB SCHOOl
console.log("Assignment One:-");
console.log("=".repeat(20));
//--------------- 1 -------------------------

console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(! -50 == !+"-40"); // true
console.log(! 10 <= -"-40"); // true
console.log(!typeof "10" == !typeof 10); // true
console.log(! 20 == false); // true

//--------------- 2 -------------------------
console.log("=".repeat(20));
console.log("Assignment Two:-");
console.log("=".repeat(20));

let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num1 != num2); // true
console.log(typeof num1 === typeof num2); // true
console.log(num1 <= num2); // true
console.log(num2 >= num1); // true

//--------------- 3 -------------------------
console.log("=".repeat(20));
console.log("Assignment Three:-");
console.log("=".repeat(20));

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a < b); // true
console.log(a < b && a > c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

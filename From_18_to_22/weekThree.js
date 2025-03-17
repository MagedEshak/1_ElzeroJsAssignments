console.log("Assignment One:-");
console.log("=".repeat(20));
//--------------- 1 -------------------------



//--------------- 2 -------------------------
console.log("=".repeat(20));
console.log("Assignment Two:-");
console.log("=".repeat(20));

let num = 3;

// Solution One
console.log(num + true + true + true); // 6

// Solution Two
console.log(num + Number(true) + Number(true) + Number(true)); // 6

// Soultion Three
console.log(num * (true + true)); // 6

// Soultion Four
console.log(num + !!true + !!true + !!true); // 6

// Solution Five
console.log(num + -(-true) + -(-true) + -(-true)); // 6

// Solution Six
console.log(num << true); // 6

// Solution Seven
console.log(num + ["a", "b", "c"].length); // 6

//--------------- 3 -------------------------
console.log("Assignment Three:-");
console.log("=".repeat(20));

num = "10";

// Solution One
console.log(+num + +num); // 20

// Solution Two
console.log(parseInt(num) + parseInt(num)); // 20

// Solution Three
console.log(Number(num) + Number(num)); // 20

// Solution Four
console.log(-(-num) + -(-num)); // 20.

//--------------- 4 -------------------------
console.log("=".repeat(20));
console.log("Assignment Four:-");
console.log("=".repeat(20));

let points = 10;

// Write Your Code Here

console.log(points + true + !!true + Number(true)); // 13

// Write Your Code Here

console.log(points - true - Number(true)); // 8;

//---------------  Operators Challenge -------------------------
console.log("=".repeat(20));
console.log(" Number Challenge");
console.log("=".repeat(20));

/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log("-".repeat(20));
// console.log(++a); // 11
// console.log("-".repeat(20));
// console.log(+b++); // covert to number then increment but still 20 and after print become 21
// console.log("-".repeat(20));
// console.log(+c++); //number then increment but still 20 and after print become 21
// console.log("-".repeat(20));
// console.log(+a++); //number then increment but still 11 and after print become 12
console.log("-".repeat(20));
console.log(++a + +b++ + +c++ - +a++); // 100
console.log(++a + +b++ + +c++ - +a++);

console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] [+]
  [++a]
  - Value:
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e); // 2000
console.log(++g * ++e + -d + ++f); // 173
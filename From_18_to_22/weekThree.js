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
console.log(-(-num) + -(-num)); // 20
//--------------- 4 -------------------------
console.log("=".repeat(20));
console.log("Assignment Four:-");
console.log("=".repeat(20));

let points = 10;

// Write Your Code Here

console.log(points + true + !!true + Number(true)); // 13

// Write Your Code Here

console.log(points - true - Number(true)); // 8;

//---------------  Number Challenge -------------------------
console.log("=".repeat(20));
console.log(" Number Challenge");
console.log("=".repeat(20));

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer

function minValue() {
    Math.min(a, b, c, d);

    return "Integer";
}
console.log(minValue());

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** Math.trunc(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log(d | 0);

// Use Variables b + d To Get This Valus
let newNumber = (b / Math.ceil(d)).toFixed(2);
console.log(newNumber); // 66.67 => String
newNumber = +Math.ceil(newNumber);
console.log(newNumber); // 67 => Number
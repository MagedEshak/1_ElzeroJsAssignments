console.log("Assignment One:-");
console.log("=".repeat(20));
//--------------- 1 -------------------------

// Test Case 1
let num1 = 9; // "009"
if (num1 < 10) {
    console.log(`00${num1}`)
}
// Test Case 2
let num2 = 20; // "020"
if (10 < num2 < 100) {
    console.log(`0${num2}`)
}
// Test Case 3
let num3 = 110; // "110"
if (num3 >= 100) {
    console.log(`${num3}`)
}

//--------------- 2 -------------------------
console.log("=".repeat(20));
console.log("Assignment Two:-");
console.log("=".repeat(20));

let num4 = 9;
let str = "9";
let str2 = "20";
if (num4 == str) {
    console.log(`${num4} Is The Same Value As "${str}"`);
}
if (num4 == str && typeof num4 != typeof str1) {
    console.log(`${num4} Is The Same Value As "${str}" But Not The Same Type`);
}
if (num4 != str2 || num4 !== str2) {
    console.log(`${num4} Is Not The Same Value Or The Same Type As "${str2}"`);

}
if (typeof str === typeof str2 && str != str2) {
    console.log(`"${str}" Is The Same Type As "${str2}" But Not The Same Value}`);

}
// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"

//--------------- 3 -------------------------
console.log("=".repeat(20));
console.log("Assignment Three:-");
console.log("=".repeat(20));

let num5 = 10;
let num6 = 30;
let num7 = "30";

if (num7 > num5 && num7 !== num6) {
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
  
if (num7 > num5 && num7 == num6 && num7 !== num6) 
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");


if (num7 !== num5 && num7 !== num6) 
      console.log(`${num7} Value And Type Is Not The Same As ${num5} And Type Is Not The Same As ${num6}`);

}

// Needed Output
"30 Is Larger Than 10 And Type string Not The Same Type As number"
"30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
"{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"

//--------------- 4 -------------------------
console.log("=".repeat(20));
console.log("Assignment Four:-");
console.log("=".repeat(20));

// Edit What You Want Here

 num1 = 10 + 1;
 num2 = 10;
 num3 = +"10" + 1; //11
 num4 = 20 + 2 + 11; //45

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num1 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7
//45 - (11+11) + 10
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

//--------------- If Condition Challenge -------------------------
console.log("=".repeat(20));
console.log(" If Condition Challenge");
console.log("=".repeat(20));
/*
  If Condition Challenge
*/

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("> 40");
} else {
  console.log("Unknown");
}

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
    ? console.log("10 To 40")
    : a > 40
      ? console.log("> 40")
      : console.log("Unknown");

let st = "Elzero Web School";



if (!typeof st !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.substring(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
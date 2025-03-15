console.log("Assignment One:-");
console.log("=".repeat(20));
//--------------- 1 -------------------------

let numberOne = 10;
let NumberTwo = 20;
''
let firstNormalConcat = numberOne +""+ NumberTwo;
let secondNormalConcat = `${numberOne}${NumberTwo}`;

console.log(firstNormalConcat); // Normal Concatenate => 1020
console.log(typeof firstNormalConcat); // Normal Concatenate => String
console.log(`${secondNormalConcat}`); // Template Literals Way => 1020
console.log(typeof secondNormalConcat); // Template Literals Way => String

console.log(NumberTwo + "\n" + numberOne);
console.log(`${NumberTwo}
${numberOne}`);


//--------------- 2 -------------------------
console.log("=".repeat(20));
console.log("Assignment Two:-");
console.log("=".repeat(20));

//Added in html element with id = elzero and innerHTML = object
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object


//--------------- 3 -------------------------
console.log("Assignment Three:-");
console.log("=".repeat(20));
console.log(`I\'m In
\\\\
Love \\\\ """ '''
++ With ++
\\"""\\"""
""JavaScript""\`\``);

//--------------- 4 -------------------------
console.log("=".repeat(20));
console.log("Assignment Four:-");
console.log("=".repeat(20));

let a = 21;
let b = 20;
let c = b + "21" +"_";
let d = +"21" - "1";

console.log(`_${a}_${c.repeat(2)}${d}_`);
// _21_2021_2021_2021_20_

//--------------- Challenge -------------------------

console.log("=".repeat(40));
console.log("== Variables And Concatenation Challenge ==");
console.log("=".repeat(40));

// ===========================================
// == Variables And Concatenation Challenge ==
// ===========================================

// [1] Create 3 Variables [Title, Desctiption, Date]
// -- All In One Statement
// -- Variable Name Must Be Two Words
// -- Title Content Is "Elzero"
// -- Description Content Is "Elzero Web School"
// -- Date Content Is "25/10"
// [2] Create Variable Contains Div And This Div Contains
// -- H3 For Title
// -- P For Paragraph
// -- Span For Time
// [3] Add This Card To Page 4 Times
// [4] Use Template Literals For Concatenate

// Extra
// - Use ES6 Repeat


let divTitle, divDesctiption, divDate;

divTitle = "Elzero";
divDesctiption = "Elzero Web School";
divDate = "25/10"; 

let divElement = `<div><h3>${divTitle}</h3>
<p>${divDesctiption}</p> <span>${divDate}</span>`;
document.write(divElement.repeat(4));
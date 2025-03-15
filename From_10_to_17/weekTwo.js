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

//--------------- 5 -------------------------
console.log("=".repeat(20));
console.log("Assignment Five:-");
console.log("=".repeat(20));

console.log("Assignment One:-");
console.log("=".repeat(20));
//--------------- 1 -------------------------

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100 * 100 *10); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(5000000 / 50); // 100000
console.log(100000.000); // 100000
console.log((100000 / 2) << true); // 100000


//--------------- 2 -------------------------
console.log("=".repeat(20));
console.log("Assignment Two:-");
console.log("=".repeat(20));

console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991


//--------------- 3 -------------------------
console.log("=".repeat(20));
console.log("Assignment Three:-");
console.log("=".repeat(20));

console.log(Math.ceil((Number.MAX_SAFE_INTEGER / 6000_000_000_000_00)));

//--------------- 4 -------------------------
console.log("=".repeat(20));
console.log("Assignment Four:-");
console.log("=".repeat(20));

let myVar = "100.56789 Views";
myVar = parseFloat(myVar);

console.log(Math.floor(myVar)); // 100
console.log(myVar.toFixed(2)); // 100.57

//--------------- 5 -------------------------
console.log("=".repeat(20));
console.log("Assignment Five:-");
console.log("=".repeat(20));

let num = 10;
let inte = Number.isInteger(num) + Number.isInteger(num);
console.log(inte); // 2

//--------------- 6 -------------------------
console.log("=".repeat(20));
console.log("Assignment Six:-");
console.log("=".repeat(20));

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(+flt.toFixed(0)); // 10

//--------------- 7 -------------------------
console.log("=".repeat(20));
console.log("Assignment Seven:-");
console.log("=".repeat(20));

console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

// 💡 كيف يعمل هذا الكود؟
// Math.random() → يعطي رقم عشوائي بين 0 و أقل من 1.
// Math.random() * 5 → يعطي رقم عشوائي بين 0 و أقل من 5 (مثل 3.8، 0.2، 4.7 … إلخ).
// Math.floor() → يقرب الرقم للأسفل لأقرب عدد صحيح (0, 1, 2, 3, 4).

    
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
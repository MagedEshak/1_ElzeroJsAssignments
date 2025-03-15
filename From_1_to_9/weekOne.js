console.log("Assignment One:-");
console.log("=".repeat(20));
//--------------- 1 -------------------------
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <title>Learn JavaScript</title>
//     <script>
//       // Code One
//         can't work because js code loaded before html page loaded and style element = null
//       document.getElementById("el").style.color = "red";
//     </script>
//     <script>
//       // Code Two will work
//       window.onload = function () {
//         document.getElementById("el").style.color = "red";
//       };
//     </script>
//   </head>
//   <body>
//     <h1 id="el">Page Title</h1>

//     <script>
//       // Code Three will work
//       document.getElementById("el").style.color = "red";
//     </script>

//   </body>
// </html>

//--------------- 2 -------------------------
console.log("=".repeat(20));
console.log("Assignment Two:-");
console.log("=".repeat(20));

document.getElementById("el").classList.add("styleH1");

// document.getElementById("el").style.color = "blue";

// document.getElementById("el").style.fontSize = "80px";

// document.getElementById("el").style.fontWeight = "bold";

// document.getElementById("el").style.textAlign = "center";

// document.getElementById("el").style.fontFamily = "Arial";

//--------------- 3 -------------------------
console.log("Assignment Three:-");
console.log("=".repeat(20));

console.log("%cElzero %cWeb %cSchool", "color:red;font-size:40px", "color:green;font-size:40px;font-weight:bold", "background-color:blue;font-size:40px");

//--------------- 4 -------------------------
console.log("=".repeat(20));
console.log("Assignment Four:-");
console.log("=".repeat(20));

console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");

console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

//--------------- 5 -------------------------
console.log("=".repeat(20));
console.log("Assignment Five:-");
console.log("=".repeat(20));
console.table(["Elzreo","ahmed","Sameh"]);
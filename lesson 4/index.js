//home work  If, else

//BIRINCHI MISOL

// if ("0") {
// console.log('Hello');}
//bu holatimizda consolda javob Hello chiqadi chunki consolda Hello dan boshqa hech qanday qiymat yoq !

// IKKINCHU MISOL

// let abs = 0;
// if (abs > 0) {
//     console.log("Noldan katta");
// } else if ( abs < 0) {
//     console.log("Noldan kichik");
// } else if (abs == 0){
//     console.log("Nolga teng");
// }else{
//     console.log("Raqam kiritilmadi");
// }

//  IKKINCHI MISOLNI  Tornary korinishi

// let abs = 2;
// abs > 0
//   ? console.log("Noldan katta")
//   : abs < 0
//   ? console.log("Noldan kichik")
//   : abs == 0
//   ? console.log("Nolga teng")
//   : console.log("Raqam kiritilmadi");

//Uchinchi misol

// Tornary korinishi

// let result;
// let a = 3;
// let b = 2;
// a + b < 4 ? console.log("Below") : console.log("Over");

//Turnory korinishi Tortinchi misol

// let a = "EcmaScript";
// if (a == "EcmaScript") {
//   console.log("Right");
// } else {
//   console.log("you don't know? EcmaScript");
// }

//
let message;
let login = "Derector";
login == "Employee"
  ? (message = "Hello")
  : login == "Derector"
  ? (message = "Gretings")
  : login == ""
  ? (message = "No login")
  : (message = "");
  console.log(message);

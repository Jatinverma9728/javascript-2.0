// ---------------------operators----------------------------

// arithmetic operators---------------------------

//  + , - , * , / these are the basic arithmetic operators in java script

/*
let A = 5;
let B = 6;

console.log("the sum is :",  A + B)
console.log("the sub is :",  A - B)
console.log("the mul is :",  A * B)
console.log("the div is :",  A / B)
console.log("the moduls is :",  A % B)
console.log("the exponential is :",  A ** B)
console.log("the per decriment is :",  --B) // phele hi decresed value dega
console.log("the post decriment is :",  B--) // phele same valu ko dega baad me decrease kre ga
console.log(B) // this thime the value of B is 4
// we can decrease and increase with same method


*/


// assignment operators ---------------------------

// = , += , -= , *= , /= , **= , %=


// let a = 5;
// let b = 6;
// let c = 8;

// a += 4; // it increase the value of a by 4
// b -= 3; // it decrease the value of b by 3
// a *= 2; // it multiply the value of a to 2
// console.log(a) // output will be 18  because firstly a = 5 then im increasing the value of a to 9 and then i multiply with 2 .

// b /= 2 ; // 3
// c %= 5; //3 modulus is noting but it gives the remainder c%= 5 ka matlab hua ki c ki value ko 5 se divide krna or output me hume iss ka remainder mile ga jo hoga 3.
// a **= 3 ; 125 iss ka matlab h a ki power kitne time hoggi in my case i declare the value of exopnent is 3 then the answer will be 125.


// comparision operators-------------------------
//  == , != basic camparision operators
//  === , !== strict comaprision operators
// == this is use to chechking the two numbers are equal or not
//  > , >= , < , <=

/*
let a = 5;
let b = 6;
let c = "5"; // agr kisi nhi number ko string bna denge to hamesha equla hoga jiske sath hum compare krnge

console.log("a == b", a == b); // ye false dega kyuki a ki value b ke equal nhi hai
console.log("a == b", a != b); // ye true dega kyuki a ki value b ke equal hai
console.log("a == c", a == c); // true dega
console.log("a === c", a === c); // ye false dega
// agr iss se bachna h to strict rule apply krna pdega


console.log("a > b" , a > b) //  false dega kyuki a ki value choti h b se
console.log("a < b" , a < b) // true dega
console.log("a <= b" , a <= b); // true dega
console.log("a >= c" , a >= c); //  true dega

*/


//-------------------logical operators------------------

// &&(AND) , ||(OR) , !(NOT)

// && ye operator 2 condition ko commapare kre ga or agr dono shi honge to true dega or agr dono me se koi ek bhi false aati h to output false hoga

// || ye operator 2 condition ko compare kre ga or dono me se agr koi 1 bhi shi hogi to true dega matlab dono me se koi ek bhi ture ho to kaam chal jaye ga

//  ! ye operator invert kr dega true ko false or false ko true kr dega

/*
let a = 10;
let b = 5;
let c = 10;

// let cond1 = a > b; // true
// let cond2 = a ===10; // true
//  hume extra variable banae ki jarurat nhi hoti hum console me bhi likh sakte hai

console.log(a > b && a ===10) // true dega kyu ki do condition

let cond3 = c > b; // true
let cond4 = c < b; //false
console.log( cond3 || cond4); //true dega kyuki dono me se 1 condition true hai


console.log(!(a > b)); // ye false dega kyuki not operator use hua h NOTE not operator e=conditions ke bich me nhi aaye ga

*/


//-----------------conditional statements----------------------
// -----------IF Statement-------------

// let age = 10;

// if (age >= 18){
//     console.log("you can vote")
// }
// if (age < 18) {
//     console.log("you can not vote")
// }


// let mode = "light";
// let color;

// if (mode === "dark") {
//     color = "black";
// }
// if (mode === "light") {
//     color = "white";
// }
// console.log(color);

// ----------IF ELSE statement -----------------
// let mode =  "black";
// let color;

// if (mode === "red"){
//     color = "bright";
// }
// else {
//     color = "Blue";
// }
// console.log(color);


// let age = 10;
// if(age >=18){
//     console.log("you can vote");
// }
// else{
//     console.log("you cannot vote");
// }

// lets find out a number is even

// let num = prompt("Enter any number")

// if ( num % 2 === 0 ){
//     console.log(num," is even");
// }
// else{
//     console.log(num, "is odd");
// }

// --------------------ELSE IF statement-------------------------------

// let age = prompt("Enter Your Age:")

// if ( age <= 12){
//     console.log("Child")
// }
// else if ( age <= 19){
//     console.log("Teen")
// }
// else if ( age <= 40){
//     console.log("Middel")
// }
// else if ( age <= 60){
//     console.log("Senior")
// }
// else if ( age <=100){
//     console.log("Old")
// }


// let mode = "bright";
// let color;

// if (mode === "dark"){
//     color = "Black";
// }
// else if ( mode === "light"){
//     color = "White";
// }
// else if ( mode === "bright"){
//     color = "Red";
// }
// else {
//     color = "Undifined color";
// }

// console.log(color);

// -----------------ternery operator--------------------
// it is simpler and comapct form of if else statement
//  a ? b : c
// condition(a) ? true output : false output


// let age = 10;
// let res = age > 18 ? "Adult": "Teen" ;
// console.log(res);

// practics qs 1-----------------------------

// in this example im checking numbers are divisible by 5
// im taking a prompt from user and store in num named variable

/*

let num = prompt("enter any number")
if ( num % 5 === 0 ){
    console.log("number is divisible by 5")
}
else {
    console.log("number is not divisible by 5")
}
console.log(num)

*/


// practics qs 2------------------------------------

// in this example we check student grade with numbers
// im taking a prompt from user and store in score named variable
// im uuusing if and else-if statements to check multiple numbers
// && ka use kre ge comparing ke liye or dono conditions ko check krne ke liye both are must be true
// im takiing numbers with a upper limit and a lower limit
// and assign them by grads


/*
let score = prompt("Enter your score:"); 

if (score >=90 && score <=100) {
    grade = "A"
}
else if (score >=80 && score <= 89) {
    grade = "B"
}
else if ( score >= 70 && score <=79){
    grade = "C"
}
else if ( score >= 60 && score <= 69){
    grade = "D"
}
else if ( score >= 50 && score <= 59){
    grade = "E"
}
else if ( score >= 0 && score <= 49){
    grade = "F" 
}
console.log(grade)
console.log(score)
*/
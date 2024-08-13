// is line me jo myFunction h usko ya koi bhi alag input ko hum function defination bolenge.

// function myFunction(msg){
//    //iss me myFunction ko paramater bole ge
//     console.log(msg);

// }

// myFunction("Hello world"); // jiss value ko hum pass kr dete hai usko Argument khete h



// example 
// lets creat a sum calculator

// function sum(a, b) {
//     s = a + b;
//     return s;
// }
// let val = sum(5, 5);
// console.log(val); //10


// function name(name){
//     console.log("Heyy " + name + " Your Laptop is too Good")
// }
// name("Jatin")
// name("Rohit")


// function mul(a,b){
//  console.log(a*b);

// }
// mul(88,2);

// function sum(a, b, c) {
//     console.log(b * c);
//     console.log(a + b);
//     console.log(a / c);
//     console.log((a + b) / 2);
//     console.log((a + b) * 2);

// }
// sum(87, 45, 2)


// function mult(a, b) {
//     return a * b;
// }
// let val = mult(45,2);
// console.log(val)


// ----------------Arrow Functions-------------P---------


// const sum = (a, b) => {
//     console.log(a + b);
// }

// const mul = (a, b) => {
//     console.log(a * b);
// }


// //-------------qs------------

// function countVowvel(str) {
//     let count = 0
//     for (const char of str) {
//         if (
//             char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"
//         ) {
//             count++
//         }
//     }
//  console.log(count)
// }



// ---------QS----------------
// write a function to find mean of 5 numbers

// function FindMean(a,b,c,d,e){
//     let sum = a+b+c+d+e;
//     let mean = sum/5;
//     return mean ; 
// }



// ----------For Each loop in array---------------

// let arr = ["Delhi" ,"Mumbai", "Kolkata","Bhiwani"];

// arr.forEach((val,i)=>{
//     console.log(val,i );
// })



// //--------QS-----------------


// let num = [1,2,3,4,5,6,7,8,9];
// num.forEach((sq) => {
//     console.log(sq*sq);
// });

// let numb = [1,2,3,4,5,6,7,8,9];
// numb.forEach((cube)=> {
//     console.log(cube*cube*cube);
// })

//  // another method

//  let squarNum = [1,2,3,4,5,6,7,8,9];

//  let res = (number) => {console.log(number*number);

//  }
//  squarNum.forEach(res);

//  is me phele to ek array banaya h fir ek function banaya h "res" naam ka us me ek paramater banaya h number naam ka  fir  console log krva diya or last me loop laya h 



//  ---------------------MAP Method------------------

//  it is very similar to forEach bass fark itna h ki forEach wale method me uski array ko upadate krta h or MAP me ek nai array ko bna dega...



// let arr1 = [1,3,3,2,4,1,3];
// let mul = arr1.map((value) => {
//     return value * 2;
// });
// console.log(mul)

// -------------Filter method-----------

// let n = [3424,543,234,3,43254,45,4254,7656,7,56,634,5,3456456,3456,43675447,567,8,45,63456,45645,6,45,6345,3467,5467,45,534,,56678,7967,89,78,88,5678,56,78,76,56,879,78,67,89789,65756,7546];

// let evenArr = n.filter((value) => {
//     return value % 2 ===0;
// });
// console.log(evenArr);


// let numArr = [35,34,22];

// const output = numArr.reduce((pre,curr) => {
//     return pre + curr;

// });
// console.log(output);

// // QS find the largest number

// let number = [83,234,5,63,567,45,2324,1,324,33,345,47,9,908,90,89,98];
// let result = number.reduce((pre,curr) =>{
//     return pre > curr ? pre : curr; 
// });
// console.log(result);


// --------------------QS-------------------

// let marks = [45,54,67,75,91,23,99,95,78,98];
// let meritStu = marks.filter((Toppers) => {
//  return Toppers > 90;
// });
// console.log(meritStu);

// -------------QS------------------------

// let n = prompt("Enter a Number: ");
// let arr = [];
// for(i=1; i<=n; i++ ){
//     arr[i-1] = i;
// }
// console.log(arr);

// let sumAllNum = arr.reduce((pre,curr) =>{
//     return pre + curr;
// });

// console.log("Sum of all Numbers :" , sumAllNum);  

// let mulAllNum = arr.reduce((pre,curr) =>{
//     return pre * curr;
// });

// console.log("Factorila of all Numbers :", mulAllNum); 

// --------COMPLETE-------------
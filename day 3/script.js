// --------------loops---------------------


// ----------------for loop------------------------

// for (let i = 1; i <= 100; i++){
//     console.log(i)
// }
// print all the numbers 0 to 100

// -------------------------------------------

// let sum = 0 ;
// let n = prompt("enter any number");
// for (let i = 1; i <= n; i++) {
    
//     sum = sum + i;
// }
// console.log("sum =",sum);
// console.log(n);
// gives the sum of any numbers given by the user

// -------------------------------------------


// -------------------------------------------

// for ( let num = 0; num <=100; num++){
   
//     if( num %2 ===0){
//         console.log(num,"Is even")
//     }
//     else(
//         console.log(num,"Is odd")
//     )
// }




// ------------------------while loop--------------------------------

// ye for loop ke jesa h 

// let i = 0;
// while ( i<= 10 ) {
//     console.log(i);
//     i++;
// }


// -------------------------do-while loop------------------------

/* ye ek baar to output dega jo DO ki condition me likha hoga
agr while wali condition galat h tab bhi output dega 
jese iss example me I ki value 10 se choti h lekin condition me galat likh rakha h tb ye do wali statement ko print krvaye ga */


// let i = 0;
// do {
//     console.log('hello world !')
//   i++;
// } while (i<=10);



// NOTE sirf while loop me last me koi semicolan nhi hita lekin DO-WHILE me lagna pde ga




// -----------------for of ------------------------

// let str = '123456';

// for (let i of str) {
//   console.log(i);
// }

// let fruits = [ 'apple' , 'banana', 'orange', 'pineapple'];

// for( let j of fruits){
//   console.log(j);
// }
// iss loop me ye har ek character jo string me hai usko individual check kre ga 
// ye har ek character ko iterable bna deta hai (iterable yani jis pe loop chal ske)
// hum ise strings or arrays ke liye use kr sakte h objects ke liye FOR IN loop ka use kre ge 








// ----------------------FOR IN ----------------------

// let student = {
//   name: "Jatin",
//   roll_no: 150,
//   class: "BCA",
//   isPass: "True"
// };

// for (let key in student) {
//   console.log("Key =", key, "Value =", student[key], "Type =", typeof student[key]);
// }




//--------------------------STRINGS-------------------------------------


// strings are the sequence of character to represent text.
// let str1 = "Jatin verma"
// let str2 = 'Verma sabh'
// console.log(str2[2])




//  ------------------------template litrals---------------------------
// template litrals are the special type of strings

// let obj = {
//     item : "pen",
//     price : 10,
//     color : "black"
// }

// console.log("Name of item is :", obj.item, "Price of the pen is :", obj.price, "color of the pen is :" , obj.color);
// let output = `Name of item is ${obj.item}\n price of thr pen is ${obj.price}\n color of the pen is ${obj.color} ${2+8-5+45*2}`;
// console.log(output);



// both are true but the templat liral is too easy to undersatand as compare to a normal string.
// normal string me numbers ko number manta h but templat litral me number as a string consider hoga.
// doller ke sign ke baad brackets me keval variable hi nhi expression ko bhi likh sakte hai.
// apne code me ek line ke output ko next line me show krna h to \n ka use kre ge(ise escape character khete h)
// apne code me ek tab ke space ko dalne ka aasan tarika ye hoga ki \t (ise escape character khete h). 
// agr hum apni string ki length find kre ge to or agr \n ya \t use hua hua h to ye dono ek hi gine jaye ge 
// templat litral ke ander hum equations bhi likh sakte h.


//--------------STRING METHODS---------------------

// these are built-in methods to manipulate a string

//----toUpperCase-----

// let str = "JatinVerma";
// // str.toUpperCase(); ye yha pe kaam nhi kre ga kyuki jitne bhi string method hote h ve orignal string ko change nhi krte.
// let str2 =  str.toUpperCase(); // yha pe ye kaam kr jaye ga kyuki hum method ko ek string bna rhe h.

// // ---------- toLowerCase -----------

// //uppercase ke jesa hi hota h toLowerCase

// let str3 = str.toLowerCase(); // ye sabhi character ko small character me bna dega

//-----trim--------
// ye sari white spaces ko remove kre ga 

// let str = "      JaTIn VERMa     JKLJSL      " //iss me print hoga JaTIn VERMa       JKLJSL    aage or piche ka space hta dega. 
// str = str.trim();


//------slice---------  return the part of string
// as the name say slice krna kisi bhi string ko bich me se slice krna.

let str = "JATINVERMA";
str = str.slice(1,4) // give us ATI



//----------Concat----------------   kisi bhi 2 strings ko ek sath jode ga

// let str2 = "kumar";
// let str3 = "parjapati";
// str2 = str.concat(str2); // method 1
// str3 = str3 + str2; // method 2


// //----------------replace-------------------- kisi character ko replace krna

// str2 = str2.replace("kumar" , "kkkkkkkkkkkk"); // it replace the value what we want 
// // in this first value is search value and the second value is replacing value.

// console.log(str,str2,str3);
// ///------------------charAt--------- find character according to index

// console.log(str2.charAt(0));






//--------------------------------QS 1----------------------------


// making user name 

let UserName = prompt("Enter your Full Name")
 console.log("@"+ UserName + UserName.length);
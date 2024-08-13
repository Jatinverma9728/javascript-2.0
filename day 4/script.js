//--------------------Arrays---------------
/* Arrays are the variable which can hold more than one value.



*/

/* let marks = ["98","87","76","65","59"];
console.log(marks); */
// this is the simplest example of arrays 

//--------------Using arrays in loops------------

// -------- example -------

//---------FOR LOOP---------

// let names = ["Jatin","Aanshi","Himanshi","chiku","Anshu","Bhindi"]

// for(let i = 0; i<names.length; i++ ){
//     console.log(names[i])
// }



// ------------- FOR OF--------------

// let cities = ["Delhi","Mumbai","Kolkata","Gurugao","Bhiwani"];

// for( let sehar of cities ){
//     console.log(sehar.toUpperCase());
// }


//-------------QS-------------

// for a given arrya with marks of students{85,97,44,37,76,60}. find the average marks of the entire class


// let marks = [85,97,44,37,76,60];
// let sum = 0;
// for (let value of marks){
//     sum += value;
// }
// console.log(sum);

// let avg = sum/marks.length;
// console.log(avg); //66.5

//-----------------QS2-----------------

// for given array price of 5 items {250,645,300,900,50}.All items have Final Price after discount.


// -----method 1  FOR-OF LOOF ------------

// let item = [250,645,600,900,50];
// let i = 0;
// for( let val of item ){
//     // console.log(`value of index ${i} = ${val}`);
//     let offer = val / 10;
//     item[i] = item[i] - offer;
//     console.log(`value after offer = ${item[i]}`);
//     i++
// }
// console.log(item);

//-----METHOD 2 FOR LOOP------------

// let item = [250,645,600,900,50];
// yha I sirf tracking ke liye hi use hua h tracking yani hami array ke har ek element ko number dega

// for(let i= 0 ; i < item.length; i++ ){
    // let offer =  item[i] / 10; // item[i] ka matlab h ki item ko order wise chalaye ga 
//     item[i] = item[i] - offer;
//     console.log(`value after offer = ${item[i]}`);
    
// }
// onsole.log(item);


//--------------METHODS IN ARRAY---------------



// There are two types of array methods 1. change the array 2. give new array

//----------PUSH() Method-------------

let fruits = ["Apple","Mango","Pineapple","Banana","Guvava"]

fruits.push("Watermelon","Burger");
console.log(fruits);

//--------pop-----------------

fruits.pop();
console.log(fruits);



//--------to string-------

console.log(fruits.toString());



//--------------concat---------------

let marval_heros = ["Ironman","Spiderman","Hulk","Dr.Strange"];
let dc_heros = ["Batman","Antman","Superman"];
let indian_heros = ["Shaktiman","Krish","Mialhalifa"];
console.log(marval_heros.concat(dc_heros,indian_heros));

//---------UNShift -------------
// it is nothing but it is a higher version of push method it is bassically do to add elements in  start of array push add element in last

marval_heros.unshift("Jonysins");

//-------Shift-----------------
// is also use as pop it remove from first 
marval_heros.shift();


//------------slice method----------

// do not change in orignal array 

console.log(marval_heros.slice(2,4)); //  ['Hulk', 'Dr.Strange'] because ist number starter h or 2nd number lat point h jha tak hume array chiye but lat index valu slice nhi hogi use se phele wali hi hogi.



//--------Splice-----------

let num = [1,2,3,4,5,6,7,8,9,10];

// num.splice(3,1,8858);
// iss me 1 number h kha tak ke number aapko chiye 2nd h konsa element delet krna h and the 3rd is kya add krna h ye kitne bhi ho sakte h 


// hum bina number ko delet kreke bhi number ko add kr sakte h 

num.splice(3,0,4444,54564) //  [1, 2, 3, 4444, 54564, 4, 5, 6, 7, 8, 9, 10]




//--------------------QS--------------------------
// creat an array to store companies - "Bloomberg", "Microsoft" , "Uber", "Google" , "IBM" , "Netflix".

// A. remove the first company from this array.

let arr = [ "Bloomberg", "Microsoft" , "Uber", "Google" , "IBM" , "Netflix"];

// using shift

// console.log(arr.shift());
// console.log(arr)


// B. remove Uber and replace with OLA.

// using splice
console.log(arr);
console.log(arr.splice(2,1,"OLA"));
console.log(arr);


// C. Add Amazon at the end.

//using push
console.log(arr.push("Amazon"));
console.log(arr);
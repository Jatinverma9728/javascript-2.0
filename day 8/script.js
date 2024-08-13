// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientY, evt.clientX);
// };

// let btn2 = document.querySelector("#box2");
// btn2.onmouseover = (evt) => {
//   console.log("You Hover The Box");
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX, evt.clientY);
// };

// let box3 = document.querySelector("#box3");
// box3.addEventListener( "click" ,() => {
//   console.log("You Clicked The Box");
// }
// );

//------------

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click",() =>{
//     console.log("Btn 1 Was Clicked 1");
// });
// btn1.addEventListener("click",() =>{
//     console.log("Btn 2 Was Clicked 2");
// });

// const handler3 = () =>{
//     console.log("Btn 3 Was Clicked 3");
// }; // callback is must be same with refrance in this example jo pura function h vo vo duso ke liye to callback h but is me refrance ke jesa use aaye ga.

// btn1.addEventListener("click",handler3);
// btn1.removeEventListener("click",handler3);

// btn1.addEventListener("click",() =>{
//     console.log("Btn 4 Was Clicked 4");
// });

// ---------------qs---------------

let mod = document.querySelector("#mod");
let currmod = "light";
let body = document.querySelector("body");
mod.addEventListener("click", () => {
  if (currmod === "light") {
    currmod = "Dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currmod = "light";
    body.classList.add("light");
  }
  console.log(currmod);
});

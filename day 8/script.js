let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
  console.log("You Click This Buton");
  let a = 32;
  a++;
  console.log(a);
};

let btn2 = document.querySelector("#box2");
btn2.onmouseover = () => {
  console.log("You Hover The Box");
};


let box3 = document.querySelector("#box3");
box3.onmousewheel = () => {
    console.log("You Scroll The Box")
}
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

newBtn.style.color = "white"
newBtn.style.backgroundColor = "red"

document.querySelector("body").prepend(newBtn);

let para = document.querySelector("p")
para.getAttribute("class")
// para.setAttribute("class","newpara");
para.classList.add("newpara");

 
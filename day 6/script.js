let h2 = document.querySelector("h2");

console.dir(h2.innerText);
h2.innerText = h2.innerText + "From Jatin";

let first = document.querySelectorAll(".box");

//-------First method----------- 


// first[0].innerText = "new first box";
// first[1].innerText = "new third box";
// first[2].innerText = "new second box";


//----------------Second Method-----------
let idx = 1;
for(j of first){
j.innerText = `New Box ${idx}`;
idx++;
};

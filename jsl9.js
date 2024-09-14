let btn = document.querySelectorAll("button");
console.dir(btn);

//l1
// btn.onclick=function(){
//     alert("button was clicked");
// };

//l2:
// function sayHello(){
//     alert("hello");

// }
// btn.onclick=sayHello;

//l3

for(btns of btn){
    // btns.onclick=sayHello;
    // btns.onmouseenter=sayHello;
    // btns.onclick=sayName;
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
}
function sayHello(){
    alert("hello");
}
function sayName(){
    alert("nisha yadav");
}
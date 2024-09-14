let p = document.querySelector("p");
p.addEventListener("click",function(){
    console.log("para was clicked");
}
);
let box=document.querySelector(".box");
box.addEventListener("mousecenter",function(){
    console.log("mouse inside div");
})
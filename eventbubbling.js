let div=document.querySelector("div");
let ul=document.querySelector("ul");
let li=document.querySelectorAll("li");

div.addEventListener("click",function(){
    console.log("div was clicked");
});
ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
});
for(lis of li ){
lis.addEventListener("click",function(){
    console.log("li was clicked");
});
}
//when one of the function is triggered its parent is also triggered and printed on console which is refered to as event bubbling to stop this from triggerent we use event.stopPropagatiion();
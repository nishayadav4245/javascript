let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
let delbtn=document.createElement("button")
delbtn.innerText="delete";
delbtn.classList.add("delete");

item.appendChild(delbtn);

    ul.appendChild(item);
    // console.log(inp.value);
    
    inp.value="";//to reset input to empty box
   
});
ul.addEventListener("click",function(){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
     listitem.remove();
        console.log("deleted");
    }
})

// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//        let par=this.parentElement;
//        console.log(par);
//        par.remove();
//     });
// }
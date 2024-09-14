let inp= document.querySelector("input");
inp.addEventListener("keydown",function(event){
    console.log(event.key);
    console.log("code= ", event.code); //arrow down,arrowup,arrowleft,arrow right
    if(event.code=="ArrowUp"){
        console.log("character moves forward");
    }
        else if(event.code=="ArrowDown"){
            console.log("character moves backward");
        }
        else if(event.code=="ArrowLeft"){
            console.log("character moves left");
        }
        else if(event.code=="ArrowRight"){
            console.log("character moves right");
        }
    

});



//l2
// inp.addEventListener("keyup",function(){
//     console.log("key was relased");
//     });

//l1
// let btn= document.querySelector("button");

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// });
// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// });
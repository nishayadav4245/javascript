// h1=document.querySelector("h1");
// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//        if(nextColorChange) nextColorChange();
//     },delay);
// }

// changeColor("red",1000,() => {
//     changeColor("orange",1000,()=> {
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// });
h1=document.querySelector("h1");
function changeColor(color,delay,nextColorChange){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
           resolve("color changed!");
        },delay);
    })
   

}
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected");
            }
                h1.style.color=color;
                console.log(`color changed to ${color}!`);
                resolve("color changed!");
            },delay);
        });
}
//using async function
async function demo(){
    try{
  await  changeColor("red",1000);
  await  changeColor("orange",1000);
 await   changeColor("green",1000);
   await changeColor("blue",1000);
    }catch(err){
    console.log("error caught");
    console.log(err);
    }
   let a=5;
   console.log(a);
   console.log("new number",a);
}

//m3
// changeColor("red",1000)
//     .then(()=>{
//         console.log("red color was completed");
//         return changeColor("orange",1000);
//     })
//     .then(()=>{
//         console.log("orange color was completed");
//         return changeColor("green",1000);
//     })
//     .then(()=>{
//         console.log("green color was completed");
//         return changeColor("blue",1000);
//     })
//     .then(()=>{
//         console.log("blue color was printed");
//     });

//m2
// changeColor("red",1000,() => {
//     changeColor("orange",1000,()=> {
//         changeColor("green",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("blue",1000);
//             });
//         });
//     });
// });

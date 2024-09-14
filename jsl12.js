let btn = document.querySelector("button");
let p=queryselector("p");
let h1=querySelector("h1");
let h3=querySelector("h3");
btn.addEventListener("click",function(){
console.dir(this.innerText);
this.style.backgroundColor="blue";
});

//method 1

// h1.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
//     });

//     p.addEventListener("click",function(){
//         console.dir(this.innerText);
//         this.style.backgroundColor="blue";
//         });

//         h3.addEventListener("click",function(){
//             console.dir(this.innerText);
//             this.style.backgroundColor="blue";
//             });

//method 2

function changecolor(){
    console.dir(this.innerText);
    this.style.backgroundColor="blue";
}
            
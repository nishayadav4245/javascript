let btn=document.querySelector("button");

//dog api
let url2="https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click",async ()=>{
   let link=await getImage();
   //console.log(link);
   let img=document.querySelector("#result");
   img.setAttribute("src",link);
 });
async function getImage(){
    try{
    let res=await axios.get(url2);
   return res.data.message;
    console.log(res.data.message);
    }catch(e){
        console.log("error-",e);
        return "NO image found"
    }
   
}


//cat api
// btn.addEventListener("click",async ()=>{
//     let fact=await getFacts();
//     console.log(fact);
//     p.innerText=fact;
//  });
 
//  let url="https://catfact.ninja/fact";


// fetch(url)
// .then((res)=>{
// console.log(res);
// return res.json();
// })
// .then((data1)=>{
//     console.log(data1.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log(data2.fact);
// })
// .catch((err)=>{
//     console.log("ERROR-",err);
// });

//using async and await
// async function getFacts(){
//     try{
//     let res=await fetch(url);
//     let data=await res.json();
//     console.log(data.fact);
//     }catch(e){
//         console.log("error-",e);
//     }
//     console.log("bye");
// }

//using axios
// async function getFacts(){
//     try{
//     let res=await axios.get(url);
//    return res.data.fact;
//     console.log(res.data.fact);
//     }catch(e){
//         console.log("error-",e);
//         return "NO fact found"
//     }
   
// }
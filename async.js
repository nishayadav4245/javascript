// async function great(){
//     throw "404 page not found";
//     return "hello";
// }

// great()
// .then((result)=>{
//     console.log("promise was resolved",result);
// })
// .catch((err)=>{
// console.log("promise was rejected with an err :",err);
// }
// );
// let demo=()=>{
//     return 5;
// }
function getNum(){
   return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    let num=Math.floor(Math.random()*10)+1;
    console.log(num);
    resolve();
   },1000);
   });
}
async function demo(){
   await getNum();
  await  getNum();   
  await getNum();
  await  getNum();    //await works in async fucntion only
    getNum();

}

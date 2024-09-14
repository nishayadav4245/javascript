// const url="https://icanhazdadjoke.com/";

// async function getJokes(){
//     try{
//         const config={headers:{Accept:"application/json"}};
//         let res = await axios.get(url, config);
//         console.log(res.data);

//     }catch(err){
//         console.log(err);
//     }
// }
let url="http://universities.hipolabs.com/search/name=";
let country="nepal";
async function  getColleges(){
    try{
      let res = await axios.get(url+country);
      console.log(res);
    } catch(e){
        console.log("error:",e);
    }
}
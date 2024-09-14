//l1
// console.log('hi')
// console.log('my name is nishu');
// console.log("i am a student");
// console.log("i m 2 year old");

//l2
// function introduceMe(){
//     console.log("hiihii");
//     console.log("my name is nishu");
//     console.log('i am 2 year old');
// return"thankyou"
// }

//l3
// const returnvalue=introduceMe()     //returnvalue is a userdefined string which will return thankyou

// function introduceMe(username){
//     console.log("hiihii oye hoye ankh ladi  bado badi mauka mile kadi kadi");
//     console.log(`My name is ${username}`);
//     console.log('i am 2 year old');
// return"thankyou"
// }
// introduceMe("nisha");


// l4
// function introduceMe(username='nish'){
//     console.log("hiihii");
//     console.log(`My name is ${username}`);
//     console.log('i am 2 year old');
// return"thankyou"
// }

// l5
// function introduceMe(username){
//     if(username===undefined){  //if(username)
//         username='ram'
//     }
//     console.log(username)
// }
//l6
// function introduceMe(){
//     console.log(`my name is ${username || 'ram'}`);
// }
let username=prompt("enter the username");
let age=prompt("enter the age");
let profession=prompt("enter the profession");

introduceMe(username,age,profession);
function introduceMe(username){
console.log(`My name is ${username} my age is ${age} and my profession is ${profession}`)


}

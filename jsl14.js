let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
//   let inp=document.querySelector("input");
//   console.dir(inp);
console.dir(form);
let user=this.elements[0];
let pass=this.elements[1];
// let user=document.querySelector("#user");
// let pass=document.querySelector("#pass");
console.log(user.value);
console.log(pass.value);
alert(` hi ${user.value},your password is set to ${pass.value}`);

//   console.log(inp.innerText);//input.innerText does not give inner text of input instead value property is used
//   console.log(inp.value);
});
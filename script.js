const passwordbox=document.querySelector("password"); 
// let url="https://api.genratr.com/?length=16&uppercase&lowercase&special&numbers";
// let pass=fetch(url);
// let res=pass.json();
// console.log(res)
const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#$%^&*()_+";
const allchar=uppercase+lowercase+number+symbol;
function createpassworld(){
    let password="";
    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=number[Math.floor(Math.random()*number.length)];
    password+=symbol[Math.floor(Math.random()*symbol.length)];
    while(length>password.length){
        password+=allchar[Math.floor(Math.random()*uppercase.length)];
    }
    return password;

}
let input=document.querySelector("input");
let btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    input.value=createpassworld();
})
let copybtn=document.getElementById("copybtn");
copybtn.addEventListener("click",copypass);
function copypass(){
    passwordbox.select();
    document.execCommand("copy");

}
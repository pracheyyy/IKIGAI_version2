function goToSignin(){
window.location.href="signin.html"
}

function goToHome(){
window.location.href="home.html"
}

/* SIGNUP */

function signup(){

let first=document.getElementById("firstName").value
let last=document.getElementById("lastName").value
let email=document.getElementById("email").value
let password=document.getElementById("password").value

let user={
first:first,
last:last,
email:email,
password:password
}

localStorage.setItem("user",JSON.stringify(user))

alert("Account Created!")

window.location.href="signin.html"

}

/* LOGIN */

function login(){

let savedUser=JSON.parse(localStorage.getItem("user"))

let email=document.getElementById("loginEmail").value
let password=document.getElementById("loginPassword").value

if(email===savedUser.email && password===savedUser.password){

localStorage.setItem("loggedUser",savedUser.first + " " + savedUser.last)

window.location.href="about.html"

}else{

alert("Invalid Login")

}

}

/* SHOW USER NAME */

window.onload=function(){

let name=localStorage.getItem("loggedUser")

let user=document.getElementById("username")

if(user){
user.innerText=name
}

}
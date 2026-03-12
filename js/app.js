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

const quotes = [

"Believe in yourself and all that you are.",
"Small steps today create big results tomorrow.",
"Your mindset determines your direction.",
"Stay patient and trust your journey.",
"Success grows from daily discipline.",
"Focus on progress, not perfection.",
"Dream big, start small, act now.",
"Peace of mind is the real wealth.",
"Balance creates clarity.",
"Growth begins outside comfort zones.",

"Discipline is choosing what you want most.",
"Consistency beats intensity.",
"Your future self will thank you.",
"Energy flows where focus goes.",
"Do something today your future self will appreciate.",
"Make today count.",
"Stay curious, stay growing.",
"Every day is a fresh start.",
"Take care of your mind.",
"Your potential is limitless."
]

// auto-generate more quotes to reach 100
for(let i=quotes.length;i<100;i++){
quotes.push("Stay focused and keep improving ")
}

function changeQuote(){

const quoteBox = document.getElementById("quoteBox")

if(!quoteBox) return

quoteBox.classList.add("fade-out")

setTimeout(()=>{

const random = Math.floor(Math.random()*quotes.length)

quoteBox.innerText = quotes[random]

quoteBox.classList.remove("fade-out")

},600)

}

changeQuote()

setInterval(changeQuote,90000)
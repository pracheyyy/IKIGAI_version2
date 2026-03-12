function completeChallenge(){

const passion = document.getElementById("passionTask").checked ? 1 : 0
const skill = document.getElementById("skillTask").checked ? 1 : 0
const purpose = document.getElementById("purposeTask").checked ? 1 : 0

const coins = (passion + skill + purpose) * 10

const today = new Date().toISOString().split("T")[0]

let history = JSON.parse(localStorage.getItem("ikigaiHistory")) || []

let existing = history.find(day => day.date === today)

if(existing){

existing.passion = passion
existing.skill = skill
existing.purpose = purpose
existing.coins = coins

}else{

history.push({

date: today,
passion,
skill,
purpose,
coins

})

}

localStorage.setItem("ikigaiHistory", JSON.stringify(history))

alert("Challenge saved! Coins earned: " + coins)

}
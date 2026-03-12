const history = JSON.parse(localStorage.getItem("ikigaiHistory")) || []

const tbody = document.getElementById("historyBody")

let totalCoins = 0

history.forEach(day => {

totalCoins += day.coins

let row = `
<tr>
<td>${day.date}</td>
<td>${day.passion ? "✔" : "✖"}</td>
<td>${day.skill ? "✔" : "✖"}</td>
<td>${day.purpose ? "✔" : "✖"}</td>
<td>${day.coins}</td>
</tr>
`

tbody.innerHTML += row

})

document.getElementById("totalCoins").innerText = totalCoins
document.getElementById("activeDays").innerText = history.length
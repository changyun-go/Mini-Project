let date = new Date();
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


let week = days[date.getDay()];

document.querySelector("#week").textContent = week;
let newDate = new Date();
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

let week = days[newDate.getDay()];
let date = newDate.getDate();

document.querySelector("#week").textContent = week;
document.querySelector("#date").textContent = date;
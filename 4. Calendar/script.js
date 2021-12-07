let newDate = new Date();
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

let week = days[newDate.getDay()];
let date = newDate.getDate();
let month = months[newDate.getMonth()];
let year = newDate.getFullYear();

document.querySelector("#week").textContent = week;
document.querySelector("#date").textContent = date;
document.querySelector("#month").textContent = month;
document.querySelector("#year").textContent = year;
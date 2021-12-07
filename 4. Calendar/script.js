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

let firstDayNum = newDate.getDay() - date % 7 + 1;

let firstDay = days[firstDayNum];

console.log(firstDay);

let table = document.querySelector("#table");
table.rows[1].cells[3].textContent = 1;
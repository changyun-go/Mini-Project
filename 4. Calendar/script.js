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

let firstDay = newDate.getDay() - date % 7 + 1;

let table = document.querySelector("#table");

let dateNum = 0;
for(i = firstDay; i <= 6; i++){
    dateNum++;
    table.rows[1].cells[i].textContent = dateNum;
}
for(k = 2; k <= 6; k++){
    for(j = 0; j <= 6; j++){
        dateNum++;
        table.rows[k].cells[j].textContent = dateNum;
        if(dateNum === 31){
            break;
        }
    }
}



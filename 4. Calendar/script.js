let newDate = new Date();
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

let week = days[newDate.getDay()];
let date = newDate.getDate();
let year = newDate.getFullYear();
let selectWeek = document.querySelector("#week")
let selectDate = document.querySelector("#date")
let selectMonth = document.querySelector("#month")
let selectYear = document.querySelector("#year")

let firstDay = newDate.getDay() - date % 7 + 1;

let table = document.querySelector("#table");

let dateNum = 0;

let month = newDate.getMonth();
selectMonth.textContent = months[month];

function prev(){
    if(month === 0){
        month = 11;
    }
    else{
        month--;
    }
    selectMonth.textContent = months[month];
}

function next(){
    if(month === 11){
        month = 0;
    }
    else{
        month++;
    }
    selectMonth.textContent = months[month];
}

selectWeek.textContent = week;
selectDate.textContent = date;
selectYear.textContent = year;


for(let i = firstDay; i <= 6; i++){
    dateNum++;
    table.rows[1].cells[i].textContent = dateNum;
}
for(let k = 2; k <= 6; k++){
    for(let j = 0; j <= 6; j++){
        dateNum++;
        table.rows[k].cells[j].textContent = dateNum;
        if(dateNum === 31){
            break;
        }
    }
}





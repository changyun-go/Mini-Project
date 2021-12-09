let newDate = new Date();
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

let week = days[newDate.getDay()];
let date = newDate.getDate();

let selectWeek = document.querySelector("#week")
let selectDate = document.querySelector("#date")
let selectMonth = document.querySelector("#month")
let selectYear = document.querySelector("#year")
let table = document.querySelector("#table");

let month = newDate.getMonth();
selectMonth.textContent = months[month];

selectWeek.textContent = week;
selectDate.textContent = date;

let lastDate = 0;
let lastDay = 0;
if(month === 3||month === 5||month === 8||month === 10){
    lastDate = 30;
}
else if(month === 1){
    lastDate = 28;
}
else{
    lastDate = 31;
}

let year = newDate.getFullYear();
selectYear.textContent = year;

let dateNum = 0;
let firstDay = newDate.getDay() - date % 7 + 1;

if(firstDay < 0){
    firstDay = firstDay + 7;
}
else if(firstDay > 6){
    firstDay = firstDay - 7;
}
for(let i = 0; i < firstDay; i++){
    table.rows[1].cells[i].textContent = null;
}
for(let i = firstDay; i <= 6; i++){
    dateNum++;
    table.rows[1].cells[i].textContent = dateNum;
}
for(let i = 2; i <= 4; i++){
    for(let j = 0; j <= 6; j++){
        dateNum++;
        table.rows[i].cells[j].textContent = dateNum;
    }
}
lastDay = firstDay + (lastDate - 29);
console.log(lastDay);

if(lastDay > 6){
    lastDay = lastDay - 7;
    console.log(lastDay);

    for(let i = 0; i <= 6; i++){
        dateNum++;
        table.rows[5].cells[i].textContent = dateNum;
    }
    for(let i = 0; i <= lastDay; i++){
        dateNum++;
        table.rows[6].cells[i].textContent = dateNum;
    }
    for(let i = lastDay + 1; i <= 6; i++){
        table.rows[6].cells[i].textContent = null;
    }
}
else{
    for(let i = 0; i <= lastDay; i++){
        dateNum++;
        table.rows[5].cells[i].textContent = dateNum;
    }
    for(let i = lastDay + 1; i <= 6; i++){
        dateNum++;
        table.rows[5].cells[i].textContent = null;
    }
    for(let i = 0; i <= 6; i++){
        table.rows[6].cells[i].textContent = null;
    }
}

function prev(){
    if(month === 0){
        month = 11;
        year--;
    }
    else{
        month--;
    }
    selectMonth.textContent = months[month];
    selectYear.textContent = year;

    if(month === 3||month === 5||month === 8||month === 10){
        lastDate = 30;
    }
    else if(month === 1){
        lastDate = 28;
    }
    else{
        lastDate = 31;
    }
    dateNum = 0;
    console.log(lastDay);
    lastDay = firstDay - 1;
    firstDay = firstDay - (lastDate - 28);
    if(firstDay < 0){
        firstDay = firstDay + 7;
    }
    else if(firstDay > 6){
        firstDay = firstDay - 7;
    }
    for(let i = 0; i < firstDay; i++){
        table.rows[1].cells[i].textContent = null;
    }
    for(let i = firstDay; i <= 6; i++){
        dateNum++;
        table.rows[1].cells[i].textContent = dateNum;
    }
    for(let i = 2; i <= 4; i++){
        for(let j = 0; j <= 6; j++){
            dateNum++;
            table.rows[i].cells[j].textContent = dateNum;
        }
    }
    lastDay = firstDay + (lastDate - 29);
    console.log(lastDay);
    if(lastDay > 6){
        lastDay = lastDay - 7;
        console.log(lastDay);

        for(let i = 0; i <= 6; i++){
            dateNum++;
            table.rows[5].cells[i].textContent = dateNum;
        }
        for(let i = 0; i <= lastDay; i++){
            dateNum++;
            table.rows[6].cells[i].textContent = dateNum;
        }
        for(let i = lastDay + 1; i <= 6; i++){
            table.rows[6].cells[i].textContent = null;
        }
    }
    else{
        for(let i = 0; i <= lastDay; i++){
            dateNum++;
            table.rows[5].cells[i].textContent = dateNum;
        }
        for(let i = lastDay + 1; i <= 6; i++){
            dateNum++;
            table.rows[5].cells[i].textContent = null;
        }
        for(let i = 0; i <= 6; i++){
            table.rows[6].cells[i].textContent = null;
        }
    }
}

function next(){
    if(month === 11){
        month = 0;
        year++;
    }
    else{
        month++;
    }
    selectMonth.textContent = months[month];
    selectYear.textContent = year;

    if(month === 3||month === 5||month === 8||month === 10){
        lastDate = 30;
    }
    else if(month === 1){
        lastDate = 28;
    }
    else{
        lastDate = 31;
    }
    dateNum = 0;
    console.log(lastDay);
    firstDay = lastDay + 1;
    if(firstDay < 0){
        firstDay = firstDay + 7;
    }
    else if(firstDay > 6){
        firstDay = firstDay - 7;
    }
    for(let i = 0; i < firstDay; i++){
        table.rows[1].cells[i].textContent = null;
    }
    for(let i = firstDay; i <= 6; i++){
        dateNum++;
        table.rows[1].cells[i].textContent = dateNum;
    }
    for(let i = 2; i <= 4; i++){
        for(let j = 0; j <= 6; j++){
            dateNum++;
            table.rows[i].cells[j].textContent = dateNum;
        }
    }
    lastDay = firstDay + (lastDate - 29);
    console.log(lastDay);

    if(lastDay > 6){
        lastDay = lastDay - 7;

        for(let i = 0; i <= 6; i++){
            dateNum++;
            table.rows[5].cells[i].textContent = dateNum;
        }
        for(let i = 0; i <= lastDay; i++){
            dateNum++;
            table.rows[6].cells[i].textContent = dateNum;
        }
        for(let i = lastDay + 1; i <= 6; i++){
            table.rows[6].cells[i].textContent = null;
        }
    }
    else{
        for(let i = 0; i <= lastDay; i++){
            dateNum++;
            table.rows[5].cells[i].textContent = dateNum;
        }
        for(let i = lastDay + 1; i <= 6; i++){
            dateNum++;
            table.rows[5].cells[i].textContent = null;
        }
        for(let i = 0; i <= 6; i++){
            table.rows[6].cells[i].textContent = null;
        }
    }
}

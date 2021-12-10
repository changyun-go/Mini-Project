let newDate = new Date();
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

let week = days[newDate.getDay()];
let date = newDate.getDate();
let selectWeek = document.querySelector("#week")
let selectDate = document.querySelector("#date")
let selectMonth = document.querySelector("#month")
let selectYear = document.querySelector("#year")
let table = document.querySelector("table");
let td = document.querySelector("td");
let month = newDate.getMonth();
let lastDate = 0;
let lastDay = 0;
let dateNum = 0;
let firstDay = newDate.getDay() - date % 7 + 1;
let year = newDate.getFullYear();
let clickDay = 0;


table.onclick = clickDate;

function clickDate(){
    if(event.target.nodeName == "TD"){ 
        selectDate.textContent = event.target.textContent;
        clickDay = firstDay + selectDate.textContent % 7 - 1;
        if(clickDay < 0){
            clickDay = clickDay + 7;
        }
        else if(clickDay > 6){
            clickDay = clickDay - 7;
        }
        selectWeek.textContent = days[clickDay];
    }

}


function dateMaker(){
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

function lastDateCheck(){
    if(month === 3||month === 5||month === 8||month === 10){
        lastDate = 30;
    }
    else if(month === 1){
        if(year % 4 === 0){
            lastDate = 29;
        }
        else{
            lastDate = 28;
        }
    }
    else{
        lastDate = 31;
    }
}


selectMonth.textContent = months[month];
selectWeek.textContent = week;
selectDate.textContent = date;
selectYear.textContent = year;

lastDateCheck()
dateMaker();

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

    lastDateCheck()
    dateNum = 0;
    lastDay = firstDay - 1;
    firstDay = firstDay - (lastDate - 28);
    dateMaker();
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

    lastDateCheck()
    dateNum = 0;
    firstDay = lastDay + 1;
    dateMaker();
}


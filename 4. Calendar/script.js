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

let year = newDate.getFullYear();
selectYear.textContent = year;

let dateNum = 0;
let firstDay = newDate.getDay() - date % 7 + 1;

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

    dateNum = 0;
    firstDay = firstDay - 30 % 7;
    let x = 0;
    let y = 0;
    if(firstDay < 0){
        firstDay = firstDay + 6;
    }
    for(i = 0; i < firstDay; i++){
        table.rows[1].cells[i].textContent = null;
    }
    for(i = firstDay; i <= 6; i++){
        dateNum++;
        table.rows[1].cells[i].textContent = dateNum;
    }
    for(k = 2; k <= 6; k++){
        for(j = 0; j <= 6; j++){
            dateNum++;
            table.rows[k].cells[j].textContent = dateNum;
            if(dateNum === 31){
                x = k;
                y = j;
                break;
            }
        }
        for(let q = y; q <= 6; q++){
            table.rows[x].cells[q].textContent = null;
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

    dateNum = 0;
    firstDay = firstDay + 30 % 7;
    let x = 0;
    let y = 0;
    if(firstDay > 6){
        firstDay = firstDay - 6;
    }
    for(i = 0; i < firstDay; i++){
        table.rows[1].cells[i].textContent = null;
    }
    for(i = firstDay; i <= 6; i++){
        dateNum++;
        table.rows[1].cells[i].textContent = dateNum;
    }
    for(k = 2; k <= 6; k++){
        for(j = 0; j <= 6; j++){
            dateNum++;
            table.rows[k].cells[j].textContent = dateNum;
            if(dateNum === 31){
                x = k;
                y = j;
                break;
            }
        }
        for(let q = y; q <= 6; q++){
            table.rows[x].cells[q].textContent = null;
        }
    }
}

selectWeek.textContent = week;
selectDate.textContent = date;








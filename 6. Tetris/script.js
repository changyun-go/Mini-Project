const table = document.querySelector('table');
let newTr = 0;
let x = 0;
let y = 0;

for(let tr = 0; tr < 20; tr++){
    newTr = table.appendChild(document.createElement('tr'));
    for(let td = 0; td < 10; td++){
        newTr.appendChild(document.createElement('td'));
    }
}

x = 4;
y = 5;


const shape = {
    i: [[x-1, y], [x, y], [x+1, y], [x+2, y], ['skyblue']],
    o: [[x, y], [x+1, y], [x, y-1], [x+1, y-1], ['yellow']],
    t: [[x-1, y], [x, y], [x+1, y], [x, y-1], ['purple']],
    l: [[x-1, y], [x, y], [x+1, y], [x+1, y-1], ['orange']],
    j: [[x-1, y], [x-1, y-1], [x, y], [x+1, y], ['blue']],
    s: [[x-1, y], [x, y], [x, y-1], [x+1, y-1], ['green']],
    z: [[x-1, y-1], [x, y-1], [x, y], [x+1, y], ['red']]
}

function mino(choice){
    for(let i = 0; i < 4; i++){
        table.rows[choice[i][1]].cells[choice[i][0]].style.backgroundColor = choice[4];
    }
}

table.rows[y].cells[x].textContent = 'c';

mino(shape.l);









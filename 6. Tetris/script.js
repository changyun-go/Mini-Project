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

const i_data = [[x, y], [x+1, y], [x+2, y], [x+3, y], ['skyblue']];
const o_data = [[x, y], [x+1, y], [x, y+1], [x+1, y+1], ['yellow']];
const t_data = [[x, y], [x+1, y], [x+2, y], [x+1, y-1], ['purple']];
const l_data = [[x, y], [x+1, y], [x+2, y], [x+2, y-1], ['orange']];
const j_data = [[x, y], [x+1, y], [x+2, y], [x, y-1], ['blue']];
const s_data = [[x, y], [x+1, y], [x+1, y-1], [x+2, y-1], ['green']];
const z_data = [[x, y], [x+1, y], [x+1, y+1], [x+2, y+1], ['red']];


function mino(shape_data){
    for(let i = 0; i < 4; i++){
        table.rows[shape_data[i][1]].cells[shape_data[i][0]].style.backgroundColor=shape_data[4];
    }
    console.log(x,y);
}

mino(i_data);









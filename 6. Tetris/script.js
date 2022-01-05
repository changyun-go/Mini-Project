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
y = 4;

// const pos = [[x-1, y-1], [x, y-1], [x+1, y-1], [x+2, y-1], [x-1, y], [x, y], [x+1, y], [x+2, y], [x-1, y+1], [x, y+1], [x+1, y+1], [x+2, y+1], [x-1, y+2], [x, y+2], [x+1, y+2], [x+2, y+2]];

// const shape = {
//     i: [pos[4], pos[5], pos[6], pos[7], ['skyblue']],
//     i_90: [pos[1], pos[5], pos[9], pos[13], ['skyblue']],
//     o: [pos[1], pos[2], pos[5], pos[6], ['yellow']],
//     t: [pos[1], pos[4], pos[5], pos[6], ['purple']],
//     t_left: [pos[1], pos[4], pos[5], pos[9], ['purple']],
//     t_right: [pos[1], pos[5], pos[6], pos[9], ['purple']],
//     t_180: [pos[4], pos[5], pos[6], pos[9], ['purple']],
//     l: [pos[4], pos[5], pos[6], pos[2], ['orange']],
//     l_left: [pos[0], pos[1], pos[5], pos[9], ['orange']],
//     l_right: [pos[1], pos[5], pos[9], pos[10], ['orange']],
//     l_180: [pos[4], pos[5], pos[6], pos[10], ['orange']],
//     j: [pos[4], pos[0], pos[5], pos[6], ['blue']],
//     j_left: [pos[1], pos[5], pos[8], pos[9], ['blue']],
//     j_right: [pos[1], pos[5], pos[9], pos[10], ['blue']],
//     j_180: [pos[4], pos[5], pos[6], pos[8], ['blue']],
//     s: [pos[4], pos[5], pos[1], pos[2], ['green']],
//     s_left: [pos[0], pos[4], pos[5], pos[9], ['green']],
//     s_right: [pos[1], pos[5], pos[6], pos[10], ['green']],
//     s_180: [pos[4], pos[5], pos[9], pos[10], ['green']],
//     z: [pos[0], pos[1], pos[5], pos[6], ['red']],
//     z_left: [pos[1], pos[4], pos[5], pos[8], ['red']],
//     z_right: [pos[2], pos[5], pos[6], pos[9], ['red']],
//     z_180: [pos[5], pos[6], pos[8], pos[9], ['red']]
// }


// for(let i = 0; i < 4; i++){
//     table.rows[shape.s[i][1]].cells[shape.s[i][0]].style.backgroundColor = shape.s[4];
// }


document.addEventListener('keydown', () => {
    if(event.keyCode === 37){
        x--;
    }
    else if(event.keyCode === 39){
        x++;
    }
    else if(event.keyCode === 40){
        y++;
    }
})


// 좌37 상38 우39 하40



for(let i = 0; i < 20; i++){

    setTimeout(function () {

        const pos = [[x-1, y-1], [x, y-1], [x+1, y-1], [x+2, y-1], [x-1, y], [x, y], [x+1, y], [x+2, y], [x-1, y+1], [x, y+1], [x+1, y+1], [x+2, y+1], [x-1, y+2], [x, y+2], [x+1, y+2], [x+2, y+2]];

        const shape = {
            i: [pos[4], pos[5], pos[6], pos[7], ['skyblue']],
            i_90: [pos[1], pos[5], pos[9], pos[13], ['skyblue']],
            o: [pos[1], pos[2], pos[5], pos[6], ['yellow']],
            t: [pos[1], pos[4], pos[5], pos[6], ['purple']],
            t_left: [pos[1], pos[4], pos[5], pos[9], ['purple']],
            t_right: [pos[1], pos[5], pos[6], pos[9], ['purple']],
            t_180: [pos[4], pos[5], pos[6], pos[9], ['purple']],
            l: [pos[4], pos[5], pos[6], pos[2], ['orange']],
            l_left: [pos[0], pos[1], pos[5], pos[9], ['orange']],
            l_right: [pos[1], pos[5], pos[9], pos[10], ['orange']],
            l_180: [pos[4], pos[5], pos[6], pos[10], ['orange']],
            j: [pos[4], pos[0], pos[5], pos[6], ['blue']],
            j_left: [pos[1], pos[5], pos[8], pos[9], ['blue']],
            j_right: [pos[1], pos[5], pos[9], pos[10], ['blue']],
            j_180: [pos[4], pos[5], pos[6], pos[8], ['blue']],
            s: [pos[4], pos[5], pos[1], pos[2], ['green']],
            s_left: [pos[0], pos[4], pos[5], pos[9], ['green']],
            s_right: [pos[1], pos[5], pos[6], pos[10], ['green']],
            s_180: [pos[4], pos[5], pos[9], pos[10], ['green']],
            z: [pos[0], pos[1], pos[5], pos[6], ['red']],
            z_left: [pos[1], pos[4], pos[5], pos[8], ['red']],
            z_right: [pos[2], pos[5], pos[6], pos[9], ['red']],
            z_180: [pos[5], pos[6], pos[8], pos[9], ['red']]
        }

        y++;

        for(let j = 0; j < 4; j++){
            table.rows[shape.s[j][1]-1].cells[shape.s[j][0]].style.backgroundColor = '';
            table.rows[shape.s[j][1]].cells[shape.s[j][0]].style.backgroundColor = shape.s[4];
        }
        
    }, 500*i)
}







const table = document.querySelector('table');
let newTr = 0;
let x = 0;
let y = 0;
let p = 0;

for(let tr = 0; tr < 20; tr++){
    newTr = table.appendChild(document.createElement('tr'));
    for(let td = 0; td < 10; td++){
        newTr.appendChild(document.createElement('td'));
    }
}

setInterval(function () {
    if(sessionStorage.getItem('jsonX') === null){
        sessionStorage.setItem('jsonX', 4);
        sessionStorage.setItem('jsonY', 2);
        sessionStorage.setItem('jsonP', 0);
    }

    x = JSON.parse(sessionStorage.getItem('jsonX'));
    y = JSON.parse(sessionStorage.getItem('jsonY'));
    p = JSON.parse(sessionStorage.getItem('jsonP'));

    y++;

    if(y > 20){
        y = 0;
    }
    

    sessionStorage.setItem('jsonY', JSON.stringify(y));

    console.log(x,y,p);

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
        z: [pos[0], pos[1], pos[5], pos[6], ['red']],
        z_left: [pos[1], pos[4], pos[5], pos[8], ['red']],
        z_right: [pos[2], pos[5], pos[6], pos[9], ['red']],
        z_180: [pos[5], pos[6], pos[8], pos[9], ['red']]
    }
const s = {
    position: 
    [[pos[4], pos[5], pos[2], pos[1]], 
    [pos[10], pos[6], pos[5], pos[1]],
    [pos[4], pos[5], pos[2], pos[1]], 
    [pos[10], pos[6], pos[5], pos[1]]],
    color: 'green'
}

    for(let i = 0; i < 4; i++){
        table.rows[s.position[p][i][1]-1].cells[s.position[p][i][0]].style.backgroundColor = '';
        table.rows[s.position[p][i][1]].cells[s.position[p][i][0]].style.backgroundColor = s.color;
    }
console.log(s.position[p]);
},600);



document.addEventListener('keydown', () => {
    // 좌37 상38 우39 하40
    x = JSON.parse(sessionStorage.getItem('jsonX'));
    y = JSON.parse(sessionStorage.getItem('jsonY'));
    p = JSON.parse(sessionStorage.getItem('jsonP'));
    if(event.keyCode === 37){
        x--;
    }
    else if(event.keyCode === 39){
        x++;
    }
    else if(event.keyCode === 40){
        y++;
    }
    else if(event.keyCode === 32){
        y = 18;
    }
    else if(event.keyCode === 38){
        p++;
        if(p > 3){
            p = 0;
        }
    }
    sessionStorage.setItem('jsonX', JSON.stringify(x));
    sessionStorage.setItem('jsonY', JSON.stringify(y));
    sessionStorage.setItem('jsonP', JSON.stringify(p));
    location.reload();
});













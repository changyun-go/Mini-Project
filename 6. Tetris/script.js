const table = document.querySelector('table');
const leftKey = document.querySelector('#left-key');
const rightKey = document.querySelector('#right-key');
const downKey = document.querySelector('#down-key');
const upKey = document.querySelector('#up-key');
let newTr = 0;
let x = 0;
let y = 0;
let p = 0;
let randomItem = '';
let mino = '';
let detect = 22;

const randomBox = ['i', 'o', 't', 'l', 'j', 's', 'z'];
    
function random () {
    randomItem = randomBox[Math.floor(Math.random() * randomBox.length)];
    sessionStorage.setItem('randomItem', JSON.stringify(randomItem));
}

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
    randomItem = JSON.parse(sessionStorage.getItem('randomItem'));

    y++;

    if(y >= detect){
        random();
        y = 0;
    }

    sessionStorage.setItem('jsonY', JSON.stringify(y));
    
    console.log(x,y,p);
    
    
    const pos = [[x-1, y-1], [x, y-1], [x+1, y-1], [x+2, y-1], [x-1, y], [x, y], [x+1, y], [x+2, y], [x-1, y+1], [x, y+1], [x+1, y+1], [x+2, y+1], [x-1, y+2], [x, y+2], [x+1, y+2], [x+2, y+2]];
    
    const i = {
        position: 
        [[pos[7], pos[6], pos[5], pos[4]], 
        [pos[13], pos[9], pos[5], pos[1]],
        [pos[7], pos[6], pos[5], pos[4]], 
        [pos[13], pos[9], pos[5], pos[1]]],
        color: 'skyblue'
    }
    const o = {
        position: 
        [[pos[6], pos[5], pos[2], pos[1]], 
        [pos[6], pos[5], pos[2], pos[1]],
        [pos[6], pos[5], pos[2], pos[1]], 
        [pos[6], pos[5], pos[2], pos[1]]],
        color: 'yellow'
    }
    const t = {
        position: 
        [[pos[6], pos[5], pos[4], pos[1]], 
        [pos[9], pos[6], pos[5], pos[1]],
        [pos[9], pos[6], pos[5], pos[4]], 
        [pos[9], pos[5], pos[4], pos[1]]],
        color: 'purple'
    }
    const l = {
        position: 
        [[pos[6], pos[5], pos[4], pos[2]], 
        [pos[10], pos[9], pos[5], pos[1]],
        [pos[8], pos[6], pos[5], pos[4]], 
        [pos[9], pos[5], pos[1], pos[0]]],
        color: 'orange'
    }
    const j = {
        position: 
        [[pos[6], pos[5], pos[4], pos[0]], 
        [pos[9], pos[5], pos[2], pos[1]],
        [pos[10], pos[6], pos[5], pos[4]], 
        [pos[9], pos[8], pos[5], pos[1]]],
        color: 'blue'
    }
    const s = {
        position: 
        [[pos[4], pos[5], pos[2], pos[1]], 
        [pos[10], pos[6], pos[5], pos[1]],
        [pos[4], pos[5], pos[2], pos[1]], 
        [pos[10], pos[6], pos[5], pos[1]]],
        color: 'green'
    }
    
    const z = {
        position: 
        [[pos[6], pos[5], pos[1], pos[0]], 
        [pos[8], pos[5], pos[4], pos[1]],
        [pos[6], pos[5], pos[1], pos[0]], 
        [pos[8], pos[5], pos[4], pos[1]]],
        color: 'red'      
    }

    mino = eval(randomItem);

    for(let i = 0; i < 4; i++){
        table.rows[mino.position[p][i][1]-1].cells[mino.position[p][i][0]].style.backgroundColor = '';
        table.rows[mino.position[p][i][1]].cells[mino.position[p][i][0]].style.backgroundColor = mino.color;
    }

    let detector = 0;
    for(let i = 0; i < 4; i++){
        detector = table.rows[mino.position[p][0][1]+1].cells[mino.position[p][0][0]].style.backgroundColor;
    }
    console.log(detector);

    if(detector.length > 0){
        console.log(123);
        console.log(y);
        detect = y;
        
    }

},300);


document.addEventListener('keydown', () => {
    // 좌37 상38 우39 하40
    x = JSON.parse(sessionStorage.getItem('jsonX'));
    y = JSON.parse(sessionStorage.getItem('jsonY'));
    p = JSON.parse(sessionStorage.getItem('jsonP'));

    switch (event.keyCode) {
        case 37:
            x--;
            break;
        case 39:
            x++;
            break;
        case 40:
            y++;
            break;
        case 32:
            y = 18;
            break;
        case 38:
            p++;
            if(p > 3){
                p = 0;
            }
            break;
    }

    sessionStorage.setItem('jsonX', JSON.stringify(x));
    sessionStorage.setItem('jsonY', JSON.stringify(y));
    sessionStorage.setItem('jsonP', JSON.stringify(p));
    location.reload();
});

document.addEventListener('click', () => {
    x = JSON.parse(sessionStorage.getItem('jsonX'));
    y = JSON.parse(sessionStorage.getItem('jsonY'));
    p = JSON.parse(sessionStorage.getItem('jsonP'));

    switch (event.target.id) {
        case 'left-key':
            x--;
            break;
        case 'right-key':
            x++;
            break;
        case 'down-key':
            y++;
            break;
        case 'space':
            y = 18;
            break;
        case 'up-key':
            p++;
            if(p > 3){
                p = 0;
            }
            break;
    }

    sessionStorage.setItem('jsonX', JSON.stringify(x));
    sessionStorage.setItem('jsonY', JSON.stringify(y));
    sessionStorage.setItem('jsonP', JSON.stringify(p));
    location.reload();
});












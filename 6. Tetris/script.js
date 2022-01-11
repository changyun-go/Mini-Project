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
let mino_x = [];
let max_x = 0;
let min_x = 0;
let mino_y = [];
let max_y = 0;
let min_y = 0;
let blockSave = [];
let c = 0;


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

sessionStorage.setItem('leftLock', 0);
sessionStorage.setItem('rightLock', 0);
sessionStorage.setItem('downLock', 0);

setInterval(function () {
    if(sessionStorage.getItem('jsonX') === null){
        sessionStorage.setItem('jsonX', 4);
        sessionStorage.setItem('jsonY', 0);
        sessionStorage.setItem('jsonP', 0);
        random();
    }


    x = JSON.parse(sessionStorage.getItem('jsonX'));
    y = JSON.parse(sessionStorage.getItem('jsonY'));
    p = JSON.parse(sessionStorage.getItem('jsonP'));
    randomItem = JSON.parse(sessionStorage.getItem('randomItem'));
    blockSave = JSON.parse(sessionStorage.getItem('blockSave'));


    if(blockSave !== null){
        for(let tr = 0; tr < 20; tr++){
            for(let td = 0; td < 10; td++){
                table.rows[tr].cells[td].style.backgroundColor = blockSave[tr*10 + td];
            }
        }
    }

    y++;


    sessionStorage.setItem('jsonY', JSON.stringify(y));

    console.log(x,y,p);

    // 상대적인 16칸짜리 좌표를 생성
    const pos = [[x-1, y-1], [x, y-1], [x+1, y-1], [x+2, y-1], [x-1, y], [x, y], [x+1, y], [x+2, y], [x-1, y+1], [x, y+1], [x+1, y+1], [x+2, y+1], [x-1, y+2], [x, y+2], [x+1, y+2], [x+2, y+2]];

    // 좌표를 이용한 블록 데이터
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

    const test = {
        position:
        [[pos[7], pos[6], pos[5], pos[4], [x-2, y]],
        [pos[7], pos[6], pos[5], pos[4], [x-2, y]],
        [pos[7], pos[6], pos[5], pos[4], [x-2, y]],
        [pos[7], pos[6], pos[5], pos[4],  [x-2, y]]],
        color: 'skyblue'
    }

    mino = eval(randomItem);

    // mino = test;


    for(let i = 0; i < 4; i++){
        // 낙하 중인 블럭 궤적 지우기
        table.rows[mino.position[p][i][1]-1].cells[mino.position[p][i][0]].style.backgroundColor = '';
        // 블럭 색깔 생성
        table.rows[mino.position[p][i][1]].cells[mino.position[p][i][0]].style.backgroundColor = mino.color;
       
    }

    
    for(let i = 0; i < 4; i++){
        mino_x = [];
        mino_y = [];
        for(let j = 0; j < 4; j++){
            // x값이 일치하는 좌표 찾기
            if(mino.position[p][i][0] === mino.position[p][j][0]){
                // y값들을 배열에 넣으면서 max값 찾기
                mino_y.push(mino.position[p][j][1]);
                max_y = Math.max.apply(null, mino_y);
                min_y = Math.min.apply(null, mino_y);
            }
            
        }
        // console.log(max_y);
        // console.log(min_y);

        for(let j = 0; j < 4; j++){
            // x값이 일치하는 좌표 찾기
            if(mino.position[p][i][1] === mino.position[p][j][1]){
                // y값들을 배열에 넣으면서 max값 찾기
                mino_x.push(mino.position[p][j][0]);
                max_x = Math.max.apply(null, mino_x);
                min_x = Math.min.apply(null, mino_x);
            }

        }

         // 필드 영역 벗어나면 Lock 활성화
        if(min_x <= 0 || table.rows[mino.position[p][i][1]].cells[min_x - 1].style.backgroundColor !== ''){
            sessionStorage.setItem('leftLock', 1);
        }

        if(max_x >= 9 || table.rows[mino.position[p][i][1]].cells[max_x + 1].style.backgroundColor !== ''){
            sessionStorage.setItem('rightLock', 1);
        }

        if(max_y + 1 >= 19 || table.rows[max_y + 2].cells[mino.position[p][i][0]].style.backgroundColor !== ''){
            sessionStorage.setItem('downLock', 1);
        }

        // 도형에서 각 x값마다 가장 큰 y값을 가지고 한 칸 앞에 주어진 셀의 색상 판별
        if(max_y >= 19 || table.rows[max_y + 1].cells[mino.position[p][i][0]].style.backgroundColor !== ''){
            console.log(min_y);
            if(min_y === 1){
                blockSave = new Array(200);
                sessionStorage.setItem('blockSave', JSON.stringify(blockSave));
                location.reload();
            }
            else{
                blockSave = [];
                for(let tr = 0; tr < 20; tr++){
                    c = 0;
                    for(let td = 0; td < 10; td++){
                        blockSave.push(table.rows[tr].cells[td].style.backgroundColor);
                        if(table.rows[tr].cells[td].style.backgroundColor !== ''){
                            c++;
                        }
                    }
                    if(c === 10){
                        blockSave.splice(tr*10, 10);
                        for(let k = 0; k < 10; k++){
                            blockSave.unshift('');
                        }
                        for(let l = tr+1; l < 20; l++){
                            for(let m = 0; m < 10; m++){
                                blockSave.push(table.rows[l].cells[m].style.backgroundColor);
                            }
                        }
                        location.reload();
                    }
                    
                }
                sessionStorage.setItem('blockSave', JSON.stringify(blockSave));
                random();
                sessionStorage.setItem('jsonX', 4);
                sessionStorage.setItem('jsonY', 0);

            }
        }
    }

},300);


document.addEventListener('keydown', () => {
    x = JSON.parse(sessionStorage.getItem('jsonX'));
    y = JSON.parse(sessionStorage.getItem('jsonY'));
    p = JSON.parse(sessionStorage.getItem('jsonP'));

   

    switch (event.keyCode) {
        case 37:
            if(JSON.parse(sessionStorage.getItem('leftLock')) === 0){
                x--;
                y--;
            }
            break;
        case 39:
            if(JSON.parse(sessionStorage.getItem('rightLock')) === 0){
                x++;
                y--;
            }
            break;
        case 40: 
            if(JSON.parse(sessionStorage.getItem('downLock')) === 0){
                y++;
            }
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
            if(JSON.parse(sessionStorage.getItem('leftLock')) === 0){
                x--;
                y--;
            }
            break;
        case 'right-key':
            if(JSON.parse(sessionStorage.getItem('rightLock')) === 0){
                x++;
                y--;
            }
            break;
        case 'down-key':
            if(JSON.parse(sessionStorage.getItem('downLock')) === 0){
                y++;
            }
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












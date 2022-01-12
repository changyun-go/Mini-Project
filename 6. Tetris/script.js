const table = document.querySelector('table');
const leftKey = document.querySelector('#left-key');
const rightKey = document.querySelector('#right-key');
const downKey = document.querySelector('#down-key');
const upKey = document.querySelector('#up-key');
const comboDisplay = document.querySelector('#combo-display');
const levelDisplay = document.querySelector('#level-display');
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
let combo = 0;
let speed = 500;
let level = 1;
let move = 19;

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
sessionStorage.setItem('turnLock', 0);

if(sessionStorage.getItem('jsonX') === null){
    sessionStorage.setItem('jsonX', 4);
    sessionStorage.setItem('jsonY', 0);
    sessionStorage.setItem('jsonP', 0);
    sessionStorage.setItem('combo', 0);
    for(let tr = 0; tr < 20; tr++){
        for(let td = 0; td < 10; td++){
            blockSave.push('');
        }
    }
    sessionStorage.setItem('blockSave', JSON.stringify(blockSave));
    random();
}

// 콤보 표시
combo = JSON.parse(sessionStorage.getItem('combo'));
comboDisplay.textContent = `${combo} COMBO`;
// 속도 조절
if(combo === 15){
    blockSave = [];
    for(let k = 0; k < 20; k++){
        for(let l = 0; l < 10; l++){
            blockSave.push('');
        }
    }
    sessionStorage.setItem('blockSave', JSON.stringify(blockSave));
    sessionStorage.setItem('jsonP', 0);
    sessionStorage.setItem('combo', 0);
    confirm('WIN🎉\n다시 도전하시겠습니까?');
    location.reload();
}
else if(combo >= 12){
    speed = 100;
    level = 7;
}
else if(combo >= 10){
    speed = 150;
    level = 6;
}
else if(combo >= 8){
    speed = 200;
    level = 5;
}
else if(combo >= 6){
    speed = 250;
    level = 4;
}
else if(combo >= 4){
    speed = 300;
    level = 3;
}
else if(combo >= 2){
    speed = 400;
    level = 2;
}
// 레벨 표시
levelDisplay.textContent = `LEVEL ${level}`;

setInterval(function () {
    x = JSON.parse(sessionStorage.getItem('jsonX'));
    y = JSON.parse(sessionStorage.getItem('jsonY'));
    p = JSON.parse(sessionStorage.getItem('jsonP'));
    combo = JSON.parse(sessionStorage.getItem('combo'));
    speed = JSON.parse(sessionStorage.getItem('speed'));
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

    const pos = [[x-1, y-1], [x, y-1], [x+1, y-1], [x+2, y-1], [x-1, y], [x, y], [x+1, y], [x+2, y], [x-1, y+1], [x, y+1], [x+1, y+1], [x+2, y+1], [x-1, y+2], [x, y+2], [x+1, y+2], [x+2, y+2]];

    // 상대적인 16칸짜리 좌표를 생성
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
    for(let i = 0; i < 4; i++){// -> 4
        // 낙하 중인 블럭 궤적 지우기
        if(mino.position[p][i][1]-1 >= 0){
            table.rows[mino.position[p][i][1]-1].cells[mino.position[p][i][0]].style.backgroundColor = '';
        }
        // 블럭 색깔 생성
        table.rows[mino.position[p][i][1]].cells[mino.position[p][i][0]].style.backgroundColor = mino.color;

        let next_p = p + 1;

        if(next_p > 3){
            next_p = 0;
        }
        
        if(mino.position[next_p][i][0] <= 0 || mino.position[next_p][i][0] >= 10 || mino.position[next_p][i][1] >= 19 || blockSave[mino.position[next_p][i][1]*10 + mino.position[next_p][i][0]] !== ''){
            sessionStorage.setItem('turnLock', 1);
        }

         
        
        
    }
    
    let targetArr = [];
    
    for(let i = 0; i < 4; i++){// -> 4
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

        for(let j = 0; j < 4; j++){
            // x값이 일치하는 좌표 찾기
            if(mino.position[p][i][1] === mino.position[p][j][1]){
                // y값들을 배열에 넣으면서 max값 찾기
                mino_x.push(mino.position[p][j][0]);
                max_x = Math.max.apply(null, mino_x);
                min_x = Math.min.apply(null, mino_x);
            }

        }
        let current_row = [];

        for(let j = 0; j < 20; j++){
            if(blockSave[j*10 + mino.position[p][i][0]] !== ''){
                current_row.push(j);
            }
        }
        let target = Math.min.apply(null, current_row);
        
        if(target === Infinity){
            target = 20
        }
        targetArr.push(target - max_y - 2);
        let jump = Math.min.apply(null, targetArr);        
        sessionStorage.setItem('jump', jump);


         // 필드 영역 벗어 나면 Lock 활성화
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
            if(min_y <= 0){
                blockSave = [];
                for(let tr = 0; tr < 20; tr++){
                    for(let td = 0; td < 10; td++){
                        blockSave.push('');
                    }
                } 
                sessionStorage.setItem('blockSave', JSON.stringify(blockSave));
                sessionStorage.setItem('jsonP', 0);
                sessionStorage.setItem('combo', 0);
                confirm('LOSE😭\n다시 도전하시겠습니까?')
                location.reload();
                break;
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
                        sessionStorage.setItem('combo', combo + 1);
                        location.reload();
                    }
                    
                }
                sessionStorage.setItem('blockSave', JSON.stringify(blockSave));
                sessionStorage.setItem('jsonX', 4);
                sessionStorage.setItem('jsonY', -1);
                random();
            }
        }
    }

},speed);





document.addEventListener('keydown', () => {
    x = JSON.parse(sessionStorage.getItem('jsonX'));
    y = JSON.parse(sessionStorage.getItem('jsonY'));
    p = JSON.parse(sessionStorage.getItem('jsonP'));
    jump = JSON.parse(sessionStorage.getItem('jump'));
    

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
            y = y + jump;
            break;
        case 38: 
            if(JSON.parse(sessionStorage.getItem('turnLock')) === 0){
                p++;
                y--;
                if(p > 3){
                    p = 0;
                }
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
    jump = JSON.parse(sessionStorage.getItem('jump'));

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
            y = y + jump;
            break;
        case 'up-key':
            if(JSON.parse(sessionStorage.getItem('turnLock')) === 0){
                p++;
                y--;
                if(p > 3){
                    p = 0;
                }
            }
            break;
    }

    sessionStorage.setItem('jsonX', JSON.stringify(x));
    sessionStorage.setItem('jsonY', JSON.stringify(y));
    sessionStorage.setItem('jsonP', JSON.stringify(p));
    location.reload();
});












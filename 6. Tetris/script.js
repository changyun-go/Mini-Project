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
let randomItem = '';
let mino = '';
let p = 0;
let next_p = 0;

let mino_x = [];
let max_x = 0;
let min_x = 0;
let mino_y = [];
let max_y = 0;
let min_y = 0;
let blockSave = [];
let count = 0;

let targetArr = [];
let target = 0;
let jump = 0;

let combo = 0;
let speed = 500;
let level = 1;

const randomBox = ['i', 'o', 't', 'l', 'j', 's', 'z'];

function random () {
    randomItem = randomBox[Math.floor(Math.random() * randomBox.length)];
    sessionStorage.setItem('randomItem', JSON.stringify(randomItem));
}

// 필드 생성
for(let tr = 0; tr < 20; tr++){
    newTr = table.appendChild(document.createElement('tr'));
    for(let td = 0; td < 10; td++){
        newTr.appendChild(document.createElement('td'));
    }
}

// 최초 실행 시 세션 스토리지 초기값 설정
if(sessionStorage.getItem('x') === null){
    sessionStorage.setItem('x', 4);
    sessionStorage.setItem('y', -1);
    sessionStorage.setItem('p', 0);
    sessionStorage.setItem('combo', 0);
    for(let tr = 0; tr < 20; tr++){
        for(let td = 0; td < 10; td++){
            blockSave.push('');
        }
    }
    sessionStorage.setItem('blockSave', JSON.stringify(blockSave));
    random();
}

combo = JSON.parse(sessionStorage.getItem('combo'));
comboDisplay.textContent = `${combo} COMBO`;

if(combo === 15){
    blockSave = [];
    for(let k = 0; k < 20; k++){
        for(let l = 0; l < 10; l++){
            blockSave.push('');
        }
    }
    sessionStorage.setItem('blockSave', JSON.stringify(blockSave));
    sessionStorage.setItem('p', 0);
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

levelDisplay.textContent = `LEVEL ${level}`;

// (speed)ms마다 반복
setInterval(function () {
    x = JSON.parse(sessionStorage.getItem('x'));
    y = JSON.parse(sessionStorage.getItem('y'));
    p = JSON.parse(sessionStorage.getItem('p'));
    blockSave = JSON.parse(sessionStorage.getItem('blockSave'));
    combo = JSON.parse(sessionStorage.getItem('combo'));
    speed = JSON.parse(sessionStorage.getItem('speed'));

    // 방향키 Lock 초기화
    sessionStorage.setItem('leftLock', 0);
    sessionStorage.setItem('rightLock', 0);
    sessionStorage.setItem('downLock', 0);
    sessionStorage.setItem('turnLock', 0);

    // 필드에 있던 블록 깔아주기
    for(let tr = 0; tr < 20; tr++){
        for(let td = 0; td < 10; td++){
            table.rows[tr].cells[td].style.backgroundColor = blockSave[tr*10 + td];
        }
    }

    y++;
    sessionStorage.setItem('y', JSON.stringify(y));

    // 0부터 15까지의 상대좌표 생성
    const pos = [[x-1, y-1], [x, y-1], [x+1, y-1], [x+2, y-1], [x-1, y], [x, y], [x+1, y], [x+2, y], [x-1, y+1], [x, y+1], [x+1, y+1], [x+2, y+1], [x-1, y+2], [x, y+2], [x+1, y+2], [x+2, y+2]];

    // 미노의 좌표 데이터 생성
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

    // random 함수에서 받아온 미노 문자열을 표현식으로 변환
    randomItem = JSON.parse(sessionStorage.getItem('randomItem'));
    mino = eval(randomItem);

    for(let i = 0; i < 4; i++){
        // 낙하 중인 블록의 궤적 지우기
        if(mino.position[p][i][1]-1 >= 0){
            table.rows[mino.position[p][i][1]-1].cells[mino.position[p][i][0]].style.backgroundColor = '';
        }
        // 블록 색깔 생성
        table.rows[mino.position[p][i][1]].cells[mino.position[p][i][0]].style.backgroundColor = mino.color;

        next_p = p + 1;

        if(next_p > 3){
            next_p = 0;
        }
        // 현재 미노를 회전시켰을 때 다른 블록과 간섭이 생기면 회전 기능을 Lock
        if(mino.position[next_p][i][0] <= 0 || mino.position[next_p][i][0] >= 10 || mino.position[next_p][i][1] >= 19 || blockSave[mino.position[next_p][i][1]*10 + mino.position[next_p][i][0]] !== ''){
            sessionStorage.setItem('turnLock', 1);
        }
    }

    targetArr = [];
    for(let i = 0; i < 4; i++){
        mino_x = [];
        mino_y = [];
        for(let j = 0; j < 4; j++){
            // x값이 일치하는 좌표 찾기
            if(mino.position[p][i][0] === mino.position[p][j][0]){
                // y값들을 배열에 넣으면서 max, min값 구하기
                mino_y.push(mino.position[p][j][1]);
                max_y = Math.max.apply(null, mino_y);
                min_y = Math.min.apply(null, mino_y);
            }
        }

        for(let j = 0; j < 4; j++){
            // y값이 일치하는 좌표 찾기
            if(mino.position[p][i][1] === mino.position[p][j][1]){
                // x값들을 배열에 넣으면서 max, min값 구하기
                mino_x.push(mino.position[p][j][0]);
                max_x = Math.max.apply(null, mino_x);
                min_x = Math.min.apply(null, mino_x);
            }
        }

        let column = [];

        // 미노의 x값에 해당하는 필드의 모든 y값 중 블록이 존재하는 위치값 찾기
        for(let j = 0; j < 20; j++){
            if(blockSave[j*10 + mino.position[p][i][0]] !== ''){
                column.push(j);
            }
        } 
        // 가장 미노와 가까운 위치 구하기 
        target = Math.min.apply(null, column);
        // 최초 실행 시
        if(target === Infinity){
            target = 20
        }
        // 미노와 하단 블록 과의 거리 구하기
        targetArr.push(target - max_y - 2);
        jump = Math.min.apply(null, targetArr);

        if(jump < 0){
            jump = 0;
        }
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

        // 미노가 쌓일 때
        if(max_y >= 19 || table.rows[max_y + 1].cells[mino.position[p][i][0]].style.backgroundColor !== ''){
            // 미노가 최상단에 닿을 때
            if(min_y <= 0){
                blockSave = [];
                for(let tr = 0; tr < 20; tr++){
                    for(let td = 0; td < 10; td++){
                        blockSave.push('');
                    }
                }
                sessionStorage.setItem('blockSave', JSON.stringify(blockSave));
                sessionStorage.setItem('p', 0);
                sessionStorage.setItem('combo', 0);
                confirm('LOSE😭\n다시 도전하시겠습니까?')
                location.reload();
                break;
            }
            else{
                // 배열에 현재 필드의 블록 정보를 저장
                blockSave = [];
                for(let tr = 0; tr < 20; tr++){
                    count = 0;
                    for(let td = 0; td < 10; td++){
                        blockSave.push(table.rows[tr].cells[td].style.backgroundColor);
                        if(table.rows[tr].cells[td].style.backgroundColor !== ''){
                            count++;
                        }
                    }
                    // 한 줄에 블록이 10개 있을 때
                    if(count === 10){
                        // 해당 줄을 배열에서 제거
                        blockSave.splice(tr*10, 10);
                        // 맨 앞에 한 줄 추가
                        for(let k = 0; k < 10; k++){
                            blockSave.unshift('');
                        }
                        for(let l = tr+1; l < 20; l++){
                            for(let m = 0; m < 10; m++){
                                blockSave.push(table.rows[l].cells[m].style.backgroundColor);
                            }
                        }
                        // 콤보 +1
                        sessionStorage.setItem('combo', combo + 1);
                        location.reload();
                    }

                }
                sessionStorage.setItem('blockSave', JSON.stringify(blockSave));
                sessionStorage.setItem('x', 4);
                sessionStorage.setItem('y', -1);
                random();
            }
        }
    }

},speed);

document.addEventListener('keydown', () => {
    x = JSON.parse(sessionStorage.getItem('x'));
    y = JSON.parse(sessionStorage.getItem('y'));
    p = JSON.parse(sessionStorage.getItem('p'));
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

    sessionStorage.setItem('x', JSON.stringify(x));
    sessionStorage.setItem('y', JSON.stringify(y));
    sessionStorage.setItem('p', JSON.stringify(p));
    location.reload();
});

document.addEventListener('click', () => {
    x = JSON.parse(sessionStorage.getItem('x'));
    y = JSON.parse(sessionStorage.getItem('y'));
    p = JSON.parse(sessionStorage.getItem('p'));
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

    sessionStorage.setItem('x', JSON.stringify(x));
    sessionStorage.setItem('y', JSON.stringify(y));
    sessionStorage.setItem('p', JSON.stringify(p));
    location.reload();
});












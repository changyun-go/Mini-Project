const html = document.querySelector("html");
const input = document.querySelector(".todo-input");
const todo = document.querySelector("#todo");
const topMenu = document.createElement("div");
topMenu.id = "top-menu";
const allDone = document.createElement("button")
allDone.id = "all-done";
allDone.textContent = "All";
const all = document.createElement("input");
all.type = "radio";
all.checked = true;
all.id = "all";
const active = document.createElement("input");
active.type = "radio";
active.id = "active";
const completed = document.createElement("input");
completed.type = "radio";
completed.id = "completed";
const countDisplay = document.createElement("div");
countDisplay.id = "count-display";
const clearBtn = document.createElement("button");
clearBtn.id = "clear-btn";
clearBtn.textContent = "Clear";

let preEvent = 0;
let listCount = 0;
let checkCount = 0;

topMenu.appendChild(allDone);
topMenu.appendChild(all);
topMenu.appendChild(active);
topMenu.appendChild(completed);

function submit(){
    if((input.value).replace(/\s/g,"").length > 0){
        const newList = document.createElement("li");
        newList.innerHTML = `<input type='checkbox'> <span> ${input.value} </span> <button onClick='removeBtn()' id='remove-btn'>🗑️</button>`;
        todo.appendChild(newList);
        input.value = null;
        listCount++;
        todo.insertBefore(topMenu, todo.firstChild);
        todo.insertBefore(countDisplay, null);
        countDisplay.textContent = `남은 할 일 ${listCount}개`;
        newList.onclick = function(){
            if(event.target.checked === true && event.target.type === 'checkbox'){
                listCount--;
                checkCount++;
                if(listCount < 0){
                    listCount = 0;
                }
            }
            else if(event.target.checked === false && event.target.type === 'checkbox'){
                listCount++;
                checkCount--;
            }
            countDisplay.textContent = `남은 할 일 ${listCount}개`;
        }
    }
}

todo.ondblclick = function(){
    if(event.target.tagName === "SPAN"){
        event.target.innerHTML = `<input class="change-text" value=${event.target.textContent}>`
        preEvent = event.target;
    }
}

todo.onkeypress = function(){
    if(event.keyCode === 13){
        changeText();
    }
}

html.addEventListener("click", function(e){
    if(preEvent.children[0] !== e.target){
        changeText();
    }
})

html.addEventListener("touchstart", function(){
    if(event.target.tagName === "SPAN"){
        event.target.innerHTML = `<input class="change-text" value=${event.target.textContent}>`
        preEvent = event.target;
    }
    if(preEvent.children[0] !== e.target){ 
        changeText();
    }
})

function changeText(){
    if((preEvent.children[0].value).replace(/\s/g,"").length === 0){
        if(preEvent.parentElement.children[0].checked === false){
            listCount--;
        }
        else{
            checkCount--;
        }
        preEvent.parentElement.remove();
        preEvent.remove();
    }
    else{
        preEvent.textContent = preEvent.children[0].value;
    }
    countDisplay.textContent = `남은 할 일 ${listCount}개`;
    remover();
}


function removeBtn(){
    event.target.parentElement.remove();
    if(event.target.parentElement.children[0].checked === false){
        listCount--;
    }
    else{
        checkCount--;
    }
    countDisplay.textContent = `남은 할 일 ${listCount}개`;
    remover();
}

function remover(){
    if(listCount === 0 && checkCount === 0){
        topMenu.remove();
        countDisplay.remove();
    }
    if(checkCount === 0){
        clearBtn.remove();
    }
}

allDone.onclick = function(){
    let checkArr = document.querySelectorAll('input[type="checkbox"]');
    let f = 0;
    for(let i = 0; i < checkArr.length; i++){
        if(checkArr[i].checked === false){
            f++;
            checkArr[i].checked = true;
            listCount--;
            checkCount++;
        }
    }
    if(f === 0){
        for(let i = 0; i < checkArr.length; i++){
        checkArr[i].checked = false;
        listCount++;
        checkCount--;
        }
    }
    toggle();
    countDisplay.textContent = `남은 할 일 ${listCount}개`;
}

document.addEventListener("keypress", toggle);

html.addEventListener("click", function(e){
    if(input !== e.target){
        submit();
        toggle();
    }
})
function toggle(){
    const listArr = Array.from(document.querySelectorAll("li"));
    all.onclick = function(){
        all.checked = true;
        active.checked = false;
        completed.checked = false;
    }
    active.onclick = function(){
        active.checked = true;
        completed.checked = false;
        all.checked = false;
    }
    completed.onclick = function(){
        completed.checked = true;
        all.checked = false;
        active.checked = false;
    }
    if(all.checked === true){
        active.checked = false;
        completed.checked = false;
        for(let i = 0; i < listArr.length; i++){
            listArr[i].classList.remove('hide');
        }
    }
    if(active.checked === true){
        for(let i = 0; i < listArr.length; i++){
            listArr[i].classList.remove('hide');
        }
        function f(list){
            return list.children[0].checked === true;
        }
        let result = listArr.filter(f);
        for(let i = 0; i < listArr.length; i++){
            result[i].classList.add('hide');
        }
    }
    if(completed.checked === true){
        for(let i = 0; i < listArr.length; i++){
            listArr[i].classList.remove('hide');
        }
        function f(list){
            return list.children[0].checked === false;
        }
        let result = listArr.filter(f);
        for(let i = 0; i < listArr.length; i++){
            result[i].classList.add('hide');
        }
    }
    if(checkCount > 0){
        todo.insertBefore(clearBtn, null);
    }
    else{
        clearBtn.remove();
    }
    clearBtn.onclick = function(){
        const listArr = Array.from(document.querySelectorAll("li"));
        function f(list){
            return list.children[0].checked === true;
        }
        let result = listArr.filter(f);
        for(let i = 0; i < listArr.length; i++){
            result[i].remove();
            clearBtn.remove();
        }
        checkCount = 0;
        remover();
    }
}
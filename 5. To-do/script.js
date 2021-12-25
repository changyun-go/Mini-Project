const input = document.querySelector("#todo-input");
const todo = document.querySelector("#todo");
const allDone = document.querySelector("#all-done")
let countDisplay = 0;
let all = 0;
let active = 0;
let completed = 0;
let preEvent = 0;
let listCount = 0;
let checkCount = 0;
let clearBtn = 0;

function enter(){
    const newList = document.createElement("li");
    todo.appendChild(newList);
    newList.innerHTML = `<br> <input type='checkbox'> <span> ${input.value} </span> <button onClick='removeBtn()'>`;
    input.value = null;
    listCount++;
    if(listCount === 1){
        countDisplay = document.createElement("div");
        all = document.createElement("input");
        all.type = "radio";
        all.checked = true;
        active = document.createElement("input");
        active.type = "radio";
        completed = document.createElement("input");
        completed.type = "radio";
    }
    todo.insertBefore(countDisplay, null);
    todo.insertBefore(all, null);
    todo.insertBefore(active, null);
    todo.insertBefore(completed, null);
    countDisplay.textContent = listCount;

clearBtn = document.createElement("button");

    newList.onclick = function(){
        if(event.target.checked === true){
            listCount--;
            checkCount++;
            if(listCount < 0){
                listCount = 0;
            }
        }
        else if(event.target.checked === false){
            listCount++;
            checkCount--;
        }
        countDisplay.textContent = listCount;

        console.log(checkCount);
        if(event.target.type === 'checkbox'){
            if(checkCount > 0){
                todo.insertBefore(clearBtn, null);
            }
            else{
                clearBtn.remove();
            }
        }
    }
    clearBtn.onclick = function(){
        const listArr = Array.from(document.querySelectorAll("li"));
        function f(list){
            return list.children[1].checked === true;
        }
        let result = listArr.filter(f);
        for(let i = 0; i < listArr.length; i++){
            result[i].remove();
            checkCount = 0;
            clearBtn.remove();
        }
    }
}



todo.ondblclick = function(){
    if(event.target.tagName === "SPAN"){
        event.target.innerHTML = `<input value=${event.target.textContent}}>`
    }
    preEvent = event.target;
}

todo.onkeypress = function(){
    if(event.keyCode == 13){
        preEvent.textContent = preEvent.children[0].value;
    }
}

todo.addEventListener("click", function(e){
    if(preEvent.children[0] !== e.target){
        preEvent.textContent = preEvent.children[0].value;
    }
})


function removeBtn(){
    event.target.parentNode.remove();
    if(event.target.parentNode.children[1].checked === false){
        listCount--;
    }
    else{
        checkCount--;
    }
    if(listCount < 0){
        listCount = 0;
    }
    countDisplay.textContent = listCount;
    if(todo.childElementCount === 4){
        countDisplay.remove();
        all.remove();
        active.remove();
        completed.remove();
    }
    if(checkCount === 0){
        clearBtn.remove();
    }
}

allDone.onclick = function(){
    let checkArr = document.querySelectorAll("input");
    let f = 0;
    for(let i = 1; i < checkArr.length; i++){
        if(checkArr[i].checked === false){
            f++;
            checkArr[i].checked = true;
            listCount--;
        }
    }
    if(f === 0){
        for(let i = 1; i < checkArr.length; i++){
        checkArr[i].checked = false;
        listCount++;
        }
    }
    countDisplay.textContent = listCount;
}

todo.addEventListener("click", toggle);
document.addEventListener("keypress", toggle);

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
            return list.children[1].checked === true;
        }
        let result = listArr.filter(f);
        for(let i = 0; i < listArr.length; i++){
            result[i].className = 'hide';
        }
    }
    if(completed.checked === true){
        for(let i = 0; i < listArr.length; i++){
            listArr[i].classList.remove('hide');
        }
        function f(list){
            return list.children[1].checked === false;
        }
        let result = listArr.filter(f);
        for(let i = 0; i < listArr.length; i++){
            result[i].className = 'hide';
        }
    }
}
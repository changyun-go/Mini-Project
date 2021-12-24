const input = document.querySelector("#todo-input");
const todo = document.querySelector("#todo");
const allDone = document.querySelector("#all-done")
let countDisplay = 0;
let all = 0;
let active = 0;
let completed = 0;
let preEvent = 0;
let listCount = 0;

function enter(){
    const newList = document.createElement("li");
    todo.appendChild(newList);
    newList.innerHTML = `<br> <input type='checkbox'> <span> ${input.value} </span> <button onClick='removeBtn()'>`;
    input.value = null;
    listCount++;
    if(listCount === 1){
        countDisplay = document.createElement("div");
        all = document.createElement("button");
        active = document.createElement("input");
        active.type = "radio";
        completed = document.createElement("button");
    }
    todo.insertBefore(countDisplay, null);
    todo.insertBefore(all, null);
    todo.insertBefore(active, null);
    todo.insertBefore(completed, null);
    countDisplay.textContent = listCount;
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

document.addEventListener("click", function(e){
    if(preEvent.children[0] !== e.target){
        preEvent.textContent = preEvent.children[0].value;
    }
})


function removeBtn(){
    event.target.parentNode.remove();
    if(event.target.parentNode.children[1].checked === false){
        listCount--;
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
    console.log(active);
}

todo.onclick = function(){
    if(event.target.checked === true){
        listCount--;
        if(listCount < 0){
            listCount = 0;
        }
    }
    else if(event.target.checked === false){
        listCount++;
    }
    countDisplay.textContent = listCount;
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

document.addEventListener("click", function(v){
    if(v.target === active || active.checked === true){
        const listArr = Array.from(document.querySelectorAll("li"));
        function f(list){
            return list.children[1].checked === true;
        }
        let result = listArr.filter(f);
        for(let i = 0; i < listArr.length; i++){
            result[i].className = 'hide';
        }
    }
});

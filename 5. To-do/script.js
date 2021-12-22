const input = document.querySelector("input");
const todo = document.querySelector("#todo");
let countDisplay = 0;
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
    }
    todo.insertBefore(countDisplay, null);
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
    listCount--;
    countDisplay.textContent = listCount;
    if(listCount === 0){
        countDisplay.remove();
    }
}


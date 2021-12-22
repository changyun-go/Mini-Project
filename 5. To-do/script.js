const input = document.querySelector("input");
const todo = document.querySelector("#todo");
let preEvent = 0;

function enter(){
    const newList = document.createElement("li");
    todo.appendChild(newList);
    newList.innerHTML = `<br> <input type='checkbox'> <span> ${input.value} </span> <button onClick='removeBtn()'>`;
    input.value = null;
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
}
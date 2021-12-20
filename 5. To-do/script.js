const input = document.querySelector("input");
const body = document.querySelector("body")

function enter(){
    let a = document.createElement("div");
    body.appendChild(a);
    a.textContent = input.value;
    input.value = null;
}

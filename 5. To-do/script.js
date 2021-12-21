const input = document.querySelector("input");
const body = document.querySelector("body");
const label = document.querySelector("label");

function enter(){
    let a = document.createElement("label");
    body.appendChild(a);
    a.innerHTML = `<br> <input type='checkbox'> ${input.value}` // 템플릿 리터럴
    input.value = null;
}

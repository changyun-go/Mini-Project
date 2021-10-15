let Number = 0;
let MyNum = 0;
let NumInput = document.querySelector("#num_input");
let ball = 0;
let strike = 0;
let count = 1;
let NewNum = 0;
let i = 0;
let j = 0;

function NumMaker(){
	Number = 0;
	count = 1;
	ball = 0;
	strike = 0;
	document.querySelector("#score-board").textContent = null;
	Number = Math.floor(Math.random() * 10).toString();
	for(i = 0; i < 2; i++){
		NewNum = Math.floor(Math.random() * 10).toString()
		if(Number[i] !== NewNum && Number[i-1] !== NewNum){
			Number += NewNum;
		}
		else{
			i--;
		}
	}
	document.querySelector("#num_input").style.visibility = "visible";
	document.querySelector("#start-btn").textContent = "RESTART";
	NumInput.value = null;
}

function enter(){
	ball = 0;
	strike = 0;
	if(event.keyCode == 13){
		MyNum = NumInput.value;
		if(MyNum.length !== 3){
			alert("세자리 숫자를 입력해주세요!");
		}
		else{
			for(j = 0; j < 3; j++){
				if(Number[j] === MyNum[j]){
					strike++;
				}
				else if(Number.includes(MyNum[j])){
					ball++;
				}
			}
			NumInput.value = null;
			if(strike === 3){
				confirm("WIN🎉\n다시 도전하시겠습니까?");
				NumMaker();
			}
			else if(ball === 0 && strike === 0){
				document.querySelector("#score-board").innerHTML += "<b>"+count+"회</b> &nbsp;&nbsp;"+"OUT &nbsp;&nbsp;"+MyNum+"<br>";
			}
			else{
				document.querySelector("#score-board").innerHTML += "<b>"+count+"회</b> &nbsp;"+ball+"B   &nbsp;"+strike+"S &nbsp;"+MyNum+"<br>";
			}
			count++;
			if(count === 11){
				confirm("LOSE😭\n다시 도전하시겠습니까?");
				NumMaker();
			}
		}
	}
}
	
	
	

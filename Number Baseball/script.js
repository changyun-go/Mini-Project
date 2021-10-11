let Number = 0;
let MyNum = 0;
let NumInput = document.querySelector("#num_input");
let ball = 0;
let strike = 0;
let count = 1;



function NumMaker(){
	Number = 0;
	count = 1;
	ball = 0;
	strike = 0;
	document.querySelector("#score-board").textContent = null;
	Number = Math.floor(Math.random() * 10).toString();
	Number += Math.floor(Math.random() * 10).toString();
	Number += Math.floor(Math.random() * 10).toString();
	document.querySelector("#num_input").style.visibility = "visible";
	document.querySelector("#start-btn").textContent = "RESTART";
	NumInput.value = null;
	console.log(Number);
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
			for(let i = 0; i < 3; i++){
				if(Number[i] === MyNum[i]){
					strike++;
				}
				else if(Number.includes(MyNum[i])){
					ball++;
				}
			}
			NumInput.value = null;
			if(strike === 3){
				confirm("WIN🎉\n다시 도전하시겠습니까?");
				NumMaker();
			}
			else if(ball === 0 && strike === 0){
				document.querySelector("#score-board").innerHTML += "<br><b>"+count+"회</b> "+"OUT "+MyNum;
			}
			else{
				document.querySelector("#score-board").innerHTML += "<br><b>"+count+"회</b> "+ball+"B   "+strike+"S "+MyNum;
			}
			count++;
			if(count === 11){
				confirm("LOSE😭\n다시 도전하시겠습니까?");
				NumMaker();
			}
			console.log(strike);
			console.log(ball);
		}
	}
}
	
	
	

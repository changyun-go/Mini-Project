function NumMaker(){
	let Number = 0;
  Number = Math.floor(Math.random() * 900) + 100;
	console.log(Number);
}

function enter(){
	if(event.keyCode == 13){
		if(document.querySelector("#num_input").value.length !== 3){
			alert("세자리 숫자를 입력해주세요!");
		}
		
	}
}
	
	
	

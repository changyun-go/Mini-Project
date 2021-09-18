function changer(){
	let color = '#';
	for(let i = 0; i < 6; i++){
  	color += Math.floor(Math.random()*16).toString(16).toUpperCase();
	}
		document.body.style.backgroundColor = color;
		document.querySelector('p').textContent = 'HEX COLOR :' + color;
}
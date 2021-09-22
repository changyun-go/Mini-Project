const imgs = ["images/image-1.jpg", "images/image-2.jpg", "images/image-3.jpg", "images/image-4.jpg", "images/image-5.jpg"];
    
const main_img = document.querySelector("#main-img")
const left_btn = document.querySelector("#left-btn");
const right_btn = document.querySelector("#right-btn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");

let i = 0;

left_btn.addEventListener("click", function leftClick(){
	if(i === 0){
		i = 4;
	}
	else{
		i--;
	}
	main_img.src = imgs[i];
});

right_btn.addEventListener("click", function rightClick(){
	if(i === 4){
		i = 0;
	}
	else{
		i++;
	}
	main_img.src = imgs[i];
});

btn1.addEventListener("click", function img1(){
	main_img.src = imgs[0];
});
btn2.addEventListener("click", function img2(){
	main_img.src = imgs[1];
});
btn3.addEventListener("click", function img2(){
	main_img.src = imgs[2];
});
btn4.addEventListener("click", function img2(){
	main_img.src = imgs[3];
});
btn5.addEventListener("click", function img2(){
	main_img.src = imgs[4];
});
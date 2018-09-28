var mic;
var happy, sad

function preload(){
	happy = loadAnimation('../images/happyface_01.png', '../images/happyface_05.png');

	sad = loadAnimation('../images/sadface_01.png', '../images/sadface_06.png');
}

function setup(){
	createCanvas(1080,800);
	mic = new p5.AudioIn();
	mic.start();
}

function draw(){
	var vol = mic.getLevel();
	console.log(vol);

	background(255, 255, 255);

	frameRate(50);

	// if(vol> 0.075){
	animation(happy, 300, 150);

	// }else{
	animation(sad,   mouseX, mouseY);
}
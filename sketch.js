//reference: 
//https://www.youtube.com/watch?v=v0CHV33wDsI
//http://molleindustria.github.io/p5.play/examples/index.html

var canvas;
var text;

let speech;
var face, mouthMotion, inp;
var value = 0;

function preload(){
	face = loadAnimation('images/melting_face01.png', 'images/melting_face08.png');

	mouthMotion = loadAnimation('images/mouth_motion01.png', 'images/mouth_motion09.png');	

	mouthSilence = loadAnimation('images/mouth_silence01.png', 'images/mouth_silence02.png');	

	talk= loadAnimation('images/speech_bubble01.png', 'images/speech_bubble02.png');	

}

function setup(){
	canvas = createCanvas(windowWidth, 800);
	// canvas.position(width/2,0);

	text = inp = createInput();
	text.position(width/2-345, 600)

	speech = new p5.Speech(); // speech synthesis object
}

function draw(){

	background(255);

	if (keyIsDown(ENTER)){
		animation(face, width/2, height/2+20)
		animation(mouthMotion, width/2 - 10, height/2+30);
	}else{
		animation(face, width/2, height/2+20)
		animation(mouthSilence,width/2-10, height/2+70)
	}
	animation(talk, width/2-285, height/2+195);
}

function keyPressed() {
	if(keyCode == ENTER){
		let voices = speech.voices;
		  speech.speak(inp.value()); // say something
		value = 1;
	}else{
		value = 0;
	}
}
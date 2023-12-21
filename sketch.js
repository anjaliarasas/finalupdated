var title = 0;
var x=200;
var speed = 2;
var score= 0;

let ypos = 0;
let xpos = 100;
let xstep = 135;

let img;
let imgg;

let mainMusic;
let gameOver;

let oscillator, ourBackGround, ourTone
let playing = false;


function preload() {
	img = loadImage('guy.png');
	imgg = loadImage('fish.png');
	mainMusic = loadSound('music.wav')
	gameOver = loadSound('over.wav')
  }


function setup() {
  createCanvas(windowWidth-100, windowHeight-100);
  angleMode(DEGREES);
  imageMode(CENTER);
  oscillator = new p5.Oscillator("square");
}



function draw() {
	if(title == 0){
    startTitle()
  }else if(title == 1){
  	gameOn()
  }else if(title==2){
  	endTitle()
  }	

}

function startTitle(){
		background(248, 91, 58)
		fill(227, 83, 52, 98);
	noStroke();
	for (let i = 0; i < 9; i++) {
		rect(xpos+(xstep*i), ypos, 60, windowHeight);
	  }
		textAlign(CENTER);
		textFont('Shizuru');
  		textSize(40);
		  fill('white');
		text('he is so so hungry!', width / 2, height / 2)
		text('guide him to the fish to keep him alive!', width / 2, height / 2 + 80)
		text('click to start', width / 2, height / 2 + 160);
		reset();
}

function gameOn(){

	background(255, 248, 238);
	fill(238, 225, 217);
	noStroke();
	for (let i = 0; i < 9; i++) {
		rect(xpos+(xstep*i), ypos, 60, windowHeight);
	  }
	textFont('Shizuru');
	textSize(30);
	fill('black');
  text("score = " + score, 100,40)
  imageMode(CENTER)

	image(img, mouseX,height-90, 300, 300)
	this.y+= speed;
  if(this.y>height){
  	title =2
	 }

  if(this.y>height-10 && x>mouseX-20 && x<mouseX+20){
  	this.y=-20
    speed+=0.75
    score+= 1
  }
  
	if(this.y==-20){
  	pickRandom();
  }
  
  image(imgg, x,this.y, 145, 150)
  image.rotationSpeed = 1;
//   rotate(10);
mainMusic.loop = false;
mainMusic.play();
}

// if (playing) {
//     ourTone = map(mouseX, 0, width, 220, 1000);
//     ourBackGround = map(ourTone, 220, 1000, 0, 255)
//     oscillator.freq(ourTone);
//     oscillator.amp(1, 0.5);
//   }
// }

// function mousePressed() {
//     playing = true;
//     oscillator.start();
  
// }

// function mouseReleased() {
//   playing = false;
//   oscillator.amp(0, 0.8);
// }


function pickRandom(){
	x= random(20,width-20)
}

function endTitle(){
		background(86, 117, 155)
		fill(70, 96, 128, 98)
		for (let i = 0; i < 9; i++) {
			rect(xpos+(xstep*i), ypos, 60, windowHeight);
		  }
		textAlign(CENTER);
		textFont('Shizuru');
		fill('white');
		textSize(40);
		text('oh no! he died! sad face!', width / 2, height / 2)
  	text("SCORE = " + score, width / 2, height / 2 + 60)
		text('click to try again!', width / 2, height / 2 + 120);
	gameOver = false;
	gameOver.play();
}

function mousePressed(){
	if(title==0){
  	title=1
  }else if(title==2){
  	title=0
  }
}

function reset(){
	  score=0;
  	speed=2;
  	this.y=-20;
}


//Left click jump, right click tongue
var frog;
var lilypads;
var flies;
var lives;
var score;
var startTimer;
var unready=true;
var gameOver;
var bg='#085E99';
var numFlies;

//the following line should be uncommented if running on a server, and commented if running locally.
//function preload(){bg=loadImage('water2.jpg');}

function setup(){
	createCanvas(600,600);
	lilypads = [];
	flies=[];
	lives=3;
	score=0;
	startTimer=3;
	numFlies=4;
	gameOver=false;
	lilypads.push(new Lilypad(width/2, height/2, 1));
	var i=5;
	while(i>1){
		var touching=false;
		var sc = random(0.5,1.5);
		var lily = new Lilypad(random(65*sc,width-65*sc), random(65*sc,height-65*sc), sc);
		for(var lily2 of lilypads){
			if((lily.sc+lily2.sc)*65>sqrt(sq(lily.x-lily2.x)+sq(lily.y-lily2.y))){
				touching=true;
			}
		}
		if(!touching){
			lilypads.push(lily);
			i--;
		}
	}
	resetFlies();
	frog = new Frog(lilypads[0]);
}
function draw(){
	background(bg)
	if(unready){
		fill(0,255,0);
		stroke(100);
		strokeWeight(5);
		textSize(100);
		textAlign(CENTER,CENTER);
		text("Frog Game!",width/2,height/2);
		strokeWeight(3);
		textSize(30);
		textAlign(CENTER,BOTTOM);
		text("(click to start)",width/2,height);
		if(mouseIsPressed){
			unready=false;
		}
		return;
	}
	if(startTimer>0){
		startTimer-=1/60;
		for(var lilypad of lilypads){
			lilypad.draw();
		}
		for(var fly of flies){
			fly.draw();
		}
		frog.draw();
		fill(0,255,0);
		stroke(100);
		strokeWeight(5);
		textSize(100);
		textAlign(CENTER,CENTER);
		text(ceil(startTimer),width/2,height/2);
	}else{
		for(var lilypad of lilypads){
			lilypad.update();
			lilypad.draw();
		}
		for(var fly of flies){
			fly.update();
			fly.draw();
		}
		bounceLilypads();
		if(frog.update() || frogFlyCollision()){
			loseLife();
		}else{
			frog.draw();
		}
	}
	fill(0,255,0);
	stroke(100);
	strokeWeight(3);
	textSize(30);
	textAlign(LEFT,TOP);
	text('Lives: '+lives,0,0);
	textAlign(RIGHT,TOP);
	text('Score: '+score,width,0);
}
function resetFlies(){
	flies=[];
	for(var i=0;i<numFlies;i++){
		if(floor(random(2))==0){
			flies.push(new Fly(random(0,width),floor(random(2))*height));
		}else{
			flies.push(new Fly(floor(random(2))*width,random(0,height)));
		}
	}
}
function frogFlyCollision(){
	if(frog.jumping==0){
		fill(0,0,0,100);
		for(var fly of flies){
			if(sq(fly.x-frog.x)+sq(fly.y-frog.y)-sq(22)<0){
				return true;
			}
		}
	}
}

function bounceLilypads(){
	for(var i=0;i<lilypads.length;i++){
		var a = lilypads[i];
		for(var j=i+1;j<lilypads.length;j++){
			var b = lilypads[j];
			var minDist = (a.sc+b.sc)*65;
			if(minDist>sqrt(sq(a.x-b.x)+sq(a.y-b.y))){
				var theta = atan2(a.y-b.y,a.x-b.x);
				a.dir=theta;
				b.dir=PI+theta;
			}
		}
	}
}
function mousePressed(){
	if(gameOver){
		setup();
		loop();
	}else if(startTimer<=0){
		frog.launchTongue();
	}
}
function loseLife(){
	lives-=1;
	frog.tongue=0;
	if(lives==0){
		fill(0,255,0);
		stroke(100);
		strokeWeight(5);
		textSize(100);
		textAlign(CENTER,CENTER);
		text("Game Over!",width/2,height/2);
		strokeWeight(3);
		textSize(30);
		textAlign(CENTER,BOTTOM);
		text("(click to play again)",width/2,height);
		gameOver=true;
		noLoop();
	}else{
		frog.lily=lilypads[0];
		frog.x=frog.lily.x;
		frog.y=frog.lily.y;
		frog.vx=0;
		frog.vy=0;
		resetFlies();
		startTimer=3;
	}
}
function nextStage(){
	resetFlies();
	startTimer=3;
	frog.tongue=0;
	numFlies+=2;
	score+=500;
}
function Fly(x,y){
	this.x=x;
	this.y=y;
	this.vel=3;
	this.dir=random(0,TAU);
	this.draw=function(){
		fill(0);
		noStroke();
		ellipse(this.x,this.y,5);
	}
	this.update=function(){
		this.dir+=0.3*random(-1,1);
		this.x+=this.vel*cos(this.dir);
		this.y+=this.vel*sin(this.dir);
		while(this.x>width){
			this.x-=width;
		}
		while(this.x<0){
			this.x+=width;
		}
		while(this.y>height){
			this.y-=height;
		}
		while(this.y<0){
			this.y+=height;
		}
	}
}

function Lilypad(x, y, sc, rot){
	//true radius = 65*sc
	this.x=x;
	this.y=y;
	this.vel=0;
	this.dir=random(0,TAU);
	this.sc=sc;
	this.rot=rot?rot:0;
	this.spinSpeed = random(0.001,0.003);
	this.getDeltasOn = function(x,y){
		x-=this.x;
		y-=this.y;
		var r = sqrt(sq(x)+sq(y));
		var dtheta = atan2(y,x)+this.spinSpeed;
		return({x:(this.vel*cos(this.dir))+cos(dtheta)*r-x,
			y:(this.vel*sin(this.dir))+sin(dtheta)*r-y});
	}
	this.update = function(){
		this.rot+=this.spinSpeed;
		this.dir+=random(-0.04,0.04);
		this.vel+=random(-0.01,0.01);
		this.vel=min(0.6,this.vel);
		if(this.vel<0){
			this.dir+=PI;
			this.vel*=-1;
		}
		this.x+=this.vel*cos(this.dir);
		this.y+=this.vel*sin(this.dir);
		if(cos(this.dir)<0){
			if(this.x<this.sc*65){
				this.dir=PI-this.dir;
			}
		}else if(this.x>width-this.sc*65){
			this.dir=PI-this.dir;
		}
		if(sin(this.dir)<0){
			if(this.y<this.sc*65){
				this.dir=-this.dir;
			}
		}else if(this.y>height-this.sc*65){
			this.dir=-this.dir;
		}
	}
	this.draw = function(){
		push();
		translate(this.x,this.y);
		scale(this.sc);
		rotate(this.rot);
		fill(85, 181, 101, 230);
		noStroke();
		beginShape();
		curveVertex(-58,-41);
		curveVertex(5,-65);
		curveVertex(70,-29);
		curveVertex(19,1);
		curveVertex(70,28);
		curveVertex(26,62);
		curveVertex(-23,59);
		curveVertex(-69,21);
		curveVertex(-58,-41);
		curveVertex(5,-65);
		curveVertex(70,-29);
		endShape();
		pop();
	}
}

function Frog(lily){
	this.x = width/2;
	this.y = height/2;
	this.vx=0; //max speed is 5.66
	this.vy=0;
	this.size=1;
	this.jumping=0;
	this.jumpLength=100;
	this.rotation=0;
	this.jumpStartX;
	this.jumpStartY;
	this.jumpX;
	this.jumpY;
	this.lily=lily;
	this.tongue=0;
	this.draw = function(){
		fill(0,200,0);
		stroke(100);
		push();
		translate(this.x,this.y)
		scale(this.size*0.4)
		rotate(this.rotation);
		strokeWeight(10);
		stroke('#E79EA9');
		line(0,0,0,-this.tongue);
		drawFrog(this.jumping,sqrt(sq(this.vx)+sq(this.vy))*sin(millis()/100));
		pop();
	}
	this.update = function(){
		this.rotation=atan2(mouseY-this.y,mouseX-this.x)+HALF_PI;
		if(this.jumping<=0){
			var dx=0;
			var dy=0;
			if(keyIsDown(87)){dy-=1;}//W
			if(keyIsDown(83)){dy+=1;}//S
			if(keyIsDown(65)){dx-=1;}//A
			if(keyIsDown(68)){dx+=1;}//D
			if(abs(dx)==abs(dy)){
				dx/=sqrt(2);
				dy/=sqrt(2);
			}
			this.vx+=dx*1;
			this.vy+=dy*1;
			this.vx*=0.85;
			this.vy*=0.85;
			var deltas = this.lily.getDeltasOn(this.x,this.y);
			this.x += this.vx + deltas.x;
			this.y += this.vy + deltas.y;
			if(!this.isOnPad(this.lily)){
				var theta = atan2(this.y-this.lily.y,this.x-this.lily.x);
				this.x=this.lily.x+cos(theta)*this.lily.sc*65;
				this.y=this.lily.y+sin(theta)*this.lily.sc*65;
			}
			if(keyIsDown(16) || keyIsDown(32)){//Shift || Space
				this.jumping=this.jumpLength;
				this.jumpX=mouseX-this.x;
				this.jumpY=mouseY-this.y;
				this.jumpStartX = this.x;
				this.jumpStartY = this.y;
			}
			this.tongue*=0.9;
		}else{
			this.tongue=0;
			this.jumping-=1;
			var p = 1-(this.jumping/this.jumpLength);
			this.x = this.jumpStartX+p*this.jumpX;
			this.y = this.jumpStartY+p*this.jumpY;
			this.size = 1+sin(p*PI);
			if(p>=1){
				for(var i=0;i<lilypads.length;i++){
					if(this.isOnPad(lilypads[i])){
						this.lily = lilypads[i];
						return false;
					}
				}
				return true;
			}
		}
		return false;
	}
	this.launchTongue = function(){
		if(this.tongue<100 && this.jumping==0){
			this.tongue=sqrt(sq(mouseX-this.x)+sq(mouseY-this.y))/(this.size*0.4)/0.9;
			for(var i=flies.length-1;i>=0;i--){
				if(sq(flies[i].x-mouseX)+sq(flies[i].y-mouseY)<400){
					flies.splice(i,1);
					score+=100;
				}
			}
			if(flies.length==0){
				nextStage();
			}
		}
	}
	this.isOnPad = function(lily){
		return(sq(this.x-lily.x)+sq(this.y-lily.y) < sq(lily.sc*65));
	}
}

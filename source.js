var frog;
const KEY_W=87;
const KEY_S=83;
const KEY_A=65;
const KEY_D=68;
const KEY_SHIFT=16;
const KEY_SPACE=32;
var lilypads = [];
var lilyColor = [];

function setup(){
	createCanvas(600,600);
	background(0,0,200);
	frog = new Frog();
	col1 = color(135, 208, 230);
	col2 = color(230, 244, 255);
	lilypads.push(new Lilypad(200, 200, 0.5));
	lilypads.push(new Lilypad(100, 80, 0.7, PI/4));
	console.log(lilypads);
}

function draw(){
	setGradient(0, 0, width, height, col1, col2, 1);
	frog.draw();
	frog.update();
	for(var lilypad of lilypads){
		lilypad.draw();
	}
}

function setGradient(x, y, w, h, col1, col2, axis){
	noFill();
	if (axis == 1){
		// Top to bottom gradient
		for (var i = y; i < y+h; i++){
			var int = map(i, y, y+h, 0, 1.5);
			var c = lerpColor(col1, col2, int);
			stroke(c);
			line(x, i, x+w, i);
		}
	}
}

function Lilypad(x, y, sc, rot){
	this.x=x;
	this.y=y;
	this.sc=sc;
	this.rot=rot;
	this.draw = function(){
		push();
		translate(x,y);
		scale(sc);
		rotate(rot);
		fill(85, 181, 101, 75);
		noStroke();
		translate(200, 200);
		beginShape();
		curveVertex(-88,-66);
		curveVertex(-25,-90);
		curveVertex(40,-54);
		curveVertex(-11,-24);
		curveVertex(40,3);
		curveVertex(-4,37);
		curveVertex(-53,34);
		curveVertex(-99,-4);
		curveVertex(-88,-66);
		curveVertex(-25,-90);
		curveVertex(40,-54);
		endShape();
		pop();
	}
}

function Frog(){
	this.x = width/2;
	this.y = height/2;
	this.vx=0;
	this.vy=0;
	this.size=1;
	this.jumping=false;
	this.jumpLength=100;
	this.rotation=0;
	this.jumpStartX;
	this.jumpStartY;
	this.jumpX;
	this.jumpY;
	this.draw = function(){
		fill(0,200,0);
		stroke(100);
		push();
		translate(this.x,this.y)
		scale(this.size)
		rotate(this.rotation);
		ellipse(0,0,40);
		line(0,0,0,20);
		pop();
	}
	this.update = function(){
		this.rotation=atan2(mouseY-this.y,mouseX-this.x)-HALF_PI;
		if(this.jumping<=0){
			var dx=0;
			var dy=0;
			if(keyIsDown(KEY_W)){dy-=1;}
			if(keyIsDown(KEY_S)){dy+=1;}
			if(keyIsDown(KEY_A)){dx-=1;}
			if(keyIsDown(KEY_D)){dx+=1;}
			if(abs(dx)==abs(dy)){
				dx/=sqrt(2);
				dy/=sqrt(2);
			}
			this.vx+=dx*1;
			this.vy+=dy*1;
			this.vx*=0.85;
			this.vy*=0.85;
			this.x += this.vx;
			this.y += this.vy;
			if(keyIsDown(KEY_SHIFT) || keyIsDown(KEY_SPACE)){
				this.jumping=this.jumpLength;
				this.jumpX=mouseX-this.x;
				this.jumpY=mouseY-this.y;
				this.jumpStartX = this.x;
				this.jumpStartY = this.y;
			}
		}else{
			this.jumping-=1;
			var p = 1-(this.jumping/this.jumpLength);
			this.x = this.jumpStartX+p*this.jumpX;
			this.y = this.jumpStartY+p*this.jumpY;
			this.size = 1+sin(p*PI);
		}
	}
}

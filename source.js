var frog;
var lilypads = [];

function setup(){
	createCanvas(600,600);
	background(0,0,200);
	frog = new Frog();
	col1 = color(135, 208, 230);
	col2 = color(230, 244, 255);
	lilypads.push(new Lilypad(300, 300, 2));
	lilypads.push(new Lilypad(200, 200, 0.5));
	lilypads.push(new Lilypad(100, 80, 0.7, PI/4));
	frog.lily = lilypads[0];
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
	this.rot=rot?rot:0;
	this.draw = function(){
		push();
		translate(this.x,this.y);
		scale(this.sc);
		rotate(this.rot);
		fill(85, 181, 101, 75);
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
	this.lily;
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
			this.x += this.vx;
			this.y += this.vy;
			if(!this.isOnPad(this.lily)){
				var theta = atan2(this.y-this.lily.y,this.x-this.lily.x);
				this.x=this.lily.x+cos(theta)*this.lily.sc*60;
				this.y=this.lily.y+sin(theta)*this.lily.sc*60;

			}
			if(keyIsDown(16) || keyIsDown(32)){//Shift || Space
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
			if(p>=1){
				for(var i=0;i<lilypads.length;i++){
					if(this.isOnPad(lilypads[i])){
						this.lily = lilypads[i];
						return;
					}
				}
				//die();
				//You want the frog to die here because it did not land on a lilypad.
			}
		}
	}
	this.isOnPad = function(lily){
		return(sq(this.x-lily.x)+sq(this.y-lily.y) < sq(lily.sc*60));
	}
}

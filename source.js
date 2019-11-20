var frog;
const KEY_W=87;
const KEY_S=83;
const KEY_A=65;
const KEY_D=68;
const KEY_SHIFT=16;
const KEY_SPACE=32;
function setup(){
	createCanvas(600,600);
	background(0,0,200);
	frog = new Frog();
}

function draw(){
	background(0,0,200);
	frog.draw();
	frog.update();
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

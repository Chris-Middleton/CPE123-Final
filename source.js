//Left click jump, right click tongue
var frog;
var lilypads = [];

function setup(){
	createCanvas(600,600);
	background(0,0,200);
	col1 = color(135, 208, 230);
	col2 = color(230, 244, 255);
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
	frog = new Frog(lilypads[0]);
}

function draw(){
	background('#085E99');
	//setGradient(0, 0, width, height, col1, col2, 1);
	for(var lilypad of lilypads){
		lilypad.update();
		lilypad.draw();
	}
	frog.update();
	frog.draw();
	bounceLilypads();
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
		fill(85, 181, 101, 190);
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
	this.draw = function(){
		fill(0,200,0);
		stroke(100);
		push();
		translate(this.x,this.y)
		scale(this.size*0.4)
		rotate(this.rotation);
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
		return(sq(this.x-lily.x)+sq(this.y-lily.y) < sq(lily.sc*65));
	}
}

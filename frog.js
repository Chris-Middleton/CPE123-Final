function drawFrog(jumping,t){
	push();
	translate(-180,-90);
	noStroke();
	fill(133, 207, 118);
	beginShape();
	curveVertex(164,43);
	curveVertex(199,44);
	curveVertex(213,127);
	curveVertex(177,148);
	curveVertex(142,122);
	curveVertex(164,43);
	curveVertex(199,44);
	curveVertex(213,127);
	endShape();
	if(jumping){
		drawFrogJumping();
	}else{
		drawFrogBackLegs(t);
	}
	drawFrogFrontLegs();

	//pattern
	fill(110, 194, 93);
	ellipse(200, 100, 20, 30);
	ellipse(170, 55, 15, 20);
	ellipse(160, 90, 10, 20);
	ellipse(180, 130, 20, 25);
	pop();
}
function drawFrogFrontLegs(){
	 //left front leg deep green
	push();
		fill(97, 166, 83);
		translate(110, 20);
		scale(.4);
		rotate(-80.8)
		beginShape();
			curveVertex(102, 59);
		curveVertex(110, 47);
		curveVertex(157, 69);
		curveVertex(147, 83);
		curveVertex(102, 59);
		curveVertex(110, 47);
		curveVertex(157, 69);
		endShape();
	pop();

		//right front deep green
	push();
		fill(97, 166, 83);
		translate(255, 17);
		scale(.4);
		rotate(-30);
		beginShape();
			curveVertex(102, 59);
		curveVertex(110, 47);
		curveVertex(157, 69);
		curveVertex(147, 83);
		curveVertex(102, 59);
		curveVertex(110, 47);
		curveVertex(157, 69);
		endShape();
	pop();



	// right front leg
	push();
		fill(133, 207, 118);
		translate(143, 37);
		scale(.6);
		beginShape();
			curveVertex(102, 59);
		curveVertex(110, 47);
		curveVertex(157, 69);
		curveVertex(147, 83);
		curveVertex(102, 59);
		curveVertex(110, 47);
		curveVertex(157, 69);
		endShape();
	pop();

	//left front leg
	push();
		fill(133, 207, 118);
		translate(216, 35);
		scale(.6);
		rotate(-79.5)
		beginShape();
			curveVertex(102, 59);
		curveVertex(110, 47);
		curveVertex(157, 69);
		curveVertex(147, 83);
		curveVertex(102, 59);
		curveVertex(110, 47);
		curveVertex(157, 69);
		endShape();
	pop();


	//eyes
	fill(31, 38, 32);
	ellipse(162, 40, 10, 10);
	ellipse(200, 40, 10, 10);

	//leftfeet

	fill(34, 71, 38);
	ellipse(116, 65, 5.5, 5.5);
	ellipse( 121, 61, 5.5, 5.5);
	ellipse(126, 65, 5.5, 5.5);

	//right feet
	ellipse(235, 61, 5.5, 5.5);
	ellipse(240, 57, 5.5, 5.5);
	ellipse(245, 61, 5.5, 5.5);
}

function drawFrogBackLegs(t){
	push();
	translate(190,140);
	drawFrogBackLeg(t/20);
	translate(-20,0);
	scale(-1,1);
	drawFrogBackLeg(-t/20);
	pop();
}
function drawFrogBackLeg(t){
	//behind leg
	push();
		rotate(t);
		push();
			translate(54,-20);
			rotate(-2*t);
			push();
				translate(-25,20);
				rotate(3*t);
				//behind more deep green
				fill(71, 125, 60);
				beginShape();
				curveVertex(1, 7);
				curveVertex(5, 3);
				curveVertex(28, 15);
				curveVertex(23, 21);
				curveVertex(1, 7);
				curveVertex(5, 3);
				curveVertex(28, 15);
				endShape();
				//behind feet
				fill(34, 71, 38);
				ellipse(23, 22, 7.5);
				ellipse(32, 19, 7.5);
				ellipse(29, 12, 7.5);

			pop();
			//behind leg deep green
			fill(97, 166, 83);
			beginShape();
			curveVertex(3,-5);
			curveVertex(8,5);
			curveVertex(-3,15);
			curveVertex(-15,23);
			curveVertex(-27,25);
			curveVertex(-15,6);
			curveVertex(-1,-5);
			curveVertex(8,4);
			curveVertex(-3,15);
			endShape();
		pop();
		fill(133, 207, 118);
		beginShape();
		curveVertex(52,-42);
		curveVertex(63,-22);
		curveVertex(39,-7);
		curveVertex(-1,9);
		curveVertex(-9,2);
		curveVertex(24,-26);
		curveVertex(52,-42);
		curveVertex(63,-22);
		curveVertex(39,-7);
		endShape();
		fill(110, 194, 93);
		ellipse(22, -14, 15, 10);
		ellipse(53, -23, 10);
	pop();
}

function drawFrogJumping(){
	//left behind more deep green
	push();
		fill(71, 125, 60);
		translate(184, 140);
		scale(.5);
		rotate(-29.6);
		beginShape();
		curveVertex(102, 59);
		curveVertex(110, 47);
		curveVertex(157, 69);
		curveVertex(147, 83);
		curveVertex(102, 59);
		curveVertex(110, 47);
		curveVertex(157, 69);
		endShape();
	pop();

	//right behind more deep green
	push();
		fill(71, 125, 60);
		translate(175,140);
		scale(.5);
		rotate(-31);
		beginShape();
		curveVertex(102, 59);
		curveVertex(110, 47);
		curveVertex(157, 69);
		curveVertex(147, 83);
		curveVertex(102, 59);
		curveVertex(110, 47);
		curveVertex(157, 69);
		endShape();
	pop();


	//right behind leg deep green
	push();
		fill(97, 166, 83);
		translate(77,63);
		scale(.7);
		rotate(radians(5));
		beginShape();
		curveVertex(247,113);
		curveVertex(254,125);
		curveVertex(239,141);
		curveVertex(221,152);
		curveVertex(204,155);
		curveVertex(222,129);
		curveVertex(242,113);
		curveVertex(254,125);
		curveVertex(239,141);
		endShape();
	pop();

	//left behind leg deep green
	push();
		fill(97, 166, 83);
		translate(80,350);
		rotate(radians(-105));
		scale(0.7);
		beginShape();
		curveVertex(247,113);
		curveVertex(254,125);
		curveVertex(239,141);
		curveVertex(221,152);
		curveVertex(204,155);
		curveVertex(222,129);
		curveVertex(242,113);
		curveVertex(254,125);
		curveVertex(239,141);
		endShape();
	pop();


	//left behind feet
	fill(34, 71, 38);
	ellipse(123, 202, 7.5, 7.5);
	ellipse(126, 210, 7.5, 7.5);
	ellipse(137, 208, 7.5, 7.5);

	//right behind feet
	ellipse(223, 210, 7.5, 7.5);
	ellipse(233, 210, 7.5, 7.5);
	ellipse(236, 202, 7.5, 7.5);


	//right behind leg
	push();
		translate(160, -102);
		fill(133, 207, 118);
		rotate(radians(45));
		beginShape();
		curveVertex(242,104);
		curveVertex(253,124);
		curveVertex(229,139);
		curveVertex(189,155);
		curveVertex(181,148);
		curveVertex(214,120);
		curveVertex(242,104);
		curveVertex(253,124);
		curveVertex(229,139);
		endShape();
	pop();
	fill(110, 194, 93);
	ellipse(220, 142, 15, 10);
	ellipse(253, 145, 10, 10);

	//left behind leg
	push();
		translate(300,344);
		fill(133, 207, 118);
		rotate(radians(200));
		beginShape();
		curveVertex(242,106);
		curveVertex(253,126);
		curveVertex(229,141);
		curveVertex(189,157);
		curveVertex(181,150);
		curveVertex(214,122);
		curveVertex(242,106);
		curveVertex(253,126);
		curveVertex(229,141);
		endShape();
	pop();
	fill(110, 194, 93);
	ellipse(110, 155, 10, 10);
	ellipse(140, 142, 15, 10);
}


	var scale = 0

	function setup()
	{
		createCanvas(400,400);
	}

	function draw()
	{
		background(255);
		frog();

		push();
		translate(100, 170);
		jumpFrog();
		pop();
	}

	function frog()
	{
		//body
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

    	
    	//right behind leg deep green
    push();
    	fill(97, 166, 83);
    	translate(70,60);
    	scale(.7);
    	rotate(radians(-10));
    	beginShape();
    	curveVertex(247,113); 
    	curveVertex(254,125); 
    	curveVertex(239,141); 
    	curveVertex(221,152); 
    	curveVertex(204,155); 
    	curveVertex(222,129); 
    	curveVertex(242,113); 
   		curveVertex(254,125); 
    	curveVertex(239,141); /**/
    	endShape();
    pop();

    //right behind leg deep green
    push();
     fill(97, 166, 83);
    translate(0,275);
    rotate(radians(-82.5));
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
    ellipse(105, 107, 7, 7);
    ellipse(100, 115, 7, 7);
  	ellipse(115, 105, 7, 7);

  	    //right behind feet
   ellipse(263, 115, 7, 7);
    ellipse(258, 108, 7, 7);
  	ellipse(250, 107, 7, 7);

    	//right behind leg
    push();
    	translate(0,-3);
    	fill(133, 207, 118);
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
    	//left behind leg
    push();
    	translate(135,384);
    	fill(133, 207, 118);
    	rotate(radians(240));
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

    //pattern
    fill(110, 194, 93);
    ellipse(200, 100, 20, 30);
    ellipse(170, 55, 15, 20);
    ellipse(160, 90, 10, 20);
    ellipse(180, 130, 20, 25);
    ellipse(110, 120, 10, 10);
    ellipse(140, 127, 15, 10);
    ellipse(220, 127, 15, 10);
    ellipse(240, 107, 10, 10);

	}

	function jumpFrog()
	{
		//body
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
    	curveVertex(239,141); /**/
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

 

    //pattern
    fill(110, 194, 93);
    ellipse(200, 100, 20, 30);
    ellipse(170, 55, 15, 20);
    ellipse(160, 90, 10, 20);
    ellipse(180, 130, 20, 25);
    ellipse(110, 155, 10, 10);
    ellipse(140, 142, 15, 10);
    ellipse(220, 142, 15, 10);
    ellipse(253, 145, 10, 10);
	}
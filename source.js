var lilyColor = [];

function setup(){
	createCanvas(600,600);
	col1 = color(135, 208, 230);
	col2 = color(230, 244, 255);

}

function draw(){
	setGradient(0, 0, width, height, col1, col2, 1);

 	lily_pad(200, 200, 0.5);
	lily_pad(100, 80, 0.7, PI/4);


}

function lily_pad(x, y, sc, rot){
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

function setGradient(x, y, w, h, col1, col2, axis)
{
  noFill();
  if (axis == 1)
  {
    // Top to bottom gradient
    for (var i = y; i < y+h; i++)
    {
      var int = map(i, y, y+h, 0, 1.5);
      var c = lerpColor(col1, col2, int);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
}

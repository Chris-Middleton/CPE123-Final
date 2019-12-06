function setup() {
  createCanvas(600,600)
  frameRate(4);
}

function draw() {

  background(255);
//  fill(242, 184, 193);
  // the x, y would probs be like the top of the frog's mouth
  tongue(200, 200, 55);
}


function tongue(x, y, length) {
//  length = random(1, 100);
  push();
      translate(x, y);
      noStroke();
      fill(242, 184, 193);
      rect(0, 0, 7, length, 20);
pop();
}

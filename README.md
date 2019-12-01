# CPE123-Final
Yicherpe: Flies/particle system
Chris: game mechanics
Ivy: background/lilly pads/water
Namji: Frog/articulating parts

What needs to be worked on:

Namji - make a function called drawFrog(t,tongue) that draws the frog with parts rotating with respect to t (time).
	"tongue" will be a number between 0 and (idk 100? something like that) and you would draw a tongue straight out
	with a length of the tongue variable. dont worry about rotation, just draw the frog top down with its head towards
	one side of the screen. Also make a function called drawJumpingFrog(t) that we can call while the frog is jumping,
	instead of the normal drawFrog() function.

Yicherpe - make a Fly() object that has this.draw = function(){...} so they can be rendered. They should
	have a this.x, this.y, this.r, and this.speed. (You can change how it works if you want). it also needs a
	this.update = function(){...} function to update its x,y,r, and speed every frame. this way i can easily loop
	through a list of flies and call draw() and update on each one for the particle system.

Ivy - Finish the water then just help out Namji and Yicherpe.

Chris - Thats me... I'll bring everything together into the central project, and implement the mechanics.
	I'll help people out too.

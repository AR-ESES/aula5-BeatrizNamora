function setup() {
	createCanvas(800, 784);

}

function draw() {

	background(255);
	noStroke();
	fill(238,36,0);
	rect(0,500,300,400);
	fill(28,21,105);
	rect(300,200,400,150);
	stroke(20);
	strokeWeight(random(15,20));
	line(0,500,width,500);
	strokeWeight(random(23,26));
	line(0,200,width,200);
	strokeWeight(random(12,17));
	line(300,0,300,height);
}
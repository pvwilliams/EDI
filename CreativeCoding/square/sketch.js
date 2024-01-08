function setup() {//runs one time
   createCanvas(720, 720);
  background (255, 0, 0)
  fill('pink');
  strokeWeight (8);
}

function draw() {//runs in a loop
  background(220);
  
  translate (60,60);

  quad(
  0,0,
    300,0,
    300,300,
    0,300
  );
  
}
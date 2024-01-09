function setup() {//runs once
  createCanvas(windowWidth, windowHeight);
  fill('red');
  strokeWeight (1);
}

function draw() {//runs in a loop
  
  var num = 100;
  var sideLen = windowWidth/num;
  
    for(var y = 0; y < windowHeight; y = y + sideLen) 
   {//loop to create a grid the y direction
      
      
  for(var x = 0; x < windowWidth; x = x + sideLen)
    {  
      quad(
      x,y,
      x + sideLen,y,
      x + sideLen,y + sideLen,
      x,y + sideLen
           );//loop to create a row in the x direction
    }
   }
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight)
}
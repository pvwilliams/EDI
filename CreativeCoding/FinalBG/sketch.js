let=gif;

function preload (){
gif = loadImage ('Assests/BeeGifBG.gif');
}

function setup() {//runs once
  createCanvas(windowWidth, windowHeight);
  fill('red');
  strokeWeight (1);
}

function draw() {//runs in a loop
  
  var num = 5;
  var sideLen = windowWidth/num;
  
    for(var y = 0; y < windowHeight; y = y + sideLen) 
   {//loop to create a grid the y direction
      
      
  for(var x = 0; x < windowWidth; x = x + sideLen)
    {  
    image (gif, x, y, sideLen, sideLen);
    }
   }
}

function windowResized(){
  resizeCanvas (windowWidth, windowHeight)
}
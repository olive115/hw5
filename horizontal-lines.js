function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  for(i = 0; i < height; i+=10){
    
    // i is equal to 0, 10, 20, 30, 40, 50, 60, 70, etc...
    line(i - 1000, i, i + 1000, i);
    
  }
}

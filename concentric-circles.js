function setup(){
  createCanvas(400,400);
 
  background(255);

  
  var x = 200;
  var y = 200;
  //number of circles
  var circles = 40;
  //for each circle
  for (var total = 0; total < circles; total = total+1) {
    //compute circle diameter based on reverse index (circles-total) (or max-current)
    var diameter = (circles-total) * 10;
   
    //render the circle
    ellipse(x,y, diameter, diameter);
    
  }
  
}

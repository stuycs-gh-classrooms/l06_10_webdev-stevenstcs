var x;
var y;
var radius;
function setup() {
  createCanvas(600,600);
  background(155);
  radius = 30;
  x = (radius/2);
  y = (radius/2);
}

function draw() {
    background(155);
        
    if (x < 201){
     fill(255,0,0);
    }
      else if (x < 401){
       fill(0,255,0);
      }
        else{
         fill(0,0,255);
        }
    if (x > 600){
       x = 0;
       y = y + (radius*2);
    }
    circle(x, y, radius);
    x = x + 1;
}

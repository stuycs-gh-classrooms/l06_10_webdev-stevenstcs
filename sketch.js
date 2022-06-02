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
     fill(#FF0F0F);
    }
      else if (x < 401){
       fill(#4AFF0F);
      }
        else{
         fill(#0F31FF);
        }
    if (x > 600){
       x = 0;
       y = y + (radius*2);
    }
    circle(x, y, radius);
    x = x + 1;
}

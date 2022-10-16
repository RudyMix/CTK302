let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
}

function draw() {
  switch(state) {
    case 0:
        background("red");
        fill(255);
        text("Why did the chicken \n cross the road?", width/2, height/2);
        break;
  
    case 1:
        background("blue");
        text("To get to the other side.", width/2, height/2);
}
}

function mouseReleased() {
  state++;
  if (state > 1) state=0;
}
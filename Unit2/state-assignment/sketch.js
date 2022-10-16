let state = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
}

function draw() {
  background(15);

  switch (state) {
    case 0:
      for (let j = 0; j <= height; j += 25) {
        for (let i = 0; i <= width; i += 25) {
          fill("#17A3E3");
          stroke(1);
          strokeWeight(1);
          triangle(j, i, 5, 5, 5, 150);
          fill(25, 25, 255);
          ellipse(i, j, 20, 20);
        }
      }
      break;

    case 1:
      for (let j = 0; j <= height; j += 25) {
        for (let i = 0; i <= width; i += 25) {
          stroke(255);
          strokeWeight(1);
          rect(j, i, 50, 50);
          fill("rgb(28,239,22)");
          text("pattern", width/2, height/4);
        }
      }
      break;

    case 2:
      for (let j = 0; j <= height; j += 3) {
        for (let i = 0; i <= width; i +=30) {
          stroke(15);
          strokeWeight(2);
          fill("#1ee1d6");
          arc(i, j, i, j, j, i);
        }
      }
      break;

    case 3: //this one's got an optical illusion
      for (let j = 0; j <=height; j += 25) {
        for(let i = 0; i <= width; i += 25) {
          fill("peru");
          noStroke();
          rect(i, j, 20, 20);
          fill("gray");
          ellipse(198, 198, 6, 6);
        }
      }
      break;

    case 4:
      for(let j = 0; j <= height; j += 50){
        for(let i = 0; i <= width; i += 2){
          triangle(i, 20, 50, i, 30, j);
          ellipse(i, j, 2, 5);
          stroke(0);
          strokeWeight(1);
          fill("purple");
          rect(20, i, i, j);
        }
      }
      break;
  }
}

function mouseReleased() {
  state = state + 1;
  if (state > 4) {
    state = 0;
  }
}

let state = 0;
let timer = 0;
let i1, i2, i3, i4, i5, i6, i7;

function setup() {
  createCanvas(500, 500);
  i1 = loadImage("assets/");
  i2 = loadImage("assets/");
  i3 = loadImage("assets/");
  i4 = loadImage("assets/");
  i5 = loadImage("assets/");
  i6 = loadImage("assets/");
  i7 = loadImage("assets/");
  textAlign(CENTER);
}

function draw() {
  background(255);

  switch (state) {
    case 0:
      
      fill("black");
      textSize(40);
      text("How to Play Liar's Dice", width/2, height/2);
      noStroke();
      textSize(10);
      text("Click to continue!", 450, 450);
      break;
    
    case 1:
      background(1);
      textSize(25);
      fill("white");
      text("Example of a round with three players", width/2, height/2);
      break;

    case 2:
      background(255);
      image(i1, width/2, height/2, 500, 500);
      textSize(15);
      text("Players will be", 250, 50);
      text("Red");
      text("Green");
      text("Blue");

      timer++;
      if (timer > 2*60) {
        timer = 0;
        state = 3;
      }
      break;

    case 3:
      background(255);
      image(i1, width/2, height/2, 500, 500);
      textSize(15);
      text("Players will be", 250, 50);
      text("Red");
      text("Green");
      text("Blue");
      text("Each player has five dice.");
      break;
    
    case 4:
      background(255);
      image(i2, width/2, height/2, 500, 500);
      timer++;
      if (timer > 4*60) {
        timer = 0;
        state = 5;
      }
      break;

    case 5:
      break;

    case 6:
      break;

    case 7:
      break;

    case 8:
      break;

    case 9:
      timer++;
      if (timer > 3*60) {
        timer = 0;
        state = 10;
      }
      break;
    
    case 10:
      break;

    case 11:
      break;

    case 12:
      break;

    case 13:
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 13) {
    state = 0;
  }
}
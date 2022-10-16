let state = 0;
let timer = 0;
let i1, i2, i3, i4, i5;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/frame-1.jpg");
  i2 = loadImage("assets/frame-2.jpg");
  i3 = loadImage("assets/frame-3.jpg");
  i4 = loadImage("assets/frame-3.5.jpg");
  i5 = loadImage("assets/frame-4.jpg");
  imageMode(CENTER);
  textAlign(CENTER);
}

function draw() {
  background(220);

  switch (state) {
    case 0:
      //images go here, text here
      background(1);
      image(i1, width/2, 150, 400, 300);
      fill("white");
      textSize(40);
      text("contact", width/2, 360);
      timer++;
      if(timer>3*60){
        timer = 0;
        state = 1;
      }
      
      break;

    case 1: 
      background(2);
      image(i2, width/2, 150, 400, 300);
      text("down", width/2, 360);
            timer++;
      if(timer>3*60){
        timer = 0;
        state = 2;
      }

      break;

    case 2: 
      background(3);
      image(i3, width/2, 150, 400, 300);
      text("passing", width/2, 360);
            timer++;
      if(timer>3*60){
        timer = 0;
        state = 3;
      }
      break;

      case 3:
        background(4);
        image(i4, width/2, 150, 400, 300);
        text("up", width/2, 360);
        timer++;
        if(timer>3*60) {
          timer = 0;
          state = 4;
        }
      break;
      
      case 4:
        background(5);
        image(i5, width/2, 150, 400, 300);
        text("air", width/2, 360);
        timer++;
        if(timer>3*60){
          timer = 0;
          state = 0;
        }
        break;
  }
}



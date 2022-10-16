//change text and add pictures

let numberOfTouches ;
let i1, i2, i3;

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("assets/duck.jpg");
  i2 = loadImage("assets/pumpkin_dog.jpg");
  i3 = loadImage("assets/cat_cups.png");
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("There are no fingers touching the screen.", 5, 22) ; 
      break ;
      
      case 1: 
       text("There is one finger touching the screen.", 5, 22) ; 
       image(i1, width/2, height/2, 200, 200);
      break ;
      
      case 2:
      text("Two fingers are touching the screen now.", 5, 22) ; 
      image(i2, width/2, height/2, 200, 200);
      break ;
      
      case 3:
     text("There are a lot of fingers touching the screen!", 5, 22) ; 
      image(i3, width/2, height/2, 200, 200);
      break ;
    
      
  }
  
}
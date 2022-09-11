let i1, i2, i3 ;


function setup() {
  createCanvas(500, 500);
  i1 = loadImage("assets/20220812_014148.jpg");
  i2 = loadImage("assets/FB_IMG_1661010895549.jpg");
  i3 = loadImage("assets/unknown.png");
  imageMode(CENTER);
}

function draw() {
  background("grey") ;
  image(i1, width/2, height/2 - 120, 100, 100) ;
  image(i2, width/2, height/2, 100, 100) ;
  image(i3, width/2, height/2 + 120, 100, 100) ;
}

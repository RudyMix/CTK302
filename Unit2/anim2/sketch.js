let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);
  push();
  translate(x, 0);
  avatar();
  x += 5; //means x = x + 5
  if(x > width) {
    x = -230;
  }

  pop();
}

function avatar() {
  if(mouseIsPressed) {
    
    fill(90);
    quad(185, 195, 205, 195, 205, 250, 185, 250);
      
      fill(80);
      strokeWeight(4);
      line(149, 266, 105, 312);
  
      line(105, 312, 105, 353);
      
      line(243, 266, 287, 312);
  
      line(287, 312, 287, 353);
  
      line(174, 295, 150, 324);
  
      line(150, 324, 146, 350);
  
      line(223, 295, 243, 324);
  
      line(243, 324, 249, 350);
      strokeWeight(1);
    
      fill("#46B142");
      circle(197.5, 275, 100);
      
      fill("#5bf0f0");
      ellipse(197.5, 275, 50);
      
    }
      
    else {
    strokeWeight(1);
    fill(90);
    quad(185, 195, 205, 195, 205, 250, 185, 250);
      
    fill("#3b6e39");
    triangle(237, 250, 265, 265, 237, 290);
    
    fill("#3b6e39");
    triangle(155, 250, 128, 265, 150, 285);
  
    fill(190);
    quad(194, 300, 200, 300, 200, 345, 194, 345);
    
    fill(125);
    circle(197.5, 275, 100);
      
    fill(65);
    ellipse(197, 356, 20, 40); 
    }
    
    fill("#a38b58");
    rect(155, 100, 80, 80);
    
    fill(220);
    triangle(155, 180, 195, 215, 235, 180);
    
    fill("#fad223");
    quad(168, 148, 178, 148, 178, 168, 168, 168);
    
    fill("#fad223");
    quad(212, 148, 222, 148, 222, 168, 212, 168);
    
    fill(0);
    line(155, 100, 180, 55);
    
    fill(0);
    line(235, 100, 210, 55);
    
    fill("#aafaef");
    ellipse(180, 55, 5);
    
    fill("#aafaef");
    ellipse(210, 55, 5);
    
    fill(20);
    quad(168, 148, 178, 148, 178, 153, 168, 153);
    
    fill(20);
    quad(212, 148, 222, 148, 222, 153, 212, 153);
}

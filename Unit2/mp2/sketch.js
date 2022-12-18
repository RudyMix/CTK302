let state = 0;
let timer = 0;
let i1, i2, i3, i4, i5, i6;

function setup() {
  createCanvas(500, 500);
  i1 = loadImage("assets/i1.png");
  i2 = loadImage("assets/i2.png");
  i3 = loadImage("assets/i3.png");
  i4 = loadImage("assets/i4.png");
  i5 = loadImage("assets/i5.png");
  i6 = loadImage("assets/i6.png");
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
      textSize(10);
      text("Click to continue!", 450, 450);
      break;

    case 2:
      background(255);
      image(i1, 0, 0);
      fill("black");
      textSize(25);
      text("Players will be", 250, 50);
      textSize(15);
      text("Red", 80, 155);
      text("Green", 236, 155);
      text("Blue", 406, 155);
      textSize(10);
      text("Wait!", 450, 450);

      timer++;
      if (timer > 2*60) {
        timer = 0;
        state = 3;
      }
      break;

    case 3:
      background(255);
      image(i1, 0, 0);
      textSize(25);
      text("Players will be", 250, 50);
      textSize(15);
      text("Red", 80, 155);
      text("Green", 236, 155);
      text("Blue", 406, 155);
      text("Each player has five dice.", 232, 88);
      textSize(10);
      text("Click to continue!", 450, 450);
      break;
    
    case 4:
      background(255);
      image(i2, 0, 0);
      textSize(25)
      text("The betting begins", 250, 50);
      textSize(10);
      text("Wait!", 450, 450);
      timer++;
      if (timer > 2*60) {
        timer = 0;
        state = 5;
      }
      break;

    case 5:
      background(255);
      textSize(25);
      text("How Betting Works", 250, 50);
      textSize(15);
      text("Each player calls out a bet made of two parts.\nThe first part is the amount of dice that rolled a certain result,\n the second part is what result you are calling out.\nWhen the turn passes, players have two options:\n to increase the bet or challenge the previous player's bet.\nChallenging the previous player means that all players reveal their dice\nand if the betting player predicted correctly that there would be exactly\nor more dice of a certain result on the table, then the challenger loses a die.\n If the challenger is right and the bet is too high,\nthen the better loses a die. The bet is increased by either increasing\nthe amount of dice that rolled a certain result, or increasing\nthe value of what result was rolled. Players may not go back\nto a lower result during the round. Be careful! Ones are wilds.", width/2, 150);
      textSize(10);
      text("Click to continue!", 450, 450);
      break;

    case 6:
      background(255);
      image(i3, 0, 0);
      textSize(25);
      text("The Bets of the Round", 250, 50);
      textSize(10);
      text("Click to continue!", 450, 450);
      break;

    case 7:
      background(255);
      image(i4, 0, 0);
      textSize(25);
      text("Red Challenges Blue", 250, 50);
      textSize(10);
      text("Click to continue!", 450, 450);
      break;

    case 8:
      background(255);
      image(i5, 0, 0);
      textSize(25);
      text("The dice are revealed", width/2, height/2);
      textSize(10);
      text("Wait!", 450, 450);
      timer++;
      if (timer > 10*60) {
        timer = 0;
        state = 9;
      }
      break;
    
    case 9:
      background(255);
      image(i6, 0, 0);
      textSize(10);
      text("Click to continue!", 450, 450);
      break;

    case 10:
      background(255);
      textSize(15);
      text("The next round is now played with 14 dice.\nOnce players lose all dice they are eliminated and gameplay\ncontinues until there is one player left.", width/2, height/2);
      textSize(10);
      text("Click to continue!", 450, 450);
      break;

    case 11:
      background(0);
      fill("white");
      textSize(25);
      text("The End!", width/2, height/2);
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 11) {
    state = 0;
  }
}
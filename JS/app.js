// window.onLoad = function() {


//-----------------------  CANVAS & TIMER  -----------------------

//CANVAS
const canvas = document.querySelector('canvas'); //DOM selector
//jQuery selector needed instead
const c = canvas.getContext('2d');




//STARTS THE GAME

// on click

// const start = () => {
//show player 1 only.
//start timer
//sprite start x position and y position
// }


// --------------------------- GLOBAL VARIABLES --------------------------------

//SCORES

let player1Score = '';
let player2Score = '';
let time = 5;


//-----------------------  ONE OR TWO PLAYERS  -----------------------


const setTimer = () => {
  const timer = setInterval(() => {
    time--;
    console.log(time); //check it here, not after closing brackets.


//FOR ONE PLAYER GAME. Player 2 is not alive. WORKS. alerts hi and yo
    if ((time === 0) && (player1IsAlive == true) && (player2IsAlive == false)) {
      alert('hi');
      reset();
      clearInterval(timer);
    }


//FOR TWO PLAYER GAME

//player 2, 1st go 'round. player 1 is alive and 2 is false.
    if ((time === 0) && (player1IsAlive == true) && (player2IsAlive == true)) {
      alert('yo');
      reset();
      // clearInterval(timer);
      player1IsAlive = false;
      console.log(player1IsAlive);
    }


//player 2, 2nd go 'round.
    if ((time === -5) && (player1IsAlive == false) && (player2IsAlive == true)) {
      alert('yoooo');
      reset();
      clearInterval(timer);
      player1IsAlive == false;
      console.log(player1IsAlive);
    }


  }, 1000); //this goes every second.



}

$('#onePlayerBtn').on('click', (e) => {
  player1IsAlive = true;
  player2IsAlive = false;

  $('#onePlayerBtn').hide();
  $('#twoPlayerBtn').hide();

  $('#player1Score').text('Your Score: ');
  setTimer();
});


$('#twoPlayerBtn').on('click', (e) => {
  player1IsAlive = true;
  player2IsAlive = true;

  $('#onePlayerBtn').hide();
  $('#twoPlayerBtn').hide();

  $('#player1Score').text('Player 1 Score: ');
  $('#player2Score').text('Player 2 Score: ');
  setTimer(); //starts the timer
});


//to adapt this to modal =
// startModal.style.dsiplay = 'none';
// hide the modal when clicked






//Image variables are in the imageVariables.js file, which is linked in index.html.

// ------------------------------- CLASSES -------------------------------------

class Sprite {
  constructor(image, speed, speedType, direction, xPosition, yPosition, width, height) {
    this.image = image;
    this.speed = speed;
    this.speedType = speedType;
    this.direction = direction;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
  }
}

//SPRITE VARIABLE
const sprite = new Sprite(spriteImage, 4, 'medium', 'all', 660, 510, 128, 128);

//VEHICLE
class Vehicle extends Sprite {}


//CREATE A METHOD TO MOVE LEFT OR RIGHT.

const vehicles = [
  //FAST =  4 Vehicles
  car = new Vehicle(carImage, 5, 'fast', 'left', 1300, 120, 128, 128),
  formula1 = new Vehicle(formula1Image, 5, 'fast', 'left', 1700, 120, 128, 128),
  // // console.log(Vehicle);
  truck = new Vehicle(truckImage, 5, 'fast', 'left', 2100, 120, 128, 128),
  trucktruck = new Vehicle(trucktruckImage, 5, 'fast', 'left', 2500, 120, 128, 128),
  // //
  // // //SLOW = 5 Vehicles
  scooter = new Vehicle(scooterImage, 3, 'slow', 'right', -440, 245, 128, 128),
  segway = new Vehicle(segwayImage, 3, 'slow', 'right', -840, 245, 128, 128),
  trolleyCart = new Vehicle(trolleyCartImage, 3, 'right', 'right', -1240, 245, 128, 128),
  tumbleweed = new Vehicle(tumbleweedImage, 3, 'slow', 'right', -1640, 245, 128, 128),
  // //
  // // //MEDIUM = 5 Vehicles
  bulldozer = new Vehicle(bulldozerImage, 3, 'medium', 'right', 2300, 380, 128, 128),
  camper = new Vehicle(camperImage, 3, 'medium', 'left', 1900, 380, 128, 128),
  crane = new Vehicle(craneImage, 3, 'medium', 'left', 1500, 380, 128, 128),
  excavator = new Vehicle(excavatorImage, 3, 'medium', 'left', 500, 380, 128, 128),
  rv = new Vehicle(rvImage, 3, 'medium', 'left', 700, 380, 128, 128),
]






//RESET THE SPRITE WHEN IT GETS HIT OR GETS A POINT OR REACHES THE SIDES OF THE SCREEN.
const reset = () => {
  sprite.xPosition = 660;
  sprite.yPosition = 510;
}


// Algorithm for checking if two squared objects collide. Resets if all conditions are met.
const detectCollision = () => {

  for (let i = 0; i < vehicles.length; i++) {
    if (sprite.xPosition < vehicles[i].xPosition + vehicles[i].width &&
      sprite.xPosition + sprite.width > vehicles[i].xPosition &&
      sprite.yPosition < vehicles[i].yPosition + vehicles[i].height &&
      sprite.yPosition + sprite.height > vehicles[i].yPosition) {
      reset();
      console.log('oh, hai mark!');
    }
  }
}


//-------------------------  DRAW THE VEHICLES  ---------------------------
// what image, x-starting pt., y-starting pt., width, height

const animate = () => {
  c.clearRect(0, 0, 1600, 650);
  requestAnimationFrame(animate);
  c.drawImage(backgroundImage, 0, 110, 1600, 400);
  c.drawImage(spriteImage, sprite.xPosition, sprite.yPosition, sprite.width, sprite.height)


  //LOOP THROUGH THE VEHICLES TO DRAW THEM.
  // for (let i = 0; i < vehicles.length; i++) {
  //   c.drawImage(vehicles[i].image, vehicles[i].xPosition, vehicles[i].yPosition, vehicles[i].width, vehicles[i].height);
  //   detectCollision(sprite, vehicles[i]);
  //   // console.log(detectCollision);
  // }


  //------------------------  MAKE THE VEHICLES MOVE  --------------------------

  //FAST, TOP LANE
  car.xPosition -= car.speed;
  formula1.xPosition -= formula1.speed;
  trucktruck.xPosition -= trucktruck.speed;
  truck.xPosition -= truck.speed;

  //SLOW, MIDDLE LANE
  tumbleweed.xPosition += tumbleweed.speed;
  segway.xPosition += segway.speed;
  scooter.xPosition += scooter.speed;
  trolleyCart.xPosition += trolleyCart.speed;

  //MEDIUM, BOTTOM LANE
  bulldozer.xPosition -= bulldozer.speed;
  camper.xPosition -= camper.speed;
  crane.xPosition -= crane.speed;
  excavator.xPosition -= excavator.speed;
  rv.xPosition -= rv.speed;
}


//---------------------------  MAKE SPRITE MOVE  ---------------------------

function moveSprite(e) {
  if (e.keyCode == 39) { //R
    sprite.xPosition += 50;
    console.log(sprite);
  }
  if (e.keyCode == 37) { //L
    sprite.xPosition -= 10;
    console.log(sprite);
  }
  if (e.keyCode == 38) { //UP
    sprite.yPosition -= 50;
    console.log(sprite);
  }
  if (e.keyCode == 40) { //DOWN
    sprite.yPosition += 10;
    console.log(sprite);
  }

  if ((sprite.xPosition <= -5) || (sprite.xPosition >= 1350)) {
    reset();
  }

//TO ADD POINTS ON THE SCOREBOARD FOR ONE PLAYER GAME.
  if (sprite.yPosition <= -10 && player1IsAlive == true && player2IsAlive == false) {
    player1Score++;
    reset();
      $('#player1Score').text('Your Score: ' + player1Score);
      console.log(player1Score);
  }




//TO ADD POINTS ON THE SCOREBOARD FOR ONE PLAYER GAME.
  if ((sprite.yPosition <= -10) && (player1IsAlive == true) && (player2IsAlive == true
  )) {
    player1Score++;
    reset();
    // $('#player1Score').text('Player 1 Score: ' + player1Score++);
     $('#player1Score').text('Player 1 Score: ' + player1Score);
   console.log(player1Score);

 }

 if (sprite.yPosition <= -10 && player1IsAlive == false && player2IsAlive == true) {
   player2Score++;
   reset();
     $('#player2Score').text('Player 2 Score: ' + player2Score);
     console.log(player2Score);


}
  }

animate();
document.onkeydown = moveSprite; //do not put () here.









//MODALS FOR TIE, PLAYER 1 WIN, OR PLAYER 2 WIN.

// if (player1Score == player2Score) {
// swal('No one wins', "What is this, soccer? PLAY AGAIN!!", "images/red-card.png");
// }
// } if (player1Score > player2Score) {
// swal('Player 1 wins', "You survived MoPac and its many enemies!", "images/moustache.png");
//
// } else {
// swal('Player 2 wins', "You survived MoPac and its many enemies!", "images/yogaMat.png");
// }

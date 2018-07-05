// window.onLoad = function() {


//----------------------------------  CANVAS   ---------------------------------

//CANVAS
const canvas = document.querySelector('canvas'); //DOM selector
//jQuery selector needed instead
const c = canvas.getContext('2d');


// --------------------------- GLOBAL VARIABLES --------------------------------

let player1Score = '';
let player2Score = '';
let time = 5;
let timerProgress = 100;
$('#progressBar').hide();


// --------------------------- BUTTONS IN MODAL --------------------------------

$('#onePlayerBtn').on('click', (e) => {
  player1IsAlive = true;
  player2IsAlive = false;
  $('#onePlayerBtn').hide();
  $('#twoPlayerBtn').hide();
  $('#player1Score').text('Your Score: ');
  $('#modal').hide();
  $('#progressBar').show();
  setTimer();
});


$('#twoPlayerBtn').on('click', (e) => {
  player1IsAlive = true;
  player2IsAlive = true;
  $('#onePlayerBtn').hide();
  $('#twoPlayerBtn').hide();
  $('#player1Score').text('Player 1 Score: ');
  $('#player2Score').text('Player 2 Score: ');
  $('#modal').hide();
  $('#progressBar').show();
  setTimer();
});



const progressBarTimer = () => {
  const bar = document.getElementById('progressBar');
  const status = document.getElementById('status');
  // status.innerHTML = timerProgress + '%'; if you wanted to show %
  bar.value = timerProgress;
  timerProgress--;
}
//-----------------------  ONE OR TWO PLAYERS  -----------------------

//TIMER
const setTimer = () => {
  const timer = setInterval(() => {
    time--;
    console.log(time); //check it here, not after closing brackets.
    progressBarTimer(); //sets the progress bar to start counting down on the screen.

    //     if(progressBarTimer == 0) {
    //         clearInterval(timer);
    // }


    //FOR ONE PLAYER GAME. Player 2 is not alive. WORKS. alerts hi and yo
    if ((time === 0) && (player1IsAlive == true) && (player2IsAlive == false)) {
      alert('hi');
      reset();
      clearInterval(timer);
    }

    //FOR TWO PLAYER GAME. Player 1 is alive, 2 is alive. When timer is up, Player 1 is not alive.

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


// ------------------------------- CLASSES -------------------------------------

class Sprite {
  constructor(image, speed, speedType, direction, xPosition, yPosition, width, height) {
    this.image = image;
    this.speed = speed;
    this.speedType = speedType;
    this.direction = direction;
    this.startingpXPosition = xPosition; //this allows it to be redrawn
    this.xPosition = xPosition; //this changes when you move the car with speed.
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
  }
}

// For this.image, image variables are in the imageVariables.js file, which is linked in index.html.

//SPRITE VARIABLE
const sprite = new Sprite(spriteImage, 4, 'medium', 'all', 660, 510, 128, 128);

//VEHICLE
class Vehicle extends Sprite {

  //this constructor allows you to pass more parameters.
  constructor(image, speed, speedType, direction, xPosition, yPosition, width, height) {
    //those that apply to sprite you'd call super for.
    super(image, speed, speedType, direction, xPosition, yPosition, width, height)
  }

  //function 1: is a vehicle on screen?
  isOnScreen() {
    if (this.xPosition < 0) {
      return false;
    }
    if (this.xPosition > canvas.width) {
      return false;
    }
    return true;
  }

  //don't need parameters b.c your info is in your class.

  //extended a class. So super is calling the constructor for the parent class (Sprite). You are passing the variables you gave

  moveVehicle() {
    this.xPosition += this.speed; //this moves all the vehicles.

  }

  resetVehicle() {
    // this.xPosition = this.startingpXPosition;
    // console.log(`car report: speed= ${this.speed}, xpos= ${this.xPosition}`)

    //if you are moving to the left, we are setting the starting position all the way to the right.
    if (this.speed < 0) {
      this.xPosition = canvas.width;
        }
    else {
      this.xPosition = 0; //else start at 0, which is the left side of the screen.
    }


  //   if (this.startingpXPosition)  {  //if is looking for a boolean. you passed a number into a conditional statement. not 0 so it's true. is the starting position = 0? If not we set the xPosition to the right side of the screen. If it is 0, we set the xPosition to 0.
  //     this.xPosition = canvas.width
  // }
  // else {
  //   this.xPosition = this.startingXPosition;
  // }

}

}
const vehicles = [

  //FAST = TOP LANE. 4 VEHICLES.
  car = new Vehicle(carImage, -3, 'fast', 'left', 1420, 120, 128, 128),
  formula1 = new Vehicle(formula1Image, -3, 'fast', 'left', 1100, 120, 128, 128),
  truck = new Vehicle(truckImage, -3, 'fast', 'left', 400, 120, 128, 128),
  trucktruck = new Vehicle(trucktruckImage, -3, 'fast', 'left', 200, 120, 128, 128),

  //SLOW = MIDDLE LANE. 5 VEHICLES.
  scooter = new Vehicle(scooterImage, 2, 'slow', 'right', 50, 245, 128, 128),
  segway = new Vehicle(segwayImage, 2, 'slow', 'right',  550, 245, 128, 128),
  trolleyCart = new Vehicle(trolleyCartImage, 2, 'right', 'right', 850, 245, 128, 128),
  tumbleweed = new Vehicle(tumbleweedImage, 2, 'slow', 'right', 1050, 245, 128, 128),

  //MEDIUM = BOTTOM LANE. 5 VEHICLES.
  bulldozer = new Vehicle(bulldozerImage, -1, 'medium', 'right', 1100, 380, 128, 128),
  camper = new Vehicle(camperImage, -1, 'medium', 'left', 700, 380, 128, 128),
  crane = new Vehicle(craneImage, -1, 'medium', 'left', 300, 380, 128, 128),
  excavator = new Vehicle(excavatorImage, -1, 'medium', 'left', 500, 380, 128, 128),
  rv = new Vehicle(rvImage, -1, 'medium', 'left', 100, 380, 128, 128),
]





// -----------------------------  SPRITE RESET  --------------------------------

const reset = () => {
  sprite.xPosition = 720;
  sprite.yPosition = 510;
}

// --------------------------  COLLISION FUNCTION  -----------------------------

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
//formula: what image, x-starting pt., y-starting pt., width, height

const animate = () => {
  c.clearRect(0, 0, 1600, 650);
  requestAnimationFrame(animate);
  c.drawImage(backgroundImage, 0, 110, 1600, 400);
  c.drawImage(spriteImage, sprite.xPosition, sprite.yPosition, sprite.width, sprite.height)


  //----------------------  LOOP THROUGH THE VEHICLES  -------------------------
  //LOOP THROUGH THE VEHICLES TO DRAW THEM.
  for (let i = 0; i < vehicles.length; i++) {
    c.drawImage(vehicles[i].image, vehicles[i].xPosition, vehicles[i].yPosition, vehicles[i].width, vehicles[i].height);
    detectCollision(sprite, vehicles[i]);
    // console.log(detectCollision);
  }


  //------------------------  MAKE THE VEHICLES MOVE  --------------------------
  for (let car of vehicles) {
    car.moveVehicle();
    if (!car.isOnScreen()) {
      car.resetVehicle();
    }
  }


    //--------------------  Sprite's X Position Boundaries  --------------------
    if ((sprite.xPosition <= -5) || (sprite.xPosition >= 1350)) {
      reset();
    }

    //--------------------  ADD POINTS: ONE PLAYER GAME  ---------------------

    if (sprite.yPosition <= -10 && player1IsAlive == true && player2IsAlive == false) {
      player1Score++;
      reset();
      $('#player1Score').text('Your Score: ' + player1Score);
      console.log(player1Score);
    }


    //------------------- ADD POINTS: TWO PLAYER GAME ----------------------

    if ((sprite.yPosition <= -10) && (player1IsAlive == true) && (player2IsAlive == true)) {
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

//---------------------------  MAKE SPRITE MOVE  ---------------------------

const moveSprite = (e) => {
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
}
  document.onkeydown = moveSprite; //do not put () here.
  //MOVE SPRITE FUNCTION IS OVER


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

//----------------------------------  CANVAS   ---------------------------------

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// --------------------------- GLOBAL VARIABLES --------------------------------

//empty variables
let player1IsAlive;
let player2IsAlive;

let player1Score = 0;
let player2Score = 0;
let time = 60; //test with 3 or 8.
let timerProgress = 60;
$('#progressBar').hide();

// ---------------------------- PLAYER OPTIONS ---------------------------------

$('#onePlayerBtn').on('click', (e) => {
  player1IsAlive = true;
  player2IsAlive = false;
  animate();
  $('#player1Score').text('Your Score: ');
  $('#onStartModal').hide();
  $('#progressBar').show();
  setTimer();
});

$('#twoPlayerBtn').on('click', (e) => {
  player1IsAlive = true;
  player2IsAlive = true;
  animate();
  $('#player1Score').text('Player 1 Score: ');
  $('#player2Score').text('Player 2 Score: ');
  $('#onStartModal').hide();
  $('#progressBar').show();
  setTimer();
});

//----------------------  CREATE END OF GAME MODALS  -------------------------

// animationFun not func

const createHTML = (id, innerText, buttonTexts, animationFun) => {

  //MODAL
  const endOfGameModals = document.createElement('div');
  endOfGameModals.className = 'modal';
  endOfGameModals.id = id;

  //H4 TEXT
  const myh4 = document.createElement('h4');
  myh4.innerText = innerText;
  myh4.className = 'modalh4';
  endOfGameModals.append(myh4);

  //BUTTONS
  for (i = 0; i < buttonTexts.length; i++) {
    console.log('inside the loop');
    const myButton = document.createElement('button');
    myButton.innerText = buttonTexts[i];
    myButton.id = id + 'button' + i;
    myButton.className = 'modalButton';
    endOfGameModals.append(myButton);
    console.log(myButton, 'please load buttonsss!');

    if (animationFun) {
      console.log('hi');
      $(myButton).on('click', animationFun);
    }
  }

  // we have to check if a function exists when being passed to it
  // otherwise it will error out. so this is saying if you have func as party of your modal, when you click the button, it'll return endOfGameModals

  $('body').append(endOfGameModals);
}

//----------------------------  MODAL BUTTONS  -----------------------------

const playAgain = (e) => {
  console.log(e.currentTarget);
  clearInterval();
  time = 60;
  timerProgress = 60;
  // let score = 0;
  setTimer();
  reset();
  animate();
  $(e.currentTarget).parent().detach();
  player1IsAlive = true;
  player1Score = 0;
  player2Score = 0;

  if (player2IsAlive == false) {
  $('#player1Score').text('Player 1 Score: ');
  }
  if (player2IsAlive){
    $('#player1Score').text('Player 1 Score: ');
    $('#player2Score').text('Player 2 Score: ');
  }
}

  

const playNow = (e) => {
  console.log(e.currentTarget);
  clearInterval();
  time = 60;
  timerProgress = 60;
  setTimer();
  reset();
  animate();
  $(e.currentTarget).parent().detach();
  player1IsAlive = false;
}

//------------------------------  TIMER BAR  ---------------------------------

const progressBarTimer = () => {
  const bar = document.getElementById('progressBar');
  const status = document.getElementById('status');
  bar.value = timerProgress;
  timerProgress--;
}

//--------------------------------  TIMER  ---------------------------------

const setTimer = () => {
  const timer = setInterval(() => {
    time--;
    progressBarTimer();

    //-------------------------  FOR ONE PLAYER GAME  --------------------------

    if ((time === 0) && (player1IsAlive == true) && (player2IsAlive == false)) {
      reset();
      clearInterval(timer);
    }

    //-------------------------  FOR TWO PLAYER GAME  --------------------------

    //1st go 'round: both players are alive.
    if ((time === 0) && (player1IsAlive == true) && (player2IsAlive == true)) {
      reset();
      clearInterval(timer);
      playNow();
    }

    //player 2, 2nd go 'round.
    if ((time === 0) && (player1IsAlive == false) && (player2IsAlive == true)) {
      reset();
      clearInterval(timer);
    }
  }, 1000);
}

// ------------------------------- CLASSES -------------------------------------

class Sprite {
  constructor(image, speed, speedType, direction, xPosition, yPosition, width, height) {
    this.image = image;
    this.speed = speed;
    this.speedType = speedType;
    this.direction = direction;
    this.startingpXPosition = xPosition;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
  }
}

// For this.image, image variables are in the imageVariables.js file, which is linked in index.html.

//SPRITE VARIABLE
const sprite = new Sprite(spriteImage, 4, 'medium', 'all', 660, 510, 112, 112);

//VEHICLE
class Vehicle extends Sprite {
  constructor(image, speed, speedType, direction, xPosition, yPosition, width, height) {
    //those that apply to sprite you'd call super for.
    super(image, speed, speedType, direction, xPosition, yPosition, width, height)
  }

  isOnScreen() {
    if (this.xPosition < 0) {
      return false;
    }
    if (this.xPosition > canvas.width) {
      return false;
    }
    return true;
  }

  moveVehicle() {
    this.xPosition += this.speed; //this moves all the vehicles.
  }

  //function 3: reset the vehicles.
  //if you are moving to the left, we are setting the starting position all the way to the right. else start at 0, which is the left side of the screen.
  // this.xPosition = this.startingpXPosition;

  resetVehicle() {
    if (this.speed < 0) {
      this.xPosition = canvas.width;
    } else {
      this.xPosition = 0;
    }

    //explanation: if (this.startingpXPosition)  {  if is looking for a boolean. you passed a number into a conditional statement. not 0 so it's true. is the starting position = 0? If not we set the xPosition to the right side of the screen. If it is 0, we set the xPosition to 0.
    //     this.xPosition = canvas.width
    // }
    // else {
    //   this.xPosition = this.startingXPosition;
    // }

  }

}

// --------------------------  VEHICLES ARRAY  ---------------------------------
const vehicles = [

  //FAST = TOP LANE. 4 VEHICLES.
  car = new Vehicle(carImage, -3, 'fast', 'left', 1420, 120, 96, 96),
  formula1 = new Vehicle(formula1Image, -3, 'fast', 'left', 1100, 120, 112, 112),
  truck = new Vehicle(truckImage, -3, 'fast', 'left', 400, 120, 112, 112),
  deliveryTruck = new Vehicle(deliveryTruckImage, -3, 'fast', 'left', 200, 120, 112, 112),

  //SLOW = MIDDLE LANE. 5 VEHICLES.
  scooter = new Vehicle(scooterImage, 2, 'slow', 'right', 50, 245, 112, 112),
  segway = new Vehicle(segwayImage, 2, 'slow', 'right', 550, 245, 112, 112),
  trolleyCart = new Vehicle(trolleyCartImage, 2, 'right', 'right', 850, 245, 112, 112),
  tumbleweed = new Vehicle(tumbleweedImage, 2, 'slow', 'right', 1050, 245, 112, 112),

  //MEDIUM = BOTTOM LANE. 5 VEHICLES.
  bulldozer = new Vehicle(bulldozerImage, -1, 'medium', 'right', 1100, 380, 112, 112),
  camper = new Vehicle(camperImage, -1, 'medium', 'left', 700, 380, 112, 112),
  crane = new Vehicle(craneImage, -1, 'medium', 'left', 300, 380, 112, 112),
  excavator = new Vehicle(excavatorImage, -1, 'medium', 'left', 500, 380, 112, 112),
  rv = new Vehicle(rvImage, -1, 'medium', 'left', 100, 380, 112, 112)
]

//-----------------------------  SPRITE RESET  ---------------------------------

const reset = () => {
  sprite.xPosition = 720;
  sprite.yPosition = 510;
}

//---------------------------  COLLISION FUNCTION  -----------------------------

const detectCollision = () => {

  for (let i = 0; i < vehicles.length; i++) {
    if (sprite.xPosition < vehicles[i].xPosition + vehicles[i].width && sprite.xPosition + sprite.width > vehicles[i].xPosition && sprite.yPosition < vehicles[i].yPosition + vehicles[i].height && sprite.yPosition + sprite.height > vehicles[i].yPosition) {
      reset();
      // console.log('oh, hai mark!');
    }
  }
}

//----------------------  BEGIN ANIMATION FUNCTION  ------------------------
const animate = () => {
  c.clearRect(0, 0, 1600, 650);
  const animationFun = requestAnimationFrame(animate); //added a variable animationFun so we can save the result from requestAnimationFrame to have the option to stop it. originally: requestAnimationFrame(animate);
  c.drawImage(backgroundImage, 0, 110, 1600, 400);
  c.drawImage(spriteImage, sprite.xPosition, sprite.yPosition, sprite.width, sprite.height)

  //NOTE: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

  //------------------------  DRAW THE VEHICLES  -------------------------

  for (let i = 0; i < vehicles.length; i++) {
    c.drawImage(vehicles[i].image, vehicles[i].xPosition, vehicles[i].yPosition, vehicles[i].width, vehicles[i].height);
    detectCollision(sprite, vehicles[i]);
  }

  //----------------------  MAKE THE VEHICLES MOVE  ----------------------

  for (let car of vehicles) {
    car.moveVehicle();
    if (!car.isOnScreen()) {
      car.resetVehicle();
    }
  }

  //-----------------------  SPRITE'S BOUNDARIES  ------------------------

  if ((sprite.xPosition <= -5) || (sprite.xPosition >= 1350)) {
    reset();
  }

  //---------------------  ADD POINTS: ONE PLAYER GAME  ------------------

  if (sprite.yPosition <= -10 && player1IsAlive == true && player2IsAlive == false) {
    player1Score++;
    reset();
    $('#player1Score').text('Your Score: ' + player1Score);
  }

  //-------------------  ADD POINTS: TWO PLAYER GAME  --------------------

  if (sprite.yPosition <= -10 && player1IsAlive == true && player2IsAlive == true) {
    player1Score++;
    reset();
    $('#player1Score').text('Player 1 Score: ' + player1Score);
  }

  if (sprite.yPosition <= -10 && player1IsAlive == false && player2IsAlive == true) {
    player2Score++;
    reset();
    $('#player2Score').text('Player 2 Score: ' + player2Score);
  }

  //-------------------------  MAKE SPRITE MOVE  -------------------------

  const moveSprite = (e) => {
    if (e.keyCode == 39) { //R
      sprite.xPosition += 50;
      // console.log(sprite);
    }
    if (e.keyCode == 37) { //L
      sprite.xPosition -= 10;
      // console.log(sprite);
    }
    if (e.keyCode == 38) { //UP
      sprite.yPosition -= 50;
      // console.log(sprite);
    }
    if (e.keyCode == 40) { //DOWN
      sprite.yPosition += 10;
      // console.log(sprite);
    }
  }
  document.onkeydown = moveSprite; //do not put () here.

  //------------------------  END OF GAME CHECKS -------------------------

  if (time === 0) {
    console.log('time is 0');
    clearInterval();
    endOfGameCheck(animationFun); //stops the animation.
    // cancelAnimationFrame(animationFun); cancels the request animation function from line 325.
  };

}

//--------------------------  DRAWS IT ALL OUT  ------------------------

const endOfGameCheck = (animationFun) => {

  //ONE PLAYER GAME
  if (player1IsAlive && !player2IsAlive) {
    cancelAnimationFrame(animationFun);
    const p1Modal = createHTML('p1', 'Player 1 Survived MoPac!', ['Play Again'], playAgain);
    console.log('this is a string');
  }

  //TWO PLAYER GAME: PERSON 2 TURN.
  if (player1IsAlive && player2IsAlive) {
    cancelAnimationFrame(animationFun);
    const tieModal = createHTML('p2', 'Player 2\'s Turn!', ['Play Now'], playNow);
  }

  //TWO PLAYER GAME: TIE
  if (!player1IsAlive && player2IsAlive && player1Score == player2Score) {
    cancelAnimationFrame(animationFun);
    const p2tModal = createHTML('tiebutton0', 'Players Tied!', ['Play Again'], playAgain);
  }

  //TWO PLAYER GAME: P1 WINS
  if (!player1IsAlive && player1Score > player2Score) {
    cancelAnimationFrame(animationFun);
    const p1wModal = createHTML('p1w', 'Player 1 Wins! You Survived MoPac & Its Many Enemies!', ['Play Again'], playAgain);
  }

  //TWO PLAYER GAME: P2 WINS
  if (!player1IsAlive && player2Score > player1Score) {
    cancelAnimationFrame(animationFun);
    const p2wModal = createHTML('p2w', 'Player 2 Wins! You Survived MoPac & Its Many Enemies!', ['Play Again'], playAgain);
  }
}

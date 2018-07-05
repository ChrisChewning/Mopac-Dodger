//----------------------------------  CANVAS   ---------------------------------

const canvas = document.querySelector('canvas'); //DOM selector
//jQuery selector needed instead
const c = canvas.getContext('2d');


// --------------------------- GLOBAL VARIABLES --------------------------------

let player1Score = '';
let player2Score = '';
let time = 5;
let timerProgress = 100;
$('#progressBar').hide();

// ---------------------------- PLAYER OPTIONS ---------------------------------

$('#onePlayerBtn').on('click', (e) => {
  player1IsAlive = true;
  player2IsAlive = false;
  $('#player1Score').text('Your Score: ');
  $('#modal').hide();
  $('#progressBar').show();
  setTimer();
});


$('#twoPlayerBtn').on('click', (e) => {
  player1IsAlive = true;
  player2IsAlive = true;
  $('#player1Score').text('Player 1 Score: ');
  $('#player2Score').text('Player 2 Score: ');
  $('#modal').hide();
  $('#progressBar').show();
  setTimer();
});

//------------------------------  TIMER BAR  -----------------------------------

const progressBarTimer = () => {
  const bar = document.getElementById('progressBar');
  const status = document.getElementById('status');
  // status.innerHTML = timerProgress + '%'; if you wanted to show %
  bar.value = timerProgress;
  timerProgress--;
}

//----------------------------  ONE OR TWO PLAYERS  ----------------------------

//TIMER
const setTimer = () => {
  const timer = setInterval(() => {
    time--;
    console.log(time); //check it here, not after closing brackets.
    progressBarTimer(); //sets the progress bar to start counting down on the screen.

    //     if(progressBarTimer == 0) {
    //         clearInterval(timer);
    // }


    //-------------------------  FOR ONE PLAYER GAME  --------------------------

    if ((time === 0) && (player1IsAlive == true) && (player2IsAlive == false)) {
      alert('hi');
      reset();
      clearInterval(timer);
    }

    //-------------------------  FOR TWO PLAYER GAME  --------------------------

    //1st go 'round: both players are alive.
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
  }, 1000);
}


   //------------------------  END OF GAME MODALS  -----------------------------

const createHTML = (id, innerText, buttonTexts) => {

  //MODAL
  let endOfGameModals = document.createElement('div'); //creates a div
  endOfGameModals.className = 'modal'; //gives the div a class name of modal
  endOfGameModals.id = id; //gives the div an id of id b.c you passed it as a parameter

  //H4 TEXT
  let myh4 = document.createElement('h4'); //creates a span element.
  myh4.innerText = innerText; //crates text inside the span element.
  myh4.className = 'modalSpan'; //creates a class name for the span.
  endOfGameModals.append(myh4); //appends the span to the div.
  // endOfGameModals.append(document.createElement('br'));

  //BUTTONS
  for (i = 0; i < buttonTexts.length; i++) { //loop through buttonTexts.length.
    let myButton = document.createElement('button'); //create button/buttons.
    myButton.innerText = buttonTexts[i]; //give each button text.
    myButton.id = id + 'button' + i; //give each button an id.
    myButton.className = 'modalButton'; //give all the buttons a class.
    endOfGameModals.append(myButton); //append buttons to the modal.
  }
  return endOfGameModals; //
}

// let Modal = createHTML('hi', 'yo', ['buttonSSS'])

// let Modal = (endOfGameModals) => {
//   document.body.append(createHTML);
// }



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
const sprite = new Sprite(spriteImage, 4, 'medium', 'all', 660, 510, 112, 112);

//VEHICLE
class Vehicle extends Sprite {

  //this constructor allows you to pass more parameters.
  constructor(image, speed, speedType, direction, xPosition, yPosition, width, height) {
    //those that apply to sprite you'd call super for.
    super(image, speed, speedType, direction, xPosition, yPosition, width, height)
  }

  //FUNCTIONS: you don't need parameters b.c your info is in your class.

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


  //extended a class. So super is calling the constructor for the parent class (Sprite). You are passing the variables you gave

  //function 2: move the vehicles.
  moveVehicle() {
    this.xPosition += this.speed; //this moves all the vehicles.
  }

  //function 3: reset the vehicles.
  //if you are moving to the left, we are setting the starting position all the way to the right. //else start at 0, which is the left side of the screen.
  // this.xPosition = this.startingpXPosition;

  resetVehicle() {
    if (this.speed < 0) {
      this.xPosition = canvas.width;
    } else {
      this.xPosition = 0;
    }

    //explanation: if (this.startingpXPosition)  {  //if is looking for a boolean. you passed a number into a conditional statement. not 0 so it's true. is the starting position = 0? If not we set the xPosition to the right side of the screen. If it is 0, we set the xPosition to 0.
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
  car = new Vehicle(carImage, -3, 'fast', 'left', 1420, 120, 112, 112),
  formula1 = new Vehicle(formula1Image, -3, 'fast', 'left', 1100, 120, 112, 112),
  truck = new Vehicle(truckImage, -3, 'fast', 'left', 400, 120, 112, 112),
  trucktruck = new Vehicle(trucktruckImage, -3, 'fast', 'left', 200, 120, 112, 112),

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
  rv = new Vehicle(rvImage, -1, 'medium', 'left', 100, 380, 112, 112),
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

//---------------------------  DRAW THE VEHICLES  ------------------------------
//formula: what image, x-starting pt., y-starting pt., width, height

const animate = () => {
  c.clearRect(0, 0, 1600, 650);
  requestAnimationFrame(animate);
  c.drawImage(backgroundImage, 0, 110, 1600, 400);
  c.drawImage(spriteImage, sprite.xPosition, sprite.yPosition, sprite.width, sprite.height)


  //---------------------------  DRAW THE VEHICLES  ----------------------------
  for (let i = 0; i < vehicles.length; i++) {
    c.drawImage(vehicles[i].image, vehicles[i].xPosition, vehicles[i].yPosition, vehicles[i].width, vehicles[i].height);
    // detectCollision(sprite, vehicles[i]);
  }


  //------------------------  MAKE THE VEHICLES MOVE  --------------------------
  for (let car of vehicles) {
    car.moveVehicle();
    if (!car.isOnScreen()) {
      car.resetVehicle();
    }
  }


  //------------------------  SPRITE'S BOUNDARIES  -------------------------

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

  if ((time === 0) && (player1Score == player2Score)) {
    let tieModal = createHTML('tie', 'No one wins - what is this, soccer?!?!', ['Play Again?', 'NAH']);
    $('body').append(tieModal);
  }

  if ((time === 0) && (player1Score > player2Score)) {
    let player1WinsModal = createHTML('P1W', 'Player 1 Wins! You survived MoPac & its many enemies.', ['Play Again?', 'NAH']);
    $('body').append(player1WinsModal);
  }
  if ((time === 0) && (player2Score > player1Score)) {
    let player2WinsModal = createHTML('P2W', 'Player 2 Wins! You survived MoPac & its many enemies!', ['Play Again?', 'NAH']);
    $('body').append(player2WinsModal);
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


//--------------------------  MODALS FOR END OF GAME  --------------------------




// const createHTML = (id, innerText, buttonTexts) => {
//
//   //MODAL
//   let endOfGameModals = document.createElement('div');
//   endOfGameModals.className = 'modal';
//   endOfGameModals.id = id;
//
//   //SPAN TEXT
//   let mySpan = document.createElement('span');
//   mySpan.innerText = innerText;
//   mySpan.className = 'modalSpan';
//   endOfGameModals.append(mySpan);
//
//   //BUTTONS
//   for (i = 0; i < buttonTexts.length; i++){
//   let myButton = document.createElement('button');
//   myButton.innerText = buttonTexts[i];
//   myButton.id = id + 'button'+i;
//   myButton.className = 'modalButton';
//   endOfGameModals.append(myButton);
// }
//   return endOfGameModals;
// }


// createHTML('tie', 'No one wins - what is this, soccer?!?!', ['Play Again?', 'NAH']);

// document.body.append(myHTML);


let player1Wins = createHTML('player1Wins', 'Player 1 Wins', ['Play Again?', 'NAH']);
// document.body.append(myHTML);


// let new Modal = endOfGameModals {
//   document.body.append(createHTML);
// }


//need to call it. in your if / else statement.

//take classes and style them.


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

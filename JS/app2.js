//----------------------------------  CANVAS   ---------------------------------

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');


// --------------------------- GLOBAL VARIABLES --------------------------------

let player1Score = '';
let player2Score = '';
let time = 60;
let timerProgress = 60;
$('#progressBar').hide();

// ---------------------------- PLAYER OPTIONS ---------------------------------

$('#onePlayerBtn').on('click', (e) => {
  player1IsAlive = true;
  player2IsAlive = false;
  $('#player1Score').text('Your Score: ');
  $('#onStartModal').hide();
  $('#progressBar').show();
  setTimer();
});


$('#twoPlayerBtn').on('click', (e) => {
  player1IsAlive = true;
  player2IsAlive = true;
  $('#player1Score').text('Player 1 Score: ');
  $('#player2Score').text('Player 2 Score: ');
  $('#onStartModal').hide();
  $('#progressBar').show();
  setTimer();
});


//----------------------  CREATE END OF GAME MODALS  -------------------------

const createHTML = (id, innerText, buttonTexts, thefunctionyouwanttorun) => {
  /// ============================
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
    const myButton = document.createElement('button');
    myButton.innerText = buttonTexts[i];
    myButton.id = id + 'button' + i;
    myButton.className = 'modalButton';
    endOfGameModals.append(myButton);

    // ====================================================================
    // ====================================================================
    // ========================================== ==========================
    // Could do the following to add an event listener to the buttons
    // By adding an extra parameter to the function defintion you can pass
    // in a function to do whatever you want for the even tlister
    if(thefunctionyouwanttorun){

      // we have to check if a function exists when being passed to it
      // otherwise it will error out
       // myButton.on('click', thefunctionyouwanttorun);
    }



    // ====================================================================

    // ====================================================================
    // ====================================================================

  }
  return endOfGameModals;
}


//CREATES MODALS

//// ========
    // ====================================================================
    // These should all be const variable, and this is where you can add the function you want for the event
    // listenr at the end of plModal
    // ====================================================================

const func = () => {

};
const p1Modal = createHTML('p1', 'Player 1 Survived MoPac!', ['Play Again'], func);

const p2tModal = createHTML('p2t', 'Player 2\'s turn!', ['START'], func);

const tieModal = createHTML('tie', 'No one wins - what is this, soccer?!?!', ['Play Again?', 'NAH'], func);

const p1wModal = createHTML('p1w', 'Player 1 Wins! You survived MoPac & its many enemies.', ['Play Again?', 'NAH'], func);

const p2wModal = createHTML('p2w', 'Player 2 Wins! You survived MoPac & its many enemies!', ['Play Again?', 'NAH'], func);






  //--------  THESE DON'T WORK  ---------

  $('#p1button0').on('click', (e) => {
    // $('#p1').detach();
    time = 60;
    reset();
  });

  console.log($('#p1button0'));

  //P2 TURN (only has one button)
  $('#p2tbutton0').on('click', (e) => {
    // $('#p2t').detach();
    time = 60;
    reset();
  });

  //TIE BUTTONS
  $('#tiebutton0').on('click', (e) => {
    $('#tie').detach();
    time = 60;
    reset();
  });

  $('#tiebutton1').on('click', (e) => {
    $('#tie').detach();
  });

  //PLAYER 1 WINS BUTTONS
  $('#p1wbutton0').on('click', (e) => {
    $('#p1w').detach();
    console.log(YO);
    time = 60;
    reset();
  });

  $('#p1wbutton1').on('click', (e) => {
    $('#p1w').detach();
  });

  //PLAYER 2 WINS BUTTONS
  $('#p2wbutton0').on('click', (e) => {
    $('#p2w').detach();
    time = 60;
    reset();
  });

  $('#p2wbutton1').on('click', (e) => {
    $('#p2w').detach();
  });





//------------------------------  TIMER BAR  -----------------------------------

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
    // console.log(time); //check it here, not after closing brackets.
    progressBarTimer();


    //-------------------------  FOR ONE PLAYER GAME  --------------------------

    if ((time === 0) && (player1IsAlive == true) && (player2IsAlive == false)) {
      reset();
      console.log('this happening, insd')
      clearInterval(timer);
    }

    //-------------------------  FOR TWO PLAYER GAME  --------------------------

    //1st go 'round: both players are alive.
    if ((time === 0) && (player1IsAlive == true) && (player2IsAlive == true)) {
      reset();
      clearInterval(timer);
      player1IsAlive = false;
      // console.log(player1IsAlive);
    }

    //player 2, 2nd go 'round.
    if ((time === 0) && (player1IsAlive == false) && (player2IsAlive == true)) {
      reset();
      clearInterval(timer);
      player1IsAlive == false;
      // console.log(player1IsAlive);
    }
  }, 1000);
}


//---------------------------  MODAL BUTTONS ON CLICKS  ----------------------


// //PLAYER 1 PLAY AGAIN BUTTON
// $('#p1button0').on('click', (e) => {
//   $(p1Modal).detach();
//   time = 60;
//   reset();
// });
//
// //PLAYER 2'S TURN BUTTON
// $('#p2tbutton0').on('click', (e) => {
//   $(p2tModal).detach();
//   time = 60;
//   reset();
// });



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
  rv = new Vehicle(rvImage, -1, 'medium', 'left', 100, 380, 112, 112),
]


//-----------------------------  SPRITE RESET  ---------------------------------

const reset = () => {
  sprite.xPosition = 720;
  sprite.yPosition = 510;
}

//---------------------------  COLLISION FUNCTION  -----------------------------

const detectCollision = () => {

  for (let i = 0; i < vehicles.length; i++) {
    if (sprite.xPosition < vehicles[i].xPosition + vehicles[i].width &&
      sprite.xPosition + sprite.width > vehicles[i].xPosition &&
      sprite.yPosition < vehicles[i].yPosition + vehicles[i].height &&
      sprite.yPosition + sprite.height > vehicles[i].yPosition) {
      reset();
      // console.log('oh, hai mark!');
    }
  }
}

//------------------------  BEGIN ANIMATION FUNCTION  --------------------------


const animate = () => {
  c.clearRect(0, 0, 1600, 650);



  /// We want to save the result from requestAnimationFrame for below in order to cancel it


//Is requestAnimationFrame from a library?
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

  const animationFun = requestAnimationFrame(animate);

  c.drawImage(backgroundImage, 0, 110, 1600, 400);
  c.drawImage(spriteImage, sprite.xPosition, sprite.yPosition, sprite.width, sprite.height)





//Is this how you cancel it out? Like catching the frame when the timer hits zero. Are you trying to cancel the animation so the button can detach?

//Like catch the animation frame and cancel it out through the function.


  // const id=requestAnimationFrame(cache.mechanism.snowFall);

// console.log(id);


  //---------------------------  DRAW THE VEHICLES  ----------------------------

  for (let i = 0; i < vehicles.length; i++) {
    c.drawImage(vehicles[i].image, vehicles[i].xPosition, vehicles[i].yPosition, vehicles[i].width, vehicles[i].height);
    detectCollision(sprite, vehicles[i]);
  }


  //------------------------  MAKE THE VEHICLES MOVE  --------------------------

  for (let car of vehicles) {
    car.moveVehicle();
    if (!car.isOnScreen()) {
      car.resetVehicle();
    }
  }

  //-------------------------  SPRITE'S BOUNDARIES  ----------------------------

  if ((sprite.xPosition <= -5) || (sprite.xPosition >= 1350)) {
    reset();
  }

  //-----------------------  ADD POINTS: ONE PLAYER GAME  ----------------------

  if (sprite.yPosition <= -10 && player1IsAlive == true && player2IsAlive == false) {
    player1Score++;
    reset();
    $('#player1Score').text('Your Score: ' + player1Score);
  }


  //-----------------------  ADD POINTS: TWO PLAYER GAME  ----------------------

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


  //---------------------------  MAKE SPRITE MOVE  ---------------------------

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


  //---------------------------  END OF GAME CHECKS ----------------------------


  ///// ============================
  /// ============================

  // You should make the end game check a function beecause you want to check it
  // in the timer instead of just

  /// ============================
  /// ============================

  //PLAYER 1 ONLY
  if (time === 0 && player1IsAlive == true && player2IsAlive == false) {

    //animationFun##############################################################
    //animationFun##############################################################
    //animationFun##############################################################
    //animationFun##############################################################

    // We need to pass the result of requestAnimationFrame
    // to cancelAnimationFrame in order to stop it
    // Also You can make all these checks function for end, it would make your code cleaner
    cancelAnimationFrame(animationFun);


//animationFun##############################################################
//animationFun##############################################################
    console.log(p1Modal, ' this is p1Modal')
    console.log('this being called')
    $('body').append(p1Modal);

    //P1 Play again? (only has one button)

  }



  //PLAYER 2 TURN
  if (time === 0 && player1IsAlive == true && player2IsAlive == true) {
clearInterval();
    $('body').append(p2tModal);

  }

  //TIE
  if (time === 0 && player1IsAlive == false && player1Score == player2Score) {
    $('body').append(tieModal);
    clearInterval();
  }

  //PLAYER 1 WIN
  if (time === 0 && player1IsAlive == false && player1Score > player2Score) {
    $('body').append(p1wModal);
    clearInterval();
  }

  //PLAYER 2 WIN
  if (time === 0 && player1IsAlive == false && player2Score > player1Score) {
    $('body').append(p2wModal);
    clearInterval();
  }

}
//------------------------------  DRAWS IT ALL OUT  --------------------------

animate();
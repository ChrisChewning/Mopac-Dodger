// window.onLoad = function() {


//-----------------------  CANVAS & TIMER  -----------------------

//CANVAS
const canvas = document.querySelector('canvas'); //DOM selector
//jQuery selector needed instead
const c = canvas.getContext('2d');


//TIMER IS WORKING
let time = 60;
const setTimer = () => {
  const timer = setInterval(() => {
    time--;
    console.log(time); //check it here, not after closing brackets.
  }, 1000); //this goes every second.
}
setTimer();


// --------------------------- GLOBAL VARIABLES --------------------------------


//SCORES
let player2Score = '';
let player1Score = '';

//  BACKGROUND VARIABLE
const backgroundImage = new Image();
backgroundImage.src = 'https://opengameart.org/sites/default/files/Toon%20Road%20Texture.png';

//SPRITE IMAGE VARIABLE
const spriteImage = new Image();
spriteImage.src = 'images/tacotruck.png'


// IMAGES FOR MEDIUM SPEED ICONS
const bulldozerImage = new Image();
bulldozerImage.src = 'images/bulldozer.png'
const camperImage = new Image();
camperImage.src = 'images/camper.png'
const craneImage = new Image();
craneImage.src = 'images/crane.png'
const excavatorImage = new Image();
excavatorImage.src = 'images/excavator.png'
const rvImage = new Image();
rvImage.src = 'images/rv.png'


//IMAGES FOR SLOW SPEED ICONS
const scooterImage = new Image();
scooterImage.src = 'images/scooter.png'
const segwayImage = new Image();
segwayImage.src = 'images/segway.png'
const trolleyCartImage = new Image();
trolleyCartImage.src = 'images/trolleyCart.png'
const tumbleweedImage = new Image();
tumbleweedImage.src = 'images/tumbleweed.png';

// IMAGES FOR FAST SPEED ICONS
const carImage = new Image();
carImage.src = 'images/car.png'
const formula1Image = new Image();
formula1Image.src = 'images/formula1.png'
const truckImage = new Image();
truckImage.src = 'images/truck.png'
const trucktruckImage = new Image();
trucktruckImage.src = 'images/trucktruck.png'



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
    console.log('hi');
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

  for (let i = 0; i < vehicles.length; i++) {
    c.drawImage(vehicles[i].image, vehicles[i].xPosition, vehicles[i].yPosition, vehicles[i].width, vehicles[i].height);
    detectCollision(sprite, vehicles[i]);
    // console.log(detectCollision);
  }


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
    sprite.yPosition -= 10;
    console.log(sprite);
  }
  if (e.keyCode == 40) { //DOWN
    sprite.yPosition += 10;
    console.log(sprite);
  }

  if ((sprite.xPosition <= -5) || (sprite.xPosition >= 1350)) {
    reset();
  }
  if (sprite.yPosition <= -10) {
    player2Score++;
    player1Score++;
    reset();

    $("#player2Score").text('Player Two: ' + player2Score);
    $("#player1Score").text('Player One: ' + player1Score);
    console.log(player1Score);
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

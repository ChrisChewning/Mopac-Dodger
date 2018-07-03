// window.onLoad = function() {


const canvas = document.querySelector('canvas'); //DOM selector
//jQuery selector needed instead
const c = canvas.getContext('2d');


//GLOBAL VARIABLES
let player2Score = 0;
let player1Score = 0;

// MODAL



swal({title: "Make it to the other side without getting hit!",
  buttons: {
    onePlayer: {
      text: "One Player!",
      value: "one",
    },
    twoPlayers: {
      text: "Two Players!",
      value: "two",
  }
}
});


//success modal
//failure modal




//CLASSES
class Sprite {
  constructor(name, speed, speedType, direction, xPosition, yPosition, width, height) {
    this.name = name;
    this.speed = speed;
    this.speedType = speedType;
    this.direction = direction;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
  }
}

const sprite = new Sprite('sprite', 4, 'medium', 'all', 660, 510, 128, 128);


class Vehicle extends Sprite {}

//VEHICLE VARIABLES

//FAST =  4 Vehicles
const car = new Vehicle('car', 5, 'fast', 'left', 1300, 120, 126, 126);
const formula1 = new Vehicle('formula1', 5, 'fast', 'left', 1700, 120, 126, 126);
console.log(Vehicle);
const truck = new Vehicle('truck', 5, 'fast', 'left', 2100, 120, 126, 126);
const trucktruck = new Vehicle('trucktruck', 5, 'fast', 'left', 2500, 120, 126, 126);

//SLOW = 5 Vehicles
const scooter = new Vehicle('scooter', 3, 'slow', 'right', -440, 245, 126, 126);
const segway = new Vehicle('segway', 3, 'slow', 'right', -840, 245, 126, 126);
const trolleyCart = new Vehicle('trolleyCart', 3, 'right', 'right', -1240, 245, 126, 126);
const tumbleweed = new Vehicle('tumbleweed', 3, 'slow', 'right', -1640, 245, 126, 126);

//MEDIUM = 5 Vehicles
const bulldozer = new Vehicle('bulldozer', 3, 'medium', 'right', 2300, 380, 126, 126);
const camper = new Vehicle('camper', 3, 'medium', 'left', 1900, 380, 126, 126);
const crane = new Vehicle('crane', 3, 'medium', 'left', 1500, 380, 126, 126);
const excavator = new Vehicle('excavator', 3, 'medium', 'left', 500, 380, 126, 126);
const rv = new Vehicle('rv', 3, 'medium', 'left', 700, 380, 126, 126);



const reset = () => {
  sprite.xPosition = 660;
  sprite.yPosition = 510;
}


// ------------------------ IMAGE VARIABLES ------------------------------

//SPRITE IMAGE VARIABLE
let spriteImage = new Image();
spriteImage.src = 'images/tacotruck.png'

//IMAGES FOR FAST SPEED ICONS
let carImage = new Image();
carImage.src = 'images/car.png'
let formula1Image = new Image();
formula1Image.src = 'images/formula1.png'
let truckImage = new Image();
truck.src = 'images/truck.png'
let trucktruckImage = new Image();
trucktruckImage.src = 'images/trucktruck.png'

//IMAGES FOR MEDIUM SPEED ICONS
let bulldozerImage = new Image();
bulldozerImage.src = 'images/bulldozer.png'
let camperImage = new Image();
camperImage.src = 'images/camper.png'
let craneImage = new Image();
craneImage.src = 'images/crane.png'
let excavatorImage = new Image();
excavator.src = 'images/excavator.png'
let rvImage = new Image();
rvImage.src = 'images/rv.png'

//IMAGES FOR SLOW SPEED ICONS
let scooterImage = new Image();
scooterImage.src = 'images/scooter.png'
let segwayImage = new Image();
segwayImage.src = 'images/segway.png'
let trolleyCartImage = new Image();
trolleyCartImage.src = 'images/trolleyCart.png'
let tumbleweedImage = new Image();
tumbleweedImage.src = 'images/tumbleweed.png';

let backgroundImage = new Image();
backgroundImage.src = 'https://opengameart.org/sites/default/files/Toon%20Road%20Texture.png';

//----------------------------  DRAW THE VEHICLES  -----------------------------
// what image, x-starting pt., y-starting pt., width, height

const animate = () => {
  c.clearRect(0, 0, 1600, 650);
  requestAnimationFrame(animate);

  // BACKGROUND
  c.drawImage(backgroundImage, 0, 110, 1600, 400);

  //FAST
  c.drawImage(carImage, car.xPosition, car.yPosition, car.width, car.height);
  c.drawImage(formula1Image, formula1.xPosition, formula1.yPosition, formula1.width, formula1.height);
  c.drawImage(truckImage, truck.xPosition, truck.yPosition, truck.width, truck.height);
  c.drawImage(trucktruckImage, trucktruck.xPosition, trucktruck.yPosition, trucktruck.width, trucktruck.height);

  //SLOW
  c.drawImage(tumbleweedImage, tumbleweed.xPosition, tumbleweed.yPosition, tumbleweed.width, tumbleweed.height);
  c.drawImage(scooterImage, scooter.xPosition, scooter.yPosition, scooter.width, scooter.height);
  c.drawImage(segwayImage, segway.xPosition, segway.yPosition, segway.width, segway.height);
  c.drawImage(trolleyCartImage, trolleyCart.xPosition, trolleyCart.yPosition, trolleyCart.width, trolleyCart.height);

  //MEDIUM
  c.drawImage(bulldozerImage, bulldozer.xPosition, bulldozer.yPosition, bulldozer.width, bulldozer.height);
  c.drawImage(camperImage, camper.xPosition, camper.yPosition, camper.width, camper.height);
  c.drawImage(craneImage, crane.xPosition, crane.yPosition, crane.width, crane.height);
  c.drawImage(excavatorImage, excavator.xPosition, excavator.yPosition, excavator.width, excavator.height);
  c.drawImage(rvImage, rv.xPosition, rv.yPosition, rv.width, rv.height);


  //SPRITE
  c.drawImage(spriteImage, sprite.xPosition, sprite.yPosition, sprite.width, sprite.height)


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

//-----------------------------  MAKE SPRITE MOVE  -----------------------------

function moveSprite(e) {
  if (e.keyCode == 39) { //r
    sprite.xPosition += 50;
    console.log(sprite);
  }
  if (e.keyCode == 37) { //l
    sprite.xPosition -= 10;
    console.log(sprite);
  }
  if (e.keyCode == 38) { //up
    sprite.yPosition -= 10;
    console.log(sprite);
  }
  if (e.keyCode == 40) { //down
    sprite.yPosition += 10;
    console.log(sprite);
    canvas.width = canvas.width; //resets the canvas.
    console.log(sprite);
  }

  if ((sprite.xPosition <= -5) || (sprite.xPosition >= 1350)) {
    reset();
  }
  if (sprite.yPosition <= -10) {
    player2Score++;
    player1Score++;
    reset();

    $("#player2Score").text('Player 2\'s score is: ' + player2Score);
    $("#player1Score").text('Player 1\'s score is: ' + player1Score);
    console.log(player1Score);
    console.log(player2Score);
  }
}
animate();
document.onkeydown = moveSprite; //do not put () here.


//-----------------------  COLLISION DETECTION FUNCTION  -----------------------

// const detectCollision = (a, b) => {


// example code here:
// collides: function(a, b) { // Algorithm for checking if two squared objects collide
// 	  	return a.x < b.x + b.width && // Returns true if all those conditions are met
// 	           a.x + a.width > b.x &&
// 	           a.y < b.y + b.height &&
// 	           a.y + a.height > b.y;
// 	},
//
//   // (sprite, vehicles)



//https://codereview.stackexchange.com/questions/160801/frogger-html5-javascript-canvas-game-using-object-oriented-design
//     if (v.find(v =>
//         (v.y >= this.y - 10) &&
//         (v.y <= this.y) &&
//         (v.x >= this.x - (v.length))
//         && (v.x <= this.x - 14))
//     ) {
//         loseLife();
//         resetPosition();
//     }
// }


//this wouldn't work b.c this is whether a value is greater than another one.
// if (vehicle.xPosition >= sprite.xPosition || vehicle.yPosition >= sprite.yPosition)





//OPTION 1: put boundaries on each image. https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection

//OPTION 2: put the 'enemies' into an array. Loop through the array, checking if they've hit the sprite.

// const collision = (enemies, sprite) => {
//
// }

//OPTION 3: get bounding client rec().left .right .top .bottom

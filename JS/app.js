// window.onLoad = function() {


const canvas = document.querySelector('canvas'); //DOM selector
//jQuery selector needed instead
var c = canvas.getContext('2d');



class Vehicle {
  constructor(name, speed, direction, xPosition, yPosition, width, height){
  this.name = name;
  this.speed = speed;
  this.direction = direction;
  this.xPosition = xPosition;
  this.yPosition = yPosition;
  this.width = width;
  this.height = height;
}
}

  const sprite = new Vehicle('sprite', .5, 'right', 100, 40, 40, 40)


  // tFly.reset = function(){
  //  //set new random position
  //  newX = Math.random() * this.cWidth;
  //  newY = Math.random() * this.cHeight;
  //  this.setPosition(newX, newY);
  // } // end reset
  //  tFly.reset();


const reset = () => {
  this.xPosition = 100;
  this.yPosition = 40;
}


  //
  // reset(xPosition, yPosition) {
      // x.Position =
      // y.Position =
  //   }

//WANT 10 vehicles

//VEHICLES
  const car = new Vehicle('car', 1.5, 'right', 0, 20, 50, 50);
  const truck = new Vehicle('truck', .5, 'right', 0, 80, 50,50);
  const bulldozer = new Vehicle('bulldozer', .5, 'right', 0, 100, 500, 500);
  const van = new Vehicle('van', 1, 'left', 100, 40, 60, 60);
  const tumbleweed = new Vehicle('tumbleweed', 1, 'left', 400, 60, 50, 50);





console.log(Vehicle);


// ------------------------ IMAGE VARIABLES ------------------------------

//SPRITE IMAGE VARIABLE
let spriteImage = new Image();
spriteImage.src = 'https://cdn.iconscout.com/public/images/icon/premium/png-256/food-truck-car-transport-machine-movement-transportation-3486058b4a238844-256x256.png';

// TUMBLEWEED IMAGE VARIABLE
let tumbleweedImage = new Image();
tumbleweedImage.src = 'https://i.imgur.com/jTqxjp1.png';
//CAR IMAGE VARIABLE
let carImage = new Image();
carImage.src = 'https://i.imgur.com/WYFaKX3.png';
//TRUCK IMAGE VARIABLE
let truckImage = new Image();
truckImage.src = 'https://i.imgur.com/ML2VTl4.png';
//BULLDOZER IMAGE VARIABLE
let bulldozerImage = new Image();
bulldozerImage.src = 'https://i.imgur.com/NiY5TTh.png'
//VAN IMAGE VARIABLE
let vanImage = new Image();
vanImage.src = 'https://image.flaticon.com/icons/png/128/171/171255.png'



//----------------------------  DRAW THE VEHICLES  -----------------------------

const animate = () => {
  c.clearRect(0, 0, 1095, 468);
  // c.beginPath(); //don't think you need.
  requestAnimationFrame(animate);

  // what image, x-starting pt., y-starting pt., width, height
  c.drawImage(tumbleweedImage, tumbleweed.xPosition, tumbleweed.yPosition, tumbleweed.width, tumbleweed.height);
  c.drawImage(carImage, car.xPosition, car.yPosition, car.width, car.height); //x, y, how wide, how tall
  c.drawImage(truckImage, truck.xPosition, truck.yPosition, truck.width, truck.height); //x, y, how wide, how tall
  c.drawImage(bulldozerImage, bulldozer.xPosition, bulldozer.yPosition, bulldozer.width, bulldozer.height);
  c.drawImage(vanImage, van.xPosition, van.yPosition, van.width, van.height)
  c.drawImage(spriteImage, sprite.xPosition, sprite.yPosition, sprite.width, sprite.height)


  //------------------------  MAKE THE VEHICLES MOVE  --------------------------
              //Remember: -= or += determine the direction.

  tumbleweed.xPosition -= tumbleweed.speed;
  car.xPosition += car.speed;
  truck.xPosition += truck.speed;
  bulldozer.xPosition += bulldozer.speed;
  van.xPosition -= van.speed;
  console.log('hi');
}

//-----------------------------  MAKE SPRITE MOVE  -----------------------------

function moveSprite(e) {
  console.log('hi');
  if (e.keyCode == 39) { //r
    sprite.xPosition += 5;
  }
  if (e.keyCode == 37) { //l
    sprite.xPosition -= 5;
  }
  if (e.keyCode == 38) { //up
    sprite.yPosition -= 5;
  }
  if (e.keyCode == 40) { //down
    sprite.yPosition += 5;
    console.log(e.keycode);
    canvas.width = canvas.width; //resets the canvas.
  }
  if (sprite.yPosition < -35) {
    // alert('hi');
    reset(sprite);
    // sprite.reset(sprite.xPosition, sprite.yPosition); // Go back to the start
    // score++; // Score increases;
    // $("#score").text(score);
  }
  (console.log(sprite));
}
animate();
document.onkeydown = moveSprite; //do not put () here.

//REACHED SAFETY?


// // Resets the player sprite back to the initial position
//   reset(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//
//   // The player position resets when they reach the water
//   update() {
//     // Is the water reached?
//
//
//     if (this.y <= 0) {
//       this.reset(startPositionX, startPositionY); // Go back to the start
//       score++; // Score increases;
//       $("#score").text(score);
//     }
//   }


// update() {
//    // Is the water reached?
//    if (this.y <= 0) {
//      this.reset(startPositionX, startPositionY); // Go back to the start
//      score++; // Score increases;
//      $("#score").text(score);
//    }
// }


//Could make them stop with these codes inside the function.
// let x = canvas.width/2;
// let y = canvas.height-30;
// let z = canvas.width/3



// COLLISION DETECTION


//COLLISION CHECKER
// const COLLIDED = 50; // Collision



//SPEEDS FOR OBJECTS IN CLASS
// const speeds = [300, 230, 400]; // Starting speeds


//SCORE
// let score = 0; // Starting score - 0
//








// Need to reset the player's direction. Turn them around. OR you can reset them back to the beginning, like below...

// reset(x, y) {
//    this.x = x;
//    this.y = y;
//  }
//
//  // The player position resets when they reach the water



//to get a point
// water -y axis is 450.

//

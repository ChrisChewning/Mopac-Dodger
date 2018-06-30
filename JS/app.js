
const canvas = document.querySelector('canvas'); //DOM selector
//jQuery selector needed instead
var c = canvas.getContext('2d');

// --------------------------- IMAGE VARIABLES ---------------------------------

// TUMBLEWEED IMAGE VARIABLE
let tumbleweedImage = new Image();
tumbleweedImage.src = 'https://d30y9cdsu7xlg0.cloudfront.net/png/28479-200.png';
// c.drawImage(tumbleweedImage, 0, 0);

//CAR IMAGE VARIABLE
let carImage = new Image();
// carImage.src = images/car.png
carImage.src = 'http://icons.iconarchive.com/icons/iconsmind/outline/256/Car-2-icon.png';
// c.drawImage(carImage, 0, 0);

//TRUCK IMAGE VARIABLE
let truckImage = new Image();
truckImage.src = 'http://downloadicons.net/sites/default/files/truck-icon-50351.png';
// c.drawImage(truckImage, 0, 0);

//BULLDOZER IMAGE VARIABLE
let bulldozerImage = new Image();
bulldozerImage.src = 'https://cdn.iconscout.com/public/images/icon/premium/png-512/bulldozer-3f0d911e1d492e9a-512x512.png'


//----------------------  Starting Points & Velocities  ------------------------

let tumbleweed = 700;
let dtumbleweed = 1;
let car = 0; //starting point
let dcar = 3; //velocity
let truck = 400; //starting point
let dtruck = 2;
let bulldozer = 0;
let dbulldozer = 2;


//----------------------  ANIMATE FUNCTION DRAWS THINGS  -----------------------

const animate = () => {
  c.clearRect(0, 0, 1095, 468);
  c.beginPath();
  requestAnimationFrame(animate);

  // x-axis, y-axis, width, height
  c.drawImage(tumbleweedImage, tumbleweed, 60, 35, 35);
  c.drawImage(carImage, car, 20, 35, 35); //x, y, how wide, how tall
  c.drawImage(truckImage, truck, 60, 35, 35); //x, y, how wide, how tall
  c.drawImage(bulldozerImage, bulldozer, 100, 35, 35);


  // // for (var i = 0; i < 299; i++) {
  // //   var x = Math.random() * window.innerWidth;
  // //   var y = Math.random() * window.innerHeight;
  // //
  // //   const randomize = Math.floor(Math.random() * 3) + 1;
  // //   if (randomize === 1){
  // //     c.strokeStyle = 'blue';
  // //   } else if (randomize === 2){
  // //     c.strokeStyle = 'red';
  // //   } else if (randomize === 3){
  // //     c.strokeStyle = 'green';
  // //   }
  // //   console.log(randomize); //randomize function is working.
  // //

//-----------------------------  MAKE THINGS MOVE  -----------------------------

  tumbleweed -= dtumbleweed;
  car += dcar; //dx goes in a velocity one way or the other.
  truck -= dtruck;
  bulldozer += dbulldozer;
  console.log('hi');
}
animate(); //calls the function.


//Could make them stop with these codes inside the function.
// let x = canvas.width/2;
// let y = canvas.height-30;
// let z = canvas.width/3

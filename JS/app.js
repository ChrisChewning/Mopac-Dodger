
const canvas = document.querySelector('canvas'); //DOM selector
//jQuery selector needed instead
var c = canvas.getContext('2d');

// --------------------------- IMAGE VARIABLES ---------------------------------

// TUMBLEWEED IMAGE VARIABLE
let tumbleweedImage = new Image();
tumbleweedImage.src = 'https://i.imgur.com/jTqxjp1.png';
// c.drawImage(tumbleweedImage, 0, 0);

//CAR IMAGE VARIABLE
let carImage = new Image();
// carImage.src = images/car.png
carImage.src = 'https://i.imgur.com/WYFaKX3.png';
// c.drawImage(carImage, 0, 0);

//TRUCK IMAGE VARIABLE
let truckImage = new Image();
truckImage.src = 'https://i.imgur.com/ML2VTl4.png';
// c.drawImage(truckImage, 0, 0);

//BULLDOZER IMAGE VARIABLE
let bulldozerImage = new Image();
bulldozerImage.src = 'https://i.imgur.com/NiY5TTh.png'

let vanImage = new Image();
vanImage.src = 'https://i.imgur.com/uBO8u9w.png'


//----------------------  Starting Points & Velocities  ------------------------

let tumbleweed = 400;  //R - L
let dtumbleweed = 1;
let car = 0;  //L-R
let dcar = 3; //velocity
let truck = 0; //L-R
let dtruck = 2;
let bulldozer = 0; //L-R
let dbulldozer = 2;
let van = 400;  //R-L
let dvan = 2.5;


//----------------------  ANIMATE FUNCTION DRAWS THINGS  -----------------------

const animate = () => {
  c.clearRect(0, 0, 1095, 468);
  c.beginPath();
  requestAnimationFrame(animate);

  // x-axis, y-axis, width, height
  c.drawImage(tumbleweedImage, tumbleweed, 60, 35, 35);
  c.drawImage(carImage, car, 20, 35, 35); //x, y, how wide, how tall
  c.drawImage(truckImage, truck, 80, 35, 35); //x, y, how wide, how tall
  c.drawImage(bulldozerImage, bulldozer, 100, 35, 35);
  c.drawImage(vanImage, van, 40, 35, 35)



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
  truck += dtruck;
  bulldozer += dbulldozer;
  van -= dvan;
  console.log('hi');
}
animate(); //calls the function.


//Could make them stop with these codes inside the function.
// let x = canvas.width/2;
// let y = canvas.height-30;
// let z = canvas.width/3

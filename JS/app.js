// window.onLoad = function() {


//-----------------------  COLLISION DETECTION FUNCTION  -----------------------


// const detectCollision = (sprite, vehicles.name) => {
//     // Algorithm for checking if two squared objects collide
//     if (sprite.xPosition < vehicles.xPosition + vehicles.width &&
//       // Returns true if all those conditions are met
//       sprite.xPosition + sprite.width > vehicles.xPosition &&
//       sprite.yPosition < vehicles.yPosition + vehicles.height &&
//       sprite.yPosition + sprite.height > vehicles.yPosition) {
//       return true;
//     }
//



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

    //GLOBAL VARIABLES
    let player2Score = '';
    let player1Score = '';


    //CLASSES
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

    const sprite = new Sprite('images/tacotruck.png', 4, 'medium', 'all', 660, 510, 128, 128);


    class Vehicle extends Sprite {}

    const vehicles = [
      //FAST =  4 Vehicles
      car = new Vehicle('images/car.png', 5, 'fast', 'left', 1300, 120, 126, 126),
      formula1 = new Vehicle('images/formula1.png', 5, 'fast', 'left', 1700, 120, 126, 126),
      // console.log(Vehicle);
      truck = new Vehicle('images/truck.png', 5, 'fast', 'left', 2100, 120, 126, 126),
      trucktruck = new Vehicle('images/trucktruck.png', 5, 'fast', 'left', 2500, 120, 126, 126),

      //SLOW = 5 Vehicles
      scooter = new Vehicle('images/scooter.png', 3, 'slow', 'right', -440, 245, 126, 126),
      segway = new Vehicle('images/segway.png', 3, 'slow', 'right', -840, 245, 126, 126),
      trolleyCart = new Vehicle('images/trolleyCart.png', 3, 'right', 'right', -1240, 245, 126, 126),
      tumbleweed = new Vehicle('images/tumbleweed.png', 3, 'slow', 'right', -1640, 245, 126, 126),

      //MEDIUM = 5 Vehicles
      bulldozer = new Vehicle('images/bulldozer.png', 3, 'medium', 'right', 2300, 380, 126, 126),
      camper = new Vehicle('images/camper.png', 3, 'medium', 'left', 1900, 380, 126, 126),
      crane = new Vehicle('images/crane.png', 3, 'medium', 'left', 1500, 380, 126, 126),
      excavator = new Vehicle('images/excavator.png', 3, 'medium', 'left', 500, 380, 126, 126),
      rv = new Vehicle('images/rv.png', 3, 'medium', 'left', 700, 380, 126, 126),
    ]

    //IMAGES FOR MEDIUM SPEED ICONS
    // let bulldozerImage = new Image();
    // bulldozerImage.src = 'images/bulldozer.png'
    // let camperImage = new Image();
    // camperImage.src = 'images/camper.png'
    // let craneImage = new Image();
    // craneImage.src = 'images/crane.png'
    // let excavatorImage = new Image();
    // excavator.src = 'images/excavator.png'
    // let rvImage = new Image();
    // rvImage.src = 'images/rv.png'
    //

    // //IMAGES FOR SLOW SPEED ICONS
    // let scooterImage = new Image();
    // scooterImage.src = 'images/scooter.png'
    // let segwayImage = new Image();
    // segwayImage.src = 'images/segway.png'
    // let trolleyCartImage = new Image();
    // trolleyCartImage.src = 'images/trolleyCart.png'
    // let tumbleweedImage = new Image();
    // tumbleweedImage.src = 'images/tumbleweed.png';
    //
    // // IMAGES FOR FAST SPEED ICONS
    // let carImage = new Image();
    // carImage.src = 'images/car.png'
    // let formula1Image = new Image();
    // formula1Image.src = 'images/formula1.png'
    // let truckImage = new Image();
    // truck.src = 'images/truck.png'
    // let trucktruckImage = new Image();
    // trucktruckImage.src = 'images/trucktruck.png'



    const reset = () => {
      sprite.xPosition = 660;
      sprite.yPosition = 510;
    }


    // ------------------------ IMAGE VARIABLES ------------------------------

    //SPRITE IMAGE VARIABLE
    // let spriteImage = new Image();
    // spriteImage.src = 'images/tacotruck.png'

    let backgroundImage = new Image();
    backgroundImage.src = 'https://opengameart.org/sites/default/files/Toon%20Road%20Texture.png';

    //-------------------------  DRAW THE VEHICLES  ---------------------------
    // what image, x-starting pt., y-starting pt., width, height

    const animate = () => {
      c.clearRect(0, 0, 1600, 650);
      requestAnimationFrame(animate);
      c.drawImage(backgroundImage, 0, 110, 1600, 400);


                  //JIM'S NOTES
              //create the image
              // add the image src
              // draw The Image
              // call collision Detection

              // remember all your properties will be
              // in vehicles[i].whateverProperty



      for (let i = 0; i < vehicles.length; i++) {
        //draws the image out
        c.drawImage(vehicles[i].image, vehicles[i].xPosition, vehicles[i].yPosition, vehicles[i].width, vehicles[i].height);
    // detectCollision();
}




      // this.speed = speed;
      // this.speedType = speedType;
      // this.direction = direction;
      // this.xPosition = xPosition;
      // this.yPosition = yPosition;
      // this.width = width;
      // this.height = height;
      // this.image = image;



      // //FAST
      // c.drawImage(carImage, car.xPosition, car.yPosition, car.width, car.height);
      // c.drawImage(formula1Image, formula1.xPosition, formula1.yPosition, formula1.width, formula1.height);
      // c.drawImage(truckImage, truck.xPosition, truck.yPosition, truck.width, truck.height);
      // c.drawImage(trucktruckImage, trucktruck.xPosition, trucktruck.yPosition, trucktruck.width, trucktruck.height);
      //
      // //SLOW
      // c.drawImage(tumbleweedImage, tumbleweed.xPosition, tumbleweed.yPosition, tumbleweed.width, tumbleweed.height);
      // c.drawImage(scooterImage, scooter.xPosition, scooter.yPosition, scooter.width, scooter.height);
      // c.drawImage(segwayImage, segway.xPosition, segway.yPosition, segway.width, segway.height);
      // c.drawImage(trolleyCartImage, trolleyCart.xPosition, trolleyCart.yPosition, trolleyCart.width, trolleyCart.height);
      //
      // //MEDIUM
      // c.drawImage(bulldozerImage, bulldozer.xPosition, bulldozer.yPosition, bulldozer.width, bulldozer.height);
      // c.drawImage(camperImage, camper.xPosition, camper.yPosition, camper.width, camper.height);
      // c.drawImage(craneImage, crane.xPosition, crane.yPosition, crane.width, crane.height);
      // c.drawImage(excavatorImage, excavator.xPosition, excavator.yPosition, excavator.width, excavator.height);
      // c.drawImage(rvImage, rv.xPosition, rv.yPosition, rv.width, rv.height);
      //

      //SPRITE
      c.drawImage(sprite.image, sprite.xPosition, sprite.yPosition, sprite.width, sprite.height)


      //------------------------  MAKE THE VEHICLES MOVE  --------------------------

      //put in class as a method. if this.direction = left {} if this.direction = right.

      // checkBoundary method in class. if it's past that boundary, reset it to its original position.  this.xPosition or this.yPosition

      // const moveVehicles = () => {
      this.xPosition -= this.speed;
      // }

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
        // canvas.width = canvas.width; //resets the canvas.
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

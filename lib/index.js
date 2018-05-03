var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

var frogImg = new Image();
frogImg.src = "frog.png"

frogImg.onload = function() {
  c.drawImage(frogImg, 25, 600)
}

//Grass

c.fillStyle = "#4CA432";
c.fillRect(0, 650, 1200, 50);
c.fillRect(0, 350, 1200, 50);

//Road

c.fillStyle = "black";
c.fillRect(0, 400, 1200, 250);

// Water 

c.fillStyle = "#967967";
c.fillRect(0,0, 1200, 50)

//Lanes

c.beginPath();
c.moveTo(0,450);
c.lineTo(1200, 450);
c.strokeStyle = "white";
c.setLineDash([5]);
c.strokeWidth = 4;
c.stroke();

//Lanes

c.beginPath();
c.moveTo(0,500);
c.lineTo(1200, 500);
c.strokeStyle = "white";
c.setLineDash([5]);
c.strokeWidth = 4;
c.stroke();

//Lanes

c.beginPath();
c.moveTo(0,550);
c.lineTo(1200, 550);
c.strokeStyle = "white";
c.setLineDash([5]);
c.strokeWidth = 4;
c.stroke();

//Lanes

c.beginPath();
c.moveTo(0,600);
c.lineTo(1200, 600);
c.strokeStyle = "white";
c.setLineDash([5]);
c.strokeWidth = 4;
c.stroke();

//Frog



//Movement


//  


//index.js will run the game loop. 

//Game class is going to be top level - where we create frog, enemies


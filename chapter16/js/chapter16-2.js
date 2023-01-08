const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Rect(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;

  this.dx = Math.floor(Math.random() * 10) + 1;
  this.dy = Math.floor(Math.random() * 10) + 1;

  this.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);    
  }

  this.animate = function() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.width > canvas.width || this.x < 0) {
      this.dx = -this.dx;
    } 
    if (this.y + this.height > canvas.height || this.y < 0) {
      this.dy = -this.dy;
    }

    this.draw();
  }
}

function move() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  boxBig.animate();
  boxSmall.animate();
  requestAnimationFrame(move);
}

const boxBig = new Rect(10, 10, 100, 100, "red");
const boxSmall = new Rect(30, 30, 60, 60, "black");
boxBig.draw();
boxSmall.draw();
move();
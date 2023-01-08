const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let cat = new Image();
cat.onload = function() {
  ctx.drawImage(cat, 0, 0, canvas.width, canvas.height);
}
cat.src = "img/bird.jpg";

ctx.beginPath();
ctx.ellipse(350, 200, 250, 200, 0, 0, 2 * Math.PI);
ctx.clip();
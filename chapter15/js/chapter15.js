const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.font = "bold italic 300px sans-serif";
ctx.fillText("집 좀 가라 좀..", 50, 320);

ctx.beginPath();
ctx.globalCompositeOperation = "source-in";
let img = new Image();
img.onload = function() {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}
img.src = "img/bird.jpg";
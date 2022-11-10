// Paint a circle to a canvas element

const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
//ctx.fillStyle = "red";
//ctx.beginPath();
//ctx.arc(70, 80, 50, 0, 2 * Math.PI);
//ctx.stroke();
//ctx.fill();

//Class creation time!
class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(
      this.x,
      this.y,
      this.r,
      this.startAngle,
      this.endAngle,
      0,
      2 * Math.PI
    );

    ctx.fillStyle = this.fillColor;
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}
//const c1 = new Circle(50, 100, 20, 0, 2 * Math.PI, "yellow");
//const c2 = new Circle(100, 90, 20, 0, 2 * Math.PI, "green");
//const c3 = new Circle(150, 70, 20, 0, 2 * Math.PI, "chocolate");
//c1.draw(ctx);
//c2.draw(ctx);
//c3.draw(ctx);

//make random circles

function drawCircle(circle) {
  circle.draw(ctx);
}

let width = canvas.width;
let height = canvas.height;
function randonCircle() {
  let randomX = Math.random() * width;
  let randomY = Math.random() * height;
  let randomR = Math.random() * 24 + 3;
  let randomColor =
    "rgba(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    ".5" +
    ")";

  let circle = new Circle(
    randomX,
    randomY,
    randomR,
    0,
    2 * Math.PI,
    randomColor
  );

  drawCircle(circle);
}
setInterval(randonCircle, 100);

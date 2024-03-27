let canvas = document.querySelector("#canvas");

let ctx = canvas.getContext("2d");

let ratioRes = 3;

let canvasOffsetX = canvas.offsetLeft;
let canvasOffsetY = canvas.offsetTop;

let widthLast = window.innerWidth;
let heightLast = window.innerHeight;

initScreen();

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 100;
  drawLinesFromDB();
});

// a context object which provides fun for 2d drawing

ctx.beginPath();
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "white";
ctx.fill();

ctx.lineWidth = 10;

let linesDB = [];
let redoLinesDB = [];
let isPenDown = false;
let line = [];

function initScreen() {
  widthLast = window.innerWidth;
  heightLast = window.innerHeight;

  canvasOffsetX = canvas.offsetLeft;
  canvasOffsetY = canvas.offsetTop;

  canvas.width = (window.innerWidth - canvasOffsetX) * ratioRes;
  canvas.height = (window.innerHeight - canvasOffsetY) * ratioRes;

  if (canvas.width < canvas.height) {
    canvas.height = canvas.width;
  } else {
    canvas.width = canvas.height;
  }

  canvas.style.width = "" + canvas.width / ratioRes + "px";
  canvas.style.height = "" + canvas.height / ratioRes + "px";

  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.lineWidth = 10;
}

// ====================================

setInterval(() => {
  document.getElementById(
    "testText3"
  ).innerHTML = `canvas.offset : ${canvas.offsetLeft}  , ${canvas.offsetTop}`;

  canvasOffsetX = canvas.offsetLeft;
  canvasOffsetY = canvas.offsetTop;

  // document.querySelector(".vl").style.left = canvas.offsetLeft + "px";
  // document.querySelector(".wl").style.top = canvas.offsetTop + "px";

  if (widthLast != window.innerWidth) {
    initScreen();
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - 100;
      drawLinesFromDB();
    });
  }
}, 100);

// =========================================

setTimeout(() => {
  canvasOffsetX = canvas.offsetLeft;
  canvasOffsetY = canvas.offsetTop;
}, 100);

setTimeout(() => {
  canvasOffsetX = canvas.offsetLeft;
  canvasOffsetY = canvas.offsetTop;
}, 500);

// ====================================

canvas.addEventListener("mousedown", function (e) {
  if (redoLinesDB.length) {
    redoLinesDB = [];
  }

  isPenDown = true;
  let x = (e.clientX - canvasOffsetX) * ratioRes;
  let y = (e.clientY - canvasOffsetY) * ratioRes;
  ctx.beginPath();
  ctx.moveTo(x, y);

  let pointObject = {
    x: x,
    y: y,
    type: "md",
    lineWidth: ctx.lineWidth,
    strokeStyle: ctx.strokeStyle,
  };
  line.push(pointObject);
});
canvas.addEventListener("touchstart", function (e) {
  if (redoLinesDB.length) {
    redoLinesDB = [];
  }

  isPenDown = true;
  var x = (e.touches[0].clientX - canvasOffsetX) * ratioRes;
  var y = (e.touches[0].clientY - canvasOffsetY) * ratioRes;
  ctx.beginPath();
  ctx.moveTo(x, y);

  let pointObject = {
    x: x,
    y: y,
    type: "md",
    lineWidth: ctx.lineWidth,
    strokeStyle: ctx.strokeStyle,
  };
  line.push(pointObject);
});

canvas.addEventListener("mousemove", function (e) {
  // console.log(e.clientX,e.clientY)
  if (isPenDown) {
    let x = (e.clientX - canvasOffsetX) * ratioRes;
    let y = (e.clientY - canvasOffsetY) * ratioRes;
    ctx.lineTo(x, y);
    ctx.stroke();

    let pointObject = {
      x: x,
      y: y,
      type: "mm",
    };
    line.push(pointObject);
  }
});
canvas.addEventListener("touchmove", function (e) {
  if (isPenDown) {
    var x = (e.touches[0].clientX - canvasOffsetX) * ratioRes;
    var y = (e.touches[0].clientY - canvasOffsetY) * ratioRes;
    ctx.lineTo(x, y);
    ctx.stroke();

    let pointObject = {
      x: x,
      y: y,
      type: "mm",
    };
    line.push(pointObject);
  }
});

canvas.addEventListener("mouseup", function (e) {
  isPenDown = false;

  linesDB.push(line);
  line = [];

  console.log(linesDB);
});
canvas.addEventListener("touchend", function (e) {
  isPenDown = false;

  linesDB.push(line);
  line = [];

  //console.log(linesDB);
});

// ===================================================================================

document.addEventListener("mousemove", (event) => {
  document.getElementById(
    "testText1"
  ).innerHTML = `mouse pos : ${event.clientX}  , ${event.clientY}`;
});

document.addEventListener("touchmove", (event) => {
  document.getElementById(
    "testText2"
  ).innerHTML = `touch pos : ${event.touches[0].clientX}  , ${event.touches[0].clientY}`;
});

document.querySelector("#clear").addEventListener("click", (e) => {
  clearScreen();
});

function clearScreen() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fill();

  linesDB = [];
  redoLinesDB = [];
  isPenDown = false;
  line = [];
}

// ========================================================================

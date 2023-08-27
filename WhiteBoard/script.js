const canvas = document.getElementById("WhiteBoard");
const deleteButton = document.getElementById("dltBtn");
const undoButton = document.getElementById("undBtn");
const context = canvas.getContext("2d");
let drawing = false;
let objects = [];
let tempPath = null;

canvas.addEventListener("mousedown", start);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stop);
canvas.addEventListener("mouseout", stop);

deleteButton.addEventListener("click", cleanBoard);
undoButton.addEventListener("click", undoWork);

function start(e) {
  drawing = true;
  tempPath = [{ x: e.clientX - canvas.offsetLeft, y: e.clientY - canvas.offsetTop }];
}

function draw(e) {
  if (!drawing) return;
  context.lineWidth = 3;
  context.lineCap = "round";
  context.strokeStyle = "black";

  tempPath.push({ x: e.clientX - canvas.offsetLeft, y: e.clientY - canvas.offsetTop });

  context.clearRect(0, 0, canvas.width, canvas.height);
  reWrite();
}

function stop() {
  if (!drawing) return;
  drawing = false;
  if (tempPath.length > 1) {
    addObjectToCanvas(tempPath);
  }
  tempPath = null;
}

function cleanBoard() {
  objects = [];
  reWrite();
}

function undoWork() {
  objects.pop(); 
  reWrite();
}

function reWrite() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (const obj of objects) {
    context.beginPath();
    context.moveTo(obj.path[0].x, obj.path[0].y);
    for (const point of obj.path) {
      context.lineTo(point.x, point.y);
    }
    context.stroke();
  }
}

function addObjectToCanvas(path) {
  objects.push({ path });
  reWrite();
}
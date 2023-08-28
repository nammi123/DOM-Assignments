# Whiteboard

## HTML file
Firstly we are creating html file for board structure. Inside the body tag we create the main-container div for the whiteboard after then we create 2 button tag
first button for delete and the second button for undo After that we are using canvas tag for graphics.

```
<div class="main-container">
        <button id="dltBtn">Delete</button>
        <button id="undBtn">Undo</button>
    </div>
    <canvas id="WhiteBoard"></canvas>
```

## CSS file

Now we are adding css file for  whiteboard styling.

```
.main-container{
    margin-top: 10px;
    display: flex;
    gap: 10px;
}

#WhiteBoard{
    width: 800px;
    height: 600px;
    border: 3px solid #000;
    background-color: #fff;
    cursor:crosshair;
}
```

## JS file

Now we are adding a js file for functionality delete, undo, and cursor concepts.

```
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
```

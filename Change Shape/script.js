let color=[
    "red",
    "green",
    "black",
    "yellow",
    "pink",
    "orange",
    "cyan",
    "blue",
    "purple",
    "voilet"
];

let idx=0;
let Traingle=false;

let Update1=document.getElementById("updateShape");
let Update2=document.getElementById("updateColor");

Update1.addEventListener("click",changeShape);
Update2.addEventListener("click",changeColor);


// ---------Change Color Function------------

function changeColor(){
    if(idx===color.length){
        idx=0
    }
    document.getElementById("circle").style.backgroundColor = color[idx];
    idx++;
}



// ---------------Change Shape Function--------------

function changeShape() {
    if (!Traingle) {
      let inside = document.getElementsByClassName("inner")[0];
      inside.className = "triangle-bottom";
      Traingle = true;
    }else{
      var inside = document.getElementsByClassName("triangle-bottom")[0];
      inside.className = "inner";
      Traingle = false;
    }
  }
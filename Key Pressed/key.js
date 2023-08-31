let container = document.querySelector(".main-container");

document.addEventListener("keydown", function (event) {
    container.innerText = "";
    console.log(event);
  
  	let h1 = document.createElement("h1");
    h1.innerText = ` You Pressed  ${event.key}`;
    let p = document.createElement("p");
    p.innerText = `${event.keyCode}`;
    container.appendChild(h1);
    container.appendChild(p);
});
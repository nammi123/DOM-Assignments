# Key Pressed
In this task we are create Keypress Detection after any press key automatically display which key we are pressed.

# Hosted Link :
https://nammi123.github.io/DOM-Assignments/Key%20Pressed/key.html

## Html file
We are create a main-container div and inside this diplay Press Any Keyboard Key.
```
 <div class="main-container">Press Any Keyboard Key</div>
```

## CSS File
Now we are add some styling for div and h1 and p tags.
```
.main-container{
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: beige;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 4rem;
}

p,h1{
    margin-top: 10px;
    font-size: 5rem;
}

p{
    color: rgb(7, 213, 96);
}
```

## JS File
Now we are add functionality for using keydown and event concept.
```
document.addEventListener("keydown", function (event) {
    container.innerText = "";
    console.log(event);
  
  	let h1 = document.createElement("h1");
    h1.innerText = ` You Pressed  ${event.key}`;
    let p = document.createElement("p");
    p.innerText = `${event.keyCode}`;
```

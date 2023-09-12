# Auto Save Textarea

In this task we are create a auto save textarea card where we enter the details store in the local Storage.

Firstly we are create a html file one main div with class container inside this we are adding textarea tag.
inside this we are add another div for change color area input type color and one button for color change.
Now time to styling our html page with the help of css.

For functionality we are add javaScript file for store the date local storage we are using localStorage concepts.

```
const textArea=document.getElementById("mytextarea")
const changeColor=document.getElementById("changeColor")


function saveToLocal(){
    localStorage.setItem("auto save",textArea.value);
}

if(localStorage.getItem("auto save")){
    textArea.value=localStorage.getItem("auto save");
}


textArea.addEventListener("input", saveToLocal);

const colorChoose=document.getElementById("colors")
const container=document.querySelector(".container");

colorChoose.addEventListener("click",()=>{
    container.style.color=colorChoose.value;
    textArea.style.color=colorChoose.value;
})

```

# Hosted Link:-
https://nammi123.github.io/DOM-Assignments/Auto%20Save/index.html

# Screenshot:
![Screenshot (100)](https://github.com/nammi123/DOM-Assignments/assets/96935962/f1d3554e-e8e3-44b3-a7a4-644c9740c092)


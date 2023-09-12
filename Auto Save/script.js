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
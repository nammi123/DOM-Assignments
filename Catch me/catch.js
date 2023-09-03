const button=document.getElementById("btn")

button.addEventListener("mouseover",()=>{
    const top=Math.floor(Math.random()*500)
    const left=Math.floor(Math.random()*1000)
   
    button.style.left=left+"px"
    button.style.top=top+"px"
    
})
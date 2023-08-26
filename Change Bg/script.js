const btn=document.getElementsByTagName("button")[0];
const color=['red','blue','pink','yellow','grey','brown','green','purple','voilet','white','orange','skyblue','navy'];

btn.addEventListener("click",function(){
    const randomColor = color[Math.floor(Math.random() * color.length)];
    document.body.style.backgroundColor = randomColor;
    document.body.classList.add('change-bg-animation');
    
    setTimeout(() => {
        document.body.classList.remove('change-bg-animation');
    }, 500);
})
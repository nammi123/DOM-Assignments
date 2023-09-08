const carBtn=document.querySelector(".carBtn");
const Container=document.querySelector(".anime-car");
const img=document.querySelector(".animeImg");
const name=document.querySelector(".animeName");


carBtn.addEventListener("click",async function(){
    try{
        carBtn.disabled="true";
        carBtn.innerText="Loading...";
        img.src="generator.svg";
        const response=await fetch("https://api.unsplash.com/photos/random?client_id=gM-W5b6zHt-3-J9Ubxi9IvBJl_ksBWrwxK0y5G-KELM&query=car");
        const data=await response.json();
        carBtn.disabled="false";
        carBtn.innerText="Get Car";
        Container.style.display="block";
        img.src=data.links.download;
        name.innerText=data.alt_description;


    }
    catch (error){
        console.log(error);
        carBtn.disabled = false;
        carBtn.innerText = "Get car";
        name.innerText = "An error happened, please try again";
    }
});
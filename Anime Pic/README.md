# Random Car Generator:

Random car picture generator that enables users to fetch a random car pic and its name. The final version of the project features a button that retrieves data from an API, presenting a random car picture and its name when clicked. Whenever the 'Get Car' button is clicked, we observe a loading effect first, followed by a new picture with a random name. Throughout the project, we will master the use of APIs to fetch data using the try and catch method. We will learn how to apply a loading effect to the page while waiting for data to load. Furthermore, we will develop our CSS skills by designing a beautiful UI, including the background color of the page.

# JS Functionality:
```
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
```

# Hosted Link:
https://nammi123.github.io/DOM-Assignments/Anime%20Pic/car.html


# Screenshot:
![Screenshot (94)](https://github.com/nammi123/DOM-Assignments/assets/96935962/42c241e2-4c68-4f12-ad57-7642f4edfa1b)

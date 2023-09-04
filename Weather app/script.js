const inputBox=document.querySelector(".input-box");
const searchBtn=document.getElementById("searchBtn");
const weatherImg=document.querySelector(".weather-img");
const temp=document.querySelector(".temp");
const description=document.querySelector(".description");
const humidity=document.getElementById("humidity");
const windSpeed=document.getElementById("wind-speed");
const locationNotFound=document.querySelector(".location-not-found");
const weatherBody=document.querySelector(".weather-body");

async function checkWeather(city){
    // console.log("hello")
    const apiKey="6fc773898f23f7202747fd666b6dbb77";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const weatherData= await fetch(url);
    // console.log(weatherData);
    const response=await weatherData.json()
    // console.log(response)
     if(response.cod===`404`){
        locationNotFound.style.display="flex";
        weatherBody.style.display="none";
        console.log("error");
        return;
     }   
        locationNotFound.style.display="none";
         weatherBody.style.display="flex";
    temp.innerHTML=`${Math.round(response.main.temp-273.15)}°C`;
    description.innerHTML=`${response.weather[0].description}`;
    humidity.innerHTML=`${response.main.humidity}%`;
    windSpeed.innerHTML=`${response.wind.speed}Km/h`;

    switch(response.weather[0].main){
            case 'Clouds':
            weatherImg.src="./images/cloud.png";
             break;
            case 'Clear':
            weatherImg.src="./images/clear.png";
              break;
            case 'Rain':
            weatherImg.src="./images/rain.png";
             break;
            case 'Snow':
            weatherImg.src="./images/snow.png";
             break;
            case 'Mist':
            weatherImg.src="./images/mist.png";
             break;
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
});
const apiKey="731ec46400ad011538e2f52876f79f0b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search-box input");
const searchBtn=document.querySelector(".search-box button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else
    {
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "&deg;C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";
    // console.log("hello");
    switch(data.weather[0].main)
    {
        case 'Clouds':
            weatherIcon.src="images/cloud.png";
            break;
        case 'Rain':
            weatherIcon.src="images/rain.png";
            break;
        case 'Clear':
            weatherIcon.src="images/sun.png";
            break;
        case 'Mist':
            weatherIcon.src="images/mist.png";
            break;
        case 'Snow':
            weatherIcon.src="images/snow.png";
            break;
    }
    document.querySelector(".weather").style.display="flex";
    document.querySelector(".error").style.display="none";
    }
    
}   

searchBtn.addEventListener("click",()=>
{
    checkWeather(searchBox.value);
})

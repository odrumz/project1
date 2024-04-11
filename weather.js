// Here the class are called also making it become a global scope
const weatherform = document.querySelector(".weatherform");
const weatherdata = document.querySelector(".weatherdata")
const weatherbox = document.querySelector(".weatherbox")
const apikey = "61a740118d162c882bcaaa27e5123b0b"

// The eventlistener will enable the user to search the specific weather when the search button is clicked
weatherform.addEventListener("submit", async (e) => {
    
    // this prevents Defaulting the page
    e.preventDefault();
    const city = weatherdata.value;
    if (city){
        try{
            const weatherData = await getweatherData(city);
            displayweatherinfo(weatherData);

        }
        catch(error){
            displayerror(error.message);
        }
    }
    else{
        displayerror("Please try and enter a city name");
    }

});
// This function will derive data from the Api below
async function getweatherData(city){
 const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
 const response = await fetch(apiurl);

//  The if function will respond if the user enters a name of a city that does not exist

 if(!response.ok){
     throw new Error("Error:The city does not exist");
 }
 return await response.json();
}
// The display weather function will choose the specific data based on the codes below
function displayweatherinfo(data){
    
    const {name: city,
           main: {temp, humidity},
           weather: [{description, id}]} = data;
    weatherbox.textContent = "";
    weatherbox.style.display = "flex" 
    const citytype = document.createElement("h1");
    const temperature = document.createElement("p");
    const humiditytype = document.createElement("p");
    const display = document.createElement("p");
    const weatheremoji = document.createElement("p");

    
// In here content are arranged according to the programmers wants

    citytype.textContent = city;
    temperature.textContent = `Temp: ${Math.floor(temp - 273.15)}°C`;
    humiditytype.textContent = `humidity: ${humidity}%`;
    display.textContent = description;
    weatheremoji.textContent = getweatherEmoji(id);

    citytype.classList.add("citytype");
    temperature.classList.add("temperature");
    humiditytype.classList.add("humidity");
    display.classList.add("display");
    weatheremoji.classList.add("weatheremoji");

    weatherbox.appendChild(citytype);
    weatherbox.appendChild(temperature)
    weatherbox.appendChild(humiditytype);
    weatherbox.appendChild(display);
    weatherbox.appendChild(weatheremoji);

    
}
// This function will display a weather emoji depending on the weather id of the given area
function getweatherEmoji(weatherId){
    switch(true){
        case weatherId >= 200 && weatherId < 300:
            return "⛈️";
        case weatherId >= 300 && weatherId < 500:
            return "🌧️";
        case weatherId >= 500 && weatherId < 600:
            return "🌨️";
        case weatherId >= 600 && weatherId < 700:
            return "❄️";
        case weatherId >= 700 && weatherId < 800:
            return "🌫️";
        case weatherId === 800:
            return "☀️";
        case weatherId >= 801 && weatherId < 810:
                return "☁️";    
        default:
            return "??";
    }

}
// This will display an error message in case it occurs
function displayerror(message){
    const errorMsg = document.createElement("p")
    errorMsg.textContent = message;
    errorMsg.classList.add("errormessage");

    weatherbox.textContent=""
    weatherbox.style.display = "flex";
    weatherbox.appendChild(errorMsg);

}
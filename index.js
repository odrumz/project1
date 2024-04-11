const weatherform = document.querySelector(".weatherform");
const weatherdata = document.querySelector(".weatherdata")
const weatherbox = document.querySelector(".weatherbox")
const apikey = "61a740118d162c882bcaaa27e5123b0b"

weatherform.addEventListener("submit", async (e) => {
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

})
async function getweatherData(city){
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    const response = await fetch(apiurl);
    if(!response.ok){
        throw new Error("Error:The city does not exist");
    }
    return await response.json();
   
}
function displayweatherinfo(data){
}
function getweatherEmoji(weatherId){
   

}
function displayerror(message){
    const errorMsg = document.createElement("p")
    errorMsg.textContent = message;
    errorMsg.classList.add("errormessage");

    weatherbox.textContent=""
    weatherbox.style.display = "flex";
    weatherbox.appendChild(errorMsg);

}
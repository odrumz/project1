const weatherform = document.querySelector(".weatherform");
const weatherdata = document.querySelector(".weatherdata")
const weatherbox = document.querySelector(".weatherbox")
const apikey = "61a740118d162c882bcaaa27e5123b0b"

weatherform.addEventListener("submit",  (e) => {
    e.preventDefault();
    const city = weatherdata.value;
    if (city){
        
    }
    else{
        displayerror("Please try and enter a city name");
    }

})
async function getweatherData(city){
 
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
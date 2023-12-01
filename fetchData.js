const API_KEY = "65756b6c72f33dcdf36e274a5f5010d8";

// GEOLOCATION API USED : 
function success(position){
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  fetchData(lat, lon);
}

// OPEN WETHER API USED : 
const fetchData = async (lat, lon) => {
  try {

    const weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );

    if (!weatherData.ok) throw new Error("Data was not fetched properly");

    const result = await weatherData.json();

    document.getElementById('text_location').innerHTML = result.name
    document.getElementById('text_location_country').innerHTML = result.sys.country

    document.querySelector('.text_temp').innerHTML = Math.round(result.main.temp)
    document.querySelector('.text_tempFeelsLike').innerHTML = Math.round(result.main.feels_like)
    document.getElementById('text_desc').innerHTML = result.weather[0].description

    const img = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
    document.querySelector('.icon').src = img;
    
  } catch (err) {
    console.log("Error : ", err);
  }
};

navigator.geolocation.getCurrentPosition(success);

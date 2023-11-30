const API_KEY = "65756b6c72f33dcdf36e274a5f5010d8";

const fetchData = async () => {
  try {
    const weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=${API_KEY}`
    );

    if (!weatherData.ok) throw new Error("Data was not fetch properly");

    const result = await weatherData.json();

    // const weatherIcon = await fetch(`https://api.openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`)
    // const finalImg = weatherIcon.blob();

    document.getElementById('text_location').innerHTML = result.name
    document.getElementById('text_location_country').innerHTML = result.sys.country

    document.querySelector('.text_temp').innerHTML = Math.round(result.main.temp)
    document.querySelector('.text_tempFeelsLike').innerHTML = Math.round(result.main.feels_like)
    document.getElementById('text_desc').innerHTML = result.weather[0].description

    // const imageObjectURL = URL.createObjectURL(finalImg);
    // document.querySelector('.icon').src = imageObjectURL;
    
  } catch (err) {
    console.log("Error : ", err);
  }
};

fetchData();

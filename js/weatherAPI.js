// OPEN WEATHER API

const API_KEY = "cb4e10160654fef1783c47078826ded6";
const API_OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

async function getWeatherData(lat, lon) {
  const url = `${API_OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  function convertirDireccionViento(grados) {
    const direccion = [
        "N", "NNE", "NE", "ENE",
        "E", "ESE", "SE", "SSE",
        "S", "SSO", "SO", "OSO",
        "O", "ONO", "NO", "NNO"
    ];
    const indice = Math.floor((grados + 11.25) / 22.5) % 16;
    return direccion[indice];
  }

  const grados = data.wind.deg;
  const direccionViento = convertirDireccionViento(grados);

  return {
    temp: data.main.temp,
    wind: (data.wind.speed * 3.6).toFixed(2),
    wind_deg: direccionViento,
  };
}

//	API MARINE OPEN METEO

const API_MARINE_URL = "https://marine-api.open-meteo.com/v1/marine";

async function getMarineData(lat, lon) {
  const url2 = `${API_MARINE_URL}?latitude=${lat}&longitude=${lon}&hourly=wave_height`;

  const response = await fetch(url2);
  const data = await response.json();

  return {
    wave_height: data.hourly.wave_height[0],
  };
}

document.addEventListener("DOMContentLoaded", async function() {
  async function getCoords() {
  const lat = parseFloat(document.getElementById("lat").textContent);
  const lon = parseFloat(document.getElementById("lon").textContent);
  return { lat, lon };
}

async function updateWeather(lat, lon, tempId, windId, wind_degId, waveHeightId) {
  const weatherData = await getWeatherData(lat, lon);
  const marineData = await getMarineData(lat, lon);

  const tempElement = document.getElementById(tempId);
  const windElement = document.getElementById(windId);
  const wind_degElement = document.getElementById(wind_degId);
  const waveHeightElement = document.getElementById(waveHeightId);

  let windText = "";

  if (weatherData.wind <= 1) {
    windText = "Calma";
  } else if (weatherData.wind <= 5) {
    windText = "Ventolina";
  } else if (weatherData.wind <= 11) {
    windText = "Brisa muy débil";
  } else if (weatherData.wind <= 19) {
    windText = "Brisa ligera";
  } else if (weatherData.wind <= 28) {
    windText = "Brisa moderada";
  } else if (weatherData.wind <= 38) {
    windText = "Brisa fresca";
  } else if (weatherData.wind <= 49) {
    windText = "Brisa fuerte";
  } else if (weatherData.wind <= 61) {
    windText = "Viento fuerte";
  } else if (weatherData.wind <= 74) {
    windText = "Temporal";
  } else if (weatherData.wind <= 88) {
    windText = "Temporal fuerte";
  } else if (weatherData.wind <= 102) {
    windText = "Temporal duro";
  } else if (weatherData.wind <= 117) {
    windText = "Temporal muy duro";
  } else {
    windText = "Huracán";
  }
  

  tempElement.innerText = "Temperatura: " + weatherData.temp + "°C";
  windElement.innerHTML = "Viento: " + weatherData.wind + " KM/H&nbsp;&nbsp;" + windText;


  wind_degElement.innerText = "Dirección: " + weatherData.wind_deg;
  waveHeightElement.innerText = "Olas: " + marineData.wave_height + " m";
}

  async function main() {
    const { lat, lon } = await getCoords();
    await updateWeather(lat, lon, "temp", "wind", "wind_deg", "waveHeight");
  }

  await main();
});

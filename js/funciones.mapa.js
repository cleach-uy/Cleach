//	MAPA

var map = L.map('map').setView([-34.96226728068345, -54.94436108442241], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© Cleach'
}).addTo(map);

//	API OPEN WEATHER MAP

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

//PLAYAS

const playas = [
  {nombre: "Playa Solis",lat: -34.7931,lon: -55.3882,buttonUrl: "Playa-Solis.html",},
  {nombre: "Playa Bella Vista",lat: -34.8054,lon: -55.3545,buttonUrl: "Playa-Bella-Vista.html",},
  {nombre: "Playa Las Flores",lat: -34.8110,lon: -55.3388,buttonUrl: "Playa-Las-Flores.html",},
  {nombre: "Playa Verde",lat: -34.8236,lon: -55.3191,buttonUrl: "Playa-Verde.html",},
  {nombre: "Playa Hermosa",lat: -34.8236,lon: -55.3191,buttonUrl: "Playa-Hermosa.html",},
  {nombre: "Playa Grande",lat: -34.8546,lon: -55.2990,buttonUrl: "Playa-Grande.html",},
  {nombre: "Playa Piriapolis",lat: -34.8677,lon: -55.2768,buttonUrl: "Playa-Piriapolis.html",},
  {nombre: "Playa San Francisco",lat: -34.8901,lon: -55.2695,buttonUrl: "Playa-San-Francisco.html",},
  {nombre: "Playa Punta Colorada",lat: -34.9000,lon: -55.2467,buttonUrl: "Playa-Punta-Colorada.html",},
  {nombre: "Playa Ocean Park",lat: -34.8783,lon: -55.1217,buttonUrl: "Playa-Ocean-Park.html",},
  {nombre: "Playa Chihuahua",lat: -34.8776,lon: -55.0960,buttonUrl: "Playa-Chihuahua.html",},
  {nombre: "Playa Tio Tom",lat: -34.8776,lon: -55.0796,buttonUrl: "Playa-Tio-Tom.html",},
  {nombre: "Playa Solanas",lat: -34.8870,lon: -55.0467,buttonUrl: "Playa-Solanas.html",},
  {nombre: "Playa Las Grutas",lat: -34.9105,lon: -55.0409,buttonUrl: "Playa-Las-Grutas.html",},
  {nombre: "Playa Puntas del chileno",lat: -34.9116,lon: -55.0142,buttonUrl: "Playa-Puntas-del-chileno.html",},
  {nombre: "Playa Pinares Paradas 27 a 39",lat: -34.9115,lon: -54.9961,buttonUrl: "Playa-Pinares-P39-P27.html",},
  {nombre: "Playa Mansa Paradas 19 a 24",lat: -34.9222,lon: -54.9692,buttonUrl: "Playa-Mansa-P24-p19.html",},
  {nombre: "Playa Mansa Paradas 12 a 16",lat: -34.9325,lon: -54.9562,buttonUrl: "Playa-Mansa-P16-p12.html",},
  {nombre: "Playa Mansa Paradas 10 y 11",lat: -34.9402,lon: -54.9485,buttonUrl: "Playa-Mansa-P11-P10.html",},
  {nombre: "Playa Mansa Paradas 8 y 9",lat: -34.9416,lon: -54.9469,buttonUrl: "Playa-Mansa-P9-p8.html",},
  {nombre: "Playa Mansa Paradas 6 y 7",lat: -34.9457,lon: -54.9432,buttonUrl: "Playa-Mansa-P7-p6.html",},
  {nombre: "Playa Mansa Parada 5",lat: -34.9488,lon: -54.9416,buttonUrl: "Playa-Mansa-P5.html",},
  {nombre: "Playa Mansa Parada 2",lat: -34.9517,lon: -54.9409,buttonUrl: "Playa-Mansa-P2.html",},
  {nombre: "Playa Mansa Parada 3",lat: -34.9500,lon: -54.9409,buttonUrl: "Playa-Mansa-P3.html",},
  {nombre: "Playa Mansa Parada 1",lat: -34.9556,lon: -54.9407,buttonUrl: "Playa-Mansa-P1.html",},
  {nombre: "Playa Mansa Muelle de Mailhos",lat: -34.9576,lon: -54.9440,buttonUrl: "Playa-Mansa-Muelle-Milos.html",},
  {nombre: "Playa De los Ingleses",lat: -34.9674,lon: -54.9472,buttonUrl: "Playa-de-los-ingleses.html",},
  {nombre: "Playa El Emir",lat: -34.9628,lon: -54.9403,buttonUrl: "Playa-El-Emir.html",},
  {nombre: "Playa De los Dedos",lat: -34.9581,lon: -54.9369,buttonUrl: "Playa-Los-Dedos.html",},
  {nombre: "Playa Brava paradas 5, 6 y 7",lat: -34.9511,lon: -54.9276,buttonUrl: "Playa-Brava-P5-P6-P7.html",},
  {nombre: "Playa Brava paradas 8",lat: -34.9491,lon: -54.9244,buttonUrl: "Playa-Brava-P8.html",},
  {nombre: "Playa Brava paradas 9 y 10",lat: -34.9463,lon: -54.9209,buttonUrl: "Playa-Brava-P9-P10.html",},
  {nombre: "Playa Brava paradas 11, 12 y 13",lat: -34.9426,lon: -54.9141,buttonUrl: "Playa-Brava-P11-P12-P13.html",},
  {nombre: "Playa Brava paradas 14, 15 y 16",lat: -34.9366,lon: -54.9053,buttonUrl: "Playa-Brava-P14-P15-P16.html",},
  {nombre: "Playa Brava paradas 17 y 18",lat: -34.9344,lon: -54.9009,buttonUrl: "Playa-Brava-P17-P18.html",},
  {nombre: "Playa Brava paradas 19 y 20",lat: -34.9317,lon: -54.8976,buttonUrl: "Playa-Brava-P19-p20.html",},
  {nombre: "Playa Brava parada 21",lat: -34.9307,lon: -54.8954,buttonUrl: "Playa-Brava-P21.html",},
  {nombre: "Playa Brava parada 25",lat: -34.9283,lon: -54.8904,buttonUrl: "Playa-Brava-P25.html",},
  {nombre: "Playa Brava parada 30",lat: -34.9237,lon: -54.8808,buttonUrl: "Playa-Brava-P30.html",},
  {nombre: "Playa Brava parada 32",lat: -34.9218,lon: -54.8737,buttonUrl: "Playa-Brava-P32.html",},
  {nombre: "Playa Brava de Jose Ignacio",lat: -34.8372,lon: -54.6313,buttonUrl: "Playa-Brava-De-Jose-Ignacio.html",},
  {nombre: "Playa Mansa de Jose Ignacio",lat: -34.8391,lon: -54.6457,buttonUrl: "Playa-Mansa-De-Jose-Ignacio.html",},
  {nombre: "Playa La Juanita",lat: -34.8387,lon: -54.6547,buttonUrl: "Playa-La-Juanita.html",},
  {nombre: "Playa Balneario Santa Monica",lat: -34.8502,lon: -54.7004,buttonUrl: "Playa-Santa-Monica.html",},
  {nombre: "Playa Balneario Buenos Aires",lat: -34.8876,lon: -54.7784,buttonUrl: "Playa-Playa-Buenos-Aires.html",},
  {nombre: "Playa El Chorro",lat: -34.9041,lon: -54.8066,buttonUrl: "Playa-El-Chorro.html",},
  {nombre: "Playa Bikini",lat: -34.9075,lon: -54.8296,buttonUrl: "Playa-Bikini.html",},
  {nombre: "Playa Montoya",lat: -34.9154,lon: -54.8467,buttonUrl: "Playa-Montoya.html",},
  {nombre: "Playa Posta Del Cangrejo",lat: -34.9165,lon: -54.8596,buttonUrl: "Playa-Posta-Del-Cangrejo.html",},
  {nombre: "Playa La Barra",lat: -34.9156,lon: -54.8660,buttonUrl: "Playa-La-Barra.html",},
];

async function updatePopup(marker, lat, lon, playa, buttonUrl) {
  let weatherData = await getWeatherData(lat, lon);
  let marineData = await getMarineData(lat, lon);

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
  
 
  let popupContent = `
    <p style="color: #105c79; font-size:15px; font-weight:bold;">${playa.nombre}</p>
    <p style="color: #105c79;">Temp: ${weatherData.temp}°C</p>
    <p style="color: #105c79;">Viento: ${weatherData.wind} KM/H (${windText})</p>
    <p style="color: #105c79;">Direccion: ${weatherData.wind_deg}</p>
    <p style="color: #105c79;">Olas: ${marineData.wave_height} Mts</p>
    <button onclick="window.location.href='${buttonUrl}'" class="btn-green" id="">Saber mas</button>
  `;

  marker.bindPopup(popupContent);
  marker.openPopup();
}

// icono cleach
var cleachIcon = L.icon({
  iconUrl: 'images/iconos/mano cleach azul.svg',
  

  iconSize:     [50, 110], // size of the icon
  iconAnchor:   [20, 60], // point of the icon which will correspond to marker's location
  popupAnchor:  [0, -20] // point from which the popup should open relative to the iconAnchor
});


playas.forEach((playa) => {
  let marker = L.marker([playa.lat, playa.lon], {icon: cleachIcon}).addTo(map);
  let isClicked = false;

  marker.on("click", function (e) {
    let buttonUrl = playa.buttonUrl;
    updatePopup(marker, playa.lat, playa.lon, playa, buttonUrl);
    updatePopup(marker, playa.lat, playa.lon, playa, buttonUrl); 
    this.openPopup();
    isClicked = true;
  });

  map.on("click", function (e) {
    if (isClicked) {
      marker.closePopup();
      isClicked = false;
    }
  });
});

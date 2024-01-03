//	MAPA

var map = L.map('map').setView([-34.96226728068345, -54.94436108442241], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
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
  {nombre: "Solis",lat: -34.7931,lon: -55.3882,buttonUrl: "Playa-Solis.html",},
  {nombre: "Bella Vista",lat: -34.8054,lon: -55.3545,buttonUrl: "Playa-Bella-Vista.html",},
  {nombre: "Las Flores",lat: -34.8110,lon: -55.3388,buttonUrl: "Playa-Las-Flores.html",},
  {nombre: "Playa Verde",lat: -34.8236,lon: -55.3191,buttonUrl: "Playa-Verde.html",},
  {nombre: "Playa Hermosa",lat: -34.8381,lon: -55.3085,buttonUrl: "Playa-Hermosa.html",},
  {nombre: "Playa Grande",lat: -34.8546,lon: -55.2990,buttonUrl: "Playa-Grande.html",},
  {nombre: " Piriapolis",lat: -34.8677,lon: -55.2768,buttonUrl: "Playa-Piriapolis.html",},
  {nombre: " San Francisco",lat: -34.8901,lon: -55.2695,buttonUrl: "Playa-San-Francisco.html",},
  {nombre: " Punta Colorada",lat: -34.9000,lon: -55.2467,buttonUrl: "Playa-Punta-Colorada.html",},
  {nombre: " Punta Negra",lat: -34.8949,lon: -55.2214,buttonUrl: "Playa-Punta-Negra.html",},
  {nombre: " Ocean Park",lat: -34.8783,lon: -55.1217,buttonUrl: "Playa-Ocean-Park.html",},
  {nombre: " Chihuahua",lat: -34.8776,lon: -55.0960,buttonUrl: "Playa-Chihuahua.html",},
  {nombre: " Tio Tom",lat: -34.8776,lon: -55.0796,buttonUrl: "Playa-Tio-Tom.html",},
  {nombre: " Solanas",lat: -34.8870,lon: -55.0467,buttonUrl: "Playa-Solanas.html",},
  {nombre: " Las Grutas",lat: -34.9105,lon: -55.0409,buttonUrl: "Playa-Las-Grutas.html",},
  {nombre: " Puntas del chileno",lat: -34.9116,lon: -55.0142,buttonUrl: "Playa-Puntas-del-chileno.html",},
  {nombre: " Pinares Paradas 27 a 39",lat: -34.9115,lon: -54.9961,buttonUrl: "Playa-Pinares-P39-P27.html",},
  {nombre: " Mansa Paradas 19 a 24",lat: -34.9222,lon: -54.9692,buttonUrl: "Playa-Mansa-P24-p19.html",},
  {nombre: " Mansa Paradas 12 a 16",lat: -34.9325,lon: -54.9562,buttonUrl: "Playa-Mansa-P16-p12.html",},
  {nombre: " Mansa Paradas 10 y 11",lat: -34.9402,lon: -54.9485,buttonUrl: "Playa-Mansa-P11-P10.html",},
  {nombre: " Mansa Paradas 8 y 9",lat: -34.9416,lon: -54.9469,buttonUrl: "Playa-Mansa-P9-p8.html",},
  {nombre: " Mansa Paradas 6 y 7",lat: -34.9457,lon: -54.9432,buttonUrl: "Playa-Mansa-P7-p6.html",},
  {nombre: " Mansa Parada 5",lat: -34.9488,lon: -54.9416,buttonUrl: "Playa-Mansa-P5.html",},
  {nombre: " Mansa Parada 2",lat: -34.9517,lon: -54.9409,buttonUrl: "Playa-Mansa-P2.html",},
  {nombre: " Mansa Parada 3",lat: -34.9500,lon: -54.9409,buttonUrl: "Playa-Mansa-P3.html",},
  {nombre: " Mansa Parada 1",lat: -34.9556,lon: -54.9407,buttonUrl: "Playa-Mansa-P1.html",},
  {nombre: " Muelle de Mailhos",lat: -34.9576,lon: -54.9440,buttonUrl: "Playa-Mansa-Muelle-Milos.html",},
  {nombre: " Playa de los Ingleses",lat: -34.9674,lon: -54.9472,buttonUrl: "Playa-de-los-ingleses.html",},
  {nombre: " El Emir",lat: -34.9628,lon: -54.9403,buttonUrl: "Playa-El-Emir.html",},
  {nombre: " los Dedos",lat: -34.9581,lon: -54.9369,buttonUrl: "Playa-Los-Dedos.html",},
  {nombre: " la olla",lat: -34.9540,lon: -54.9296,buttonUrl: "Playa-la olla.html",},
  {nombre: " Brava paradas 5 a 7",lat: -34.9511,lon: -54.9276,buttonUrl: "Playa-Brava-P5-P6-P7.html",},
  {nombre: " Brava paradas 8",lat: -34.9491,lon: -54.9244,buttonUrl: "Playa-Brava-P8.html",},
  {nombre: " Brava paradas 9 y 10",lat: -34.9463,lon: -54.9209,buttonUrl: "Playa-Brava-P9-P10.html",},
  {nombre: " Brava paradas 11 a 13",lat: -34.9426,lon: -54.9141,buttonUrl: "Playa-Brava-P11-P12-P13.html",},
  {nombre: " Brava paradas 14 a 16",lat: -34.9366,lon: -54.9053,buttonUrl: "Playa-Brava-P14-P15-P16.html",},
  {nombre: " Brava paradas 17 y 18",lat: -34.9344,lon: -54.9009,buttonUrl: "Playa-Brava-P17-P18.html",},
  {nombre: " Brava paradas 19 y 20",lat: -34.9317,lon: -54.8976,buttonUrl: "Playa-Brava-P19-p20.html",},
  {nombre: " Brava parada 21",lat: -34.9307,lon: -54.8954,buttonUrl: "Playa-Brava-P21.html",},
  {nombre: " Brava parada 25",lat: -34.9283,lon: -54.8904,buttonUrl: "Playa-Brava-P25.html",},
  {nombre: " Brava parada 30",lat: -34.9237,lon: -54.8808,buttonUrl: "Playa-Brava-P30.html",},
  {nombre: " Brava parada 32",lat: -34.9218,lon: -54.8737,buttonUrl: "Playa-Brava-P32.html",},
  {nombre: " Brava de Jose Ignacio",lat: -34.8372,lon: -54.6313,buttonUrl: "Playa-Brava-De-Jose-Ignacio.html",},
  {nombre: " Mansa de Jose Ignacio",lat: -34.8391,lon: -54.6457,buttonUrl: "Playa-Mansa-De-Jose-Ignacio.html",},
  {nombre: " La Juanita",lat: -34.8387,lon: -54.6547,buttonUrl: "Playa-La-Juanita.html",},
  {nombre: " Santa Monica",lat: -34.8502,lon: -54.7004,buttonUrl: "Playa-Santa-Monica.html",},
  {nombre: " Balneario Buenos Aires",lat: -34.8876,lon: -54.7784,buttonUrl: "Playa-Playa-Buenos-Aires.html",},
  {nombre: " El Chorro",lat: -34.9041,lon: -54.8066,buttonUrl: "Playa-El-Chorro.html",},
  {nombre: " Bikini",lat: -34.9075,lon: -54.8296,buttonUrl: "Playa-Bikini.html",},
  {nombre: " Montoya",lat: -34.9154,lon: -54.8467,buttonUrl: "Playa-Montoya.html",},
  {nombre: " Posta Del Cangrejo",lat: -34.9165,lon: -54.8596,buttonUrl: "Playa-Posta-Del-Cangrejo.html",},
  {nombre: " La Barra",lat: -34.9156,lon: -54.8660,buttonUrl: "Playa-La-Barra.html",},
];


async function updatePopup(marker, lat, lon, playa, buttonUrl) {
  let weatherData = await getWeatherData(lat, lon);
  let marineData = await getMarineData(lat, lon);

  let windText = "";

 
  if (weatherData.wind <= 1) {
    windText = "Calma";
  } else if (weatherData.wind <= 6) {
    windText = "brisa debil";
  } else if (weatherData.wind <= 10) {
    windText = "Brisa";
  } else if (weatherData.wind <= 14) {
    windText = "Brisa fuerte";
  } else if (weatherData.wind <= 18) {
    windText = "Viento Debil";
  } else if (weatherData.wind <= 24) {
    windText = "Ventoso";
  } else if (weatherData.wind <= 30) {
    windText = "Viento Fuerte";
  } else if (weatherData.wind <= 40) {
    windText = "Vientos muy fuertes";
  } else if (weatherData.wind <= 50) {
    windText = "Temporal";
  } else if (weatherData.wind <= 60) {
    windText = "Temporal Duro";
  } else if (weatherData.wind <= 102) {
    windText = "Temporal Huracanado";
  } else if (weatherData.wind <= 117) {
    windText = "Temporal Huracanado";
  } else {
    windText = "Huracán";
  }
  

  
 
  let popupContent = `
  <div class="popup-content-insert">
    <p style="color: #ffffff; font-size:15px; font-weight:bold;font-size:25px;font-family: 'Acumin Pro', sans-serif;">${playa.nombre}</p><hr style="height:30px;border-width: 5px;">
    <i><img src="https://storage.googleapis.com/chileback/cleach/images/iconos/popup/vientos.svg" width="20px" style="float:left;"><p style="color: #ffffff;font-family: 'Acumin Pro 400', sans-serif;font-size:16px; font-style: normal;">&nbsp;Viento: <strong>${windText} (${weatherData.wind} KM/H)</strong></p></i>
    <i><img src="https://storage.googleapis.com/chileback/cleach/images/iconos/popup/temp.svg" width="20px" height="20px" style="float:left;"><p style="color: #ffffff;font-family: 'Acumin Pro', sans-serif;font-size:16px; font-style: normal;">&nbsp;Temp: <strong>${weatherData.temp}°C</strong></p>
    <i><img src="https://storage.googleapis.com/chileback/cleach/images/iconos/popup/direcc.svg" width="20px" style="float:left;"><p style="color: #ffffff;font-family: 'Acumin Pro', sans-serif;font-size:16px; font-style: normal;">&nbsp;Direccion: <strong>${weatherData.wind_deg}</strong></p>
    <i><img src="https://storage.googleapis.com/chileback/cleach/images/iconos/popup/olas.svg" width="20px" style="float:left;"><p style="color: #ffffff;font-family: 'Acumin Pro', sans-serif;font-size:16px; font-style: normal;">&nbsp;Olas: <strong>${marineData.wave_height} Mts</strong></p>
    <button onclick="window.location.href='${buttonUrl}'" class="btn-pop" id="">Saber mas</button>
  </div>
  `;

  marker.bindPopup(popupContent);
  marker.openPopup();
}

// icono cleach
var cleachIcon = L.icon({
  iconUrl: 'https://storage.googleapis.com/chileback/cleach/images/iconos/mano cleach azul.svg',
  

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


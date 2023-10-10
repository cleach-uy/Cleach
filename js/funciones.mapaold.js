	 /*------------------------------*/
/*	MAPA
/*------------------------------*/

var map = L.map('map').setView([-34.96226728068345, -54.94436108442241], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© Cleach'
}).addTo(map);



/*------------------------------*/
/*	PLAYAS MALDONADO
/*------------------------------*/


//PLAYA SOLIS

var marker = L.marker([-34.793120582169394, -55.388271505103766]).addTo(map);

marker.bindPopup('<p>Playa Solis <br/>  </p><button class="btn-green"id="myButton">Saber mas</button>');       //PLAYA SOLIS EJEMPLO DE DATOS DE CLIMA

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Solis.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA BELLA VISTA

var marker = L.marker([-34.80547403469158, -55.354562651181396]).addTo(map);

marker.bindPopup('<p>Playa Bella Vista<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Bella-Vista.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA LAS FLORES

var marker = L.marker([-34.811018040364544, -55.338892261910196]).addTo(map);

marker.bindPopup('<p>Playa Las Flores<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Las-Flores.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA VERDE

var marker = L.marker([-34.823677777952625, -55.319116726970414]).addTo(map);

marker.bindPopup('<p>Playa Verde<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Verde.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA HERMOSA

var marker = L.marker([-34.83932974366317, -55.306383069309256]).addTo(map);

marker.bindPopup('<p>Playa Hermosa<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Hermosa.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA GRANDE

var marker = L.marker([-34.85467665931301, -55.29902136151397]).addTo(map);

marker.bindPopup('<p>Playa Grande<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-grande.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA PIRIAPOLIS

var marker = L.marker([-34.867787641598674, -55.27686321178293]).addTo(map);

marker.bindPopup('<p>Playa Piriapolis<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Piriapolis.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA SAN FRANCISCO

var marker = L.marker([-34.89017406609535, -55.269567639034776]).addTo(map);

marker.bindPopup('<p>Playa San Francisco<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-San-Francisco.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA PUNTA COLORADA

var marker = L.marker([-34.900027786622864, -55.24671429783681]).addTo(map);

marker.bindPopup('<p>Playa Punta Colorada<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Punta-Colorada.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA PUNTA OCEAN PARK

var marker = L.marker([-34.87838740870194, -55.12179368328963]).addTo(map);

marker.bindPopup('<p>Playa Ocean Park<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Ocean-Park.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA Chihuahua
var marker = L.marker([-34.87768257155149, -55.09604548829565]).addTo(map);

marker.bindPopup('<p>Playa Chihuahua<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Chihuahua.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA TIO TOM 
var marker = L.marker([-34.87760569849585, -55.07967838620885]).addTo(map);

marker.bindPopup('<p>Playa Tio Tom<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Tio-Tom.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA SOLANAS
var marker = L.marker([-34.887065337169844, -55.046777350104335]).addTo(map);

marker.bindPopup('<p>Playa Solanas<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Solanas.html"; // cambiar la URL al hacer clic en el botón
});
});


/*------------------------------*/
/*	PLAYAS MALDONADO END
/*------------------------------*/

/*------------------------------*/
/*	PLAYAS PUNTA DEL ESTE MANSA
/*------------------------------*/


//PLAYA LAS GRUTAS
var marker = L.marker([-34.910503245243724, -55.040907640880896]).addTo(map);

marker.bindPopup('<p>Playa Las Grutas<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Las-Grutas.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA PUNTA DEL CHILENO

var marker = L.marker([-34.911633852822966, -55.0142098641479]).addTo(map);

marker.bindPopup('<p>Playa Puntas del chileno<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Puntas-del-chileno.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA PINARES P39 A P27

var marker = L.marker([-34.91159355706396, -54.99612342606421]).addTo(map);

marker.bindPopup('<p>Playa Pinares Paradas 27 a 39<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Pinares-P39-P27.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA Mansa PARADA 24 A 19

var marker = L.marker([-34.92228246430653, -54.969288990758855]).addTo(map);

marker.bindPopup('<p>Playa Mansa Paradas 19 a 24<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Mansa-P24-p19.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA MANSA PARADA 16 A 12

var marker = L.marker([-34.93255890454291, -54.95625681446421]).addTo(map);

marker.bindPopup('<p>Playa Mansa Paradas 12 a 16<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Mansa-P16-p12.html"; // cambiar la URL al hacer clic en el botón
});
});




//PLAYA MANSA PARADA 10 y 11

var marker = L.marker([-34.94021122189735, -54.948558693699646]).addTo(map);

marker.bindPopup('<p>Playa Mansa Paradas 10 y 11<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Mansa-P11-P10.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA MANSA PARADA 8 y 9

var marker = L.marker([-34.94164730149185, -54.94691966321109]).addTo(map);

marker.bindPopup('<p>Playa Mansa Paradas 8 y 9<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Mansa-P9-p8.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA MANSA PARADA 7 y 6

var marker = L.marker([-34.94576056634387, -54.94326094308921]).addTo(map);

marker.bindPopup('<p>Playa Mansa Paradas 6 y 7<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Mansa-P7-p6.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA MANSA PARADA 5

var marker = L.marker([-34.94887564384278, -54.94161701170219]).addTo(map);

marker.bindPopup('<p>Playa Mansa Parada 5<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Mansa-P5.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA MANSA PARADA 2

var marker = L.marker([-34.95178975677523, -54.94093376826193]).addTo(map);

marker.bindPopup('<p>Playa Mansa Parada 2<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Mansa-P3.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA MANSA PARADA 3- 

var marker = L.marker([-34.95009005151018, -54.9409429515967]).addTo(map);

marker.bindPopup('<p>Playa Mansa Parada 3<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Mansa-P2.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA MANSA PARADA 1

var marker = L.marker([-34.95566446816666, -54.94071341625719]).addTo(map);

marker.bindPopup('<p>Playa Mansa Parada 1<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Mansa-P1.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA MUELLE MAILOS

var marker = L.marker([-34.95763656266185, -54.9440109166307]).addTo(map);

marker.bindPopup('<p>Playa Mansa Muelle de Mailhos<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Mansa-Muelle-Milos.html"; // cambiar la URL al hacer clic en el botón
});
});

/*------------------------------*/
/*	PLAYAS PUNTA DEL ESTE MANSA END
/*------------------------------*/

/*------------------------------*/
/*	PLAYAS PUNTA DEL ESTE BRAVA 
/*------------------------------*/




//PLAYA DE LOS INGLESES

var marker = L.marker([-34.96888826970767, -54.94745095363788]).addTo(map);

marker.bindPopup('<p>Playa De los Ingleses<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-de-los-ingleses.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA EL EMIR 

var marker = L.marker([-34.962284266483934, -54.93795553528344]).addTo(map);

marker.bindPopup('<p>Playa El Emir<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-El-Emir.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA LOS DEDOS

var marker = L.marker([-34.958148208403145, -54.93690106355104]).addTo(map);

marker.bindPopup('<p>Playa De los Dedos<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Los-Dedos.html"; // cambiar la URL al hacer clic en el botón
});
});



//PLAYA BRAVA PARADA 5 , 6 y 7

var marker = L.marker([-34.951182589107354, -54.92764342134336]).addTo(map);

marker.bindPopup('<p>Playa Brava paradas 5, 6 y 7<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Brava-P5-P6-P7.html"; // cambiar la URL al hacer clic en el botón
});
});



//PLAYA BRAVA PARADA 8

var marker = L.marker([-34.949182190811996, -54.92446297551942]).addTo(map);

marker.bindPopup('<p>Playa Brava paradas 8<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Brava-P8.html"; // cambiar la URL al hacer clic en el botón
});
});



//PLAYA BRAVA PARADA 9 y 10

var marker = L.marker([-34.94635349000674, -54.92091258193072]).addTo(map);

marker.bindPopup('<p>Playa Brava paradas 9 y 10<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Brava-P9-P10.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA BRAVA PARADA 11 y 12 13

var marker = L.marker([-34.943032066440495, -54.9140998917755]).addTo(map);

marker.bindPopup('<p>Playa Brava paradas 11, 12 y 13<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Brava-P11-P12-P13.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA BRAVA PARADA 14 y 15 16

var marker = L.marker([-34.9366027864007, -54.90530225715943]).addTo(map);

marker.bindPopup('<p>Playa Brava paradas 14, 15 y 16<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Brava-P14-P15-P16.html"; // cambiar la URL al hacer clic en el botón
});
});



//PLAYA BRAVA PARADA 17 18

var marker = L.marker([-34.934449544450786, -54.90094400577789]).addTo(map);

marker.bindPopup('<p>Playa Brava paradas 17 y 18<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Brava-P17-P18.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA BRAVA PARADA 19 20

var marker = L.marker([-34.931709952748854, -54.89763062189689]).addTo(map);

marker.bindPopup('<p>Playa Brava paradas 19 y 20<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Brava-P19-p20.html"; // cambiar la URL al hacer clic en el botón
});
});



//PLAYA BRAVA PARADA 21

var marker = L.marker([-34.9307148068818, -54.89543055627397]).addTo(map);

marker.bindPopup('<p>Playa Brava paradas 21<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Brava-P21.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA BRAVA PARADA 25

var marker = L.marker([-34.92837492479849, -54.89042510441587]).addTo(map);

marker.bindPopup('<p>Playa Brava paradas 21<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Brava-P25.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA BRAVA PARADA 30

var marker = L.marker([-34.92377830717798, -54.880828267018465]).addTo(map);

marker.bindPopup('<p>Playa Brava paradas 30<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Brava-P30.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA BRAVA PARADA 32

var marker = L.marker([-34.9218088526065, -54.873719065836305]).addTo(map);

marker.bindPopup('<p>Playa Brava paradas 32<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Brava-P32.html"; // cambiar la URL al hacer clic en el botón
});
});


/*------------------------------*/
/*	PLAYAS PUNTA DEL ESTE BRAVA END
/*------------------------------*/

/*------------------------------*/
/*	PLAYAS LA BARRA 
/*------------------------------*/



//PLAYA BRAVA JOSE IGNACIO

var marker = L.marker([-34.837254602541975, -54.631330936235294]).addTo(map);

marker.bindPopup('<p>Playa Brava de Jose Ignacio<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Brava-De-Jose-Ignacio.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA MANSA JOSE IGNACIO

var marker = L.marker([-34.83910010286163, -54.64578250369607]).addTo(map);

marker.bindPopup('<p>Playa Mansa de Jose Ignacio<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Mansa-De-Jose-Ignacio.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA La juanita

var marker = L.marker([-34.83878751809291, -54.65471271896471]).addTo(map);

marker.bindPopup('<p>Playa La Juanita<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-La-Juanita.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA Balneario santa monica

var marker = L.marker([-34.85026651861965, -54.700429204440205]).addTo(map);

marker.bindPopup('<p>Playa Balneario santa Monica<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Santa-Monica.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA Balneario Buenos aires

var marker = L.marker([-34.88764305001707, -54.778498143751015]).addTo(map);

marker.bindPopup('<p>Playa Balneario Buenos Aires<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Playa-Buenos-Aires.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA el chorro

var marker = L.marker([-34.904131810542616, -54.80667295849728]).addTo(map);

marker.bindPopup('<p>Playa El chorro<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-El-Chorro.html"; // cambiar la URL al hacer clic en el botón
});
});

//PLAYA  BIKINI

var marker = L.marker([-34.907564295733096, -54.829693100572065]).addTo(map);

marker.bindPopup('<p>Playa Bikini<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Bikini.html"; // cambiar la URL al hacer clic en el botón
});
});


//PLAYA MONTOYA

var marker = L.marker([-34.915478957128315, -54.84677860648394]).addTo(map);

marker.bindPopup('<p>Playa Montoya<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Montoya.html"; // cambiar la URL al hacer clic en el botón
});
});

//POSTA DEL CANGREJO

var marker = L.marker([-34.916554677427754, -54.85967863194136]).addTo(map);

marker.bindPopup('<p>Playa Posta del cangrejo<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-Posta-Del-Cangrejo.html"; // cambiar la URL al hacer clic en el botón
});
});

//POSTA LA BARRA

var marker = L.marker([-34.91561194738265, -54.86600037527294]).addTo(map);

marker.bindPopup('<p>Playa La Barra<br /></p><button class="btn-green"id="myButton">Saber mas</button>');

var isClicked = false; // variable para guardar el estado del popup

marker.on('click', function (e) {
this.openPopup(); // abrir el popup al hacer clic en el marcador
isClicked = true; // cambiar el estado a verdadero
document.getElementById("myButton").addEventListener("click", function(){
window.location.href = "Playa-La-Barra.html"; // cambiar la URL al hacer clic en el botón
});
});


/*------------------------------*/
/*	PLAYAS LA BARRA END
/*------------------------------*/


//FUNCION POP-UP MAPA

map.on('click', function (e) {
if (isClicked) {
marker.closePopup(); // cerrar el popup al hacer clic en el mapa
isClicked = false; // cambiar el estado a falso
}
});


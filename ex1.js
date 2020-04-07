//Fase 1
let map = L.map('map').setView([41.3858148,2.1692236], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


//Fase 2
let marker = L.marker([41.3868561,2.1661102]).addTo(map);

//Fase 3

marker.bindPopup(
    `<h3>Restaurant Centfocs</h3>
    <p>Restaurante mediterráneo</p>
    <p>Carrer de Balmes, 16, 08007, Barcelona</p>`
  ).openPopup();
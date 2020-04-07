const map = L.map('map').setView([41.3858148,2.1692236], 17);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker;
map.on('click', onMapClick);

function onMapClick(e){
    if(marker){
        map.removeLayer(marker);
    }
    marker = L.marker(e.latlng).addTo(map);
    marker.bindPopup(
        `Coordenadas:<br>
        Lat: ${e.latlng.lat.toFixed(5)}<br>
        Lng: ${e.latlng.lng.toFixed(5)}`).openPopup();
        map.flyTo(e.latlng, map.getMaxZoom()-1);
    
}
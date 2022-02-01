// var map = L.map('map').setView([51.505, -0.09], 13);

L.mapbox.accessToken = 'pk.eyJ1IjoibW8wbmRhcyIsImEiOiJja3o0NXdsZzMwMWd0MnZxdzgzdjg5bWRvIn0.w7x7bdi9iEu9q9r-rTMZzA';
// Create a map in the div #map
var map = L.mapbox.map('map')
    .setView([51.505, -0.09], 13)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mo0ndas/ckz46276w000914p8b7dkhhhl'));

    
    var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

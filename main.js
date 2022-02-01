L.mapbox.accessToken =
	"pk.eyJ1IjoibW8wbmRhcyIsImEiOiJja3o0NXdsZzMwMWd0MnZxdzgzdjg5bWRvIn0.w7x7bdi9iEu9q9r-rTMZzA";
// Create a map in the div #map
var map = L.mapbox
	.map("map")
	.setView([51.505, -0.09], 4)
	.addLayer(
		L.mapbox.styleLayer("mapbox://styles/mo0ndas/ckz4el2ft001q15sxlyzqn2tt")
	);
// .addLayer(L.mapbox.styleLayer('mapbox://styles/mo0ndas/ckz46276w000914p8b7dkhhhl'));

map.options.minZoom = 4;
map.options.maxZoom = 6;

var popup = L.popup();

function onMapClick(e) {
	let pos = e.latlng
		.toString()
		.substring(7)
		.replace("(", "")
		.replace(")", "")
		.split(", ");
	popup
		.setLatLng(e.latlng)
		.setContent(pos[1] + ", " + pos[0])
		.openOn(map);
}

map.on("click", onMapClick);

var geojsonMarkerOptions = {
	radius: 8,
	fillColor: "#ff7800",
	color: "#000",
	weight: 1,
	opacity: 1,
	fillOpacity: 0.8,
};

let geoLayer = L.geoJSON("", {
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, geojsonMarkerOptions);
		},
	}).addTo(map);

let newPoint = (feature) => {
	geoLayer.addData(feature);
};

let clearPoints = () => {
	geoLayer.clearLayers();
};

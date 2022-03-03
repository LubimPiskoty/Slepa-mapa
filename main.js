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
		.setContent(pos[0] + ", " + pos[1])
		.openOn(map);
}

map.on("click", onMapClick);

let createCircle = (latlng, style, size) => {
	let c =  L.circle(latlng, style).addTo(map);
	c.setRadius(size);
	return c;
};

let createPopup = (latlng, text) => {
	L.popup(popupStyleNames)
		.setLatLng(latlng)
		.setContent(text)
		.openOn(map);
}

let showNames = (dict) => {
	for (var key in dict) {
		var value = dict[key]
		createPopup(value.getLatLng(), key)
	}
};

var popupStyleNames = {
	autoClose: false,
	closeOnClick: false,
	closeButton: false,
}

var circleStyleRed = {
	// color: 'red',
	fillColor: '#f03',
	fill: true,
}

var circleStyleGreen = {
	// color: 'green',
	fillColor: '#BCCF29',
	fill: true,
}

var circleStyleHidden = {
	fillOpacity: 0.5,
	stroke: false,
	fill: false,
}

SIZES = [50000, 150000, 300000];

MORIA = {
	"Karské": createCircle([75.253057, 73.125], circleStyleGreen, SIZES[1]),
	"Laptevovcov": createCircle([75.866646, 126.386719], circleStyleGreen, 200000),
};



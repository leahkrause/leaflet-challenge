
// Define url 
var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

// Define map
var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 4
  });
  
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Creating a color function
function chooseColor(x) {
  if (x > 100) return "red";
  else return "pink";
}

 // Creating marker size and color function
function styleInfo (feature, latlng) {
  return {
  radius: feature.properties.mag * 5,
  fillColor: chooseColor(feature.geometry.coordinates[2]),
  color: chooseColor(feature.geometry.coordinates[2]),
  opacity: 0.8,
  fillOpacity: 0.5,
  };
};

d3.json(url).then(function(response) {

  L.geoJson(response, {
    // Turn each feature into a marker 
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng);
    },
    // Set style 
    style: styleInfo,
    // Create popup
    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "Magnitude: "
        + feature.properties.mag
        + "<br>Depth: "
        + feature.geometry.coordinates[2]
        + "<br>Location: "
        + feature.properties.place
      );
    }
  // legend.addTo(myMap);

  }).addTo(myMap);

});


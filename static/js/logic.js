
var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';


var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 4
  });
  
// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Creating marker size function
function markerSize(feature, latlng) {
  radius =  Math.sqrt(feature.properties.mag) * 5;
}

d3.json(url).then(function(response) {

  L.geoJson(response, {
    // Turn each feature into a marker 
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, {
        radius: markerSize(feature.properties.mag)
      });
    },
    // We set the style for each circleMarker using our styleInfo function.
    // style: styleInfo,
    // We create a popup for each marker to display the magnitude and location of the earthquake after the marker has been created and styled
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
  }).addTo(myMap);

});
















// d3.json(url).then(function(data) {
  
//   function styleInfo(feature){
//     return{
//       radius: feature.properties.magnitude*4
//     }
//   };
  
//   L.geoJson(data, {
//     pointToLayer: function(feature, latlng){
//       return L.circleMarker(latlng)
//     }
//   })
// }).addTo(myMap);

// // Create a new marker cluster group.
// var markers = L.markerClusterGroup();

// Loop through the data.
// for (var i = 0; i < response.length; i++) {

// //     // Set the data location property to a variable.
// var location = response.features.geometry;

// //     // Check for the location property.
// if (location) {

// //     // Add a new marker to the cluster group, and bind a popup.
// markers.addLayer(L.marker([location.coordinates[0], location.coordinates[1]]).bindPopup(response[i].descriptor));
//  }

// }});

//   // Add our marker cluster layer to the map.
// myMap.addLayer(markers);

// var features = response['features'];
  
// for (var i = 0; i < features.length; i++) {
//   var location = features.geometry[i];
  
//   if (location) {
//     L.marker([location.coordinates[0], location.coordinates[1]]).addTo(myMap);
//   }
// }
  
// });



  ////

    // // Create a new marker cluster group.
    // var markers = L.markerClusterGroup();

    // // Loop through the data.
    // for (var i = 0; i < response.length; i++) {
  
    //   // Set the data location property to a variable.
    //   var location = response[i].location;
  
    //   // Check for the location property.
    //   if (location) {
  
    //     // Add a new marker to the cluster group, and bind a popup.
    //     markers.addLayer(L.marker([location.coordinates[1], location.coordinates[0]])
    //       .bindPopup(response[i].descriptor));
    //   }
  
    
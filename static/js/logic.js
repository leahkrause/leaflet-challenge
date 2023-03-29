var url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

var map


///


var myMap = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 4
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  var url = "'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson'";
  
  d3.json(url).then(function(response) {
  
    console.log(response);

    var features = response['features'];
  
    for (var i = 0; i < features.length; i++) {
        var location = features.geometry[i];

      if (location) {
        L.marker([location.coordinates[0], location.coordinates[1]]).addTo(myMap);
      }
    }
  
  });
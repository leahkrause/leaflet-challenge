# leaflet-challenge

First, I chose a dataset from USGS to display earthquake data. I defined this specific url as "url".

Next, I defined a map layer with its' center and zoom specified. 

I read the data in using d3 and GeoJSON to turn each latitude/longitude pair into a point on the map notated by a circle marker with sizes and colors correlated to the magnitude and depth of the earthquake. Unfortunately, I struggled to see a change in size in my markers. 

A popup with the details of the earthquake were added to the map as well.

Unfortunately, I also struggled to add a legend onto the map.

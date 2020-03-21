// Initialize all of the LayerGroups we'll be using - Magnitude Scale (Update for Part II)
// var layers = {
//     LOW: new L.LayerGroup(),
//     mid_LOW: new L.LayerGroup(),
//     MID: new L.LayerGroup(),
//     MID_high: new L.LayerGroup(),
//     HIGH: new L.LayerGroup(),
//     HIGHEST: new L.LayerGroup(),
// };

// Create an overlays object to add to the layer control
// var overlays = {
//     "Coming Soon": layers.COMING_SOON,
//     "Empty Stations": layers.EMPTY,
//     "Low Stations": layers.LOW,
//     "Healthy Stations": layers.NORMAL,
//     "Out of Order": layers.OUT_OF_ORDER
//   };

// Create a control for our layers, add our overlay layers to it
// L.control.layers(null, overlays).addTo(map);

// Create a legend to display information about our map
// var info = L.control({
//     position: "bottomright"
//   });

// info.addTo(map);


/// GOOD CODE TO CREATE MAP AND READ DATA


  
// Adding tile (BASE) layer
var lightmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
})


// Creating map object
var map = L.map("map", {
    center: [37.7749, -122.4194],
    zoom: 5
  });

lightmap.addTo(map);
  
  // Uncomment this link local geojson for when data.beta.nyc is down
  var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";
  
  // Grabbing our GeoJSON data..
  d3.json(link, function(data) {
      console.log(data);
      let earthquakeData = data;
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(earthquakeData).addTo(map);
  });
  
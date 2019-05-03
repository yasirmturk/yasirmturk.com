// When the window has finished loading create our google map below
//google.maps.event.addDomListener(window, "load", init);
function initMap() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 9,
    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(33.6158004, 72.8059159)
  };
  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById("map");
  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);
}

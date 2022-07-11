import {testFunction} from './scripts/test';
testFunction();

function initMap() {
  const myLatLng = { lat: 50.48521042270771, lng: 30.489357336582913 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: myLatLng,
    mapTypeControl: false,
    fullscreenControl: false,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
  });

}
window.initMap = initMap;
// import {testFunction} from './scripts/test';
// testFunction();
import {langArr} from './lang';

const changeLangButtons = document.querySelectorAll('.general__language-item');
const langEl = document.querySelector('.general__language')
const allLang = ['ua','eng']



// CHANGE ACTIVE BUTTON FRO CLICK , START CHANGE LANGUAGE FUNCTION , ADD HASH ON PATHNAME
changeLangButtons.forEach(e => {
  let lang = e.dataset.lang;
  console.log(e)
  e.addEventListener('click', () => {
    langEl.querySelector('.general__language-item--active').classList.remove('general__language-item--active');
    e.classList.add('general__language-item--active');
    location.href = window.location.pathname + '#' + lang;
    changeLanguage()
  })
})

// FUNCTION GET AND CHANGED TEXT FROM LANG.JS
function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + '#ua';
  }
  for (let key in langArr) {
    document.querySelector('.lng-' + key).innerHTML = langArr[key][hash];
  }
}




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

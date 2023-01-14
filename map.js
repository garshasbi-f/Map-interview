// Map initialization
var map = L.map("map").setView([34.4279, 53.688], 7);

/*==============================================
                TILE LAYER and WMS
================================================*/

//OSM LAYER
var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});
osm.addTo(map);

//WATER COLOR
var watercolor = L.tileLayer(
  "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",
  {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: "abcd",
    minZoom: 1,
    maxZoom: 16,
    ext: "jpg",
  }
);

//DARK MAP
var dark = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 19,
  }
);

//GOOGLE STREET
googleStreets = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

//GOOGLE SATELLITE
googleSat = L.tileLayer("http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
  maxZoom: 20,
  subdomains: ["mt0", "mt1", "mt2", "mt3"],
});

/*==============================================
            MARKER
================================================*/

//ICONE
var myIcon = L.icon({
  iconUrl: "img/red_marker.png",
  iconSize: [40, 40],
});

var lakeIcon = L.icon({
  iconUrl: "img/lake.png",
  iconSize: [40, 40],
});

var jungleIcon = L.icon({
  iconUrl: "img/jungle.png",
  iconSize: [40, 40],
});

//FIRST LAYER
var tehranMarker = L.marker([35.7219, 51.3347], {
  icon: myIcon,
  draggable: false,
});
var tehran_url = "img/Tehran.png";
var popup = tehranMarker
  .bindPopup(
    "<img src=" +
      tehran_url +
      " alt='' /> This is Tehran. " +
      "<br>" +
      tehranMarker.getLatLng()
  )
  .openPopup();

var esfehanMarker = L.marker([32.6539, 51.666], {
  icon: myIcon,
  draggable: false,
});
var esfehan_url = "img/Esfehan.png";
var popup = esfehanMarker
  .bindPopup(
    "<img src=" +
      esfehan_url +
      "/> This is Esfehan. " +
      "<br>" +
      esfehanMarker.getLatLng()
  )
  .openPopup();

var arakMarker = L.marker([34.0873, 49.7022], {
  icon: myIcon,
  draggable: false,
});
var arak_url = "img/Arak.png";
var popup = arakMarker
  .bindPopup(
    "<img src=" +
      arak_url +
      "/> This is Arak. " +
      "<br>" +
      arakMarker.getLatLng()
  )
  .openPopup();

var qomMarker = L.marker([34.6416, 50.8746], {
  icon: myIcon,
  draggable: false,
});
var qom_url = "img/Qom.png";
var popup = qomMarker
  .bindPopup(
    "<img src=" + qom_url + "/> This is Qom. " + "<br>" + qomMarker.getLatLng()
  )
  .openPopup();

var yazdMarker = L.marker([31.8974, 54.3569], {
  icon: myIcon,
  draggable: false,
});
var yazd_url = "img/Yazd.png";
var popup = yazdMarker
  .bindPopup(
    "<img src=" +
      yazd_url +
      "/> This is Yazd. " +
      "<br>" +
      yazdMarker.getLatLng()
  )
  .openPopup();

var mashhadMarker = L.marker([36.2972, 59.6067], {
  icon: myIcon,
  draggable: false,
});
var mashhad_url = "img/Mashhad.png";
var popup = mashhadMarker
  .bindPopup(
    "<img src=" +
      mashhad_url +
      "/> This is Mashhad. " +
      "<br>" +
      mashhadMarker.getLatLng()
  )
  .openPopup();

var ardebilMarker = L.marker([38.2432, 48.2976], {
  icon: myIcon,
  draggable: false,
});
var ardebil_url = "img/Ardebil.png";
var popup = ardebilMarker
  .bindPopup(
    "<img src=" +
      ardebil_url +
      "/> This is Ardebil. " +
      "<br>" +
      ardebilMarker.getLatLng()
  )
  .openPopup();

var rashtMarker = L.marker([37.2713, 49.5921], {
  icon: myIcon,
  draggable: false,
});
var rasht_url = "img/Rasht.png";
var popup = rashtMarker
  .bindPopup(
    "<img src=" +
      rasht_url +
      "/> This is Rasht. " +
      "<br>" +
      rashtMarker.getLatLng()
  )
  .openPopup();

var cities = L.layerGroup([
  tehranMarker,
  esfehanMarker,
  arakMarker,
  qomMarker,
  yazdMarker,
  mashhadMarker,
  ardebilMarker,
  rashtMarker,
]).addTo(map);

//SECOND LAYER
var NamakLake = L.marker([34.497506, 51.816561], {
  icon: lakeIcon,
  draggable: true,
});
var popup = NamakLake.bindPopup(
  "This is Namak Lake. " + "<br>" + NamakLake.getLatLng()
).openPopup();

var CaspianSea = L.marker([37.352424, 52.04343], {
  icon: lakeIcon,
  draggable: true,
});
var popup = CaspianSea.bindPopup(
  "This is Caspian Sea. " + "<br>" + CaspianSea.getLatLng()
).openPopup();

var HajAligholiSaltLake = L.marker([35.89712, 54.664699], {
  icon: lakeIcon,
  draggable: true,
});
var popup = HajAligholiSaltLake.bindPopup(
  "This is HajAligholiSaltLake. " + "<br>" + HajAligholiSaltLake.getLatLng()
).openPopup();

var HozeSoltanSaltLake = L.marker([34.992335, 50.93811], {
  icon: lakeIcon,
  draggable: true,
});
var popup = HozeSoltanSaltLake.bindPopup(
  "This is HozeSoltanSaltLake. " + "<br>" + HozeSoltanSaltLake.getLatLng()
).openPopup();

var LakeUrmia = L.marker([37.51063, 45.410502], {
  icon: lakeIcon,
  draggable: true,
});
var popup = LakeUrmia.bindPopup(
  "This is LakeUrmia. " + "<br>" + LakeUrmia.getLatLng()
).openPopup();

var lake = L.layerGroup([
  NamakLake,
  CaspianSea,
  HajAligholiSaltLake,
  HozeSoltanSaltLake,
  LakeUrmia,
]).addTo(map);

//THIRED LAYER
var NaharkhoranPark = L.marker([36.782996, 54.462093], {
  icon: jungleIcon,
  draggable: true,
});
var popup = NaharkhoranPark.bindPopup(
  "This is NaharkhoranPark. " + "<br>" + NaharkhoranPark.getLatLng()
).openPopup();

var NazhvanPark = L.marker([32.837736, 51.837931], {
  icon: jungleIcon,
  draggable: true,
});
var popup = NazhvanPark.bindPopup(
  "This is NazhvanPark. " + "<br>" + NazhvanPark.getLatLng()
).openPopup();

var ArasbaranProtectedArea = L.marker([38.907556, 46.865183], {
  icon: jungleIcon,
  draggable: true,
});
var popup = ArasbaranProtectedArea.bindPopup(
  "This is ArasbaranProtectedArea. " +
    "<br>" +
    ArasbaranProtectedArea.getLatLng()
).openPopup();

var AbrForest = L.marker([36.753034, 55.031641], {
  icon: jungleIcon,
  draggable: true,
});
var popup = AbrForest.bindPopup(
  "This is AbrForest. " + "<br>" + AbrForest.getLatLng()
).openPopup();

var jungle = L.layerGroup([
  NaharkhoranPark,
  NazhvanPark,
  ArasbaranProtectedArea,
  AbrForest,
]).addTo(map);

/*==============================================
            LAYER CONTROL
================================================*/

var baseMaps = {
  OSM: osm,
  "Water color map": watercolor,
  Dark: dark,
  "Google Street": googleStreets,
  "Google Satellite": googleSat,
};

var overlayMaps = {
  Cities: cities,
  Lake: lake,
  Jungle: jungle,
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

//RULER
var options = {
  position: "topright",

  lengthUnit: {
    display: "km",
    decimal: 2,
  },
};
L.control.ruler(options).addTo(map);

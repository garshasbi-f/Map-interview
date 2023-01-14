// config map
let config = {
  minZoom: 7,
  maxZoom: 18,
};
// magnification with which the map will start
const zoom = 7;
// coordinates
const lat = 34.4279;
const lng = 53.688;

// Map initialization
var map = L.map("map", config).setView([lat, lng], zoom);

/*==============================================
                  TILE LAYER
================================================*/

const mapList = [
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  "http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
];

function makeTileLayer(map) {
  var tileLayer = L.tileLayer(map, {
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
    maxZoom: 16,
  });
  return tileLayer;
}
makeTileLayer(mapList[0]).addTo(map);

/*==============================================
                 MARKER
================================================*/

const citieMarkersInfo = [
  [35.7219, 51.3347, "img/red_marker.png", "img/Tehran.png", "Tehran"],
  [32.6539, 51.666, "img/red_marker.png", "img/Esfehan.png", "Esfehan"],
];

const lakeMarkersInfo = [
  [34.497506, 51.816561, "img/lake.png", "Namak Lake"],
  [37.352424, 52.04343, "img/lake.png", "Caspian Sea"],
];

const jungleMarkersInfo = [
  [36.782996, 54.462093, "img/jungle.png", "NaharkhoranPark"],
  [32.837736, 51.837931, "img/jungle.png", "NazhvanPark"],
];

function makeLayerGroup(pointsInfo) {
  const markerList = [];
  for (let i = 0; i < pointsInfo.length; i++) {
    myIcone = L.icon({
      iconUrl: pointsInfo[i][2],
      iconSize: [40, 40],
    });

    marker = L.marker([pointsInfo[i][0], pointsInfo[i][1]], {
      icon: myIcone,
      draggable: false,
    })
      .bindPopup(
        pointsInfo == citieMarkersInfo
          ? `<img src=${pointsInfo[i][3]} alt="">This is ${pointsInfo[i][4]}.<br>`
          : `This is ${pointsInfo[i][3]}`
      )
      .openPopup();
    markerList.push(marker);
  }

  return L.layerGroup(markerList).addTo(map);
}

/*==============================================
                LAYER CONTROL
================================================*/

var baseMaps = {
  "Google Street": makeTileLayer(mapList[0]),
  "Google Satellite": makeTileLayer(mapList[1]),
};
var overlayMaps = {
  Cities: makeLayerGroup(citieMarkersInfo),
  Lake: makeLayerGroup(lakeMarkersInfo),
  Jungle: makeLayerGroup(jungleMarkersInfo),
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

//RULER
var options = {
  position: "topright",

  lengthUnit: {
    display: "km",
    decimal: 2,
    label: "Distance:",
  },
};
L.control.ruler(options).addTo(map);

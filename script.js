var mapa = L.map('mapa').setView([-0.19,-78.50],12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapa);

$.getJSON("https://fersimorales.github.io/PRUEBA1/archivo2.geojson",
function(data){
  var clusteredPoints = L.markerClusterGroup();
var marker = L.geoJson(data,{
  onEachFeature: function (feature, layer){
    layer.bindPopup('<b>Titulo: </b>' + feature.properties.TITULO_TESIS_O_INVESTIGACION+'<br>\<b>Tutor(es):</b>'+feature.properties.field_19+'<br>\<b>Tipología:</b>'+feature.properties.field_12);
  }
    }, 
     );
  clusteredPoints.addLayer(marker);
  mapa.addLayer(clusteredPoints)
});


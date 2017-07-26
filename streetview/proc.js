
if(mapTit != ''){    
  var DecTit = decodeBase64(mapTit);
   $(".mapTitulo").html(DecTit);
}

var MapillaryLink = GetLinkMapillaryImg(MapillaryKey);
var BackToMapLink = MapaDeRibeiraoLink(mapLat,mapLon,mapZoom);


$("#btnMapillary").click(function(e) {
	e.preventDefault();
	window.location.href = MapillaryLink;
});


$("#btnBackToMap").click(function(e) {
	e.preventDefault();
	window.location.href = BackToMapLink;
});

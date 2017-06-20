//Processamento de parâmentros via URL

//Foi solicitada mudança de mapa por URL?
	
if (URLSetBaseLayer!=null){ 	
	switch(URLSetBaseLayer) {
		case 'satelite' : URLSetBaseLayer = 'lMBT'; break;					
	}	
			
	if(BaselayersValidas.match(URLSetBaseLayer)){
		$('#map-select-layer').val(URLSetBaseLayer);
		$('#map-select-layer').change();
	}
}


    //Se foi solicitado marcador no mapa
    if (MarkerLatLonByURL !=null){ 	
	if (!MapPreventNewUserMakers){
		MapPreventNewUserMakers = true;
		UserTempMarker.setLatLng(MarkerLatLonByURL);
		map.setView(MarkerLatLonByURL, 18); 		
		var Msg = TempMarkerMsg(MarkerLatLonByURL[0],MarkerLatLonByURL[1]);
 		UserTempMarker.bindPopup(Msg).addTo(map); 
		UserTempMarker.openPopup(); 
	}else{
		MapPreventNewUserMakers = false;
		map.removeLayer(UserTempMarker);
	}		
    }


if (CamadaDeDados !=null){ 
   switch( CamadaDeDados  ) {
	case 'hospedagem' : AddDataOverlay('hospedagem','Hospedagem',HotelIcon,'lodging'); break; 
	case 'barrest'    : AddDataOverlay('bares-restaurantes','Bares e Restaurantes',AlimentIcon,'bar'); break; 
	case 'taxi'       : AddDataOverlay('taxi','Táxi',TaxiIcon,'car'); break; 
   }
}

//test - Add geoJSON
/*
var olHosp = L.mapbox.featureLayer()   
  .loadURL('dados/hospedagem.geojson')
  .on('layeradd', function(e) {
    var marker = e.layer;
    marker.setIcon(HotelIcon);
        e.layer.bindPopup(FormatNameDesc(e.layer.feature.properties.Name,e.layer.feature.properties.Description));        
      
  })
  .on('ready', function() {
       var ClusterLayerHosp = new L.MarkerClusterGroup();      
       ClusterLayerHosp.addLayer(olHosp);
       ControlLayers.addOverlay(ClusterLayerHosp, '<span class="icon suitcase"> Meios de Hospedagem');      
       map.addLayer(ClusterLayerHosp);
});
*/

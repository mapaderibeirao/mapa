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
	case 'hospedagem' : AddDataOverlay('hospedagem','Hospedagem',HotelIcon,'point'); break; 
	case 'barrest'    : AddDataOverlay('bares-restaurantes','Bares e Restaurantes',AlimentIcon,'point'); break; 
	case 'taxi'       : AddDataOverlay('taxi','Táxi',TaxiIcon,'car'); break; 
   }
}


$(".btnMapSatSwitcher").click(function(e) {
   e.preventDefault();
   if(MapCompareActive){
	   MapCompareActiveStop();	
   }else{	
	
	if( IsSatelliteLayer()){
		$('#map-select-layer').val('lMNK');
	}else{
		$('#map-select-layer').val('lMBT');
	}	
        $('#map-select-layer').change();	
   }
}); 

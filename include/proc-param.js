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
   var OK = true;
   switch( CamadaDeDados  ) {
	case 'ribeiraorun5k2017'    : AddDataOverlay('ribeiraorun5k2017','Ribeirao Run 5k',null,'walk'); break; 
	case ' mtb18s' : AddDataOverlay(' mtb2018s','MTB 2018 21k',null,'bicycle'); break;
	case ' mtb18p' : AddDataOverlay(' mtb2018p','MTB 2018 41k',null,'bicycle'); break;		   
        default           : OK = false;
   }
   if(OK){
      ControleListDadosGeoJSON.addTo(map);	   
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

$(".btnListDadosGeoJSON").click(function(e) {
   e.preventDefault();
   var URL = 'dados/?d='+CamadaDeDados;
   window.location.href = URL;
}); 

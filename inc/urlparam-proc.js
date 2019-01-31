//Processamento de parâmentros via URL



//Se foi solicitado marcador no mapa
if (mrgMarkerLatLonByURL !=null){ 	
if (!mrgMapOnClickAddLock){
	mrgMapOnClickAddLock = true;
	mrgUserTempMarker.setLatLng(mrgMarkerLatLonByURL);
	map.setView(mrgMarkerLatLonByURL, 18); 		
	var Msg = TempMarkerMsg(mrgMarkerLatLonByURL[0],mrgMarkerLatLonByURL[1]);
	mrgUserTempMarker.bindPopup(Msg).addTo(map); 
	mrgUserTempMarker.openPopup(); 
}else{
	mrgMapOnClickAddLock = false;
	map.removeLayer(mrgUserTempMarker);
}		
}


if (mrgCamadaDeDados !=null){ 
   var OK = true;
   switch( mrgCamadaDeDados  ) {
	case 'paroquiabomjesus'  : mrgAddDataOverlay('paroquiabomjesus','Paróquia Bom Jesus',null,'church'); break; 
	case 'hospedagem'  		 : mrgAddDataOverlay('hospedagem','Hospedagem',null,'bed'); break; 
    default                  : OK = false;
   }
}
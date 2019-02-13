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
	case 'turismo'  		 : 
		mrgAddDataOverlay('turismo','hospedagem','Hospedagem',null,'bed') 
		mrgAddDataOverlay('turismo','aeb','A & B',null,'utensils'); 
		mrgAddDataOverlay('turismo','eventos','Eventos',null,'calendar-alt'); 
		mrgAddDataOverlay('turismo','atrativos','Atrativos',null,'map-marked-alt'); 
	break; 
    default                  : OK = false;
   }
}

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
	case 'paroquiabomjesus'  : mrgAddDataOverlay('paroquiabomjesus','paroquiabomjesus','Paróquia Bom Jesus',null,'church',true); break; 
	case 'turismo'  		 : 
		mrgAddDataOverlay('turismo','aeb','A & B',null,'utensils',false); 
		mrgAddDataOverlay('turismo','eventos','Eventos',null,'calendar-alt',false); 
		mrgAddDataOverlay('turismo','atrativos','Atrativos',null,'map-marked-alt',false); 
		mrgAddDataOverlay('turismo','hospedagem','Hospedagem',null,'bed',true) 
	break; 
    default                  : OK = false;
   }
}

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
	case 'paroquiabomjesus': 
		mrgAddDataOverlay('paroquiabomjesus','setores','Setores',null,'puzzle-piece',true) 
		mrgAddDataOverlay('paroquiabomjesus','paroquiabomjesus','Paróquia Bom Jesus','cross','church',false); 
	break; 
	case 'turismo'		   : 
		mrgAddDataOverlay('turismo','aeb','A & B','utensils',null,false); 
		mrgAddDataOverlay('turismo','eventos','Eventos','calendar-alt',null,false); 
		mrgAddDataOverlay('turismo','atrativos','Atrativos','map-marked-alt',null,false); 
		mrgAddDataOverlay('turismo','hospedagem','Hospedagem','bed',null,true) 
	break; 
    default                  : OK = false;
   }
}

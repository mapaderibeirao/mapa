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
		mrgAddDataOverlay('paroquiabomjesus','extra','Extra','church',null,false); 
		mrgAddDataOverlay('paroquiabomjesus','setores','Setores',null,'puzzle-piece',true); 
		mrgAddDataOverlay('paroquiabomjesus','paroquiabomjesus','Paróquia Bom Jesus','cross','church',false) 
	break; 
	case 'turismo'		   : 
		mrgAddDataOverlay('turismo','aeb','A & B','utensils','utensils',false); 
		mrgAddDataOverlay('turismo','eventos','Eventos','calendar-alt','calendar-alt',false); 
		mrgAddDataOverlay('turismo','atrativos','Atrativos','map-marked-alt','map-marked-alt',false); 
		mrgAddDataOverlay('turismo','hospedagem','Hospedagem','bed','bed',false) 
	break; 
	case 'rtcma'		   : 
		mrgAddDataOverlay('rtcma','rtcma','RTCMA','map-marked-alt','object-group',false); 
	break; 
    default                        : OK = false;
   }
}

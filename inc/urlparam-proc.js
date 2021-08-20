//Processamento de parâmentros via URL


if (mrgMarkerByURL){
	var Center = map.getCenter();
	mrgMarkerLatLonByURL = [Center.lat, Center.lng];	
}

var ForceSilentAddOverlay = false //Força para que overlayers sejam adicionadas sem mudar a tela do mapa (dev)
//Se foi solicitado marcador no mapa

if (mrgMarkerLatLonByURL !=null){ 	
	ForceSilentAddOverlay = true; //Nesse caso desabilita para que seja focado no marcador em questão
	if (!mrgMapOnClickAddLock){
		mrgMapOnClickAddLock = true;
		mrgUserTempMarker.setLatLng(mrgMarkerLatLonByURL);
		map.setView(mrgMarkerLatLonByURL, 18); 		
		var Msg = TempMarkerMsg(mrgMarkerLatLonByURL[0],mrgMarkerLatLonByURL[1],17);
		mrgUserTempMarker.bindPopup(Msg).addTo(map); 
		mrgUserTempMarker.openPopup(); 
	}else{
		mrgMapOnClickAddLock = false;
		map.removeLayer(mrgUserTempMarker);
	}		
}

//INFO: mrgAddDataOverlay(Pasta,Arquivo,Apelido,IconDefault,IconMini,Enquadrar,Heat,Cluster)
//Os parâmetros podem ser passados de forma mais estruturada... verificar depois

//INFO: mrgAddDataOverlay(Pasta,Arquivo,Apelido,IconDefault,IconMini,Enquadrar,Heat,Cluster)
mrgAddDataOverlay('global','perimetro-rg','Fronteiras',null,'vector-square',!(ForceSilentAddOverlay),HeatOFF,ClusterOFF,OvCountOFF,OvExibirOn); 
//mrgAddDataOverlay('comercio','comercio','POIs',null,'vector-square',!(ForceSilentAddOverlay),HeatOFF,true,OvCountOFF,OvExibirOn); 
//mrgAddDataOverlay('global','vias','Ruas','road','road',false,HeatOFF,ClusterON,OvCountOFF); 


if (mrgCamadaDeDados !=null){ 
   var OK = true; //DEV
   switch( mrgCamadaDeDados  ) {
	case 'turismo'		   : 
		mrgAddDataOverlay('turismo','aeb','A & B','utensils','utensils',false,HeatOFF,ClusterOFF,OvCountOFF); 
		mrgAddDataOverlay('turismo','eventos','Eventos','calendar-alt','calendar-alt',false,HeatOFF,ClusterOFF,OvCountOFF); 
		mrgAddDataOverlay('turismo','atrativos','Atrativos','map-marked-alt','map-marked-alt',false,HeatOFF,ClusterOFF,OvCountOFF); 
		mrgAddDataOverlay('turismo','hospedagem','Hospedagem','bed','bed',false,HeatOFF,ClusterOFF,OvCountOFF) 
	break; 
	case 'rtcma'		   : 
		mrgAddDataOverlay('rtcma','rtcma','RT Cavernas da Mata Atlântica','map-marked-alt','map-marked-alt',true,HeatOFF,ClusterOFF,OvCountOFF); 
	break; 
    default                        : OK = false;
   }
      
   
}

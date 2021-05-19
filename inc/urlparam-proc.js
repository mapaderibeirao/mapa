//Processamento de parâmentros via URL
var ForceSilentAddOverlay = false //Força para que overlayers sejam adicionadas sem mudar a tela do mapa (dev)
//Se foi solicitado marcador no mapa

if (mrgMarkerLatLonByURL !=null){ 	
	if (!mrgMapOnClickAddLock){
		ForceSilentAddOverlay = true; //Nesse caso desabilita para que seja focado no marcador em questão
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

//INFO: mrgAddDataOverlay(Pasta,Arquivo,Apelido,IconDefault,IconMini,Enquadrar,Heat,Cluster)
//Os parâmetros podem ser passados de forma mais estruturada... verificar depois

//INFO: mrgAddDataOverlay(Pasta,Arquivo,Apelido,IconDefault,IconMini,Enquadrar,Heat,Cluster)
if (mrgCamadaDeDados !=null){ 
   var OK = true; //DEV
   switch( mrgCamadaDeDados  ) {
	case 'paroquiabomjesus': 
		mrgAddDataOverlay('paroquiabomjesus','extra','Extra','church',null,false,HeatOFF,ClusterOFF,OvCountOFF); 
//		mrgAddDataOverlay('paroquiabomjesus','setores','Setores',null,'puzzle-piece',true,HeatOFF,ClusterOFF,OvCountOFF); 
		mrgAddDataOverlay('paroquiabomjesus','paroquiabomjesus','Paróquia Bom Jesus','cross','church',false,HeatOFF,ClusterOFF,OvCountOFF) 
	break; 
//	case 'turismo'		   : 
//		mrgAddDataOverlay('turismo','aeb','A & B','utensils','utensils',false,HeatOFF,ClusterOFF,OvCountOFF); 
//		mrgAddDataOverlay('turismo','eventos','Eventos','calendar-alt','calendar-alt',false,HeatOFF,ClusterOFF,OvCountOFF); 
//		mrgAddDataOverlay('turismo','atrativos','Atrativos','map-marked-alt','map-marked-alt',false,HeatOFF,ClusterOFF,OvCountOFF); 
//		mrgAddDataOverlay('turismo','hospedagem','Hospedagem','bed','bed',false,HeatOFF,ClusterOFF,OvCountOFF) 
//	break; 
	case 'rtcma'		   : 
		mrgAddDataOverlay('rtcma','rtcma','RT Cavernas da Mata Atlântica','map-marked-alt','map-marked-alt',true,HeatOFF,ClusterOFF,OvCountOFF); 
	break; 
	case 'coronavirus'		   : 
		window.location.href = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfNvNkavHBKy9F5hHgZgwik2cR72uMDvMm_4lTbKRya8565nmss3iznQ3Nnu5W6nI6fM_VOsNrAAB7/pubhtml?gid=773624526&single=true";   
	break; 		   
    default                        : OK = false;
   }
   
mrgAddDataOverlay('global','perimetro-rg','Fronteiras',null,'vector-square',ForceSilentAddOverlay,HeatOFF,ClusterOFF,OvCountOFF); 
mrgAddDataOverlay('global','vias','Ruas','road','road',ForceSilentAddOverlay,HeatOFF,ClusterON,OvCountOFF); 
   
   
}

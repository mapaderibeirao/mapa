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

//INFO: mrgAddDataOverlay(Pasta,Arquivo,Apelido,IconDefault,IconMini,Enquadrar,Heat,Cluster)
//Os parâmetros podem ser passados de forma mais estruturada... verificar depois
mrgAddDataOverlay('global','perimetro-rg','Limites Adm',null,'vector-square',true,HeatOFF,ClusterOFF,OvCountOFF); 


if (mrgCamadaDeDados !=null){ 
   var OK = true;
   switch( mrgCamadaDeDados  ) {
	case 'paroquiabomjesus': 
		mrgAddDataOverlay('paroquiabomjesus','extra','Extra','church',null,false,HeatOFF,ClusterOFF,OvCountOFF); 
//		mrgAddDataOverlay('paroquiabomjesus','setores','Setores',null,'puzzle-piece',true,HeatOFF,ClusterOFF,OvCountOFF); 
		mrgAddDataOverlay('paroquiabomjesus','paroquiabomjesus','Paróquia Bom Jesus','cross','church',false,HeatOFF,ClusterOFF,OvCountOFF) 
	break; 
	case 'turismo'		   : 
		mrgAddDataOverlay('turismo','aeb','A & B','utensils','utensils',false,HeatOFF,ClusterOFF,OvCountOFF); 
		mrgAddDataOverlay('turismo','eventos','Eventos','calendar-alt','calendar-alt',false,HeatOFF,ClusterOFF,OvCountOFF); 
		mrgAddDataOverlay('turismo','atrativos','Atrativos','map-marked-alt','map-marked-alt',false,HeatOFF,ClusterOFF,OvCountOFF); 
		mrgAddDataOverlay('turismo','hospedagem','Hospedagem','bed','bed',false,HeatOFF,ClusterOFF,OvCountOFF) 
	break; 
	case 'rtcma'		   : 
		mrgAddDataOverlay('rtcma','rtcma','RT Cavernas da Mata Atlântica','map-marked-alt','map-marked-alt',true,HeatOFF,ClusterOFF,OvCountOFF); 
	break; 
	case 'coronavirus'		   : 
		mrgAddDataOverlay('covid19','confirmados','CONFIRMADOS','virus','virus',false,HeatON,ClusterON,OvCountON); 
		mrgAddDataOverlay('covid19','curados','CURADOS','hand-sparkles','hand-sparkles',false,HeatON,ClusterON,OvCountON); 
		mrgAddDataOverlay('covid19','suspeitos','SUSPEITOS','exclamation-triangle','exclamation-triangle',false,HeatOFF,ClusterON,OvCountON); 
		mrgAtribuicao.addAttribution("Departamento de Saúde - Prefeitura Municipal");
	break; 		   
    default                        : OK = false;
   }
}

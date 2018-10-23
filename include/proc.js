//initialization ************************************************************
var MapHelpButton   = HrefFromURLPlus("https://mapaderibeiraograndesp.wordpress.com/sobre/","button short icon space-bottom1 help","Ajuda","","") + " ";
var MapHomeButton   = HrefFromURLPlus("https://mapaderibeiraograndesp.wordpress.com/","button short icon home space-bottom1 fill-green","Início","","") +" "; 
var LinksAlvo = "";
var MapControlsInner = "";     //HTML que vai dentro do LegendControl ControlesDoMapa
var MapaEmbutido = MapIsEmb();
var MapPreventNewUserMakers = false;  //Ao clicar, cria um marcador.
var MapCompareButtonSt = HrefFromURLPlus("#","button short space-bottom1 fill-green map-compare-button map-compare-button-start","","Comparar","") + " ";
var MapCompareButtonEn = HrefFromURLPlus("#","button short space-bottom1 fill-red   map-compare-button map-compare-button-end","","Parar","") + " ";
var MapCompareActive = false;
var SideBySideFrground = lMNK; //default
var SideBySideBkground = lMBT; //Sempre será satélite
var SideBySideControl = new L.control.sideBySide(SideBySideFrground, SideBySideBkground);

//Os links dos botões devem abrir fora do iframe ou quadro onde o mapa foi embutido
if ( MapaEmbutido ) {
  LinksAlvo = '_parent';
  MapAddLButton  = "";
}

var MapBaseLayersSelect = "<form id='map-controles' method='post' >"
		+"<select id='map-select-layer' name='share-b'>"
			+"<option value='lMNK' >OpenStreetMap</option>"  
			+"<option value='lMBT' >Mapbox Satellite</option>"
			+"<option value='lIBR' >IBGE Rural</option>"
			+"<option value='lIBU' >IBGE Urbano</option>"
			+"<option value='lMKG' >OSM Tons de cinza</option>"
			+"<option value='lMBL' >Mapbox Light</option>"  
			+"<option value='lMBD' >Mapbox Dark</option>"
			+"<option value='lMBS' >Mapbox Streets</option>"
			+"<option value='lMBO' >Mapbox Outdoors</option>"
			+"<option value='lMBB' >Mapbox Run - Bike</option>"
			+"<option value='lMBP' >Mapbox Pencil</option>"
			+"<option value='lMBC' >Mapbox Comic</option>"
			+"<option value='lMBR' >Mapbox Pirates</option>"
			+"<option value='lMBW' >Mapbox Wheatpaste</option>"
			+"<option value='lOTD' >Outdoors</option>"
			+"<option value='lCYL' >Cycle</option>"
			+"<option value='lLSC' >Landscape</option>"
			+"<option value='lTPD' >Transport Dark</option>"
			+"<option value='lSTW' >Stamen Watercolor</option>"
			+"<option value='lSTL' >Stamen Toner Light</option>"
			+"<option value='lSTT' >Stamen Toner Dark</option>"
		+"</select> <br>"
		+"<span class='dark'>"
                +  MapCompareButtonSt 
                +  MapCompareButtonEn
		+  MapHomeButton 
		+  MapHelpButton
		+"</span>"
		+"<br><span class='dicacliquenomapa small'>Clique no mapa para opções</span>"
		+"</form>";

var BtnMapSatHtml = "<div class='center btnMapSatSwitcher-sat'><a href='#' class='button btnMapSatSwitcher fill-purple pad0'> <span class='dark icon satellite'></span></a><br><span class='small'>Satélite</span></div>";
var BtnMapMapHtml = "<div class='center btnMapSatSwitcher-map'><a href='#' class='button btnMapSatSwitcher fill-orange pad0'><span class='dark icon map'></span></a><br><span class='small'>Mapa</span></div>";
var BtnListDadosGeoJSONHtml = "<div><a href='#' class='button btnListDadosGeoJSON fill-red pad0'><span class='dark icon book'></span></a><br><span class='micro'>Dados</span></div>";


var ControlesDoMapa = new L.mapbox.LegendControl({position: 'topright'});
ControlesDoMapa.addTo(map);
ControlesDoMapa.addLegend(MapBaseLayersSelect); //A seleção das camadas do mapa não devem ser mudadas ao mover o mapa

//Esconde o botão parar comparação do mapa
$(".map-compare-button-end").hide();

var ControleMapSatSwitcher = new L.mapbox.LegendControl({position: 'bottomright'});
ControleMapSatSwitcher.addLegend(BtnMapMapHtml+BtnMapSatHtml);

var ControleListDadosGeoJSON = new L.mapbox.LegendControl({position: 'topleft'});
ControleListDadosGeoJSON.addLegend(BtnListDadosGeoJSONHtml);


var BaselayersValidas = 'lMNK;lMKG;lMBL;lMBD;lOTD;lMBO;lCYL;lLSC;lTPD;lMBB;lMBP;lMBC;lMBR;lSTW;lSTL;lSTT;lMBW;lMBS;lMBT;lIBR;lIBU';
var BaselayersComparaveis = 'lMNK;lMBS;lMBO;lCYL;lIBR;lIBU';


function LinkDoMapa(Lat,Lon,Zoom,Dir){	
	var Host = "http://"+window.location.hostname;
	var BaseLayer = BaseLayerAtual();
	
	var CamadaDadosTemp = '';
	if (CamadaDeDados !=null){ 
	   CamadaDadosTemp = '&dados=' + CamadaDeDados;
	}		
	
	var PreLink = Host + Dir + '#' + Zoom + '/' + Lat + '/' + Lon 
	            + '&mlat=' + Lat + '&mlon=' + Lon
	            + '&l=' + BaseLayer
	            + CamadaDadosTemp;	
	var Link    = HrefFromURLPlus(PreLink,"","Link","<span class='icon arrowright'>Link</span>",LinksAlvo);	
	return Link;
}

function BaseLayerAtual(){
   var Opcao = $("#map-select-layer option:selected").val();	
   return Opcao;
}

//Retorna se está usando camada Mapbox satélite
function IsSatelliteLayer(){
   var Camada = BaseLayerAtual(); 
   var Retornar = false;
   if( Camada == "lMBT"){ Retornar = true;}
   return Retornar;
}

function IsSatOrMapLayer(){
   var Camada = BaseLayerAtual(); 
   var Retornar = false;
   if( Camada == "lMBT" || Camada == "lMNK"){ Retornar = true;}
   return Retornar;
}

//Checa o estado do botão alternador de mapa/satélite
//Se camada alterada não for satélite ou manik, não fazer nada
//Se mudou para a mesma camada que está sugerindo, não fazer nada
function CheckControleMapSatSwitcher(){
      var SatOuMap = IsSatOrMapLayer();
      if( !SatOuMap ){
          //nada a fazer!
      }else{     
	   var Satelite = IsSatelliteLayer();   
           if(Satelite){
               $(".btnMapSatSwitcher-map").show();
               $(".btnMapSatSwitcher-sat").hide();
           }else{
               $(".btnMapSatSwitcher-map").hide();
               $(".btnMapSatSwitcher-sat").show();
           }	
      }
}

function StrToLayer(Nome){
   var LTemp = null;	
   switch( Nome ) {
		case 'lMNK' : LTemp = lMNK; break;	
		case 'lMKG' : LTemp = lMKG; break;	
		case 'lMBL' : LTemp = lMBL; break;
		case 'lMBD' : LTemp = lMBD; break;	
		case 'lOTD' : LTemp = lOTD; break;	
		case 'lMBO' : LTemp = lMBO; break;	
		case 'lCYL' : LTemp = lCYL; break;	
		case 'lLSC' : LTemp = lLSC; break;	
		case 'lTPD' : LTemp = lTPD; break;	
		case 'lMBB' : LTemp = lMBB; break;	
		case 'lMBP' : LTemp = lMBP; break;	
		case 'lMBC' : LTemp = lMBC; break;	
		case 'lMBR' : LTemp = lMBR; break;	
		case 'lSTW' : LTemp = lSTW; break;	
		case 'lSTL' : LTemp = lSTL; break;	
		case 'lSTT' : LTemp = lSTT; break;	
		case 'lMBW' : LTemp = lMBW; break;	
		case 'lMBS' : LTemp = lMBS; break;	
		case 'lMBT' : LTemp = lMBT; break;		
		case 'lIBR' : LTemp = lIBR; break;	
		case 'lIBU' : LTemp = lIBU; break;	
   }	
   return LTemp;
}

function ChangeLayer(Opcao) {
   var LTemp = StrToLayer(Opcao);
   //remove camadas existentes
   RmBaseLayers(); //Apenas as baselayers, preserve as overlays
   map.addLayer(LTemp);
   CheckControleMapSatSwitcher();
   if(CheckBaselayersComparaveis(Opcao)){
       $(".map-compare-button-start").show(); 
   }else{ $(".map-compare-button-start").hide(); }
}

function GerarOpcoesDoMapa(Lat,Lon,Zoom,Dir) {
	PreLinkOSMR      = GetLinkOSMR(Lat,Lon); 
	PreLinkMapillary = GetLinkMapillary(Lat,Lon);
	PreLinkF4Map     = GetLinkF4Map(Lat,Lon);
	PreLinkOSMe      = GetLinkOSMe(Lat,Lon);
	PreLinkOSMd      = GetLinkOSMd(Lat,Lon);
	
	LinkOSMR      = HrefFromURLPlus(PreLinkOSMR,     "icon car","","Como chegar",LinksAlvo);
	LinkMapillary = HrefFromURLPlus(PreLinkMapillary,"icon video","","Fotos/streetview",LinksAlvo);
	LinkF4Map     = HrefFromURLPlus(PreLinkF4Map,    "","Veja em 3D","3D",LinksAlvo);
	LinkOSMe      = HrefFromURLPlus(PreLinkOSMe,     "icon pencil","","Edite este mapa",LinksAlvo);
	LinkOSMd      = HrefFromURLPlus(PreLinkOSMd,     "icon point-line-poly","","Dados do mapa",LinksAlvo);

	PreLinkNote      = GetLinkNote(Lat,Lon); 
	LinkNote   = HrefFromURLPlus(PreLinkNote,"icon tooltip big","Localizou um erro ou algo faltando? Informe pra gente :)","Falta algo? Clique aqui",LinksAlvo);
		
	var LinkParaMapa = LinkDoMapa(Lat,Lon,Zoom,Dir);
	
	LinksLegenda = "<div class='clearfix'>"
	             + "    <div class='col6'>"+LinkOSMR+"</div><div class='col6'>"+LinkParaMapa+"</div>"
	             + "    <div class='col6'>"+LinkMapillary+"</div><div class='col6'>"+LinkF4Map+"</div>"
	             + "    <div class='col6'>"+LinkOSMe+"</div><div class='col6'>"+LinkOSMd+"</div>"
	             + "    <div class='col12 center'>"+LinkNote+"</div>"
	             + "</div>";
	
	return LinksLegenda; 
}


var BaseLayers = {};	
//DEPRECATED var Overlays = {'Fotos do Mapillary'       : olMPLL};	
var Overlays = {};	
var ControlLayers = L.control.layers( BaseLayers, Overlays, {position: 'topright', collapsed: false});

/* DEP
var olNASC = new L.OverPassLayer({
	   query: "( node(BBOX)['natural'='spring']; );out;"   
});
*/

//MAPILLARY       ******************************************************************
//https://www.mapbox.com/mapbox.js/example/v1.0.0/images-from-mapillary/   
var API_ENDPOINT = "";

function MapillaryImg(Key,Width) {
	return 'https://d1cuyjsrcm0gby.cloudfront.net/' + Key + '/thumb-'+ Width + '.jpg';
}


function MapillaryImgHref(Key) {
	var Cnt = map.getCenter();
	var Lat = Cnt.lat;
	var Lon = Cnt.lng;
	var Zoom = map.getZoom();	
	var Img = '<img width="99%" alt="foto..." src="' + MapillaryImg(Key,320)  + '" />';
	var Link = GetLinkMapillaryImgLite(Lat,Lon,Zoom,Key,null);
	return HrefFromURLPlus(Link,'','',Img,'_parent'); 
}

//Função para obter os limites do mapa
function GetAPI_ENDPOINT() {
	S = map.getBounds().getSouth();    
	N = map.getBounds().getNorth();    
	W = map.getBounds().getWest();    
	E = map.getBounds().getEast();    
	

	return "https://a.mapillary.com/v2/search/im/geojson?client_id=" + MapillaryID 
	+ "&max_lat=" + N +"&max_lon="+E+"&min_lat="+S+"&min_lon="+W+"&limit=200&page=0";	
}

//Configura o ícone Mapillary
var MapillaryIcon =  L.mapbox.marker.icon({
        'marker-size': 'large',
        'marker-symbol': 'camera',
        'marker-color': '#36af6d'
    });

var TaxiIcon =  L.mapbox.marker.icon({
        'marker-size': 'large',
        'marker-symbol': 'car',
        'marker-color': '#fbb03b'
    });

var HotelIcon =  L.mapbox.marker.icon({
        'marker-size': 'large',
        'marker-symbol': 'lodging',
        'marker-color': '#3887be'
    });

var AlimentIcon =  L.mapbox.marker.icon({
        'marker-size': 'large',
        'marker-symbol': 'bar',
        'marker-color': '#3887be'
    });



//Configura um ícone para aparecer sempre que clicar no mapa
var UserIconOnClick =  L.mapbox.marker.icon({
        'marker-size': 'large',
        'marker-symbol': 'information',
        'marker-color': '56b881'
    });

var UserTempMarker = L.marker([],{
                         'draggable' :true,
						 'icon': UserIconOnClick
						});
	

var olMPLL = L.mapbox.featureLayer()
    .on('layeradd', function(e) {
        //e.layer.bindPopup('<img src="' + MapillaryImg(e.layer.feature.properties.key,320)  + '" />', {
        e.layer.bindPopup(MapillaryImgHref(e.layer.feature.properties.key,320), {
            minWidth: 200
        });        
    })
  	.on('ready', function(layer) {
	    this.eachLayer(function(marker) {
	         // See the following for styling hints:
	         // https://help.github.com/articles/mapping-geojson-files-on-github#styling-features
	         marker.setIcon(MapillaryIcon);
	    });         
    });


 

olMPLL.loadURL(GetAPI_ENDPOINT());
//Autocarregamento da camada Mapillary desativado
//olMPLL.addTo(map);
//AttrIfLayerIsOn( olMPLL, attrMapillary );


//ControlLayers.addOverlay(olMPLL, '<span class="icon picture"></span> Fotos do Mapillary');								
//DEP ControlLayers.addOverlay(olNASC, '<span class="icon water"> Nascentes');								
ControlLayers.addTo(map);

L.control.locate().addTo(map);
		
var ControlGeocoder = new L.Control.geocoder({
		position:    'topleft',
		placeholder: 'O que procura?'
});
ControlGeocoder.addTo(map);

ControleMapSatSwitcher.addTo(map);

//map.addControl(L.mapbox.shareControl());

var Escala = L.control.scale({
	maxWidth: 140
});				
Escala.addTo(map);

function CheckOverpassLayers() {
/*	if ( map.hasLayer(olNASC) ) {			
	     map.attributionControl.addAttribution(attrOverPass);
	}else {
	     map.attributionControl.removeAttribution(attrOverPass);
	}
DEP */	
}

map.on('overlayadd', function(e) {
	 AttrIfLayerIsOn( olMPLL, attrMapillary );		     
	 CheckOverpassLayers();
 });
map.on('overlayremove', function(e) {
	 AttrIfLayerIsOn( olMPLL, attrMapillary );		     
	 CheckOverpassLayers();		     
 });
 
 
function CopiarSelecionado(){
   document.execCommand('copy');
} 

//Mostra coordenadas quando clicar em alguma parte do mapa
function TempMarkerMsg(Lat,Lon){
  var Zoom = map.getZoom();
  var Opcoes = GerarOpcoesDoMapa(Lat,Lon,Zoom,'/mapa/');
  var Msg = "<p class='clearfix text-right'><span class='icon marker'>Coordenadas: "
          + Lat+',<br> '+ Lon + '<br>'
	  + '</p>'
	  + '<p class="prose prose-big">' + Opcoes + '</p>';	
   return Msg; 
}


UserTempMarker.on('click', function(e) {
   var Msg = TempMarkerMsg(e.latlng.lat,e.latlng.lng);
   UserTempMarker.bindPopup(Msg); 
});

map.on('click', function(e) {
	if (!MapPreventNewUserMakers){
		MapPreventNewUserMakers = true;
		UserTempMarker.setLatLng(e.latlng);
                var Msg = TempMarkerMsg(e.latlng.lat,e.latlng.lng);
		UserTempMarker.bindPopup(Msg)
		.addTo(map)
		.openPopup();
	}else{
		MapPreventNewUserMakers = false;
		map.removeLayer(UserTempMarker);
	}
});
   
//Atualiza elementos ao mover o mapa
map.on('moveend', function(e) {
   olMPLL.loadURL(GetAPI_ENDPOINT()); //BETA					
});	

//thanks to http://jsfiddle.net/3fdCD/ from http://stackoverflow.com/questions/22119535/having-trouble-with-leaflet-removelayer
$("#map-select-layer").change(function() {
    if(MapCompareActive){
	   MapCompareActiveStop();	
    }else{	
	ChangeLayer(BaseLayerAtual());			
    }
});

//Verifica se mapa de fundo pode ser comparado
function CheckBaselayersComparaveis(Camada){
  var Resultado = false;
  if(BaselayersComparaveis.indexOf(Camada) > -1) { Resultado = true;  }
  return Resultado;
}

function MapCompareActiveStop(){
   MapCompareActive = false;
   $(".map-compare-button-start").show();
   $(".map-compare-button-end").hide();
   //SideBySideControl.remove();
   location.reload(); //Esta alternativa funciona por enquanto, mas não é o ideal
}

$(".map-compare-button").click(function(e) {
	e.preventDefault();
	if(MapCompareActive){
	   MapCompareActiveStop();	
	}else{
	   MapCompareActive = true;
	   $(".map-compare-button-start").hide();
	   $(".map-compare-button-end").show();
		
	   var LayerNome = BaseLayerAtual();	
	   var LayerTemp = StrToLayer(LayerNome);
	   //Tratamento diferente de comparação para camadas IBGE
	   if ( LayerNome == "lIBR" || LayerNome == "lIBU"){	                    
	       SideBySideBkground = LayerTemp;  //Camada ativa se torna o fundo, precisa adicionar a de frente
	       SideBySideFrground = lMNK;
	       SideBySideFrground.addTo(map);
	   }else{
	       SideBySideFrground = LayerTemp;
	       SideBySideBkground.addTo(map);   //Adiciona apenas fundo, frente já existe
	   }
		
	   SideBySideControl.addTo(map);
	}

});	




//Função para adicionar mapas criados com o editor Mapbox! Em desuso - manter para futuras funções:)
$(".map-addl-button").click(function(e) {
	e.preventDefault();
	var Link  = "\nEditor Mapbox: http://mapbox.com/editor/";
	var Mapa = prompt("Adicione seus mapas criados com o " + Link + '\nInforme o ID e apelido separados por vírgula', "projetorgm.n11d3kl9,Unidades");
	
	if ( Mapa != '' && Mapa != null ) {
		if ( AddMBLayerInTheMap(Mapa) ) {				 
			document.getElementById('share-id').value = 0; //Isso permite remixar um mapa existente, criando um novo
		}else {
			alert('Mapa inválido! Informe um ID e Apelido, separados por vírgulas');			
		}
	}		
});

//adiciona uma camada no mapa, e armazena informações. Dados = Array, 0 = mapbox ID | 1 = Apelido | 2 = heat ou cluster layer
//MapNick = Apelido do mapa 
//HeatLayer e ClusterLayer são os nomes dados para as variáveis
//O mapa só possui 1 camada Heat ou Cluster. Todas camadas adicionadas serão agrupadas em uma única Heat ou Cluster se especificadas
//A primeira camada dá o nome para o grupo.  
function AddMBLayerInTheMap(DadosRaw) {
	var MapID = null;
	var MapNick = null;
	var LayerGroup = null;  //Cluster or Heat
	
	var Dados = DadosRaw.split(',');
	MapID      = Dados[0]; 		 
	MapNick    = Dados[1];
	LayerGroup = Dados[2];
	
	if ( MapNick == null || MapNick == "" ) {				 
			return false;
	}else { 
		//Podemos continuar...
		MapNick = MapNick.substr(0, 20);  //Tamanho máximo para o apelido da camada		
		var MBName = MapID.replace(".","_");	
		var Indice = OverlaysMB.length;
		//Cria camada... até aqui tudo bem...
		OverlaysMB[Indice] = L.mapbox.featureLayer(MapID);

		//Se for Layer comum, OK. Mas se for Layer agrupada, temos de tratar corretamente	
		if ( LayerGroup != null && LayerGroup != ""  ) {
		
			//Salva camada como dados brutos
			RawOverlaysMB[RawOverlaysMB.length] = MapID + "," + MapNick + "," + LayerGroup;
			//A camada é agrupada. Temos de saber de que tipo e tratar...
			//Verificar se a camada pertence a um grupo e adicionar no mapa se necessário
			//Se não tem no mapa, adiciona usando título da primeira camada
			switch(LayerGroup) {
				case 'h':					
						//Adiciona no grupo
						OverlaysMB[Indice].on('ready', function(){
								OverlaysMB[Indice].eachLayer(function(l) {
		  							HeatLayer.addLatLng(l.getLatLng());
		  						});
						});
						
						if( !map.hasLayer(HeatLayer)  ) { 
								ControlLayers.addOverlay(HeatLayer, MapNick);
								map.addLayer(HeatLayer);
						}
				break;		
				case 'c':
					OverlaysMB[Indice].on('ready', function(){
							//Adiciona no grupo
							ClusterLayer.addLayer(OverlaysMB[Indice]);
					});
				
					if( !map.hasLayer(ClusterLayer)  ) {
							ControlLayers.addOverlay(ClusterLayer, MapNick);
							map.addLayer(ClusterLayer);
					}
				break;		
			}				 
		}else {
			//Salva camada como dados brutos
			RawOverlaysMB[RawOverlaysMB.length] = MapID + "," + MapNick;
			//Se camada comum, vai para o ControlLayers
			ControlLayers.addOverlay(OverlaysMB[Indice], MapNick);
			map.addLayer(OverlaysMB[Indice]); 
			OverlaysMB[Indice].on('ready', function(){
				map.fitBounds(OverlaysMB[Indice].getBounds());
			});
		}
		
		return true;
	}
}

CheckControleMapSatSwitcher();

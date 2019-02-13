
function BrowserIsPortuguese(){ 
    var Valor = false;
	var userLang = navigator.language || navigator.userLanguage;
	if(userLang == 'pt' || userLang=='pt-BR'){ Valor = true} 
	return Valor
}


function HrefFromURL(Link,Titulo,Conteudo) {
	FullLink = HrefFromURLPlus(Link,Titulo,Conteudo,"");
	return FullLink;
}
//Add opção Alvo (target='')
function HrefFromURLPlus(Link,Classe,Titulo,Conteudo,Alvo) {
	var TagAlvo = "";
	if ( Alvo ) {
		TagAlvo = " target='"+ Alvo +"' ";
	}
	FullLink = "<a href='" + Link + "' class='" + Classe + "' title='"+ Titulo + "' " + TagAlvo + " >"+ Conteudo +"</a>";
	return FullLink;
}
//------------------------------------
//Verifica se mrgControlPolylineMeasure está ativo
function mrgMedicaoEstaAtiva(){
	var Ativo = false;
	var Titulo = $('.polyline-measure-unicode-icon').attr("title");
	if(Titulo == mrgTxtMeasureTitleOff){Ativo = true}
	return Ativo
};


//------------------------------------
function GetLinkGraphhopper(Lat,Lon) {
	var Link = "https://graphhopper.com/maps/?point=-24.094456588117055%2C-48.364450335502625&point=" + Lat + "%2C" + Lon + "&locale=pt-BR&vehicle=car&weighting=fastest&elevation=true&use_miles=false&layer=OpenStreetMap";
	return Link;
}
function GetLinkMapillary(Lat,Lon,Zoom) {
	var Link = "http://www.mapillary.com/map/search/" + Lat + "/" + Lon + "/" + Zoom;
	return Link;
}
function GetLinkF4Map(Lat,Lon,Zoom) {
	var Link = "http://demo.f4map.com/#lat=" + Lat + "&lon=" + Lon + "&zoom="+ Zoom + "&camera.theta=58.465";
	return Link;
}
function GetLinkOSMe(Lat,Lon) {
	var Link = "http://www.openstreetmap.org/edit#map=18/" + Lat + "/" + Lon;
	return Link;
}
function GetLinkOSMd(Lat,Lon,Zoom) {
	var Link = "https://www.openstreetmap.org/query?lat="+Lat+"&lon="+Lon+"#map="+Zoom+"/"+Lat+"/"+Lon;
	//var Link = "http://www.openstreetmap.org/#map=17/" + Lat + "/" + Lon + "&layers=D";
	return Link;
}
function GetLinkNote(Lat,Lon) {
	var Link = "http://www.openstreetmap.org/note/new#map=14/" + Lat + "/" + Lon;
	return Link;
}

function LinkDoMapa(Lat,Lon,Zoom,Dir,Param){	
   var Adicional = "";
   if (Param != null) {
   	Adicional = Param
   };
	var Host = "http://"+window.location.hostname;
	var PreLink = Host + Dir + '#' + Zoom + '/' + Lat + '/' + Lon 
	            + '&mlat=' + Lat + '&mlon=' + Lon + Adicional;
	var Link    = HrefFromURLPlus(PreLink,"fas fa-external-link-square-alt mrg-button",mrgTxtPermalink,"","");	
	return Link;
}

function CriarBotao(Link){	
	var Botao =  "<div class='mrg-button'>"+Link+"</div>";
	return Botao
}

function GerarOpcoesDoMapa(Lat,Lon,Zoom,Dir) {
	var LinksAlvo = "_blank";
	var PreLinkGraphhpr  = GetLinkGraphhopper(Lat,Lon); 
	var PreLinkMapillary = GetLinkMapillary(Lat,Lon,Zoom);
	var PreLinkF4Map     = GetLinkF4Map(Lat,Lon,Zoom);
	var PreLinkOSMe      = GetLinkOSMe(Lat,Lon,Zoom);
	var PreLinkOSMd      = GetLinkOSMd(Lat,Lon,Zoom);
	
	var LinkRoute   	= HrefFromURLPlus("#",     "fas fa-map-pin mrg-button","mrgTxtGraphhpr","",LinksAlvo);
	var LinkGraphhpr  = HrefFromURLPlus(PreLinkGraphhpr,     "fas fa-route mrg-button",mrgTxtGraphhpr,"",LinksAlvo);
	var LinkMapillary = HrefFromURLPlus(PreLinkMapillary,"fas fa-street-view mrg-button",mrgTxtMapillary,"",LinksAlvo);
	var LinkF4Map     = HrefFromURLPlus(PreLinkF4Map,    "fas fa-cube mrg-button",mrgTxtF4Map,"",LinksAlvo);
	var LinkOSMe      = HrefFromURLPlus(PreLinkOSMe,     "fas fa-pen-square  mrg-button",mrgTxtOSMe,"",LinksAlvo);
	var LinkOSMd      = HrefFromURLPlus(PreLinkOSMd,     "fas fa-search-plus mrg-button",mrgTxtOSMd,"",LinksAlvo);

	PreLinkNote      = GetLinkNote(Lat,Lon); 
	LinkNote   = HrefFromURLPlus(PreLinkNote,"fas fa-comment mrg-button",mrgTxtNote,"",LinksAlvo);
		
	var Par = null;
	if (mrgCamadaDeDados != null){ 
		Par = "&dados=" + mrgCamadaDeDados
	};
	var LinkParaMapa = LinkDoMapa(Lat,Lon,Zoom,Dir,Par);
	
	LinksLegenda = "<div class='mrg-button-group'>"
					 + CriarBotao(LinkParaMapa)
					 + CriarBotao(LinkGraphhpr)
					 + CriarBotao(LinkMapillary)
					 + CriarBotao(LinkF4Map)
					 + CriarBotao(LinkOSMe)
					 + CriarBotao(LinkOSMd)
					 + CriarBotao(LinkNote)
					 + "<div class='mrg-floatstop'></div>"
	             + "</div><div class='mrg-floatstop'></div>";
	
	return LinksLegenda; 
}

//Cria um ícone usando Leaflet.awesome-markers plugin
//Tamanho: Ainda não implementado = null
function MakeIconAwesome(Icone,Cor,Tamanho){
	var tempIcon = L.AwesomeMarkers.icon({
		icon: Icone,
		markerColor: Cor,
		prefix: 'fa'
	});
	return tempIcon 
};

function GitImgURL(URLBase,Pasta,Arquivo){
	var URL = '<img src="'+ URLBase + Pasta + '/img/' + Arquivo + '.png' +'">';	
	return URL;
};

function ArraySearch(nameKey,myArray){
	var Ret = -1;
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i] === nameKey) {
            Ret = i;
        }
    }
	return Ret;
};
//Funções voltadas para processamento de overlayers

//Adiciona uma camada no mapa com base em um arquivo existente
//Depende de:
//		controle mrgControlLayers
//		plugin omnivore
function mrgAddDataOverlay(Pasta,Arquivo,Apelido,Icon,IconMini){
    var ResultTemp = [];
	var olTemp = omnivore.geojson(mrgURLBaseMapasGEOJSON + Pasta + '/' + Arquivo +'.geojson'); //Sempre vai estar contido em uma pasta com o mesmo nome do arquivo
    olTemp.on('layeradd', function(e) {
			 var Imagem = "";
             var marker = e.layer;
			 var LatLon = marker.getLatLng();
			 var Propriedades = e.layer.feature.properties;
			 //verifica se existe ícone para alterar
			 if (typeof Propriedades.icon !== 'undefined') {
				 //Se icone é inédito adiciona no banco de dados de ícones
				 //mrgIconesOverlay.nome serve para relacionar a classe do icone para realizar busca por nome
				var PropIcon = Propriedades.icon;
				var PosBusca = ArraySearch(PropIcon,mrgIconesOverlayIndex);
				if(PosBusca < 0 ){
					var IconeTemporario = MakeIconAwesome(PropIcon,Propriedades.color,null);			
					mrgIconesOverlay.push(IconeTemporario);
					mrgIconesOverlayIndex.push(PropIcon);
					PosBusca = mrgIconesOverlayIndex.length - 1
				} 
				marker.setIcon(mrgIconesOverlay[PosBusca]);
			 }
			 if (typeof Propriedades.img !== 'undefined') { //tem imagem?
				Imagem = GitImgURL(mrgURLBaseMapasGEOJSON,Pasta,Propriedades.img);
			 }
			 
			 marker.bindPopup('<b>'+Propriedades.name +'</b><br>'+ Imagem + Propriedades.description +
				HrefFromURLPlus(GetLinkGraphhopper(LatLon.lat,LatLon.lng), "",mrgTxtGraphhpr,"<br><span class='fas fa-route'></span> como chegar","_blank")
			 ) 
    })
    .on('ready', function() {
		mrgControlLayers.addOverlay(olTemp, '<span class="fas '+  IconMini  +'"> '+  Apelido);   
		if(!mrgControlLayersShow){
			$('.leaflet-control-layers').show();
		}
        map.addLayer(olTemp);
        map.fitBounds(olTemp.getBounds());
    });
}


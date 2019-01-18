
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

function LinkDoMapa(Lat,Lon,Zoom,Dir){	
	var Host = "http://"+window.location.hostname;
	var PreLink = Host + Dir + '#' + Zoom + '/' + Lat + '/' + Lon 
	            + '&mlat=' + Lat + '&mlon=' + Lon
	var Link    = HrefFromURLPlus(PreLink,"fas fa-external-link-square-alt mrg-button",mrgTxtPermalink,"","");	
	return Link;
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
		
	var LinkParaMapa = LinkDoMapa(Lat,Lon,Zoom,Dir);
	
	LinksLegenda = "<div class='mrg-button-group'>"
	             + "<div class='mrg-button'>"+LinkParaMapa+"</div>"
				    + "<div class='mrg-button'>"+LinkGraphhpr+"</div>"
	             + "<div class='mrg-button'>"+LinkMapillary+"</div>"
				    + "<div class='mrg-button'>"+LinkF4Map+"</div>"
	             + "<div class='mrg-button'>"+LinkOSMe+"</div>"
				    + "<div class='mrg-button'>"+LinkOSMd+"</div>"
	             + "<div class='mrg-button'>"+LinkNote+"</div>"
					 + "<div class='mrg-floatstop'></div>"
	             + "</div><div class='mrg-floatstop'></div>";
	
	return LinksLegenda; 
}
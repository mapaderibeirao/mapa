function PrepItem(Tit,Desc){
	var Icone = '<span class="icon map big"></span>'
	var Result = '<div clas="col11 keyline-all space-bottom clearfix limiter">'
		+'<h3 class="fancy fill-gray pad0">'+ Icone + Tit + '</h1>' 
		+ '<p>'+ Desc + '</p><br>'
		+ '</div>';
    return Result;
}

//https://www.experts-exchange.com/questions/28522218/read-a-geojson-object-from-MapBox-js.html   
function PrintGeoJSON(Arquivo){
    var Result = '';	
    var LayerTemp = L.mapbox.featureLayer()
	  .loadURL(Arquivo + '.geojson')
    .on('ready', function(layer) {
        var fl = layer.target.getGeoJSON();
        for(var i=0;i < fl.features.length; i++) {
             var fL = fl.features[i];
	     var Title = fL.properties.Name;
             var Desc = fL.properties.Description;
		
             //var title = fL.properties.Description;
             Result = Result + PrepItem(Title,Desc);
        } 
	$('.dados-conteudo').html(Result);
    });
    
}

function MudarTitulo(Titulo){
   $('.dados-titulo').html('<h1 class="fancy">'+Titulo+'</h1>');
}

var Arquivo = null;
var BackLinkBase = 'https://mapaderibeirao.github.io/mapa/#12/-24.1267/-48.3721';


      Arquivo = $.urlParam('d');
      if (Arquivo!=null){ 
	switch( Arquivo  ) {
		case 'hospedagem' : MudarTitulo('Onde ficar em Ribeirão Grande'); break; 
		case 'barrest'    : MudarTitulo('Bares, Restaurantes e Lanchonetes em Ribeirão Grande'); break; 
		case 'taxi'       : MudarTitulo('Chame um táxi em Ribeirão Grande'); break; 
		case 'mtb18s'     : MudarTitulo('Desafio Ribeirão Grande de Mountain Bike 2018 28k'); break; 
		case 'mtb18p'     : MudarTitulo('Desafio Ribeirão Grande de Mountain Bike 2018 41k'); break; 
	}	      
	      
	 PrintGeoJSON(Arquivo);
      }
	   
	   
   
$(".btn-dados-backtomap").click(function(e) {
   e.preventDefault();
   var Comp = '';
   if (Arquivo!=null){
	Comp = '&dados=' + Arquivo;   
   }
   var URL = BackLinkBase + Comp;	
   window.location.href = URL;	
}); 

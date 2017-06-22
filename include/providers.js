
var Sep = ' | ';
var attrOSM         = '<a href="http://www.openstreetmap.org/copyright" title="Termos e condições" >contribuidores do OpenStreetMap</a>'; 
var attrMapboxjs    = attrOSM + Sep + '<a href="https://www.mapbox.com/design/" title="Mapbox" >Mapbox.js</a>';
var attrMapillary   = "<a href='https://mapillary.com/'>Imagens do Mapillary - Envie fotos você também</a>";
var attrMMA         = "<a href='http://www.mma.gov.br/areas-protegidas/cadastro-nacional-de-ucs'>Ministério do Meio Ambiente</a>";
var attrPrefMRG     = "<a href='http://ribeiraogrande.sp.gov.br/'>Prefeitura Municipal de Ribeirão Grande</a>";
var attrOverPass    = 'POI via <a href="http://www.overpass-api.de/">Overpass API</a>';
var attrThunder = '<a href="http://thunderforest.com/terms/" title="Termos e condições" >Thunderforest</a>'  + Sep + attrMapboxjs; 
var attrIBGE = '<a href="https://github.com/tmpsantos/IBGETools" title="IBGETools" >IBGETools</a> | <a href="ftp://geoftp.ibge.gov.br/mapas_estatisticos/censo_2010/mapas_de_setores_censitarios" title="Mapas de Setores Censitários" >Mapas de Setores Censitários (2010)</a> by <a href="http://www.ibge.gov.br/" title="IBGE" >IBGE</a> | hospedado por <a href="https://www.mapbox.com/" title="MapBox" >MapBox</a>'  + Sep + attrMapboxjs; 
var attrStamen = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>' + Sep + attrMapboxjs; 
var ThunderforestAPIKey = '?apikey=8c44f9f9817f4c8faeb76a930142683f';


//Layers *******************************************************
var lMNK = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: attrMapboxjs, maxZoom: 19, maxNativeZoom: 19, detectRetina: true, reuseTiles: true } );
var lMKG = L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {attribution: attrMapboxjs});
var lOTD = L.tileLayer('http://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png'+ThunderforestAPIKey, {attribution: attrThunder} );
var lCYL = L.tileLayer('http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png'+ThunderforestAPIKey, {attribution: attrThunder} );
var lTPD = L.tileLayer('http://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png'+ThunderforestAPIKey, {attribution: attrThunder} );
var lLSC = L.tileLayer('https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png'+ThunderforestAPIKey, {attribution: attrThunder} );
var lIBR = L.tileLayer('https://{s}.tiles.mapbox.com/v3/tmpsantos.i00mo1kj/{z}/{x}/{y}.png', {attribution: attrIBGE} );
var lIBU = L.tileLayer('https://{s}.tiles.mapbox.com/v3/tmpsantos.hgda0m6h/{z}/{x}/{y}.png', {attribution: attrIBGE} );
var lSTW = L.tileLayer('//stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {attribution: attrStamen} );
var lSTT = L.tileLayer('//stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png', {attribution: attrStamen} );
var lSTL = L.tileLayer('//stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png', {attribution: attrStamen} );


//https://www.mapbox.com/developers/api/maps/
var lMBS = L.mapbox.tileLayer('mapbox.streets');
var lMBT = L.mapbox.tileLayer('mapbox.streets-satellite');
var lMBC = L.mapbox.tileLayer('mapbox.comic');
var lMBL = L.mapbox.tileLayer('mapbox.light');
var lMBD = L.mapbox.tileLayer('mapbox.dark');
var lMBO = L.mapbox.tileLayer('mapbox.outdoors');
var lMBR = L.mapbox.tileLayer('mapbox.pirates');
var lMBW = L.mapbox.tileLayer('mapbox.wheatpaste');
var lMBB = L.mapbox.tileLayer('mapbox.run-bike-hike');
var lMBP = L.mapbox.tileLayer('mapbox.pencil'); 
    
    

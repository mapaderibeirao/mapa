//Realiza tradução para os textos usados no mapa. O idioma padrão é o Português-BR.
var mrgBrowserIsPortuguese = BrowserIsPortuguese();

var mrgTxtAtribuicao = '<a href="http://bit.ly/2MEUbZB" title="MIT">Município de Interesse Turístico</a> | <a href="http://leafletjs.com" title="Biblioteca JS para mapas interativos">Leaflet</a>';

var mrgTxtImgL_MNK = 'Mapa';
var mrgTxtImgL_MBSt = 'Satélite';
var mrgTxtImgL_MBSt2 = 'Satélite 2';
var mrgTxtImgL_IBGRr = 'IBGE Rural';
var mrgTxtImgL_IBGRu = 'IBGE Urbano';

var mrgTxtMarkerCoord = 'Coordenadas';

var mrgTxtGraphhpr  = 'Como chegar';
var mrgTxtMapillary = 'Fotos/streetview';
var mrgTxtF4Map     = '3D';
var mrgTxtOSMe      = 'Edite este mapa';
var mrgTxtOSMd      = 'Verificar dados';
var mrgTxtNote      = 'Localizou um erro ou algo faltando? Informe pra gente 😃';
var mrgTxtGMap      = 'Abrir este local no Google Maps';
var mrgTxtPermalink = 'Link permanente';

var mrgTxtGeocoderSearch = 'Digite e tecle ENTER';
var mrgTxtGeocoderNotFound = 'Nada encontrado.';

//plugin Easy Print
var mrgTxtEasyPrint    = 'Tirar uma foto do mapa';
var mrgTxtEasyPrintCur = 'Capturar toda área atual';
var mrgTxtEasyPrintA4p = 'A4, retrato, vert.';
var mrgTxtEasyPrintA4l = 'A4, paisagem, hor.';

var mrgTxtControlLocate = 'Centralizar mapa na sua localização';

var mrgTxtButtonHome = 'Início';
var mrgTxtButtonApp = 'Gostou deste mapa? Baixe em seu celular!';
var mrgTxtButtonDadosE = 'Limpar a camada de dados';

//Leaflet sidebyside
var mrgTxtButtonComp = 'Comparar uma camada com outra';
var mrgTxtButtonCompStop = 'Encerra a comparação de camadas';

var mrgTxtBtnEscale     = 'Adicionar régua de escala nas laterais do mapa';
var mrgTxtBtnEscaleStop = 'Remover régua';

// Plugin PolylineMeasure
var mrgTxtMeasureTitleOn  = 'Clique para iniciar medições!';
var mrgTxtMeasureTitleOff = 'Clique encerrar medições';
var mrgTxtMeasureClear    = 'Limpar todas medições!' 
var mrgTxtMeasureAdd     = 'Pressione a tecla CTRL e clique para <b>adicionar ponto</b>';
var mrgTxtMeasureResume  = '<br>Pressione a tecla CTRL e clique para <b>continuar a linha</b>';
var mrgTxtMeasureDragDel = 'Clique e arraste para <b>mover pontos</b><br>Pressione a telca SHIFT e clique para <b>deletar pontos</b>';
var mrgTxtMeasureBearIn  = 'Anterior';
var mrgTxtMeasureBearOut = 'Próximo';
var mrgTxtMeasureUnit    = 'Mudar unidade de medida';
var mrgTxtMeasureUnitM   = 'Metros, quilômetros';
var mrgTxtMeasureUnitL   = 'Milhas terrestres';
var mrgTxtMeasureUnitN   = 'Milhas náuticas';

if(!mrgBrowserIsPortuguese){
	mrgTxtAtribuicao = '<a href="http://bit.ly/2MEUbZB" title="MIT">Municipality of Tourist Interest</a> | <a href="http://leafletjs.com" title="Biblioteca JS para mapas interativos">Leaflet</a>';	
	
	mrgTxtGraphhpr  = 'Routes';
	mrgTxtMapillary = 'Streetview';
	mrgTxtF4Map     = '3D';
	mrgTxtOSMe      = 'Edit this map';
	mrgTxtOSMd      = 'Map data';

	mrgTxtImgL_MNK = 'Map';
	mrgTxtImgL_MBSt = 'Satellite';
	mrgTxtImgL_Topo = 'Topographical';
	mrgTxtImgL_Toner = 'Toner';
	mrgTxtImgL_Cyc = 'Cycle';
	mrgTxtImgL_Out = 'Outdoors';
	mrgTxtImgL_IBGRr = 'Rural IBGE';
	mrgTxtImgL_IBGRu = 'Urban IBGE';

	mrgTxtMarkerCoord = 'Coordinates';
	mrgTxtNote = 'Found an error or something missing? Tell us!';
	mrgTxtGMap      = 'Open in Google Maps';
	mrgTxtPermalink = 'Permanent link';

	mrgTxtGeocoderSearch = 'Search';
	mrgTxtGeocoderNotFound = 'Nothing found.';
	
   //plugin Easy Print
	mrgTxtEasyPrint = 'Take a screenshot';
	mrgTxtEasyPrintCur = 'Current map';
	mrgTxtEasyPrintA4p = 'A4 Portrait';
	mrgTxtEasyPrintA4l = 'A4 Landscape';

	mrgTxtControlLocate	= "Show me where I am!"

	mrgTxtButtonHome = 'Home';
	mrgTxtButtonApp = 'Did you like this map? Download on your mobile!';
	mrgTxtButtonDadosE = 'Clear layer data';

	//Leaflet sidebyside
	mrgTxtButtonComp = 'Compare the layers';
	mrgTxtButtonCompStop = 'Stop comparing layers';
	
	mrgTxtBtnEscale     = 'Add scale ruler on the sides of the map';
	mrgTxtBtnEscaleStop = 'Remove ruler';

	// Plugin PolylineMeasure	
	mrgTxtMeasureTitleOn  = 'Turn On Measure';
	mrgTxtMeasureTitleOff = 'Turn Off Measure';
	mrgTxtMeasureClear    = 'Clear Measurements';	
	mrgTxtMeasureAdd      = 'Press CTRL-key and click to <b>add point</b>';
	mrgTxtMeasureResume  = '<br>Press CTRL-key and click to <b>resume line</b>';
	mrgTxtMeasureDragDel = 'Click and drag to <b>move point</b><br>Press SHIFT-key and click to <b>delete point</b>';
	mrgTxtMeasureBearIn  = 'In';
	mrgTxtMeasureBearOut = 'Out';
	mrgTxtMeasureUnit    = 'Change Units';
	mrgTxtMeasureUnitM   = 'metres';
	mrgTxtMeasureUnitL   = 'land miles';
	mrgTxtMeasureUnitN   = 'nautical miles';

}	

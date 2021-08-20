//Especifica camadas extras no mapa, ou personaliza a viualização inicial
var mrgMarkerLatLonByURL = null;
var mrgMarkerByURL = null;
var mrgCamadaDeDados = null;

		
//Validação de parâmentros

var TestMLat = $.urlParam('mlat');
var TestMLon = $.urlParam('mlon');
if (TestMLat!=null && TestMLon!=null){ 
   mrgMarkerLatLonByURL = [TestMLat, TestMLon];
}      

var TestMarker = $.urlParam('m');
if (TestMarker!=null && TestMarker.indexOf(",") != -1 ){ 
	var TempLatLon = TestMarker.split(",");
	mrgMarkerLatLonByURL = [TempLatLon[0], TempLatLon[1]];
}      


if (TestMarker === 'y'){ 
   mrgMarkerByURL = true; 
}      


var TestDados = $.urlParam('dados');
if (TestDados!=null){ 
   mrgCamadaDeDados = TestDados;
}      


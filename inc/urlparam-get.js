//Especifica camadas extras no mapa, ou personaliza a viualização inicial
var mrgMarkerLatLonByURL = null;
var mrgCamadaDeDados = null;
		
//Validação de parâmentros

var TestMLat = $.urlParam('mlat');
var TestMLon = $.urlParam('mlon');
if (TestMLat!=null && TestMLon!=null){ 
   mrgMarkerLatLonByURL = [TestMLat, TestMLon];
}      

var TestDados = $.urlParam('dados');
if (TestDados!=null){ 
   mrgCamadaDeDados = TestDados;
}      


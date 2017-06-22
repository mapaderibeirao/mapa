//Especifica camadas extras no mapa, ou personaliza a viualização inicial
var URLSetBaseLayer = null;
var MarkerLatLonByURL = null;
var CamadaDeDados = null;
		
//Validação de parâmentros
//estilo de mapa por parâmetro - validação será feira depois
var TestBaseLayer = $.urlParam('l');
if (TestBaseLayer!=null){ 
   URLSetBaseLayer = TestBaseLayer;
}      

var TestMLat = $.urlParam('mlat');
var TestMLon = $.urlParam('mlon');
if (TestMLat!=null && TestMLon!=null){ 
   MarkerLatLonByURL = [TestMLat, TestMLon];
}      

var TestDados = $.urlParam('dados');
if (TestDados!=null){ 
   CamadaDeDados = TestDados;
}      


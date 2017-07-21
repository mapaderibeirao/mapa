//Funções voltadas para processamento de olverlayers

//adiciona uma camada no mapa com base em um arquivo existente
function AddDataOverlay(File,Apelido,Icon,IconMini){
    var ResultTemp = [];
    var olTemp = L.mapbox.featureLayer()   
        .loadURL('dados/'+ File +'.geojson')
        .on('layeradd', function(e) {
             if(Icon != null){
                 var marker = e.layer;
                 marker.setIcon(Icon);
             }
             e.layer.bindPopup(FormatNameDesc(e.layer.feature.properties.Name,e.layer.feature.properties.Description));        
    })
    .on('ready', function() {
       var ClusterTemp = new L.MarkerClusterGroup();      
       ClusterTemp.addLayer(olTemp);
       ControlLayers.addOverlay(ClusterTemp, '<span class="icon '+  IconMini  +'"> '+  Apelido);      
       map.addLayer(ClusterTemp);
       map.fitBounds(ClusterTemp.getBounds());
    });
//    ResultTemp[0] = olTemp;
//    ResultTemp[1] = ClusterTemp;
//    return ResultTemp;
}

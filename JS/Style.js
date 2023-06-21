
var listeMap ={
    "Open TopoMap" :OpenTopoMap,
    
   /* "Esri WorldImagery" :Esri_WorldImagery,*/
    "OSM":OSM,
    
    

   };
var coucheMaps={
    "GEOLOGIE": GeologieVar,
    "ELEMENTS STRUCTUREAUX": SignesVar,
    "Zones Etude": Zones,
    
                   };
                   
                   
var legend=L.control.layers(listeMap ,coucheMaps,{hideSingleBase:true}).addTo(carte).false;
/*collapsed:false,*/ 

L.control.scale({imperial:false,maxWidth:250,updateWhenIdle:true,sortLayers:true}).addTo(carte)



//,
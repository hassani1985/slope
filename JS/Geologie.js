const carte = L.map('mapid').setView([35.18, -3.940274], 11.2);
        var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
           
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        	maxZoom: 17,
	        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        })
        var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// ajouter couche geologie
//var SignesVar = L.geoJSON(Signe,).addTo(carte)
function ColorStyle(p,){
    if (p === " A") return "#E5F2EB"; 
    if (p === "g-miS") return "#AC8B8B";
    if (p === "n5-6K") return "#31644A";
    if (p === "Al") return "#F5644A";
    if (p === "AlLs") return "#4C6B12";
    if (p === "D") return "#2ADCAB"; 
    if (p === "GN") return "#105213";
    if (p === "IAM") return "#77A3CE";
    if (p === "SpV") return "#C9CE77";
    if (p === "c1-4 TS-OM") return "#4CE600";
    if (p === "c1-6K") return "#B57B00"; 
    if (p === "d") return "#6A00DE";
    if (p === "dAT") return "#00968C";
    if (p === "e-2-5AM") return "#E5A700";
    if (p === "e-g") return "#E1B1BE";
    if (p === "e-gB") return "#EA00E1"; 
    if (p === "e-gMBB") return "#E0EB29";
    if (p === "j-1B") return "#a7e4e9";
    if (p === "j-cB") return "#3D3F25";
    if (p === "l1B") return "#00D4D9";
    if (p === "l2-jB") return "#8DCEE4";
    if (p === "n6-c CH") return "#680011";
    if (p === "pV") return "#FF3600";
    if (p === "q") return "#D6AB81";
    if (p === "q1") return "#844A12";
    if (p === "q1-AL") return "#BB00DB";
    if (p === "q2-3") return "#134F00";
    if (p === "q4-5") return "#ED0053";
    if (p === "qA") return "#7C7D00";
    if (p === "qD") return "#7A005F";
    if (p === "qDP") return "#F2004A";
    if (p === "r-tiAH") return "#A9B200";
    if (p === "r-tiAM") return "#E292A4";
    if (p === "sd") return "#FFECD9";
    if (p === "t-l1B") return "#E2F3F6";
    if (p === "tm-sAM") return "#EBBBDF";
    if (p === "tm-sAT") return "#6CFF77";
    if (p === "tmAH") return "#ACC0AD";
    if (p === "tsAH") return "#E3EAE4";
    
   
}
function SoleStyle(Feature){
    return{
    color:"black",
    weight:0.02,
    fillColor:ColorStyle(Feature.properties.SymboleA),
    fillOpacity:.7

    };
};


/*var GeologieVar = L.geoJSON(Geologie,{style:SoleStyle}).addTo(carte).bindPopup(function (layer) {
    return layer.feature.properties.Symbole
})*/

var GeologieVar = L.geoJson(Geologie,{style:SoleStyle,
    onEachFeature: function(feature,layer){
        layer.bindTooltip(feature.properties.SymboleA,{permanent:true,direction:'center'});
        
    }
}).addTo(carte).bindPopup(function (layer) {
    return layer.feature.properties.Symbole
})
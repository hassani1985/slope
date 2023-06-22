const carte = L.map('mapid').setView([35.18, -3.940274], 11.2);
        var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
           
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(carte);

        var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        	maxZoom: 17,
	        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        })




       
         function getColor(value,){
            if( value >= 0 && value< 5){
                return "#38A800"
            } else if (value>=5 && value <10){
                return " #8DD400"
            } else if ( value>= 10 && value < 20){
                return " #FFFF00"
            }else if ( value >=20 && value < 30){
                return " #FF8000"
            }else if ( value >= 30 && value <70.47){
                return " #FF1550"
            }
            else if (  value >70.47){
                return " red"
            }
          
        }
       


        function style(feature) {
            return {
                fillColor: getColor(feature.properties.FROM_),
                weight: 0,
                opacity: 1,
                color: 'white',
                fillOpacity:0.9
               
            };
        }
        
        L.geoJson(Slope, {style: style}).addTo(carte);


        var legend = L.control({position: 'bottomright'});

legend.onAdd = function (carte) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 5, 10, 20, 30, 70.47],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(carte);
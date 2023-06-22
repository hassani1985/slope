const carte = L.map('mapid').setView([35.18, -3.940274], 11.2);
        var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20,
           
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });

        var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        	maxZoom: 17,
	        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
        }).addTo(carte)


       /* function ColorStyle(value,){
            if( value >= 0 && value< 5){
                return "#38A800"
            } else if (value>=5 && value <10){
                return " #8DD400"
            } else if ( value>= 10 && value < 20){
                return " #FFFF00"
            }else if ( value >=20 && value < 30){
                return " #FF8000"
            }else if ( value >= 30 && value <70.47){
                return " #FF0000"
            }
          
        }
        function SoleStyle(Feature){
            return{
            color:"black",
            weight:0,
            fillColor:getColor(Feature.properties.FROM_),
            fillOpacity:0.9
        
            };

        }

       var Slopevar= L.geoJSON(Slope,{style:SoleStyle,}).addTo(carte)*/
       

       /*legend*/

       var geojsonLayer = L.geoJSON(Slope, {
        style: function(feature) {
          // Style personnalisé pour chaque entité GeoJSON
          return {
            fillColor: getColor(feature.properties.FROM_),
            weight: 0,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
          };
        }
      }).addTo(carte);
     




// Création de la légende
/*var legend = L.control({ position: 'bottomright' });

legend.onAdd = function(carte) {
  var div = L.DomUtil.create('div', 'legend');
  var grades = [ 0, 5, 10, 20,30,78];
  var labels = [];

  // Génération des labels de légende
  for (var i = 0; i < grades.length; i++) {
    var color = getColor(grades[i] + 1);
    labels.push(
      '<i style="background:' + color + '"></i> ' + grades[i] +
        (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+')
    );
  }

  div.innerHTML = labels.join('');

  return div;
};*/
var legend = L.control({position: 'bottomright'});

legend.onAdd = function (carte) {

    var div = L.DomUtil.create('div', 'legend'),
        grades = [0, 10, 20, 30, 74],
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

// Ajout de la légende à la carte
legend.addTo(carte);

// Fonction pour déterminer la couleur en fonction de la valeur de l'élévation
function getColor(value) {
    if( value >= 0 && value< 5){
        return "#38A800"
    } else if (value>=5 && value <10){
        return " #8DD400"
    } else if ( value>= 10 && value < 20){
        return " #FFFF00"
    }else if ( value >=20 && value < 30){
        return " #FF8000"
    }else if ( value >= 30 && value <70.47){
        return " #FF0000"
    }
}

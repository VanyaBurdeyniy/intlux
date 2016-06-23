artVikonce.controller('MapController', ['$scope', function($scope) {
    mapboxgl.accessToken = 'pk.eyJ1IjoidmFueWFidXJkIiwiYSI6ImNpcG11ODVtaDAwMDd1c21penpzeWJ0ZXYifQ.377v6sAYBbJeICHZ9WcoVA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-96, 37.8],
        zoom: 3
    });

    //var markerArr = [-77.03238901390978, 38.913188059745586];
    var markerArr = [139.6917100, 35.6895000];

    function changeMarker(first, second) {
        markerArr = [first, second];
        initMap();
        map.on('reload', function() {
            console.log('rerre');
        });
    }

    $('.pseijpij').click(function() {
        markerArr = [40.7142700, -74.0059700];
        //markerArr = [-77.03238901390978, 38.913188059745586];

        $('#map').html('');
        map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [-96, 37.8],
            zoom: 3
        });
        initMap(markerArr);
    });

    function initMap(markers) {
        if (markers) {
            markerArr = markers;
        }
        map.on('load', function () {
            map.addSource("markers", {
                "type": "geojson",
                "data": {
                    "type": "FeatureCollection",
                    "features": [{
                        "type": "Feature",
                        "geometry": {
                            "type": "Point",
                            "coordinates": markerArr
                        },
                        "properties": {
                            "title": "Mapbox DC",
                            "marker-symbol": "circle"
                        }
                    }
                    //    {
                    //    "type": "Feature",
                    //    "geometry": {
                    //        "type": "Point",
                    //        "coordinates": [-122.414, 37.776]
                    //    },
                    //    "properties": {
                    //        "title": "Mapbox SF",
                    //        "marker-symbol": "harbor"
                    //    }
                    //}
                    ]
                }
            });

            map.addLayer({
                "id": "markers",
                "type": "symbol",
                "source": "markers",
                "layout": {
                    "icon-image": "{marker-symbol}-15",
                    "text-field": "{title}",
                    "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                    "text-offset": [0, 0.6],
                    "text-anchor": "top"
                }
            });
        });
    }

    initMap();



}]);
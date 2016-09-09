artVikonce.controller('MapController', ['$scope', function($scope) {
    //mapboxgl.accessToken = 'pk.eyJ1IjoidmFueWFidXJkIiwiYSI6ImNpcG11ODVtaDAwMDd1c21penpzeWJ0ZXYifQ.377v6sAYBbJeICHZ9WcoVA';
    //var map = new mapboxgl.Map({
    //    container: 'map',
    //    style: 'mapbox://styles/mapbox/streets-v9',
    //    center: [-96, 37.8],
    //    zoom: 3
    //});
    //
    ////var markerArr = [-77.03238901390978, 38.913188059745586];
    //var markerArr = [139.6917100, 35.6895000];
    //
    //function changeMarker(first, second) {
    //    markerArr = [first, second];
    //    initMap();
    //    map.on('reload', function() {
    //        console.log('rerre');
    //    });
    //}
    //
    //$('.pseijpij').click(function() {
    //    markerArr = [40.7142700, -74.0059700];
    //    //markerArr = [-77.03238901390978, 38.913188059745586];
    //
    //    $('#map').html('');
    //    map = new mapboxgl.Map({
    //        container: 'map',
    //        style: 'mapbox://styles/mapbox/streets-v9',
    //        center: [-96, 37.8],
    //        zoom: 3
    //    });
    //    initMap(markerArr);
    //});
    //
    //function initMap() {
    //    //if (markers) {
    //    //    markerArr = markers;
    //    //}
    //    map.on('load', function () {
    //        map.addSource("markers", {
    //            "type": "geojson",
    //            "data": {
    //                "type": "FeatureCollection",
    //                "features": [{
    //                    "type": "Feature",
    //                    "geometry": {
    //                        "type": "Point",
    //                        "coordinates": [-77.03238901390978, 38.913188059745586]
    //                    },
    //                    "properties": {
    //                        "title": "Mapbox DC",
    //                        "marker-symbol": "circle"
    //                    }
    //                },
    //                    {
    //                    "type": "Feature",
    //                    "geometry": {
    //                        "type": "Point",
    //                        "coordinates": [-122.414, 37.776]
    //                    },
    //                    "properties": {
    //                        "title": "Mapbox SF",
    //                        "marker-symbol": "circle"
    //                    }
    //                }
    //                ]
    //            }
    //        });
    //
    //        map.addLayer({
    //            "id": "markers",
    //            "type": "symbol",
    //            "source": "markers",
    //            "layout": {
    //                "icon-image": "{marker-symbol}-15",
    //                "text-field": "{title}",
    //                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
    //                "text-offset": [0, 0.6],
    //                "text-anchor": "top"
    //            }
    //        });
    //    });
    //}
    //
    //initMap();





    $scope.kz = [{
      lng:'52.2740100',
        lt:'77.0043800'
    }];
    $scope.usa = [
    {
        lng:'40.71427',
            lt:'-74.00597'
    }
    ];
    $scope.ua = [
        {
      lng:'46.4774700',
        lt:'30.7326200'
        },
        {
            lng:'50.4546600',
            lt:'30.5238000'
        }
    ];
    $scope.ru = [
        {
      lng:'55.75222',
        lt:'37.61556'
        },
        {
            lng:'58.0104600',
            lt:'56.2501700'
        }
    ];

    $scope.allCoord = [
        {
            lng:'52.2740100',
            lt:'77.0043800'
        },
        {
            lng:'40.71427',
            lt:'-74.00597'
        },
        {
            lng:'46.4774700',
            lt:'30.7326200'
        },
        {
            lng:'50.4546600',
            lt:'30.5238000'
        },
        {
            lng:'55.75222',
            lt:'37.61556'
        },
        {
            lng:'58.0104600',
            lt:'56.2501700'
        }
    ];



    var map = new GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333
    });

    console.log(map);

    map.addMarker({
        lat: -12.043333,
        lng: -77.03,
        icon: "../../img/rsz_1marker.png",
        title: 'Lima',
        id: 'marker',
        details: {
            database_id: 42,
            author: 'HPNeo'
        },
        click: function(e){
            if(console.log)
                console.log(e);
        },
        mouseover: function(e){
            if(console.log)
                console.log(e);
        }
    });
    map.zoomOut(11);

    function setMapOnAll(data) {
        for (var i = 0; i < map.markers.length; i++) {
            map.markers[i].setMap(data);
        }
    }

// Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
        setMapOnAll(null);
    }

// Shows any markers currently in the array.
    function showMarkers() {
        setMapOnAll(map);
    }

    function changeMarker(obj) {
        clearMarkers();
        map.markers = [];
        obj.forEach(function(child){
            map.setCenter(child.lng, child.lt);
            map.addMarker({
                lat: child.lng,
                lng: child.lt,
                icon: "../../img/rsz_1marker.png",
                title: 'Lima',
                details: {
                    database_id: 42,
                    author: 'HPNeo'
                },
                click: function(e){
                    if(console.log)
                        console.log(e);
                },
                mouseover: function(e){
                    if(console.log)
                        console.log(e);
                }
            });
        });
        map.refresh();
        console.log(map);
    }


    $scope.changeMarkersForAll = function() {
        console.log(map);
        map.map.zoom = 6;
        changeMarker($scope.allCoord);
    };

    $scope.changeMarkerKZ = function() {
        changeMarker($scope.kz);
    };
    $scope.changeMarkerUSA = function() {
        changeMarker($scope.usa);
    };
    $scope.changeMarkerUA = function() {
        changeMarker($scope.ua);
    };
    $scope.changeMarkerRU = function() {
        changeMarker($scope.ru);
    };


    $(':checkbox').on('change',function(){
        var th = $(this), name = th.prop('name');
        if(th.is(':checked')){
            $(':checkbox[name="'  + name + '"]').not($(this)).prop('checked',false);
        }
    });



}]);
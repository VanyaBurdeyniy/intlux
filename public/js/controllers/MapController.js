artVikonce.controller('MapController', ['$scope', function($scope) {

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
        //lat: 0.043333,
        lat: 0,
        //lng: 0.028333
        lng: 0
    });

    console.log(map);

    //map.addMarker({
    //    lat: -12.043333,
    //    lng: -77.03,
    //    icon: "../../img/rsz_1marker.png",
    //    id: 'marker',
    //    animation: google.maps.Animation.DROP,
    //    details: {
    //        database_id: 42,
    //        author: 'HPNeo'
    //    },
    //    click: function(e){
    //        if(console.log)
    //            console.log(e);
    //    },
    //    mouseover: function(e){
    //        if(console.log)
    //            console.log(e);
    //    }
    //});
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
                animation: google.maps.Animation.DROP,
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


    $scope.changeMarkersForAll = function(target) {
        if (target.checked) {
            console.log(map);
            map.map.zoom = 6;
            changeMarker($scope.allCoord);
        } else {
            clearMarkers();
            map.markers = [];
        }
    };

    $scope.changeMarkerKZ = function(target) {
        if (target.checked) {
            changeMarker($scope.kz);
        } else {
            clearMarkers();
            map.markers = [];
        }
    };
    $scope.changeMarkerUSA = function(target) {
        if (target.checked) {
            changeMarker($scope.usa);
        } else {
            clearMarkers();
            map.markers = [];
        }
    };
    $scope.changeMarkerUA = function(target) {
        if (target.checked) {
            changeMarker($scope.ua);
        } else {
            clearMarkers();
            map.markers = [];
        }
    };
    $scope.changeMarkerRU = function(target) {
        if (target.checked) {
            changeMarker($scope.ru);
        } else {
            clearMarkers();
            map.markers = [];
        }
    };

    $(':checkbox').on('change',function(){
        var th = $(this), name = th.prop('name');
        if(th.is(':checked')){
            $(':checkbox[name="'  + name + '"]').not($(this)).prop('checked',false);
        }
    });

}]);
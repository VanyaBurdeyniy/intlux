artVikonce.controller('MapController', ['$scope', function ($scope) {

    $scope.kz = [{
        lng: '52.2740100',
        lt: '77.0043800'
    }];
    $scope.usa = [
        {
            lng: '40.71427',
            lt: '-74.00597'
        }
    ];
    $scope.ua = [
        {
            lng: '46.4774700',
            lt: '30.7326200'
        },
        {
            lng: '50.4546600',
            lt: '30.5238000'
        }
    ];
    $scope.ru = [
        {
            lng: '55.75222',
            lt: '37.61556'
        },
        {
            lng: '58.0104600',
            lt: '56.2501700'
        }
    ];

    $scope.allCoord = [
        {
            lng: '52.2740100',
            lt: '77.0043800'
        },
        {
            lng: '40.71427',
            lt: '-74.00597'
        },
        {
            lng: '46.4774700',
            lt: '30.7326200'
        },
        {
            lng: '50.4546600',
            lt: '30.5238000'
        },
        {
            lng: '55.75222',
            lt: '37.61556'
        },
        {
            lng: '58.0104600',
            lt: '56.2501700'
        }
    ];

    $scope.partners = [
        {lng: '97.00', lt: '38.00', name: 'usa'},
        {lng: '50.0755', lt: '14.4378', name: 'chezh'},
        {lng: '23.4241', lt: '53.8478', name: 'OAE'},
        {lng: '61.5240', lt: '105.3188', name: 'russia'},
        // {lng: '55.3781', lt: '3.4360', name: 'great britain'},
        {lng: '51.1657', lt: '10.4515', name: 'german'},
        {lng: '41.8719', lt: '12.5674', name: 'italy'},
        {lng: '47.5162', lt: '14.5501', name: 'austria'},
        {lng: '48.0196', lt: '66.9237', name: 'kazakhstan'},
        {lng: '60.1282', lt: '18.6435', name: 'sweden'},
        {lng: '46.8182', lt: '8.2275', name: 'switzerland'},
        {lng: '45.9432', lt: '24.9668', name: 'romania'},
        {lng: '46.2276', lt: '2.2137', name: 'france'},
        // {lng: '40.4637', lt: '3.7492', name: 'spain'},
        {lng: '35.8617', lt: '104.1954', name: 'china'},
        {lng: '56.1304', lt: '106.3468', name: 'canada'},
        {lng: '36.2048', lt: '138.2529', name: 'japan'},
        {lng: '53.7098', lt: '27.9534', name: 'belarus'}
    ];

    $scope.realiseProjects = [
        {lng: '97.00', lt: '38.00', name: 'usa'},
        {lng: '50.0755', lt: '14.4378', name: 'chezh'},
        {lng: '23.4241', lt: '53.8478', name: 'OAE'},
        {lng: '61.5240', lt: '105.3188', name: 'russia'},
        // {lng: '55.3781', lt: '3.4360', name: 'great britain'},
        {lng: '51.1657', lt: '10.4515', name: 'german'},
        {lng: '41.8719', lt: '12.5674', name: 'italy'},
        {lng: '47.5162', lt: '14.5501', name: 'austria'},
        {lng: '48.0196', lt: '66.9237', name: 'kazakhstan'},
        {lng: '60.1282', lt: '18.6435', name: 'sweden'},
        {lng: '46.8182', lt: '8.2275', name: 'switzerland'},
        {lng: '45.9432', lt: '24.9668', name: 'romania'},
        {lng: '46.2276', lt: '2.2137', name: 'france'},
        // {lng: '40.4637', lt: '3.7492', name: 'spain'},
        {lng: '35.8617', lt: '104.1954', name: 'china'},
        {lng: '56.1304', lt: '106.3468', name: 'canada'},
        {lng: '36.2048', lt: '138.2529', name: 'japan'},
        {lng: '53.7098', lt: '27.9534', name: 'belarus'},
        {lng: '38.4161', lt: '63.6167', name: 'argentina'},
        {lng: '38.9637', lt: '35.2433', name: 'turkish'},
        {lng: '60.4720', lt: '8.4689', name: 'norway'},
        {lng: '41.3775', lt: '64.5853', name: 'uzbekistan'},
        {lng: '38.9697', lt: '59.5563', name: 'turkmenistan'},
        {lng: '32.1656', lt: '82.9001', name: 'georgia'},
        {lng: '40.1431', lt: '47.5769', name: 'azerbaijan'},
        {lng: '42.7339', lt: '25.4858', name: 'bulgaria'},
        {lng: '44.0165', lt: '21.0059', name: 'serbia'},
        {lng: '47.0105', lt: '28.8638', name: 'chisinau'},
        {lng: '39.0742', lt: '21.8243', name: 'greece'},
        {lng: '47.1625', lt: '19.5033', name: 'hungary'}
    ];

    function scrollToTop() {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    }

    scrollToTop();


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
        obj.forEach(function (child) {
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
                click: function (e) {
                    if (console.log)
                        console.log(e);
                },
                mouseover: function (e) {
                    if (console.log)
                        console.log(e);
                }
            });
        });
        map.refresh();
        console.log(map);
    }


    $scope.changeMarkersForAll = function (target) {
        if (target.checked) {
            console.log(map);
            map.setZoom(4, 4);
            map.map.zoom = 6;
            changeMarker($scope.allCoord);
        } else {
            clearMarkers();
            map.markers = [];
        }
    };

    $scope.changeMarkersPartners = function (target) {
        if (target.checked) {
            map.setZoom(2, 2);
            changeMarker($scope.partners);
        } else {
            clearMarkers();
            map.markers = [];
        }
    };

    $scope.changeMarkersRealiseProjects = function (target) {
        if (target.checked) {
            map.setZoom(2, 2);
            changeMarker($scope.realiseProjects);
        } else {
            clearMarkers();
            map.markers = [];
        }
    };

    $scope.changeMarkerKZ = function (target) {
        if (target.checked) {
            changeMarker($scope.kz);
            map.setZoom(4, 4);
        } else {
            clearMarkers();
            map.markers = [];
        }
    };
    $scope.changeMarkerUSA = function (target) {
        if (target.checked) {
            changeMarker($scope.usa);
            map.setZoom(4, 4);
        } else {
            clearMarkers();
            map.markers = [];
        }
    };
    $scope.changeMarkerUA = function (target) {
        if (target.checked) {
            changeMarker($scope.ua);
            map.setZoom(4, 4);
        } else {
            clearMarkers();
            map.markers = [];
        }
    };
    $scope.changeMarkerRU = function (target) {
        if (target.checked) {
            changeMarker($scope.ru);
            map.setZoom(4, 4);
        } else {
            clearMarkers();
            map.markers = [];
        }
    };

    $(':checkbox').on('change', function () {
        var th = $(this), name = th.prop('name');
        if (th.is(':checked')) {
            $(':checkbox[name="' + name + '"]').not($(this)).prop('checked', false);
        }
    });

}]);
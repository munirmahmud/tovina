function initialize() {

    //Map parametrs
    var mapOptions = {
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.roadmap,
		scrollwheel: false,
		center: new google.maps.LatLng(38.902855, -77.042647),
    }
    //map
	var map = new google.maps.Map(document.getElementById('map-home'), mapOptions);

    /*-- Pointer Category --*/
    var place = 'img/marker/place.png';
    var movie = 'img/marker/movie.png';
    var shopping = 'img/marker/shopping.png';
    var madical = 'img/marker/madical.png';
    var realEstate = 'img/marker/real-estate.png';
    var holiday = 'img/marker/holiday.png';
    var park = 'img/marker/park.png';
    var restaurant = 'img/marker/restaurant.png';

    /*-- Pointer Positions --*/
    var point1 = new google.maps.LatLng(38.901536, -77.048330);
    var point2 = new google.maps.LatLng(38.898704, -77.043755);
    var point3 = new google.maps.LatLng(38.904442, -77.030463);
    var point4 = new google.maps.LatLng(38.906436, -77.018915);
    var point5 = new google.maps.LatLng(38.898586, -77.056695);
    var point6 = new google.maps.LatLng(38.900390, -77.045246);
    var point7 = new google.maps.LatLng(38.908957, -77.028382);
    var point8 = new google.maps.LatLng(38.899571, -77.055168);
    var point9 = new google.maps.LatLng(38.898644, -77.031116);
    var point10 = new google.maps.LatLng(38.906856, -77.044194);
    var point11 = new google.maps.LatLng(38.901257, -77.043352);
    var point12 = new google.maps.LatLng(38.909490, -77.038793);
    var point13 = new google.maps.LatLng(38.897198, -77.039252);
    var point14 = new google.maps.LatLng(38.905822, -77.065586);
    var point15 = new google.maps.LatLng(38.904196, -77.062596);

    /*-- Set Pointer in Markers --*/
    var marker1 = new google.maps.Marker({
        position: point1,
        map: map,
        icon: place,
    });
    var marker2 = new google.maps.Marker({
        position: point2,
        map: map,
        icon: shopping,
    });
    var marker3 = new google.maps.Marker({
        position: point3,
        map: map,
        icon: park,
    });
    var marker4 = new google.maps.Marker({
        position: point4,
        map: map,
        icon: holiday,
    });
    var marker5 = new google.maps.Marker({
        position: point5,
        map: map,
        icon: place,
    });
    var marker6 = new google.maps.Marker({
        position: point6,
        map: map,
        icon: restaurant,
    });
    var marker7 = new google.maps.Marker({
        position: point7,
        map: map,
        icon: realEstate,
    });
    var marker8 = new google.maps.Marker({
        position: point8,
        map: map,
        icon: shopping,
    });
    var marker9 = new google.maps.Marker({
        position: point9,
        map: map,
        icon: restaurant,
    });
    var marker10 = new google.maps.Marker({
        position: point10,
        map: map,
        icon: realEstate,
    });
    var marker11 = new google.maps.Marker({
        position: point11,
        map: map,
        icon: madical,
    });
    var marker12 = new google.maps.Marker({
        position: point12,
        map: map,
        icon: movie,
    });
    var marker13 = new google.maps.Marker({
        position: point13,
        map: map,
        icon: movie,
    });
    var marker14 = new google.maps.Marker({
        position: point14,
        map: map,
        icon: park,
    });
    var marker15 = new google.maps.Marker({
        position: point15,
        map: map,
        icon: holiday,
    });
	
    
    /*-- Map Style --*/
    var styles = [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ]

    map.setOptions({styles: styles});
}
google.maps.event.addDomListener(window, 'load', initialize);	
var map;

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });

    map = new google.maps.Map(document.getElementById('texas'), {
        center: {lat: 32.7767, lng: -96.7970},
        zoom: 8
    });

    var marker = new google.maps.Marker({
	  position: {lat: 32.7767, lng: -96.7970},
	  map: map,
	  title: 'New York, NY'
	});

	var marker = new google.maps.Marker({
		map: map,
		
	})

}

// TURN ON THE MAP //
initMap();
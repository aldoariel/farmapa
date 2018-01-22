var arregloPines = [];

function cargar_mapa(){

	var myOptions = {
		zoom:15,
		center : new google.maps.LatLng(-25.5145625,-54.6860895),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
function agregarMarcador(location){
	var pin = new google.maps.Marker({
		position : nlocation,
		map:map,
		//animation
	});
}


	map = new google.maps.Map(document.getElementById('gmap_canvas'),myOptions)
//listener click
map.addListener('click',function(event){
	agregarMarcador(event.latLng);

});

	var pin = new google.maps.Marker({
		position : new google.maps.LatLng(-25.5145625,-54.6860895),
		map:map,
		title: "Farmacia 2000"
	});

for ( var i in arregloPines){
	arregloPines[i].setMap(null);
}


	arregloPines.push(pin);

	}
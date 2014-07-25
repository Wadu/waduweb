function initialize(){
  if (typeof navigator.geolocation == 'object'){
      navigator.geolocation.getCurrentPosition(set_position);
  }else{
    alert("your browser don't support geolocation, please select your position");
    myPosition = new google.maps.LatLng(-33.8665433,151.1956316);
    initialize_map(myPosition);
  }

  function set_position(p){
    myPosition = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
    initialize_map(myPosition);
  }

  function initialize_map(myPosition){
    var mapOptions = {
      center: myPosition,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  }
}
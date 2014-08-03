function initialize(){
  if (typeof navigator.geolocation == 'object'){
      navigator.geolocation.getCurrentPosition(set_position);
  }else{
    alert("your browser don't support geolocation, please select your position");
  }

  function set_position(p){
    myPosition = [p.coords.latitude, p.coords.longitude];
    initialize_map(myPosition);
  }

  function initialize_map(myPosition){
    L.mapbox.accessToken = 'pk.eyJ1Ijoic2FycmlhZ2FkYSIsImEiOiJPMFJEZy1BIn0.6iTs7zB1bZisiF07DGkwfA';
    var map = L.mapbox.map('map', 'sarriagada.j4p9400k').setView(myPosition, 15);
  }
}
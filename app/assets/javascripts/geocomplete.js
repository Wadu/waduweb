function initialize_geocomplete(){
  $("#geocomplete").geocomplete().bind("geocode:result", function(event, result){
    lat = result.geometry.location.lat();
    lng = result.geometry.location.lng();
    map.setView([lat, lng], 15);
    L.marker([lat, lng]).addTo(map);
    angular.element('#direction').val(result.formatted_address);
    angular.element('#lat').val(lat);
    angular.element('#lng').val(lng);
  });
}
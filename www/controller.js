// This is a JavaScript file
var module = angular.module('app', ['onsen']);

module.controller('signupcontroller',function($scope, $http){
    $scope.close = function(){
        modal.close();
    };
    ons.ready(function($scope, $http) {
         console.log("My first requests");
          $http.get('http://www.w3schools.com/angular/customers.php').success(function(response) {
         $scope.names = response.records;

          });
       });
    });


module.controller('eventlist',function($scope, $http,$rootScope)
{
  var currid = $rootScope.currevent;
  console.log(currid);

  $http.get('http://shaastra.org:8001/api/eventLists/events/'+currid).success(function(response) 
  {

       $scope.currinfo=response.info;
       //console.log($scope.currinfo);
       var imgid=response.imageid;
       var imgname=response.imagename;
       $scope.currimage= "http://shaastra.org:8001/api/uploads/"+imgid+"/"+imgname;
       $scope.events=response.events;
       //console.log(JSON.stringify(response));
  })
  .error(
    function(response)
    {
      console.log("error:"+ response.error_message);
    });

  $scope.next=function(id,name,imgid)
  {
    $rootScope.curreventid = id;
    $rootScope.currname = name;
    $rootScope.currimgid = imgid;
    $scope.menu.setMainPage('eventdesc.html', {closeMenu: true});
  };
});

module.controller('events',function($scope, $http,$rootScope)
{
    $http.get('http://shaastra.org:8001/api/eventLists').success(function(response) 
    {
        //console.log(response);
        $scope.eventcats = response;
    })
    .error(
    function(response)
    {
      console.log("error:"+ response.error_message);
    });

    $scope.info=function(s)
    {
      //console.log(s);
      $rootScope.currevent = s;
      $scope.menu.setMainPage('event_page.html', {closeMenu: true});
      //window.location.assign('./event_page.html');
    };
});
module.controller('eventdesc',function($scope,$http,$rootScope)
{
  var eventid = $rootScope.curreventid;
  console.log(eventid);
  $http.get('http://shaastra.org:8001/api/events/showWeb/'+eventid).success(function(response)
  {
    $scope.tabs = response.eventTabs;
    $scope.eve = response;
  }).error(
  function(response)
  {
   console.log("error:"+ response.error_message); 
  });
});
          //Map controller
module.controller('MapController', function($scope, $timeout){

   

       ons.createPopover('popover.html').then(function(popover) {
        $scope.popover = popover;
      });
      
      $scope.show = function(e) {
        $scope.popover.show(e);
      };
     
        $scope.formData = {};

        var start=new google.maps.LatLng(12.9915, 80.2336);
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService();
        

        //Map initialization  
        $timeout(function(){
            var options = {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 0
          };
          function error(err) {
              console.warn('ERROR(' + err.code + '): ' + err.message);
          }
          if(navigator.geolocation)
            {navigator.geolocation.getCurrentPosition(
                function(position) {
                    console.log(position);
                    start = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                    current = new google.maps.Marker({
                      position: start,
                      map: map,
                      title: 'Hello World!',
                      animation:google.maps.Animation.BOUNCE
                  }); 
                    google.maps.event.addListener(current, 'click', function() {  ons.notification.alert({
                        message: 'You are here'
                    });});  
                },error,options)};


        directionsDisplay = new google.maps.DirectionsRenderer();
        var latlng = start;
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);
        directionsDisplay.setMap(map);
        $scope.element = document.getElementById('map_canvas');
        $scope.hammertime = Hammer($scope.element).on("hold", function(event) {
            $scope.addOnClick(event);
        });
        var oat = new google.maps.Marker({
          position: new google.maps.LatLng(12.98899, 80.23361),
          map: map,
          title: 'Open Air Theatre'
      }); 
        var sac = new google.maps.Marker({
          position: new google.maps.LatLng(12.98934, 80.23781),
          map: map,
          title: 'Stundents Activity Centre'
      });   
        var clt = new google.maps.Marker({
            position: new google.maps.LatLng(12.98955 , 80.23189),
            map: map,
            title: 'Central Lecture Theatre'
        }); 
        google.maps.event.addListener(clt, 'click', function() {                ons.notification.alert({
            message: 'Central Lecture Theatre'
        });});
        google.maps.event.addListener(oat, 'click', function() {                ons.notification.alert({
            message: 'Open Air Theatre'
        });});
        google.maps.event.addListener(sac, 'click', function() {                ons.notification.alert({
            message: 'Students Activity Centre'
        });});

    },100);
        //Directions api
        $scope.calcRoute=function () {
            console.log("inside calc route");
            var end=document.getElementById('search').value;

            if (end == "Open Air Theater,IIT madras"){
          
                  var request = {
                    origin:start,
                    destination:new google.maps.LatLng(12.98899, 80.23361),
                    travelMode: google.maps.TravelMode.WALKING
                };
                directionsService.route(request, function(response, status) {
                  if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
               });
              }


            else if (end == "Students Activity Centre,IIT madras"){

                   var request = {
                    origin:start,
                    destination:new google.maps.LatLng(12.98934, 80.23781),
                    travelMode: google.maps.TravelMode.WALKING
                };
                directionsService.route(request, function(response, status) {
                  if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
               });



            }

            else if (end == "Central lecture Theater,IIT madras"){

               var request = {
                    origin:start,
                    destination:new google.maps.LatLng(12.98955 , 80.23189),
                    travelMode: google.maps.TravelMode.WALKING
                };
                directionsService.route(request, function(response, status) {
                  if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
               });

            }
      }
  });
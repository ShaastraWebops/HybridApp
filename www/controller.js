// This is a JavaScript file
var module = angular.module('app', ['onsen','ngAnimate','LocalStorageModule']);

function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

module.run(function($window, $rootScope) {
      $rootScope.online = navigator.onLine;
      $window.addEventListener("offline", function () {
        $rootScope.$apply(function() {
          $rootScope.online = false;
        });
      }, false);
      $window.addEventListener("online", function () {
        $rootScope.$apply(function() {
          $rootScope.online = true;
        });
      }, false);
});


module.controller('MyCtrl', function($scope) {
  $scope.groups = [];

    $scope.groups[0] = {
      name: 'About',
      items: []
    };
   
      $scope.groups[0].items.push('Welcome to to the IIT Madras Maker Summit 2016! The 4 day extravaganza from 2nd to 5th of Jan set to change your perceptions and broaden your horizons.We, at the Summit, believe that Anyone can be maker. A computer hacker, origami artist, a storyteller, a designer, an arduino enthusiast, whoever you may be - You. Are. A. Maker.Witness a potpourri of events including Lectures, a Panel Discussion, unique Workshops and a Product Design Challenge. Be a part of mentoring sessions with the experienced in the field, debate, discuss and innovate on any of the verticals – Transmedia Storytelling, Life Hacks and Social Technology.Network with like minded enthusiasts from different streams of education. Hear it from the experienced, learn it from the best. We promise to offer you a great experience.Mark your calendars and join us this January to be part of our Maker Summit!');
  
  console.log($scope.groups);

  $scope.groups[1] = {
      name: 'Event',
      items: []
    };
   
      $scope.groups[1].items.push("Panel Discussion:From Backyards to Makerspaces: The rise of the Maker CultureLo behold the world where ideas find fruition within hours. What made this possible? Listen to our diverse panel of speakers talk about the hot and trending in the Maker movement. The participants will have an exclusive opportunity to witness the confluence of some of the most experienced makers around the globe. Just be there!Make-a-thon:The most exciting part of Maker Summit 2016! Get ready to join hands with like-minded makers with different skill-sets.Participants will have 4 days to work in teams, to come up with something inspiring and creative. Basic workshop/ makerspace facilities and necessary resources shall be provided. The teams will also have access to mentoring sessions with experts in the field to guide them through the journey of ideating, designing and creating. Exciting prizes to be awarded to the winners. Stay tuned to our FB page to see the prizes that await you.Hands-on Workshops:Maker summit 2016 provides you an opportunity to get your hands dirty and acquire a unique set of skills, through our workshop sessions.· 3D printing - Have you ever wished your designs on a software came to life? Ever wanted to be a part of the Next Big Thing in the Maker movement? Here’s the chance to learn this simple, exciting skill.· Laser Cutting - How cool would it be to make your own Batrang or Minion from a steel plate! Learn to laser cut and engrave your designs on beautiful flat sheet materials.· Mozilla Maker Party - Maker parties help you explore the web and make your own space on it. It's a celebration of making and learning on the web. As a part of this workshop, we will have associated hands-on activities like making models, brainstorming around it. Get ready to use tools like the Thimble and Webmaker!");
    $scope.groups[2] = {
      name: 'Tracks',
      items: []
    };
   
      $scope.groups[2].items.push("Transmedia storytelling:Get a chance to create immersive story worlds with multiple media platforms! This vertical would involve defining the story's purpose (could range from hygiene education for kids to creating a virtual pet) and taking it forward through storyboards and film editing. Build a prototype that could turn out to be next exciting thing in the world.Life HacksCome up with simple yet effective solutions for day-to-day hitches. Developing a sensor based tap to save water, portable mobile phone chargers, intelligent personal assistant in cell phones that prevent accidents and what not. Look around. Is there something you can fix? Come over!Social Technology ProjectsYes, there is a Pandora box of social problems. What can you do to help? Find inspiring uses to technology and sciences. Primary focus of this vertical will be assistive technology. Create something that benefits people around you, be it in terms of education, health, culture or quality of life.");
  console.log($scope.groups);



  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };

});

module.controller('signupcontroller',function($scope, $http,localStorageService){
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


module.controller('eventlist',function($scope, $http,$rootScope,localStorageService)
{
  var currid = localStorageService.get('currevent');
  var imgid,imgname,img;
  console.log(currid);
  if(localStorageService.get(currid))
  {
    console.log('stored');
    var res = localStorageService.get(currid);
    $scope.currinfo=res.info;
    $scope.currname=res.title;
    imgid = res.imageid;
    imgname = res.imgname;
    $scope.currimage= "http://shaastra.org:8001/api/uploads/"+imgid+"/"+imgname;
    $scope.events=res.events;
  }
  else
  {

  $http.get('http://shaastra.org:8001/api/eventLists/events/'+currid).success(function(response) 
  {

       $scope.currinfo=response.info;
       $scope.currname=response.title;
       //console.log($scope.currinfo);
       imgid=response.imageid;
       imgname=response.imagename;
       $scope.currimage= "http://shaastra.org:8001/api/uploads/"+imgid+"/"+imgname;
       $scope.events=response.events;
       console.log($scope.events);
       $scope.message = 'Loading...';
       localStorageService.set(currid,response);
       //console.log(JSON.stringify(response));
  })
  .error(
    function(response)
    {
      console.log("error:"+ response.error_message);
    });
  }

  $scope.next=function(id,name,imgid)
  {
    localStorageService.set('eventid',id);
    localStorageService.set('eventname',name);
    localStorageService.set('eventimg',imgid);
    $scope.menu.setMainPage('eventdesc.html', {closeMenu: true});
  };
});

module.controller('events',function($scope, $http,$rootScope,localStorageService)
{ 
    var img;
    if(localStorageService.isSupported) {
         var storageType = localStorageService.getStorageType();
     }
     //console.log(localStorageService.get('eventLists'));
     if(localStorageService.get('eventLists'))
      {
        $scope.eventcats=localStorageService.get('eventLists');
        console.log('repetition');
      }
    else
    {
    $http.get('http://shaastra.org:8001/api/eventLists').success(function(response) 
    {
        //console.log(response);
        localStorageService.set('eventLists',response);
        $scope.eventcats = response;
        console.log('first time');
        //console.log($scope.eventcats);
    })
    .error(
    function(response)
    {
      console.log("error:"+ response.error_message);
    });
    }
    $scope.message = 'Loading...';


    $scope.info=function(s)
    {
      //console.log(s);
      localStorageService.set('currevent',s);
      $scope.menu.setMainPage('event_page.html', {closeMenu: true});
      //window.location.assign('./event_page.html');
    };
});




module.controller('eventdesc',function($scope,$http,$rootScope,$sce,localStorageService)
{
  converter = new showdown.Converter();
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };

  $scope.message = 'Loading...';


  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  var eventid =  localStorageService.get('eventid');
  console.log(eventid);
  if(localStorageService.get(eventid))
  {
    console.log('stored');
    var res = localStorageService.get(eventid);
    $scope.tabs = res.eventTabs;
    for(var i=0;i<$scope.tabs.length;i++){
      $scope.tabs[i].info = $sce.trustAsHtml(converter.makeHtml($scope.tabs[i].info));
      //console.log($scope.tabs[i].info);
    }
    $scope.eve = res;
  }
  else
  {

  $http.get('http://shaastra.org:8001/api/events/showWeb/'+eventid).success(function(response)
  {
    localStorageService.set(eventid,response);
    $scope.tabs = response.eventTabs;
    //console.log($scope.tabs);
    for(var i=0;i<$scope.tabs.length;i++){
      $scope.tabs[i].info = $sce.trustAsHtml(converter.makeHtml($scope.tabs[i].info));
      //console.log($scope.tabs[i].info);
    }
    $scope.eve = response;
  }).error(
  function(response)
  {
   console.log("error:"+ response.error_message); 
  });
}

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
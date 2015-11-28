// This is a JavaScript file
var module = angular.module('app', ['onsen','ngAnimate','LocalStorageModule']);


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


module.controller('MyCtrl', ['$scope', '$http', '$sce',
    function ($scope, $http, $sce) {

    $scope.renderHtml = function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
  $scope.groups = [];

    $scope.groups[0] = {
      name: 'About',
      items: []
    };
   
      $scope.groups[0].items.push('Welcome to to the IIT Madras Maker Summit 2016! The 4 day extravaganza from 2nd to 5th of Jan set to change your perceptions and broaden your horizons.<br>We, at the Summit, believe that Anyone can be maker. A computer hacker, origami artist, a storyteller, a designer, an arduino enthusiast, whoever you may be -<b> You. Are. A. Maker</b>.<br>Witness a potpourri of events including Lectures, a Panel Discussion, unique Workshops and a Product Design Challenge. Be a part of mentoring sessions with the experienced in the field, debate, discuss and innovate on any of the verticals – Transmedia Storytelling, Life Hacks and Social Technology.<br>Network with like minded enthusiasts from different streams of education. Hear it from the experienced, learn it from the best. We promise to offer you a great experience.<br>Mark your calendars and join us this January to be part of our Maker Summit!');
  
  console.log($scope.groups);

  $scope.groups[1] = {
      name: 'Event',
      items: []
    };
   
      $scope.groups[1].items.push("<b>Panel Discussion:</b><br>From Backyards to Makerspaces: The rise of the Maker Culture<br>Lo behold the world where ideas find fruition within hours. What made this possible? Listen to our diverse panel of speakers talk about the hot and trending in the Maker movement. The participants will have an exclusive opportunity to witness the confluence of some of the most experienced makers around the globe. Just be there!<br><b>Make-a-thon:</b><br>The most exciting part of Maker Summit 2016! Get ready to join hands with like-minded makers with different skill-sets.<br>Participants will have 4 days to work in teams, to come up with something inspiring and creative. Basic workshop/ makerspace facilities and necessary resources shall be provided. The teams will also have access to mentoring sessions with experts in the field to guide them through the journey of ideating, designing and creating. Exciting prizes to be awarded to the winners. Stay tuned to our FB page to see the prizes that await you.<br><b>Hands-on Workshops:</b><br>Maker summit 2016 provides you an opportunity to get your hands dirty and acquire a unique set of skills, through our workshop sessions.<br><b> 3D printing - </b> Have you ever wished your designs on a software came to life? Ever wanted to be a part of the Next Big Thing in the Maker movement? Here’s the chance to learn this simple, exciting skill.<br><b>Laser Cutting - </b>How cool would it be to make your own Batrang or Minion from a steel plate! Learn to laser cut and engrave your designs on beautiful flat sheet materials.<br><b>Mozilla Maker Party - </b>Maker parties help you explore the web and make your own space on it. It's a celebration of making and learning on the web. As a part of this workshop, we will have associated hands-on activities like making models, brainstorming around it. Get ready to use tools like the Thimble and Webmaker!");
    $scope.groups[2] = {
      name: 'Tracks',
      items: []
    };
   $scope.groups[3] = {
      name: 'Speakers',
      items: []
    };
    $scope.groups[3].items.push("<div style=\"text-align:left;\"><b>· Anirudh Sharma</b><br><b>· Subbarao Aynampudi</b><br><b>· Pavan Kumar</b><br><b>· Vaibhav Chhabra</b><br><b>· Meghna Bhutoria</b><br><b>· Abhinav Das</b><br>Check out our website for more details on the speakers!</div>");
    $scope.groups[2].items.push("<b>Transmedia storytelling</b><br>Get a chance to create immersive story worlds with multiple media platforms! This vertical would involve defining the story's purpose (could range from hygiene education for kids to creating a virtual pet) and taking it forward through storyboards and film editing. Build a prototype that could turn out to be next exciting thing in the world.<br><b>Life Hacks</b><br>Come up with simple yet effective solutions for day-to-day hitches. Developing a sensor based tap to save water, portable mobile phone chargers, intelligent personal assistant in cell phones that prevent accidents and what not. Look around. Is there something you can fix? Come over!<br><b>Social Technology Projects</b><br>Yes, there is a Pandora box of social problems. What can you do to help? Find inspiring uses to technology and sciences. Primary focus of this vertical will be assistive technology. Create something that benefits people around you, be it in terms of education, health, culture or quality of life.");
  
   $scope.groups[4] = {
      name: 'Registration',
      items: []
    };
    $scope.groups[4].items.push("Registration involves two stages:<br><b>Stage-1:</b><br>Participants must fill the registration form to apply for the Maker Summit<br>Please find the form here<br>Registrations have been extended to 20th November. Hurry and apply!<br><b>Stage-2:</b><br>Selected participants will be informed via mail/phone<br>Once shortlisted, the participant will be required to pay a nominal registration fee (through online banking)<br><b>Registration fee structure:</b><br>· IITM students - Rs. 500<br>· Indian participants - Rs. 1000<br>· Foreign participants - Rs. 2000<br><b>Note:</b><br>· The fee includes the cost of the summit and the Shaastra passport</br>· The Panel Discussion is open to anyone with a Shaastra passport</br Selected participants shall be intimated by mail. The registration fee will be transferred through online banking to the Shaastra account. Selected participants shall be instructed as to how to go about the process<br>Have queries?<br> Drop us a line at <b>vedantagr@shaastra.org</b>");
    
    $scope.groups[5] = {
      name: 'Schedule',
      items: []
    };
    $scope.groups[5].items.push("<b>Day 1</b><br>Panel Discussion<br>Ice breaking session<br>Mentoring session 1<br><b>Problem Identification and Ground survey - </b>Interact with people, crack your heads and rack your brains to identify a problem that is worth solving. Points will be awarded for relatability to the track, the depth and number of inputs considered<br><b>Day 2</b><br>Workshop sessions<br>Mentoring Sessions 2<br>Mozilla Maker Party<br> <b>Solution Ideation</b> - Time to brainstorm and apply your maker skills to come up with a cool and classy solution to your problem with the limited resources available. Brownies to feasible and creative solutions<br><b>Day 3</b><br>Mentoring sessions 3<br><b>Prototype Definition</b> - Go ahead and start giving shape to your prototype. We need to see something up and running. Fastest Fingers First!<br><b>Day 4</b><br> Display of projects at Shaastra and announcement of the best projects<br> <b>Product Launch</b> - Time to show the world what 4 sleepless nights and 5 insanely crazy and talented makers can achieve. The Maker Summit provides an opportunity for you to display your projects to thousands of students");
    
    $scope.groups[6] = {
      name: 'Contact Us',
      items: []
    };
    $scope.groups[6].items.push("<b>Vedant Agarwal-</b> vedantagr@shaastra.org<br><b>Ayesha -</b> ayesha@shaastra.org<br><b>Ramprashanth -</b> +91-8754443260<br><b>Gouri Ram - </b>+91-7708415998<br><b>Shruti Shivakumar -</b> +91-9791264935");

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

}]);

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
  $rootScope.lastpage = 'eventcat.html';
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

       $
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
 $scope.backbutton=function(){
 document.addEventListener("backbutton",$scope.menu.setMainPage($rootScope.lastpage, {closeMenu: true}), false);
    }
    document.addEventListener("deviceready", $scope.backbutton, false);
  });

module.controller('events',function($scope, $http,$rootScope,localStorageService)
{ 
    var img;
    $rootScope.lastpage = 'eventcat.html';
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
    $scope.backbutton=function(){
 document.addEventListener("backbutton",$scope.menu.setMainPage($rootScope.lastpage, {closeMenu: true}), false);
    }
    document.addEventListener("deviceready", $scope.backbutton, false);
});




module.controller('eventdesc',function($scope,$http,$rootScope,$sce,localStorageService)
{
  converter = new showdown.Converter();
  $rootScope.lastpage = 'event_page.html';
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
$scope.backbutton=function(){
 document.addEventListener("backbutton",$scope.menu.setMainPage($rootScope.lastpage, {closeMenu: true}), false);
    }
    document.addEventListener("deviceready", $scope.backbutton, false);
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
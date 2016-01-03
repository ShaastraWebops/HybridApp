// This is a JavaScript file
var module = angular.module('app', ['onsen','ngAnimate','LocalStorageModule','ngSanitize']);


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
    //document.addEventListener("deviceready", $scope.backbutton, false);
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
        response = [{"_id":"560c1e5ce293fd414ae513ff","title":"Aerofest","info":"Aerofest events","imageid":"5628dc5cce3ee9fa05a34ee9","imagename":"aerofest.svg","createdOn":"2015-09-30T17:39:40.522Z","updatedOn":"2015-10-22T12:53:48.133Z","createdBy":"560b7d4523219ea1374eb174","lastUpdatedBy":"560b7d4523219ea1374eb174","__v":4,"events":["5613fcb748c6f66a43b16b6c","561579fdc8d15f6e1252f181","56157a96c8d15f6e1252f1de","56157cb6c8d15f6e1252f2cc"]},{"_id":"560c1e93e293fd414ae51405","title":"Design and Build","info":"Design and Build events","imageid":"5628dc80ce3ee9fa05a34f0a","imagename":"Design and build.svg","createdOn":"2015-09-30T17:40:35.901Z","updatedOn":"2015-12-23T12:48:39.833Z","createdBy":"560b7d4523219ea1374eb174","lastUpdatedBy":"560b7d4523219ea1374eb174","__v":11,"events":["5615670dc8d15f6e1252ebd5","56156f0dc8d15f6e1252ed5b","561570e3c8d15f6e1252eda3","561572bdc8d15f6e1252ee75","5615757fc8d15f6e1252ef5e","561576c9c8d15f6e1252f03d","5615785ac8d15f6e1252f0e7","5637a7d57763fa031564ca02","5637a93c7763fa031564ca8d","567a978955166909741b0911","567a978955166909741b0912"]},{"_id":"56155228c8d15f6e1252e9db","title":"Electronics Fest","info":"Electronics Fest","imageid":"5628dc91ce3ee9fa05a34f1f","imagename":"electroicsfest.svg","createdOn":"2015-10-07T17:11:04.951Z","updatedOn":"2015-10-22T12:54:41.262Z","createdBy":"560bb1e4e293fd414ae513dd","lastUpdatedBy":"560bb1e4e293fd414ae513dd","__v":7,"events":["56156b8fc8d15f6e1252ec71","56163cbf60a6e1d661bd9297","561641a860a6e1d661bd92b3","561641a860a6e1d661bd92b4","561643b260a6e1d661bd92e7","5616449560a6e1d661bd9307","5677ed0ac661c3730efe3c5a"]},{"_id":"560b7e1d23219ea1374eb17a","title":"Coding","info":"Coding events","imageid":"5628dca0ce3ee9fa05a34f2a","imagename":"coding.svg","createdOn":"2015-09-30T06:15:57.654Z","updatedOn":"2015-10-22T12:54:56.681Z","createdBy":"560b7d4523219ea1374eb174","lastUpdatedBy":"560b7d4523219ea1374eb174","__v":10,"events":["561554aac8d15f6e1252e9e9","56155ae8c8d15f6e1252ea20","56155d51c8d15f6e1252ea75","56155f79c8d15f6e1252eac0","56156011c8d15f6e1252ead8","56156131c8d15f6e1252eb3f","56193752ce3ee9fa05a28810","56272dafce3ee9fa05a33430","565468901f005e2b52dfc746"]},{"_id":"561554d4c8d15f6e1252e9ee","title":"Involve","info":"SPEED CHESS, PUZZLE CHAMP, SHAASTRA CUBE OPEN, SUDOKU CHAMPIONSHIP","imageid":"5628df16ce3ee9fa05a34fcd","imagename":"involve.svg","createdOn":"2015-10-07T17:22:28.600Z","updatedOn":"2015-10-24T20:32:14.402Z","createdBy":"560bb1dce293fd414ae513db","lastUpdatedBy":"560bb1dce293fd414ae513db","__v":7,"events":["56156ba9c8d15f6e1252ec8e","56157533c8d15f6e1252ef49","56165e2f60a6e1d661bd93f3","5616612d60a6e1d661bd9430","565b17f98c5334e15edb292f"]},{"_id":"56155713c8d15f6e1252e9fe","title":"Quizzing","info":"SJQ,SMQ,HTW,SCENT QUIZ","imageid":"5628dd16ce3ee9fa05a34f5d","imagename":"quizzing.svg","createdOn":"2015-10-07T17:32:03.529Z","updatedOn":"2015-11-16T07:24:48.997Z","createdBy":"560bb1dce293fd414ae513db","lastUpdatedBy":"560bb1dce293fd414ae513db","__v":8,"events":["56155e66c8d15f6e1252ea9c","5615689ac8d15f6e1252ec1a","56156becc8d15f6e1252eca4","561934d2ce3ee9fa05a28797"]},{"_id":"561567aac8d15f6e1252ebee","title":"Workshops","info":"Shaastra 2016 Workshops","imageid":"5628dce4ce3ee9fa05a34f47","imagename":"Workshops.svg","createdOn":"2015-10-07T18:42:50.992Z","updatedOn":"2015-10-22T12:56:04.256Z","createdBy":"560badd8e293fd414ae513d5","lastUpdatedBy":"560badd8e293fd414ae513d5","__v":34,"events":["561568c4c8d15f6e1252ec1d","5615696ac8d15f6e1252ec2a","5615696fc8d15f6e1252ec2d","56156a57c8d15f6e1252ec3c","56156a8fc8d15f6e1252ec40","56156acac8d15f6e1252ec43","56156b2ac8d15f6e1252ec5b","56156ce2c8d15f6e1252ecd8","56156cf1c8d15f6e1252ece3","56156d2bc8d15f6e1252ecff","56156d49c8d15f6e1252ed09","56156d96c8d15f6e1252ed1e","56156e30c8d15f6e1252ed34","562cbfb1cb9bd8dc74297c29","562dc62fcb9bd8dc74298e5f","562dc919cb9bd8dc74298ec4","562dcb0bcb9bd8dc74298ef2","562e2ccaae3df7b05ea0e8a9","56321c87b8c13b1866677b52","5635961a7763fa031564953e","563b9698e1d37ef507c0c1fc","564327a83b0ebfa9774b08c4","564327aa3b0ebfa9774b08c7","56434b64c65971887fdc99fb","5648302b1bc77e6d7a53a2d8","5649f0912cd751d967df14ac","5649f3492cd751d967df16fa","564c5f1d5e7fc5917c41fe3e","564c66995e7fc5917c420123","565063be6bc8c41c450b2cd2","565b16e58c5334e15edb281b","565c8d77cede92af6962bba1","5677d3f1d3977f714673726b"]},{"_id":"561574e7c8d15f6e1252ef1a","title":"Research Events and Workshops","info":"Under Research events we have research level Competitions, Workshops and Research Expo.","imageid":"5628dcfece3ee9fa05a34f52","imagename":"research.svg","createdOn":"2015-10-07T19:39:19.913Z","updatedOn":"2015-12-23T15:24:56.584Z","createdBy":"560bc7e2e293fd414ae513eb","lastUpdatedBy":"560bc7e2e293fd414ae513eb","__v":8,"events":["56169807e581b3a41edd143e","56169b9fe581b3a41edd1525","5616bdc6e581b3a41edd19f0","5616c32ce581b3a41edd1a4f","5616c5d3e581b3a41edd1a80","562def42cb9bd8dc742991ae","565d33d0fb9d39962a869bd0","567a84de55166909741b03d4"]},{"_id":"560c1e25e293fd414ae513fa","title":"B - Events","info":"B - Events","imageid":"562826a7ce3ee9fa05a343fb","imagename":"B events (3).svg","createdOn":"2015-09-30T17:38:45.228Z","updatedOn":"2015-12-20T16:04:02.392Z","createdBy":"560b7d4523219ea1374eb174","lastUpdatedBy":"560b7d4523219ea1374eb174","__v":33,"events":["5615668fc8d15f6e1252ebbd","561654a260a6e1d661bd9384","5616558f60a6e1d661bd939a","5616a9eee581b3a41edd175d","5627d985ce3ee9fa05a34082"]}];
        //console.log(response);
        localStorageService.set('eventLists',response);
        $scope.eventcats = response;
        console.log(response);
        //console.log($scope.eventcats);
    

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
    //document.addEventListener("deviceready", $scope.backbutton, false);
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
  $scope.currid=localStorageService.get('currevent');
  $scope.eid=localStorageService.get('eventid');
  var eventid = $scope.eid;
  console.log(eventid);
  if(localStorageService.get(eventid))
  {
    console.log('stored');
    var res = localStorageService.get(eventid);
    console.log("second time??   if(localStorageService.get(eventid)) ");
    $scope.tabs = res.eventTabs;
    $rootScope.con=res.assignees;
    for(var i=0;i<$scope.tabs.length;i++){
      $scope.tabs[i].info = $sce.trustAsHtml(converter.makeHtml($scope.tabs[i].info));
      console.log($scope.tabs[i].info);
    }
    $scope.eve = res;
  }
  else
  {

  $http.get('http://shaastra.org:8001/api/events/showWeb/'+eventid).success(function(response)
  {
    localStorageService.set(eventid,response);
    console.log("second time??   if(localStorageService.get(eventid)) ELSE");
    $scope.tabs = response.eventTabs;
    //$rootScope.con=reponse.assignees;
    //console.log($scope.tabs);
    for(var i=0;i<$scope.tabs.length;i++){
      $scope.tabs[i].info = $sce.trustAsHtml(converter.makeHtml($scope.tabs[i].info));
      console.log($scope.tabs[i].info);
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
     ons.ready(function() {
    $scope.show = function() {
      $scope.contacts.show();
    };
   
    ons.createDialog('list.html').then(function(dialog) {
      $scope.contacts = dialog;
    });
  });
    //document.addEventListener("deviceready", $scope.backbutton, false);
});
          //Map controller
module.controller('MapController', function($scope, $timeout,$rootScope){

   
       
        
        $scope.dialogs = {};

        $scope.show = function(dlg) {
          if (!$scope.dialogs[dlg]) {
            ons.createDialog(dlg).then(function(dialog) {
              $scope.dialogs[dlg] = dialog;
              dialog.show();
            });
          } else {
            $scope.dialogs[dlg].show();
          }
        }
       
     
        $scope.formData = {};

        var start;
        //start=new google.maps.LatLng(12.9915, 80.2336);
        document.addEventListener("deviceready", onDeviceReady, false);

        function onDeviceReady() {
            navigator.geolocation.getCurrentPosition(onSuccess, onError);
        }
    
        function onSuccess(position) 
        {
            start=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        }
    
        function onError(error) {
            alert('Please enable location access for the app in settings.');
            document.addEventListener("goback",$scope.menu.setMainPage($rootScope.lastpage, {closeMenu: true}), false);
        }
        
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

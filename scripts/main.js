(function () {

$(document).ready(function() {
  $("h1.green").animate({
    'height': 0
  }, 3000,
  function() {
    $(".loader").fadeOut('slow');
  });
});

$(document).foundation();

$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "fadeIn",
    // An array of phrases to rotate are created based on this separator.
    separator: "|",
    // The delay between the changing of each phrase in milliseconds.
    speed: 5000
});

// Smooth scroll to sections when clicked on Nav links
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Visibility for Middle img on Hover
$(document).ready(function() {
  $('.resume img, .email img, .phone img').on('mouseover', function(){
    $('.me-middle').css({'opacity':'1','visibility':'visible'});
  });

  $('.resume img, .email img, .phone img').on('mouseout', function(){
    $('.me-middle').css({'opacity':'0','visibility':'hidden'});
  });

  $('.changeItUp').on('click', function () {
    $('#intro-area').toggleClass('change-img');
    $('#about-area').toggleClass('change-aboutMe');
    $('#intro-area span').toggleClass('change-color');
    $('.branding, .top-list a, .branding_about, .branding_port').toggleClass('change-color2');
    $('.back').toggleClass('change-backColor');
    $('.resume img').toggleClass('change-resume');
  });
});

// Google Map

// var kennesaw = new google.maps.LatLng(34.0231517,-84.6169211);
// var parliament = new google.maps.LatLng(34.0231517,-84.6169211);
// var marker;
// var map;
//
// function initialize() {
//   var mapOptions = {
//     zoom: 13,
//     center: kennesaw
//   };
//
//   map = new google.maps.Map(document.getElementById('map-canvas'),
//   mapOptions);
//
//   marker = new google.maps.Marker({
//     map:map,
//     draggable:true,
//     animation: google.maps.Animation.DROP,
//     position: parliament
//   });
//   google.maps.event.addListener(marker, 'click', toggleBounce);
// }
//
// function toggleBounce() {
//
//   if (marker.getAnimation() != null) {
//     marker.setAnimation(null);
//   } else {
//     marker.setAnimation(null);
//     marker.setAnimation(google.maps.Animation.BOUNCE);
//   }
// }
//
// google.maps.event.addDomListener(window, 'load', initialize);

}());

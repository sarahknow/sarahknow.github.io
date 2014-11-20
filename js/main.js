var $win = $(window);
var $beyonce = $('.beyonce');
var $beyonceSection = $('.beyonce-section');
var $rugbySection = $('.rugby-section');
var $rugby = $('.rugby')
var $contactSection = $('.contact-section');
var $contact = $('.contact')

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	
	$beyonce.css('transform', 'rotate(' + scrollPos/5 + 'px)');
	$beyonceSection.css('background-position', 'center ' + scrollPos/3 + 'px');
});

$rugbySection.waypoint(function () {
	$rugby.addClass('js-rugby-fade');
}, {offset: '50%'});

$contactSection.waypoint(function () {
	$contact.addClass('js-contact-fade');
}, {offset: '50%'});

$(document).ready(function(e){
   $('#dropdownone').on('click',function(){
      $('.dropdownwrapone').slideToggle();
   });
})

$(document).ready(function(e){
   $('#dropdowntwo').on('click',function(){
      $('.dropdownwraptwo').slideToggle();
   });
})

$(document).ready(function(e){
   $('#dropdownthree').on('click',function(){
      $('.dropdownwrapthree').slideToggle();
   });
})

$(document).ready(function(e){
   $('#dropdownfour').on('click',function(){
      $('.dropdownwrapfour').slideToggle();
   });
})

$(document).ready(function(e){
   $('#dropdownfive').on('click',function(){
      $('.dropdownwrapfive').slideToggle();
   });
})

$(document).ready(function(e){
   $('#dropdownsix').on('click',function(){
      $('.dropdownwrapsix').slideToggle();
   });
})

$(document).ready(function(e){
   $('#dropdownseven').on('click',function(){
      $('.dropdownwrapseven').slideToggle();
   });
})

$(document).ready(function(e){
   $('#dropdowneight').on('click',function(){
      $('.dropdownwrapeight').slideToggle();
   });
})

$(document).ready(function(e){
   $('#dropdownnine').on('click',function(){
      $('.dropdownwrapnine').slideToggle();
   });
})

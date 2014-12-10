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


$('#dropdown').on('click',function(){
  $('.dropdownwrap').slideToggle(1000);
});


$('#dropdownone').on('click',function(){
  $('.dropdownwrapone').slideToggle(1000);
});


$('#dropdowntwo').on('click',function(){
  $('.dropdownwraptwo').slideToggle(1000);
});


$('#dropdownthree').on('click',function(){
  $('.dropdownwrapthree').slideToggle(1000);
});


$('#dropdownfour').on('click',function(){
  $('.dropdownwrapfour').slideToggle(1000);
});


$('#dropdownfive').on('click',function(){
  $('.dropdownwrapfive').slideToggle(1000);
});


$('#dropdownsix').on('click',function(){
  $('.dropdownwrapsix').slideToggle(1000);
});


$('#dropdownseven').on('click',function(){
  $('.dropdownwrapseven').slideToggle(1000);
});


$('#dropdowneight').on('click',function(){
  $('.dropdownwrapeight').slideToggle(1000);
});


$('#dropdownnine').on('click',function(){
  $('.dropdownwrapnine').slideToggle(1000);
});


$ (".close").on("click",function(){
	$(this).parent().slideToggle(1000)
});
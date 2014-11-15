var $beyonce = $('.beyonce');
var $beyonceSection = $('.beyonce-section');
var $rugbySection = $('.rugby-section');
var $rugby = $('.rugby')

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	
	$beyonceSection.css('background-position', 'center ' + scrollPos/3 + 'px');
});

$rugbySection.waypoint(function () {
	$rugby.addClass('js-rugby-fade');
}, {offset: '50%'});

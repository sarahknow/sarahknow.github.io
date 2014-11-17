var $win = $(window);
var $beyonce = $('.beyonce');
var $beyonceSection = $('.beyonce-section');
var $rugbySection = $('.rugby-section');
var $rugby = $('.rugby')

$win.on('scroll', function () {
	var scrollPos = $win.scrollTop();
	
	$beyonce.css('transform', 'rotate(' + scrollPos/5 + 'px)');
	$beyonceSection.css('background-position', 'center ' + scrollPos/3 + 'px');
});

$rugbySection.waypoint(function () {
	$rugby.addClass('js-rugby-fade');
}, {offset: '50%'});

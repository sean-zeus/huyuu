/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){

	$('#pagekey').val('40F12CE3-F3B44048-A41CB627-DC06E8AB');
	
/*header-box-height*/
function reBrowser() {
	if ($('#fullpage').length) {
		$('#fullpage').css('min-height', $(window).height());
	}
	/*sticky*/
/*	if($('.mobile-nav').length) {
		$('body').addClass('sticky');
	} else {
			if($(this).scrollTop() >= $(window).height()) {
			$('body').addClass('sticky');
			}
	}*/
}

/*vegas*/
// $.vegas.isVideoCompatible = function () {
//     var devices = /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i;
//     return !devices.test(navigator.userAgent);
// }

/*WOW*/
var wow = new WOW({
	boxClass: 'content, p, .infro-box, .box1, .box2, .form, #section4 .img-box, #section5 .img-box, #section6 .img-box, .text-img1, .text-img2',
	animateClass: 'animated hinge fadeInUp',
	offset: 100,
	mobile: true,
	live: true,
	callback: function (box) {

	},
	scrollContainer: null
});
var wow2 = new WOW({
	boxClass: 'logo, .map , .text-box, .lightBox-img, .text-img3, .grid-full.mobile-hide',
	animateClass: 'animated hinge fadeInDown',
	offset: 100,
	mobile: true,
	live: true,
	callback: function (box) {

	},
	scrollContainer: null
});
wow.init();
wow2.init();

$(window).resize(function(){
	reBrowser();
}).resize();

/*scroll*/
$('.button-down').click(function(){
	 var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
	$body.animate({
			scrollTop: $('.content').offset().top
	}, 400);
	return false;
}); 
	
/*mobileWeb*/
/*var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase()),
	isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase()),
	isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase()),
	isAndroid = /android/i.test(navigator.userAgent.toLowerCase()),
	isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase()),
	isBlackBerry = /blackberry/i.test(navigator.userAgent.toLowerCase());
	if ( isiPad || isiPhone || isiDevice || isAndroid || isWindowsPhone || isBlackBerry ){
		if($('body').attr('id')=='architecture' || $('body').attr('id')=='location' || $('body').attr('id')=='interior' || $('body').attr('id')=='contact'){
	    window.location="mobile.php";
		}
	}*/
});
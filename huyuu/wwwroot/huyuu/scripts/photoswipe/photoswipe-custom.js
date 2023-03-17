(function($) {
    var $pswp = $('.pswp')[0];
    var image = [];

    $('.lightBox-img').each( function() {
        var $pic     = $(this),
            getItems = function() {
                var items = [];
                $pic.find('a').each(function() {
                    var $href   = $(this).attr('href'),
                        $title  = $(this).attr('title');
					if ($(this).data('type') == 'video') {
						var item = {
							html: $(this).data('html'),
                        	title : $title
						};
					} else {     
                    var $size   = $(this).data('size').split('x'),
                        $width  = $size[0],
                        $height = $size[1];
						var item = {
							src : $href,
							w   : $width,
							h   : $height,
							title : $title
						}
					}
                    items.push(item);
                });
                return items;
            }

        var items = getItems();

        $.each(items, function(index, value) {
            image[index]     = new Image();
            image[index].src = value['src'];
        });

        $pic.on('click', 'a', function(event) {
            event.preventDefault();
			
			var $index = $pic.find('a').index(this);
            var options = {
                index: $index,
                bgOpacity: 0.8,
				tapToClose:true,
				tapToToggleControls:false,
				shareEl :false,
				fullscreenEl:false, 
				history: false,
                showHideOpacity: true
            }
            var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
            lightBox.init();		
			
            function videoPlay() {
			  var currItem = $(lightBox.currItem.container);
			  $('.pswp__video').removeClass('active');
			  var currItemIframe = currItem.find('.pswp__video').addClass('active'); 
			   $('.pswp__video').each(function() {
				if ($(this).hasClass('active')) {
				 $(this).attr('src', $(this).data('video'));
				}else{
				 $(this).attr('src','');
				}
			  }); 
			 };
			videoPlay();
			lightBox.listen('gettingData', function() {
			 videoPlay();
			});
			lightBox.listen('beforeChange', function() {
			 videoPlay();
			});
			lightBox.listen('close', function() {
			  $('.pswp__video').each(function() {
				$(this).attr('src', '');
			  });
			});
	
        });
    });
})(jQuery);
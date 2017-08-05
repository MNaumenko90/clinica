//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/foundation-sites/dist/js/foundation.js
//= ../../bower_components/slick-carousel/slick/slick.js


/*
 * Custom js
 */
 $( document ).ready(function() {
 	$('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        autoplay: true
    });
    $('.doctors .btn').on('click', function(event) {
    	event.preventDefault();
    	$(this).parents('.doctors').toggleClass('opened');
    	if ($(this).text() == 'Полный список') {
    		$(this).text('Полный список')
    	} else {
    		$(this).text('Свернуть')
    	}
    });
    $('.white-box .btn').on('click', function(event) {
      event.preventDefault();
      $(this).parents('.white-box').toggleClass('opened');
      if ($(this).text() == 'Свернуть') {
        $(this).text('Полный список')
      } else {
        $(this).text('Свернуть')
      }
    });
    $('.box-hide').on('click', function(event) {
        event.preventDefault();
        $(this).parents().find('.our-desc').toggleClass('opened');
        if ($(this).text() == 'Свернуть') {
            $(this).text('Развернуть')
        } else {
            $(this).text('Свернуть')
        }
        
    });
      //tabs 
	  $('[data-show-tab]').on('click', function(event) {
	    event.preventDefault();
	    $('[data-show-tab]').removeClass('active');
	    $(this).addClass('active');
	    $('[data-tab]').hide();
	    $('[data-tab]').filter("[data-tab='"+$(this).data('showTab')+"']").show();
	  });
	  //end tabs
      //menu
      var $nav = $('.greedy-nav');
        var $btn = $('.greedy-nav button');
        var $vlinks = $('.greedy-nav .visible-links');
        var $hlinks = $('.greedy-nav .hidden-links');

        var breaks = [];

        function updateNav() {
          
          var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

          // The visible list is overflowing the nav
          if($vlinks.width() > availableSpace) {

            // Record the width of the list
            breaks.push($vlinks.width());

            // Move item to the hidden list
            $vlinks.children().last().prependTo($hlinks);

            // Show the dropdown btn
            if($btn.hasClass('hidden')) {
              $btn.removeClass('hidden');
            }

          // The visible list is not overflowing
          } else {

            // There is space for another item in the nav
            if(availableSpace > breaks[breaks.length-1]) {

              // Move the item to the visible list
              $hlinks.children().first().appendTo($vlinks);
              breaks.pop();
            }

            // Hide the dropdown btn if hidden list is empty
            if(breaks.length < 1) {
              $btn.addClass('hidden');
              $hlinks.addClass('hidden');
            }
          }

          // Keep counter updated
          $btn.attr("count", breaks.length);

          // Recur if the visible list is still overflowing the nav
          if($vlinks.width() > availableSpace) {
            updateNav();
          }

        }

        // Window listeners

        $(window).resize(function() {
            updateNav();
        });

        $btn.on('click', function() {
          $hlinks.toggleClass('hidden');
        });

        updateNav();
      //end menu
 });
 $(document).foundation();
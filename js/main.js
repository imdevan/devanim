"use strict";
(function($) {
	/* Slide in from bottom */
	/* @author Sam Sehnert */
	/* http://codepen.io/chriscoyier/pen/DjmJe */

  /* Slide up when visible function
  ========================================================================== */
  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

})(jQuery);


/* Read More 
========================================================================== */
document.write("<scr" + "ipt type='text/javascript' src='js/read-more.js'><" + "/scr" + "ipt>");

/* Read More Variables */
var rmButton = $('.read-more-button'),
    rmExitButton = $('.read-more-exit-button'),
    rmTitle = $('.read-more-title'),
    rmDescription = $('.read-more-description p'),
    rmBackground = $('.read-more-bg'),
    rmContent = $('.read-more-content');

/* Read More Show */
rmButton.on('click', function(){
  var _id = $(this).attr('id').replace('read-more-', '');
  var _this = ReadMore[_id];

  rmTitle.html(_this.title);
  rmDescription.html(_this.description);
  rmBackground.fadeIn('0.1s');
  rmContent.addClass('p-zoom-in');
});

/* Read More Exit */
rmExitButton.on('click', function(){
    rmContent.removeClass('p-zoom-in');
    rmBackground.fadeOut('fast');
});

rmBackground.on('click', function(){
    rmContent.removeClass('p-zoom-in');
    rmBackground.fadeOut('fast');
});
rmContent.on('click', function(event){
  event.stopPropagation();
});

/* Module Slide In
========================================================================== */

/* Module Slide In Variables */
var win = $(window);
var allModules = $(".module");

/* Module Slide In Assignment */
allModules.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

/* Module Slide In Scroll */
  win.scroll(function(event) {
    allModules.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });
    
  });

/*
	http://www.ixistore.be/
	- implement their color change 

	http://codepen.io/devanh/pen/pedLE
	- implement page flip

	http://sarasoueidan.com/blog/windows8-animations/
	- option for 'read more'

	http://codepen.io/devanh/pen/tJAhG
	- for scrolling

    border-top: 600px solid #d9d8c6;
       border-left: 600px solid transparent; 
       border-right: 600px solid transparent; 
*/

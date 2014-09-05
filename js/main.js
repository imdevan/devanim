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


/* Variables
========================================================================== */

/* Read More Variables */
var rmButton = $('.read-more-button'),
    rmExitButton = $('.read-more-exit-button'),
    rmTitle = $('.read-more-title'),
    rmDescription = $('.read-more-description p'),
    rmBackground = $('.read-more-bg'),
    rmContent = $('.read-more-content'),
    homeImg = $('#home-img'),
    homeImgDesc = $('#home-img-desc'),
    scrollPosition;

/* Module Slide In Variables */
var win = $(window);
var allModules = $(".module");

var navLi = $('#nav li');

/* Home Image Hover Effect
========================================================================== */
homeImg.hover(function(){
    homeImgDesc.fadeIn();
  },function(){
    homeImgDesc.fadeOut();
  }
);
/* Read More 
========================================================================== */
document.write("<scr" + "ipt type='text/javascript' src='js/read-more.js'><" + "/scr" + "ipt>");

/* Read More Show */
rmButton.on('click', function(){
  var _id = $(this).attr('id').replace('read-more-', '');
  var _this = ReadMore[_id];

  rmTitle.html(_this.title);
  rmDescription.html(_this.description);
  // rmBackground.fadeIn('0.1s');
  rmBackground.fadeIn('0.1s').css('top',scrollPosition);
  rmContent.addClass('p-zoom-in');
});

/* Read More Exit */
rmExitButton.on('click', function(){
    rmContent.removeClass('p-zoom-in');
    rmBackground.fadeOut('0.1s');
});

/* Read More Exit When document clicked outside container*/
$(document).mouseup(function (e)
{
    // var container = $("YOUR CONTAINER SELECTOR");

    if (!rmContent.is(e.target) // if the target of the click isn't the container...
        && rmContent.has(e.target).length === 0) // ... nor a descendant of the container
    {
      rmContent.removeClass('p-zoom-in');
      rmBackground.fadeOut('0.1s');
    }
});

rmContent.on('click', function(event){
  event.stopPropagation();
});

/* Module Slide In
========================================================================== */

/* Module Slide In Assignment */
allModules.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});


/* Window Scroll Function
========================================================================== */

  win.scroll(function(event) {
    scrollPosition = $(this).scrollTop();

    /* Module Slide In */
    allModules.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("come-in"); 
      } 
    });

    /* Shrink Nav Bar */
    // if(scrollPosition > 0){
    //   navLi.addClass('small');
    // }else{
    //   navLi.removeClass('small');
    // }
  });


/*
  
  http://codepen.io/benkadev/pen/Ggrxd?editors=010
  - For cool hover read more animation

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

(function($){
	/* Slide in from bottom */
	/* @author Sam Sehnert */
	/* http://codepen.io/chriscoyier/pen/DjmJe */

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

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
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

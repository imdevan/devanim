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


/* THREE DEE EFFECTS */
/* Variables */    
var $3dcontainer = $('.threedeecontainer'),
        $container = $('.container'),
        $offsetable = $('.offsetable'),
        $twisted = $('#threedeecontainer.twisted .offsetable'),
        halfWidth = $offsetable.outerWidth()/2 + 'px',
        sideView = false;

  /* Set threedeecontainer to content height */
  $3dcontainer.each(function(index){
    // setHeight = $(this).find(".offsetable").height();
    setHeight = $(this).height();
    // alert(Number(setHeight));
  });

  /* Intial rotation */
    $container.css({
      '-webkit-transform-origin': halfWidth + ' 0 -' + halfWidth,
      '-moz-transform-origin': halfWidth + ' 0 -' + halfWidth,
      '-o-transform-origin': halfWidth + ' 0 -' + halfWidth,
      'transform-origin': halfWidth + ' 0 -' + halfWidth
    });
    
    /* Initial rotation */
    $offsetable.css({
      '-webkit-transform': 'translateZ(-' + halfWidth + ') rotateY(0) translateZ(' + halfWidth + ')',
      '-moz-transform': 'translateZ(-' + halfWidth + ') rotateY(0) translateZ(' + halfWidth + ')',
      '-o-transform': 'translateZ(-' + halfWidth + ') rotateY(0) translateZ(' + halfWidth + ')',
      'transform': 'translateZ(-' + halfWidth + ') rotateY(0) translateZ(' + halfWidth + ')'
    });
  
    /* Event Handler */ 
    $3dcontainer.on('click', function(e) {
      
      /* If not turned */
      if(sideView === false){
        /* Turn left! */
        $('.offsetable', this).css({
          '-webkit-transform': 'translateZ(-' + halfWidth + ') rotateY(-90deg) translateZ(' + halfWidth + ')',
          '-ms-transform': 'translateZ(-' + halfWidth + ') rotateY(-90deg) translateZ(' + halfWidth + ')',
          '-o-transform': 'translateZ(-' + halfWidth + ') rotateY(-90deg) translateZ(' + halfWidth + ')',
          'transform': 'translateZ(-' + halfWidth + ') rotateY(-90deg) translateZ(' + halfWidth + ')'
        });
        
        sideView = true;
      }
      /* If turned */
      else{
        /* Turn right! */
        $offsetable.css({
          '-webkit-transform': 'translateZ(-' + halfWidth + ') rotateY(0) translateZ(' + halfWidth + ')',
          '-ms-transform': 'translateZ(-' + halfWidth + ') rotateY(0) translateZ(' + halfWidth + ')',
          '-o-transform': 'translateZ(-' + halfWidth + ') rotateY(0) translateZ(' + halfWidth + ')',
          'transform': 'translateZ(-' + halfWidth + ') rotateY(0) translateZ(' + halfWidth + ')'
        });
        
        sideView = false;
      } 
      
      
    }); 
      
      // var $c1 = $('.c1');
      // $c1.each(function(i){
      //   alert(i);
      // });

      $c1 = $('.c1');
      $c2 = $('.c2');
      var $c1off = $('.c1 > .offsetable');
      var $c2off = $('.c2 > .offsetable ');
      var $3d = $('.threedeecontainer');
      // $c2off.outerWidth($c1off.outerWidth());
      // $c2off.height($c1off.height());
      // $3d.height($('.threedeecontainer > .c1 > .offsetable ').height());
      // $c2.outerWidth($c1.outerWidth());
      // $c2.height($c1.height());

      $.each($c1off, function(i, value){
        // c implies current
        var c1index = $c1off.index($(this)),
            thisC2 = $($c2off.get(c1index)),
            this3d = $($3d.get(c1index));

        this3d.height($(this).height());
        thisC2.height($(this).height());
        thisC2.outerWidth($(this).outerWidth());
            // a??lert();

        // c2c.height(c1c.height());
        // c2c.outerWidth(c1c.outerWidth());
      });
      
/*
css changed to be dynamic:

.container -> transform-origin: 100px 0 -100px;
.offsetable -> transform: translateZ(-100px) rotateY(0) translateZ(100px);
#threedeecontainer.twisted .offsetable -> transform: translateZ(-100px) rotateY(-90deg) translateZ(100px);

*/



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

/* Variables
========================================================================== */

/* Read More Variables */
var rmButton = $('.project'),
    rmExitButton = $('.read-more-exit-button'),
    rmTitle = $('.read-more-title'),
    rmDescription = $('.read-more-description p'),
    rmBackground = $('.read-more-bg'),
    rmContent = $('.read-more-content'),
    homeImg = $('#home-img'),
    homeImgDesc = $('.home-img-desc'),
    win = $(window),
    scrollPosition;

/* Scroll Effects
========================================================================== */

$('a[href^="#"]').click(function(event) {
    var id = $(this).attr("href");
    var target = $(id).offset().top;
    $('html, body').animate({scrollTop:target}, 500);
    event.preventDefault();
  });

/* Home Image Hover Effect
========================================================================== */
homeImg.hover(function(){
    homeImgDesc.addClass('display-true');
  },function(){
    homeImgDesc.removeClass('display-true');
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


// var offset = $('nav').offset().top;
// $(window).scroll(function() {
//   if($(this).scrollTop() > offset) {
//    $('nav').addClass('isFixed');
//   } else {
//     $('nav').removeClass('isFixed');
//   }
// });


win.scroll(function(){
  scrollPosition = win.scrollTop();
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

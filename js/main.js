
 /* Variables
========================================================================== */

// Convention from Javascript: The Good Parts
// var THE = {
//   readmore: {
//     openButton: $('.project'),
//     exitButton: $('.read-more-exit-button'),
//     title: $('.read-more-title'),
//     content: $('.read-more-content')
//   },
//   home:{
//     div: $('#home'),
//     wrapper: $('#home-wrapper')
//   },
//   mainC: $('#main-container'),
//   win: $(window),
//   fold: 0,
//   scrollPosition: 0,
//   mobile: 0,
//   nav: {
//     isDown: true,
//     lastScrollTop: 0,
//     div: $('#nav'),
//     height:0
//   },
//   init: function(){
//     this.fold = this.home.div.outerHeight() * 0.5;
//     this.nav.height = this.nav.div.outerHeight();
//     this.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
//   }
// };

// THE.init();

var rmButton = $('.project'),
    rmExitButton = $('.read-more-exit-button'),
    rmTitle = $('.read-more-title'),
    rmDescription = $('.read-more-description p'),
    rmContent = $('.read-more-content'),
    home = $("#home"),
    homeWrapper = $("#home-wrapper"),
    mainC = $('#main-container'),
    win = $(window),
    theFold = home.outerHeight() * 0.5,
    scrollPosition,
    mobile;

var navIsDown = true,
    lastScrollTop = 0,
    nav = $('#nav'),
    navHeight = nav.outerHeight();



/* Home Hide Fuction
========================================================================== */
// Consider implementing: if the change in mouse position is greater than 200 than fade, otherwise don't
function hideHomeBackgroundOnScrollDown(){
  // Do nothing on mobile devices
  if(mobile) return;

  // otherwise change opacity of homeWrapper
  if(scrollPosition < theFold)
    homeWrapper.css('opacity', (theFold - scrollPosition) / theFold);
    // homeWrapper.css('opacity', 1);
  else
    homeWrapper.css('opacity', 0);
}

/* Read More 
========================================================================== */
// Show/Hide "read more" section
function readMoreFadeToggle(){
  if(rmContent.hasClass('fadeIn'))
    rmContent.toggleClass('fadeIn');
  else
    rmContent.toggleClass('fadeIn');
}

// When a user clicks on a project
rmButton.on('click', function(){
  // Get read-more content
  var _id = $(this).attr('id').replace('read-more-', '');
  var _this = ReadMore[_id];

  // Add read-more content to dom
  rmTitle.html(_this.title);
  rmDescription.html(_this.description);

  // set exit button to halfway on title 
  rmExitButton.css('top', parseInt(rmTitle.css('line-height')) - parseInt(rmExitButton.css('line-height'))/2);

  // Fade in
  readMoreFadeToggle(); 
});

// When exit button is clicked
rmExitButton.on('click', function(){
  readMoreFadeToggle();
});

// When exit or backspace is pressed
$(document).keyup(function(e){
  if(rmContent.hasClass('fadeIn') && e.keyCode == 27 ){
    e.preventDefault();
    readMoreFadeToggle();
  }
}); 


/* Menu Hide Function 
========================================================================== */
function hideNav(){
    navIsDown = false;
    nav.css('top', -navHeight).css('opacity', '0');
};

function hideNavOnScrollDown(){

  if(scrollPosition > theFold)
    nav.addClass('solid');
  else
    nav.removeClass('solid');
  
  if(navIsDown && scrollPosition > lastScrollTop){
    hideNav();
  }

  else if(!navIsDown && scrollPosition < lastScrollTop){
    // show nav bar
    navIsDown = true;
    nav.css('top', '0px').css('opacity', '1');
  }
  // update last scroll position
  lastScrollTop = scrollPosition;
};

win.scroll(function(){
  scrollPosition = win.scrollTop();
  hideNavOnScrollDown();
  hideHomeBackgroundOnScrollDown();
});

/* Menu Scroll Effects
========================================================================== */
// Change to account
$('#nav li').click(function(event) {
    event.preventDefault();
    var id = $(this).find('a').attr("href");
    var target = $(id).offset().top;

    $('html, body').animate({scrollTop:target}, 500, "swing", function(){

      if(id != "#body"){
        hideNav();
      }

      // update last scroll position
      lastScrollTop = scrollPosition;

    });
  });


// Remove preload screen
$(window).load(function(){
  $('#home').height($('#home').outerHeight());
  $('body').addClass('loaded');
});
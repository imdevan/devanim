/* Variables
========================================================================== */

/* Read More Variables */
var rmButton = $('.project'),
    rmExitButton = $('.read-more-exit-button'),
    rmTitle = $('.read-more-title'),
    rmDescription = $('.read-more-description p'),
    rmContent = $('.read-more-content'),
    homeImg = $('#home-img'),
    homeImgDesc = $('.home-img-desc'),
    mainC = $('#main-container'),
    win = $(window),
    scrollPosition;



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
  // Get read-more content
  var _id = $(this).attr('id').replace('read-more-', '');
  var _this = ReadMore[_id];

  // Add read-more content to dom
  rmTitle.html(_this.title);
  rmDescription.html(_this.description);

  // Remove leftover css from remove
  rmContent.removeClass('fadeOutLeft');
  mainC.removeClass('fadeInRight');

  // Show read-more content
  // rmContent.show();
  rmContent.addClass('fadeInLeft');
  mainC.addClass('fadeOutRight');

});

/* Read More Exit */
rmExitButton.on('click', function(){
  // Remove leftover css 
  rmContent.removeClass('fadeInLeft');
  mainC.removeClass('fadeOutRight');


  // Show read-more content
  rmContent.addClass('fadeOutLeft', function(){
    // rmContent.hide();
  });
  mainC.addClass('fadeInRight');

});


/* Menu Hide Function 
========================================================================== */
var navIsDown = true,
    lastScrollTop = 0,
    nav = $('#nav'),
    navHeight = nav.outerHeight();

function hideNav(){
    // nav.fadeOut ();
    navIsDown = false;
    nav.css('height', '0px').css('opacity', '0');
};
function showNav(){
    // nav.fadeIn();
    navIsDown = true;
    nav.css('height', navHeight).css('opacity', '1');
};
function hideNavOnScrollDown(){
  if(navIsDown && scrollPosition > lastScrollTop){
    // hide nav bar
    hideNav();
  }
  else if(!navIsDown && scrollPosition < lastScrollTop){
    // show nav bar
    showNav();
  }

  // update last scroll position
  lastScrollTop = scrollPosition;
};
function manageNavShadow(){

  if(scrollPosition == 0){
    nav.removeClass("border-shadow");
  }
  else{
    nav.addClass("border-shadow");
  }
};

win.scroll(function(){
  scrollPosition = win.scrollTop();
  console.log(scrollPosition);
  hideNavOnScrollDown();
  manageNavShadow();;
});

/* Menu Scroll Effects
========================================================================== */

$('a[href^="#"]').click(function(event) {
    event.preventDefault();
    var id = $(this).attr("href");
    var target = $(id).offset().top;
    $('html, body').animate({scrollTop:target}, 500, function(){

      if(id != "#body"){
        hideNav();
      }

      // update last scroll position
      lastScrollTop = scrollPosition;

    });
  });

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

  // Show read-more content
  rmContent.fadeIn('0.1s');
  rmContent.addClass('p-zoom-in');
});

/* Read More Exit */
rmExitButton.on('click', function(){
    // Hide read-more content
    rmContent.removeClass('p-zoom-in');
    rmContent.fadeOut('0.1s');
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

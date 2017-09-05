$(document).ready(function ()
{
    initialize();      
});



function initialize()
{
    $(window).on('scroll resize', function()
    {
        slideEmInEl();
    });
  
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


    $('.percentage[data-percentage]').each(function () {
        var progress = $(this);
        var percentage = Math.ceil($(this).attr('data-percentage'));
        $({countNum: 0}).animate({countNum: percentage}, {
            duration: 1200,
            easing: 'linear',
            step: function () {
                // What todo on every count
                var pct = '';
                if (percentage == 0) {
                    pct = Math.floor(this.countNum) + '%';
                } else {
                    pct = Math.floor(this.countNum + 1) + '%';
                }
                progress.text(pct) && progress.siblings().children().css('width', pct);
            }
        });
    });
    function slideEmInEl()
    {        
        slideEmIn('.left, .fullwidth, .right');
        slideEmIn('#karakter .figure-key-list');
        slideEmIn('#opleidingen .col-1, #opleidingen .col-2, #werkervaring .col-1, #werkervaring .col-2, #referenties .col-1, #referenties .col-2  ');
    }
    
    function toggleSidebar() 
    {
            $(".button").toggleClass("active");
            $("main").toggleClass("move-to-left");
            $(".sidebar-item").toggleClass("active");
    }
    
}


//////////////////////////////////////////

    
function slideEmIn(animation_elements)
{
    var web_window = $(window);
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    
    $(animation_elements).each(function() 
    {
        var element = $(this);
        var element_top_position = element.offset().top;
        var element_bottom_position = (element_top_position + element.outerHeight());
        
        //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) 
        {
            element.addClass('in-view');
        } 
        else
        {
            element.removeClass('in-view');
        }
    });
    
}

     


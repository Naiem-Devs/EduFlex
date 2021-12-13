(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
    $('.bar').toggleClass('close');   
  }); 


  const counterUp = window.counterUp.default

  const callback = entries => {
      entries.forEach( entry => {
          const el = entry.target
          if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
              counterUp( el, {
                  duration: 1500,
                  delay: 30,
              } )
              el.classList.add( 'is-visible' )
          }
      } )
  }

  const IO = new IntersectionObserver( callback, { threshold: 1 } )

  const el = document.querySelectorAll( '.counter' )


  el.forEach(els => {
      IO.observe( els )
  }) 

 
})(jQuery);

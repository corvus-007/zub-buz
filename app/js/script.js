document.addEventListener('DOMContentLoaded', function() {
  svg4everybody(); // run it now or whenever you are ready

  /*=================================
  =            Billboard            =
  =================================*/

  var billboardSlider = document.querySelector('.billboard__slider');
  if (billboardSlider) {
    $(billboardSlider).slick({
      accessibility: false,
      // autoplay: true,
      arrows: false
    });
  }

  /*=====  End of Billboard  ======*/



  /*==================================
  =            Input mask            =
  ==================================*/

  // Phone
  $('input[type="tel"]').mask("+7 (999) 999-99-99", {});

  /*=====  End of Input mask  ======*/

});

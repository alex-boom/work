import HP from './helpers';

(function ($) {

  // When DOM is ready
  $(function () {
    example(HP.random(10, 20));
  });

  $(".toggle-mnu").click(function() {
      $(this).toggleClass("on");
      $(".header-menu").slideToggle();
    return false;
  });

  function example(n) {
    console.log(`Hello in ES6... I am ${n} - random number between 10 and 20`);
  }

}(jQuery));
import HP from './helpers';

(function ($) {

  // When DOM is ready
  $(function () {
    example(HP.random(10, 20));
  });

  // $(".arrow-down").click(function() {
  //     $("html, body").animate({
  //      scrollTop : $(".main").offset().top
  //     }, 700);
  // });

  $(".toggle-mnu").click(function() {
  $(this).toggleClass("on");
  $(".main-nav").slideToggle();
  return false;
  });

  $(".owl-carousel").owlCarousel({
     
    // Наиболее важные особенности owl
    items : 4,
    itemsCustom : false,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [479,1],
    singleItem : false,
    itemsScaleUp : false,
     
    //Базовая скорость
    slideSpeed : 200,
    paginationSpeed : 800,
    rewindSpeed : 1000,
     
    //Авто-прокрутка
    autoPlay : false,
    stopOnHover : false,
     
    // Навигация
    navigation : true,
    navigationText : [],
    rewindNav : true,
    scrollPerPage : false,
     
    // Пагинация
    pagination : false,
    paginationNumbers: false,
     
    // Отзывчивость
    responsive: true,
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
     
    // CSS стили
    baseClass : "owl-carousel",
    theme : "owl-theme",
     
    //Lazy load
    lazyLoad : false,
    lazyFollow : true,
    lazyEffect : "fade",
     
    // Авто-высота
    autoHeight : false,
     
    //JSON
    jsonPath : false,
    jsonSuccess : false,
     
    // События мышки
    dragBeforeAnimFinish : true,
    mouseDrag : true,
    touchDrag : true,
     
    //Transitions
    transitionStyle : true,
     
    // Другое
    addClassActive : false,
     
    // Функции обратного вызова
    beforeUpdate : false,
    afterUpdate : false,
    beforeInit: false,
    afterInit: false,
    beforeMove: false,
    afterMove: false,
    afterAction: false,
    startDragging : false,
    afterLazyLoad : false
     
});

  function example(n) {
    console.log(`Hello in ES6... I am ${n} - random number between 10 and 20`);
  }

}(jQuery));
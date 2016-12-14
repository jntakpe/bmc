/**
 * Fichier de configuration des plugins apportés par le thème Unify
 */
(function () {
  'use strict';

  handleHeader();
  handleBootstrap();
  handleFullscreen();
  handleValignMiddle();
  initParallaxBg();
  initCaroussel();
  initRevoSlider();

  function handleBootstrap() {
    $('.carousel').carousel({
      interval: 15000,
      pause: 'hover'
    });

    $('.tooltips').tooltip();
    $('.tooltips-show').tooltip('show');
    $('.tooltips-hide').tooltip('hide');
    $('.tooltips-toggle').tooltip('toggle');
    $('.tooltips-destroy').tooltip('destroy');

    $('.popovers').popover();
    $('.popovers-show').popover('show');
    $('.popovers-hide').popover('hide');
    $('.popovers-toggle').popover('toggle');
    $('.popovers-destroy').popover('destroy');
  }

  function handleFullscreen() {
    var windowHeight = $(window).height();
    var headerHeight = 0;
    if ($(document.body).hasClass('promo-padding-top')) {
      headerHeight = $(".header").height();
    }
    $(".fullheight").css('height', windowHeight - headerHeight);
    $(window).resize(function () {
      var windowHeight = $(window).height();
      $(".fullheight").css('height', windowHeight - headerHeight);
    });
  }

  function handleValignMiddle() {
    $('.valign__middle').each(function () {
      $(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
    });
    $(window).resize(function () {
      $('.valign__middle').each(function () {
        $(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
      });
    });
  }

  function handleHeader() {
    var $navbarFixedTop = $('.navbar-fixed-top');
    if ($('.navbar').offset().top > 150) {
      $navbarFixedTop.addClass('top-nav-collapse');
    }
    $(window).scroll(function () {
      if ($('.navbar').offset().top > 150) {
        $navbarFixedTop.addClass('top-nav-collapse');
      } else {
        $navbarFixedTop.removeClass('top-nav-collapse');
      }
    });

    let $offset = 0;
    $offset = $navbarFixedTop.height() + 12;
    $('.page-scroll a').bind('click', function (event) {
      var $position = $($(this).attr('href')).offset().top;
      $('html, body').stop().animate({
        scrollTop: $position - $offset
      }, 600);
      event.preventDefault();
    });
    $('body').scrollspy({target: '.navbar-fixed-top', offset: $offset + 2});
    $(window).scroll(function () {
      $('.navbar-collapse.in').collapse('hide');
    });
  }

  function initParallaxBg() {
    $(window).load(function () {
      $('.parallaxBg').parallax('50%', 0.4);
      $('.parallaxBg1').parallax('50%', 0.2);
    });
  }

  function initCaroussel() {
    $(".owl-slider").owlCarousel({
      itemsDesktop: [1000, 5],
      itemsDesktopSmall: [900, 4],
      itemsTablet: [600, 3],
      itemsMobile: [479, 2]
    });

    $(".next-v1").click(function () {
      owl.trigger('owl.next');
    });

    $(".prev-v1").click(function () {
      owl.trigger('owl.prev');
    });

    $(".owl-slider-v2").owlCarousel({
      itemsDesktop: [1000, 5],
      itemsDesktopSmall: [900, 4],
      itemsTablet: [600, 3],
      itemsMobile: [479, 2],
      slideSpeed: 1000
    });

    $(".next-v2").click(function () {
      owl.trigger('owl.next');
    });

    $(".prev-v2").click(function () {
      owl.trigger('owl.prev');
    });

    $(".owl-slider-v3").owlCarousel({
      items: 9,
      autoPlay: 5000,
      itemsDesktop: [1000, 5],
      itemsDesktopSmall: [900, 4],
      itemsTablet: [600, 3],
      itemsMobile: [300, 2]
    });

    $(".owl-slider-v4").owlCarousel({
      items: 3,
      itemsDesktop: [1000, 3],
      itemsTablet: [600, 2],
      itemsMobile: [479, 1]
    });

    $(".owl-ts-v1").owlCarousel({
      slideSpeed: 600,
      singleItem: true,
      navigation: true,
      navigationText: ["", ""]
    });

  }

  function initRevoSlider() {
    $(document).ready(function () {
      $('.fullscreenbanner').revolution({
        delay: 15000,
        startwidth: 1170,
        startheight: 500,
        hideThumbs: 10,
        fullWidth: "on",
        fullScreen: "on",
        hideCaptionAtLimit: "",
        dottedOverlay: "twoxtwo",
        navigationStyle: "preview4",
        fullScreenOffsetContainer: ""
      });
    });
  }

})();

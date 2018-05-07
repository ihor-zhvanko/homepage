$(document).ready(function () {

  function isVisible($elem) {
    return (window.innerHeight + window.scrollY) >= $elem.offset().top
  }

  window.onscroll = function () {
    $('.resume-block').each(function () {
      var target = $(this);
      if (isVisible(target)) {
        target.addClass('show');
      }
    });
  }

  window.onscroll();

});
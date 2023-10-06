$(function () {
  $('.feedback').fadeIn('slow').addClass('d-block');
  $('.btn-feedback').click(function () {
    $('.btn-feedback').addClass('img-grayscale').attr('disabled', 'disabled');
    $('.feedback-thanks').fadeIn('slow').addClass('d-block');
  });

  $('.btn-feedback-helpful').click(function () {
    $('.feedback-helpful').fadeIn('slow').addClass('d-block');
    $('.icon-helpful-solid').addClass('d-block');
    $('.icon-helpful-solid').removeClass('d-none');
    $('.icon-helpful-outlined').removeClass('d-block');
    $('.icon-helpful-outlined').addClass('d-none');
  });
  $('.btn-feedback-not-helpful').click(function () {
    $('.feedback-not-helpful').fadeIn('slow').addClass('d-block');
    $('.icon-not-helpful-solid').addClass('d-block');
    $('.icon-not-helpful-solid').removeClass('d-none');
    $('.icon-not-helpful-solid').removeClass('d-none');
    $('.icon-not-helpful-outlined').addClass('d-none');
  });
});
/*
$(function (disabled) {
  // hover states
  $('.btn-feedback-helpful').mouseenter(function () {
    $('.icon-helpful-solid').addClass('d-block');
    $('.icon-helpful-solid').removeClass('d-none');
    $('.icon-helpful-outlined').addClass('d-none');
    $('.icon-helpful-outlined').removeClass('d-block');
  });
  $('.btn-feedback-helpful').mouseleave(function () {
    $('.icon-helpful-outlined').addClass('d-block');
    $('.icon-helpful-outlined').removeClass('d-none');
    $('.icon-helpful-solid').addClass('d-none');
    $('.icon-helpful-solid').removeClass('d-block');
  });
  $('.btn-feedback-not-helpful').mouseenter(function () {
    $('.icon-not-helpful-solid').addClass('d-block');
    $('.icon-not-helpful-solid').removeClass('d-none');
    $('.icon-not-helpful-outlined').addClass('d-none');
    $('.icon-not-helpful-outlined').removeClass('d-block');
  });
  $('.btn-feedback-not-helpful').mouseleave(function () {
    $('.icon-not-helpful-outlined').addClass('d-block');
    $('.icon-not-helpful-outlined').removeClass('d-none');
    $('.icon-not-helpful-solid').addClass('d-none');
    $('.icon-not-helpful-solid').removeClass('d-block');
  });
});
*/

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

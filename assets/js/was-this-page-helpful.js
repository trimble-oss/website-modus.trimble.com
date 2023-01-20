$(function () {
  $(".feedback").fadeIn("slow").addClass("d-block");
  $(".btn-feedback").click(function () {
    $(".btn-feedback").addClass("img-grayscale").attr("disabled", "disabled");
    $(".feedback-thanks").fadeIn("slow").addClass("d-block");
  });
  $(".btn-feedback-helpful").click(function () {
    $(".feedback-helpful").fadeIn("slow").addClass("d-block");
  });
  $(".btn-feedback-not-helpful").click(function () {
    $(".feedback-not-helpful").fadeIn("slow").addClass("d-block");
  });
});

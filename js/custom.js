$(function () {
  $(".visualTab li").on("click", function () {
    let i = $(this).index();
    $(".visualImg li").removeClass("on");
    $(".visualImg li").eq(i).addClass("on");
  });

  let con01 = $(".con01").offset().top;
  $(window).on("scroll", function () {
    let sc = $(window).scrollTop();
    if (sc <= con01 - 10) {
      $("header").removeClass("on");
    } else {
      $("header").addClass("on");
    }
  });
});

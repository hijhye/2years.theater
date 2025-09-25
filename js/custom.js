$(function () {
  let stop;
  visual_start();
  function visual_start() {
    stop = setInterval(function () {
      $(".visualImg").animate({ "margin-left": "-100%" }, function () {
        $(".visualImg li:first-child").appendTo(".visualImg");
        $(".visualImg").css({ "margin-left": "0" });
      });
    }, 5000);
  }

  let con01 = $(".con01").offset().top;
  $(window).on("scroll", function () {
    let sc = $(window).scrollTop();
    if (sc <= con01 - 10) {
      $("header").removeClass("on");
      $(".con01 .wrap").removeClass("on");
    } else {
      $("header").addClass("on");
      $("nav li").eq(0).addClass("on");
      $(".con01 .wrap").addClass("on");
    }
  });

  con01_start();
  function con01_start() {
    stop = setInterval(function () {
      $(".con01 .imgwrap01").animate({ "margin-top": "-350px" }, function () {
        $(".con01 .imgwrap01 li:first-child").appendTo(".con01 .imgwrap01 ");
        $(".con01 .imgwrap01").css({ "margin-top": "0px" });
      });
      $(".con01 .imgwrap02").animate({ "margin-top": "-450px" }, function () {
        $(".con01 .imgwrap02 li:first-child").appendTo(".con01 .imgwrap02 ");
        $(".con01 .imgwrap02").css({ "margin-top": "100px" });
      });
    }, 3000);
  }

  $(".con03 li").on("mouseenter", function () {
    $(this).find(".imgwrap").stop().animate({ "margin-top": "-80px" });
    $(this).find(".txtwrap").stop().animate({ "margin-bottom": "-50px" });
    $(this).find(".txtwrap p").stop().animate({ height: "9.5rem" });
  });
  $(".con03 li").on("mouseleave", function () {
    $(this).find(".imgwrap").stop().animate({ "margin-top": "0px" });
    $(this).find(".txtwrap").stop().animate({ "margin-bottom": "0px" });
    $(this).find(".txtwrap p").stop().animate({ height: "3.5rem" });
  });
});

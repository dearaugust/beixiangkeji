$(function() {
  //-- -- --滚动条 返回顶部事件-- -- --/
  $(document).scroll(function() {
    var top = $(this).scrollTop();
    if (top > 550) {
      $("#top").stop().animate({right: 15},200);
    } else {
      $("#top").stop().animate({right: -50},200);
    }
    return (top = $(this).scrollTop());
  });
  $("#top").click(function(event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });
});

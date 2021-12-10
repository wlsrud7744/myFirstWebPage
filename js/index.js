'use strict';
//메인 이미지 페이드
setTimeout(function () {
  $("#mainImg video").fadeIn(5000).get(0).play();
},2000)
$("#mainImg img").fadeOut(3000).delay(56000).fadeIn(2000);

//공지사항 내용바꾸기
setInterval(function (){
  $("#showNotice a:eq(0)").slideUp();
  $("#showNotice").append($("#showNotice > a").first().clone());
  setTimeout(function () {
    $("#showNotice > a").first().remove();
  },500);
},2500);


//퀵 메뉴 플로팅
const floatPosition = parseInt($("#sideQickMenu").css("top"));
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  let newPosition = scrollTop + floatPosition + "px";
  $("#sideQickMenu").stop().animate({
    top : newPosition
  },200);
});

//퀵메뉴 호버
const qickImgOn = ["images/btn_n_reservation_s_on.gif", "images/btn_n_discount_s_on.gif", "images/btn_n_way_s_on.gif", "images/btn_n_recruit_s_on.gif", "images/btn_n_rental_s_on.gif"];

const qickImgOff = ["images/btn_n_reservation_s_off.gif", "images/btn_n_discount_s_off.gif", "images/btn_n_way_s_off.gif", "images/btn_n_recruit_s_off.gif", "images/btn_n_rental_s_off.gif"];

let qickIndex;
$(".shortcut > li").hover(function () {
  qickIndex = $(this).index();
  $(`.qImg${qickIndex}`).attr("src", qickImgOn[qickIndex]);
}, function () {
  $(`.qImg${qickIndex}`).attr("src", qickImgOff[qickIndex]);
});

// 탑버튼 숨기기
$("#btnScrollTop").hide();

//  탑버튼 나타내기
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $("#btnScrollTop").fadeIn(500);
    } else if ($(this).scrollTop() > 300){
      $("#btnScrollTop").fadeOut(200);
    }
  });

  // 탑버튼 클릭 위치이동
  $("#btnScrollTop").click (function () {
    $("#btnScrollTop").animate ({
      scrollTop: 0
    }, 500);
    $("#btnScrollTop").hide();
  });
});

//이미지슬라이드
let index = 3;
moveSlider(index);
$(".clfix").append($(".clfix >img").first().clone());
$(".clfix").append($(".clfix >img").eq(1).clone());
$(".clfix").append($(".clfix >img").eq(2).clone());
$(".clfix").prepend($(".clfix >img").eq(-4).clone());
$(".clfix").prepend($(".clfix >img").eq(-5).clone());
$(".clfix").prepend($(".clfix >img").eq(-6).clone());

$(".btnleft").click(function () {
  if ( index > 3 ) {
    index--;
    moveSlider(index);
  } else {
    $(".clfix").css("left", -3230);
    index = 16;
    moveSlider(index);
  }
});

$(".btnright").click(function () {
  if ( index < 14 ) {
    index++;
    moveSlider(index);
  } else {
    $(".clfix").css("left", 0);
    index = 1;
    moveSlider(index);
  }
});

function moveSlider(index) {
  
  $(".clfix").stop().animate({
    left: -(index*190)
  },"slow");
}

//슬라이드 이미지 호버
$(".clfix >img").hover(function () {
  $(this).css("opacity", 0.6);
}, function () {
  $(this).css("opacity", 1);
});


//이미지 클릭
$(".video> iframe").hide();
$(".video0").show();

for (let i = 0; i < 14; i++) {
    $(`.img${i}`).click(function () {
    $(`.video${i}`).show();
    $(`.video${i}`).siblings().hide();
  });
}

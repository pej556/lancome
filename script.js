
//ScrollGiveClass 호출
var sgc1 = new ScrollGiveClass("header",{
    baseline :100 //화면을 100px 내려가면 클래스가 부여되게함
});




//Swiper 플러그인 호출
const swiper1 = new Swiper('#main_view', {
    // Optional parameters
    wrapperClass:'slider', //wrapperClass를 slider로 바꿤
    slideClass:'view',
    effect: "fade",
    autoplay: { //자동슬라이드
      delay: 3000, //전환되기전 보여주는 시간
    },
    speed:800, //슬라이드가 전환되는(움직이는) 시간
    spaceBetween:10, //슬라이드 사이간격


    // If we need pagination
    pagination: {
      el: '.pager', //버튼영역 대상
      bulletActiveClass:'active', //활성화된 요소에 추가되는 클래스
      clickable:true, //클릭시 슬라이드 전환
    },
  });

   
//press영역 스와이퍼 호출
let swiper2 = new Swiper('#press .inner',{
    wrapperClass:'slider', 
    slideClass:'item',
    slidesPerView:1,
    spaceBetween:10,
    pagination:{
      el:'.dot',
      bulletActiveClass:'active',
      clickable:true
    },
    breakpoints:{
      //화면의 너비가 320이상이면 적용이 되는 옵션
      320:{slidesPerView:2, spaceBetween:20},

      //화면의 너비가 640이상이면 적용
      640:{slidesPerView:3, spaceBetween:30},

      //화면의 너비가 768이상이면 적용
      768:{slidesPerView:4, spaceBetween:40},

      //화면의 너비가 1024이상이면 적용
      1024:{slidesPerView:5, spaceBetween:30},
    }
});

//베스트아이템
const swiper3 = new Swiper('#best_left', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  effect:'fade',
   autoplay: { //자동슬라이드
     delay: 3000, //전환되기전 보여주는 시간
   },

});


const swiper4 = new Swiper('#best_right', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  effect:'slide',
   autoplay: { //자동슬라이드
     delay: 3000, //전환되기전 보여주는 시간
   },
  thumbs: {
    swiper: swiper3
  },



   // Navigation arrows
   navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

















  var sgc2 = new ScrollGiveClass("#brand",{
    class:"show",
    baseline:"middle",
    add:50, 
})



var sgc2 = new ScrollGiveClass(".sev",{
  class:"show",
  baseline:"bottom",
  add:-100, 
})


var sgc2 = new ScrollGiveClass(".part",{
  class:"show",
  baseline:"bottom",
  add:-100, 
})



var sgc2 = new ScrollGiveClass("li",{
  class:"show",
  baseline:"bottom",
  add:-100, 
})

























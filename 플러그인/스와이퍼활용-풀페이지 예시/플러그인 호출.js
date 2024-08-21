
//메뉴영역 스와이퍼 적용
let nav_swiper = new Swiper('#gnb',{
    wrapperClass:'menu',
    slideClass:'menu_li', 
    slidesPerView:"auto",            //보여지는 버튼의 수(auto:각 버튼의 크기설정
});






//메인영역 스와이퍼 적용
let main_swiper = new Swiper("#wrap",{ 
    wrapperClass:'container',       //슬라이드 영역을 감싸는 요소
    slideClass:'sec',               //각 슬라이드 영역의 공통 클래스명 
    direction:'vertical',           //슬라이드 영역 정렬방향
    mousewheel:true,                //마우스휠의 동작으로 화면전환
    speed:800,                      //화면전환속도조절
    pagination:{
        el:'.pager',                //페이지버튼
        bulletActiveClass:'active', //활성화된 요소에 추가되는 클래스
        clickable:true,             //클릭시 슬라이드 이동
    },
    thumbs:{
        swiper:nav_swiper,          //메뉴버튼 영역의 스와이퍼 지정
        slideThumbActiveClass:"active" 
        //활성화된 영역에 따라 메뉴에 추가되는 클래스명 설정
    }
});

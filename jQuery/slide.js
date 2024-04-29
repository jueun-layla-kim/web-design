// 즉시 실행 함수를 사용하여 코드가 문서 로딩 완료 후 자동으로 실행되도록 설정합니다.
$(function(){

  // setInterval 함수를 사용하여 특정 함수를 3000밀리초(3초)마다 반복 실행하도록 설정합니다.
  setInterval(function(){

      // ".slides" 클래스를 가진 요소에 대해 애니메이션을 적용합니다.
      // 애니메이션은 해당 요소의 CSS 'top' 속성을 "-100%"로 변경하는 것입니다.
      // 이는 요소를 상단으로 100% 만큼 이동시키는 효과를 가지며, 슬라이드가 위로 슬라이드되어 보이지 않게 만듭니다.
      $(".slides").animate({top: "-100%"}, function(){

          // 애니메이션이 완료된 후, 콜백 함수를 실행합니다.
          // 이 콜백 함수는 ".slides" 요소 내의 첫 번째 ".slide" 요소를 선택하여
          // ".slides" 요소의 마지막에 추가합니다. 이는 슬라이드가 순환하도록 만듭니다.
          $(this).append($(".slide").eq(0));

          // ".slides" 요소의 'top' 속성을 0으로 설정하여,
          // 슬라이드 요소들을 원래 위치로 재설정합니다.
          // 이는 애니메이션 후에 요소가 정상 위치로 돌아가 보이도록 합니다.
          $(this).css("top", 0);

      });

  }, 3000);

})

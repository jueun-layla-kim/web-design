// index 변수를 0으로 초기화합니다. 이 변수는 현재 보이는 슬라이드를 추적합니다.
var index = 0;

// .slide 클래스를 가진 모든 요소 중에서 index 위치의 요소만 보이게 합니다. 여기서는 첫 번째 슬라이드만 보이게 설정합니다.
$(".slide").eq(index).show();

// setInterval 함수를 사용하여 아래 함수를 매 3000밀리초(3초)마다 반복 실행합니다.
setInterval(function(){
    // nextIndex 변수를 현재 index 값에 1을 더한 후 3으로 나눈 나머지를 계산합니다.
    // 이는 슬라이드가 3개라고 가정했을 때, 0, 1, 2 순서로 순환하게 하기 위함입니다.
    var nextIndex = (index + 1) % 3;

    // 현재 보이는 슬라이드를 서서히 감춥니다. (fadeOut 효과)
    $(".slide").eq(index).fadeOut();

    // 다음 슬라이드를 서서히 나타나게 합니다. (fadeIn 효과)
    $(".slide").eq(nextIndex).fadeIn();

    // index 변수를 nextIndex로 업데이트하여 다음에 감추고 보여줄 슬라이드를 업데이트합니다.
    index = nextIndex;
}, 3000);
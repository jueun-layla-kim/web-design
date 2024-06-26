
// ".tab_title h4" 선택자를 사용하여 모든 h4 요소에 클릭 이벤트 리스너를 추가합니다.
// 이 요소들은 탭의 제목을 나타냅니다.
$(".tab_title h4").click(function(){

    // 클릭 이벤트가 발생하면, 우선 모든 ".tab_title h4" 요소에서 "active" 클래스를 제거합니다.
    // 이로 인해 모든 탭 제목에서 활성 상태 표시가 제거됩니다.
    $(".tab_title h4").removeClass("active")

    // 클릭된 탭 제목에 "active" 클래스를 추가합니다.
    // 이는 해당 탭이 활성 상태임을 시각적으로 표시합니다.
    $(this).addClass("active")

    // 클릭된 요소의 인덱스를 가져옵니다. 이 인덱스는 탭 제목 목록에서의 위치를 나타냅니다.
    var idx = $(this).index()

    // ".tab_contents ul" 선택자를 사용하여 모든 ul 요소를 숨깁니다.
    // 이는 탭 내용 중 현재 활성화되지 않은 내용을 모두 숨기는 역할을 합니다.
    $(".tab_contents ul").hide()

    // 숨겨진 ul 요소 중에서 클릭된 탭 제목에 해당하는 인덱스의 ul 요소만 보여줍니다.
    // 이는 eq 함수를 사용하여 특정 인덱스의 요소만 선택하는 방식으로 작동합니다.
    $(".tab_contents ul").eq(idx).show()

})
// a-1, b-1, c-1, d-1
$(".tab_title h3").click(function(){
    $(".tab_title h3").removeClass("active")
    $(this).addClass("active")

    var idx = $(this).index()
    $(".tab_contents ul").hide()
    $(".tab_contents ul").eq(idx).show()
})
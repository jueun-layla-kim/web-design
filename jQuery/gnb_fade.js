$(".gnb").hover(
    function(){
        $(this).addClass("on")
        $(".sub").stop().fadeIn()
    },
    function(){
        $(this).removeClass("on")
        $(".sub").stop().fadeOut()
    }
)
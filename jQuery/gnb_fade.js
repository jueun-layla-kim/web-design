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

// e-3
$(".gnb > li").hover(
    function(){
        $(this).find("ul").stop().fadeIn()
    },
    function(){
        $(this).find("ul").stop().fadeOut()
    }
)
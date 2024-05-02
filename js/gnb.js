// a-1, b-1
$(".gnb").hover(
    function(){
        $(".sub").stop().slideDown()
    },
    function(){
        $(".sub").stop().slideUp()
    }
)

// c-1
$(".gnb li").hover(
    function(){
        $(this).find(".sub").stop().slideDown()
    },
    function(){
        $(this).find(".sub").stop().slideUp()
    }
)

// d-3
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
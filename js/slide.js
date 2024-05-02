// a-1, b-1, d-1
setInterval(function(){
    $(".slides").animate({top: "-100%"}, function(){
        $(this).append($(".slide").eq(0))
        $(this).css("top", 0)
})
}, 3000)

// c-1
var index = 0;
$(".slide").eq(index).show()

setInterval(function(){
    var nextIndex = (index + 1) % 3
    $(".slide").eq(index).fadeOut()
    $(".slide").eq(nextIndex).fadeIn()
    index = nextIndex
}, 3000)
var index = 0;
$(".slide").eq(index).show()

setInterval(function(){
    var nextIndex = (index + 1) % 3
    $(".slide").eq(index).fadeOut()
    $(".slide").eq(nextIndex).fadeIn()
    index = nextIndex
}, 3000)
$(window).resize(function(){
    matchWindow();
});

function matchWindow() {
    var height = $(window).height();
    if (height > 768) {
        $('#history, #home, #present, #future').height(height);
    }
}
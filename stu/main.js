$(window).load(function () {
    $(window).trigger('resize');
});
$(window).resize(function () {
    main_resize();
});
$(window).resize(function () {
    $('.center_vertical').each(function () {
        var marg = ($(this).parent().height()-$(this).height())/2;
        $(this).css({'margin-top':marg+"px"});
    });
    $('.center_horizontal').each(function () {
        var marg = ($(this).parent().width()-$(this).width())/2;
        $(this).css({'margin-left':marg+"px"});
    })
});

/*##########################################*/
var main_resize_dump = {
    'x':0,
    'y':0
};
/*##########################################*/
function main_resize() {
    if($('#b').height() < $('#b').width()){
        $('#b_cap').addClass("contvert");
        $('#b_text').addClass("contvert");
    }
    else{
        $('#b_cap').addClass("conthor");
        $('#b_text').addClass("conthor");
    }
}
/*##########################################*/


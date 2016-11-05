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
});

/*##########################################*/
var main_resize_dump = {
    'x':0,
    'y':0
};
/*##########################################*/
function main_resize() {
    if($('#b').height()/1000 < $('#b').width()/1200){ //700
        $('#b_cap').height("100%");
        $('#b_text').height("100%");
        var percneeded = Math.floor($('#b_cap').height()*0.7/($('#b').width()/100));
        $('#b_cap').width(percneeded+"%");
        $('#b_text').width(100-percneeded+"%");
    }
    else{
        $('#b_cap').width("100%");
        $('#b_text').width("100%");
        $('#b_cap').height("70%");
        $('#b_text').height("30%");
    }
}
/*##########################################*/
var main_resize_watcher = setInterval(function () {
    var cur_win_siz = base_window_size();
    if(main_resize_dump['x'] != cur_win_siz[0] || main_resize_dump['y'] != cur_win_siz[1]){
        main_resize_dump['x'] = cur_win_siz[0];
        main_resize_dump['y'] = cur_win_siz[1];
        $(window).trigger('resize');
    }
},200);
/*##########################################*/


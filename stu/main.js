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
    if($('#b').height()/1000 < $('#b').width()/1200){ //700
        $('#b_cap').height("100%");
        $('#b_text').height("100%");
        var percneeded = Math.floor($('#b_cap').height()*0.7/($('#b').width()/100));
        $('#b_cap').width(percneeded+"%");
        $('#b_text').width(100-percneeded+"%");
        $('#b_cap_img')
            .height('100%')
            .width('auto');
    }
    else{
        $('#b_cap')
            .width("100%")
            .height("70%");
        $('#b_text')
            .width("100%")
            .height("30%");
        if($('#b_cap').width() > $('#b_cap').height()*0.7){
            console.log('width auto');
            $('#b_cap_img')
                .height('100%')
                .width('auto');
        }
        else{
            console.log('height auto');
            $('#b_cap_img')
                .height('auto')
                .width('100%');
        }
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


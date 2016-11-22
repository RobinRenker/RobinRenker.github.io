$(window).load(function () {
    $(window).trigger('resize');
});
$(window).resize(function () {
    main_resize();
});
/*##########################################*/
function main_resize() {
    if($('#b').height() < $('#b').width()){
        $('#b_cap').addClass("contvert").removeClass("conthor1");
        $('#b_text').addClass("contvert").removeClass("conthor2");
    }
    else{
        $('#b_cap').addClass("conthor1").removeClass("contvert");
        $('#b_text').addClass("conthor2").removeClass("contvert");
    }
}
/*##########################################*/


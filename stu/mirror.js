$('#b').mousemove(function(){
    mirror_update_all();
});
//#####################################
var mirror_settings = {

};
//#####################################
function mirror_update_all(){
    $('.mirror').each(function(){
        mirror_update($(this).attr('id'));
    });
}
function mirror_update(element){
    var mp = base_mouse_pos();
    var ep = $(element).position();
}
//#####################################
//#####################################

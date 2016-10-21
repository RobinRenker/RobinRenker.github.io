$(window).load(function(){
    if(base_data['is_mobile'] == true){
        mirror_settings['listen_on'] = 'orientation';
    }
    else if(base_data['is_mobile'] == false){
        mirror_settings['listen_on'] = 'mouse';
        clearInterval(mirror_orientation_update_loop);
    }
});
$('#b').mousemove(function(){
    if(mirror_settings['listen_on'] == 'mouse'){
        mirror_update_all();
    }
});
var mirror_orientation_update_loop = setInterval(function(){
    mirror_update_all();
},30);
//#####################################
var mirror_settings = {
    'listen_on':'',
    'max_degree':40
};
//#####################################

function mirror_update_all(){
    $('.mirror').each(function(){
        mirror_update($(this).attr('id'),mirror_settings['listen_on']);
    });
}
function mirror_update(element,listenon){
    if(mirror_settings['listen_on'] == listenon){
        var mp = base_mouse_pos();
        var ep = $(element).position();
    }
    else if(mirror_settings['listen_on'] == listenon){

    }
}
//#####################################
//#####################################

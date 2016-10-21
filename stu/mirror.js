$(window).load(function(){
    if(base_data['is_mobile'] == true){
        mirror_data['listen_on'] = 'orientation';
    }
    else if(base_data['is_mobile'] == false){
        mirror_data['listen_on'] = 'mouse';
    }
});
$('#b').mousemove(function(){
    if(mirror_data['listen_on'] == 'mouse'){
        mirror_update_all(base_mouse_pos());
    }
});
window.addEventListener('deviceorientation', function(eventData) {
    var ret = {};
    ret['alpha'] = parseInt(eventData.alpha);
    // beta is the front-to-back tilt in degrees
    ret['beta'] = parseInt(eventData.beta);
    // gamma is the left-to-right tilt in degrees
    ret['gamma'] = parseInt(eventData.gamma);
    mirror_update_all(ret);
}, false);
//#####################################
var mirror_data = {
    'listen_on':'',
    'max_degree':40,
    'mouse_sens_radius':300
};
//#####################################
function mirror_update_all(obj){
    $('.mirror').each(function(){
        if(mirror_data['listen_on'] == 'mouse'){
            mirror_update_mouse($(this).attr('id'),obj);
        }
        else if(mirror_data['listen_on'] == 'orientation'){
            mirror_update_mobile($(this).attr('id'),obj);
        }
    });
}
function mirror_update_mouse(el,obj){

}
function mirror_update_mobile(el,obj){
    base_rotate(el,mirror_pos_chop(obj['beta']),'x');
}
function mirror_pos_chop(val){
    if(val > mirror_data['max_degree']){
        val = mirror_data['max_degree'];
    }
    else if(val < -mirror_data['max_degree']){
        val = -mirror_data['max_degree'];
    }
    return val;
}
//#####################################
//#####################################

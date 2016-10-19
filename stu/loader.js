$(window).resize(function () {
    loader_resize();
});
$(window).load(function () {
    loader_clear();
    loader_ani_create();
    loader_dat_create();
    $(window).trigger('resize');
});
//#####################################
var loader_active = false;
var loader_sturbles = [
    {
        'form':'tri',
        'rgba':'rgba(100,220,30,0.5)',
        'id':'',
        'maxspeed':10,
        'curspeed':0,
        'accel':0.5,
        'currot':0,
        'revend':false
    },
    {
        'form':'tri',
        'rgba':'rgba(250,220,5,0.5)',
        'id':'',
        'maxspeed':15,
        'curspeed':0,
        'accel':0.5,
        'currot':0,
        'revend':true
    },
    {
        'form':'tri',
        'rgba':'rgba(220,0,250,0.5)',
        'id':'',
        'maxspeed':10,
        'curspeed':0,
        'accel':0.2,
        'currot':0,
        'revend':true
    }
];
//#####################################
function loader_clear() {
    $('#b').html("");
}
function loader_resize(){
    $('#loader')
        .css({
            'top':(base_get_win_siz()[1]-$('#loader').height())/2+"px",
            'left':(base_get_win_siz()[0]-$('#loader').width())/2+"px"
        });
}
function loader_ani_create(){
    loader_active = true;
    var lo = ['<div id="loader"><div id="loader_wr">','</div></div>'];

    for(var i = 0; i < loader_sturbles.length;i++){
        loader_sturbles[i]['id'] = "sturb_"+i;
        lo[0] = lo[0] + '<div class="loader_wrap" id="sturb_'+i+'">';
        lo[0] = lo[0] + '<div class="'+loader_sturbles[i]['form']+'" style="border-bottom-color:'+loader_sturbles[i]['rgba']+'"></div>';
        lo[0] = lo[0] + '</div>';
    }

    lo[0] = lo[0] + lo[1];
    $('#b').html($('#b').html()+lo[0]);
}
function loader_dat_create() {
    var x = '<dl id="loaderdata"></dl>';
    $('#b').html($('#b').html()+x);
    base_data_update[base_data_update.length] = 'loader_dat_update';
}
function loader_dat_update() {
    var x = "";
    x = x + '<dt>IP Address:</dt><dd>'+base_data['ip']+'</dd>';
    x = x + '<dt>Mobile Dev:</dt><dd>'+base_data['is_mobile']+'</dd>';
    $('#loaderdata').html(x);
}
//#####################################
var loader_loop = setInterval(function () {
    for(var i = 0; i<loader_sturbles.length;i++){
        loader_sturbles[i]['curspeed'] = loader_sturbles[i]['curspeed'] + loader_sturbles[i]['accel'];
        loader_sturbles[i]['currot'] += loader_sturbles[i]['curspeed'];
        if(loader_sturbles[i]['currot'] >= 360){
            loader_sturbles[i]['currot'] = loader_sturbles[i]['currot']-360;
        }
        if(loader_sturbles[i]['revend']){
            if(loader_sturbles[i]['curspeed'] >= loader_sturbles[i]['maxspeed'] || loader_sturbles[i]['curspeed'] <= -loader_sturbles[i]['maxspeed']){
                loader_sturbles[i]['accel'] = -loader_sturbles[i]['accel'];
            }
        }
        else{
            if(loader_sturbles[i]['curspeed'] >= loader_sturbles[i]['maxspeed'] || loader_sturbles[i]['curspeed'] <= 0){
                loader_sturbles[i]['accel'] = -loader_sturbles[i]['accel'];
            }
        }

        base_rotate(loader_sturbles[i]['id'],loader_sturbles[i]['currot']);
    }
},40);

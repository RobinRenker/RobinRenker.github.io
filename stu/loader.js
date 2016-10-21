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
var loader_sleep = 15;
var loader_sturbles = [
    {
        'form':'loader_tri_1',
        'id':'',
        'maxspeed':4,
        'curspeed':0,
        'accel':0.02,
        'currot':0,
        'revend':false
    },
    {
        'form':'loader_tri_2',
        'id':'',
        'maxspeed':5,
        'curspeed':0,
        'accel':0.04,
        'currot':0,
        'revend':true
    },
    {
        'form':'loader_tri_3',
        'id':'',
        'maxspeed':4,
        'curspeed':0,
        'accel':0.05,
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
            'top':(base_window_size()[1]-$('#loader').height())/2+"px",
            'left':(base_window_size()[0]-$('#loader').width())/2+"px"
        });
}
function loader_ani_create(){
    loader_active = true;
    var lo = ['<div id="loader"><div id="loader_wr" class="mirror">','</div></div>'];

    for(var i = 0; i < loader_sturbles.length;i++){
        loader_sturbles[i]['id'] = "sturb_"+i;
        lo[0] = lo[0] + '<div class="loader_wrap" id="sturb_'+i+'">';
        lo[0] = lo[0] + '<div id="'+loader_sturbles[i]['form']+'" class="loader_tri"></div>';
        lo[0] = lo[0] + '</div>';
    }

    lo[0] = lo[0] + lo[1];
    $('#b').html($('#b').html()+lo[0]);
}
function loader_dat_create() {
    var x = '<dl id="loaderdata"></dl>';
    $('#b').html($('#b').html()+x);
}
function loader_dat_update() {
    var data_all = [base_data];
    var x = "";

    for(var i = 0; i<data_all.length;i++){
        $.each(data_all[i], function( index, value ) {
            x = x + '<dt>'+index+':</dt><dd>';
            if(typeof(value) == typeof({})){
                $.each(value,function (index2,value2) {
                    x = x + index2+":"+value2+";";
                });
                x = x + '</dd>';
            }
            else{
                x = x + value+'</dd>';
            }
        });
    }
    $('#loaderdata').html(x);
}
function loader_dat_get(arr) {
    for(var i = 0; i<arr.length;i++){
        $.each(arr[i], function( index, value ) {
            console.log(index+" "+value);
        });
    }
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

        //base_rotate(loader_sturbles[i]['id'],loader_sturbles[i]['currot'],"");
        base_rotate_old(loader_sturbles[i]['id'],loader_sturbles[i]['currot']);
    }
},loader_sleep);
var test = setInterval(function () {
    loader_dat_update();
},50);
var wheelTim = null;
//###################
function checkClipPath() {
    var base = 'clipPath',
        prefixes = [ 'webkit', 'moz', 'ms', 'o' ],
        properties = [ base ],
        testElement = document.createElement( 'testelement' ),
        attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';

    for ( var i = 0, l = prefixes.length; i < l; i++ ) {
        var prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 );
        properties.push( prefixedProperty );
    }
    for ( var i = 0, l = properties.length; i < l; i++ ) {
        var property = properties[i];
        if ( testElement.style[property] === '' ) {
            testElement.style[property] = attribute;
            if ( testElement.style[property] === '' ) {
                console.log("no clippath support!");
                var elements = document.getElementsByClassName("glitch");
                for (var y = 0; y < 3; y++) {
                    elements[1].className = "";
                }
            }
        }
    }
}
function scr(){
    var d = Math.round(document.getElementsByClassName("fly")[1].scrollTop / (window.innerHeight / 2));
    var cl = document.getElementsByClassName("fpv")[0].className;

    if(d >= 3 && d <= 5){
        if(cl.indexOf('show') == -1){
            document.getElementsByClassName("fpv")[0].className = cl+" show";
        }
    } else {
        document.getElementsByClassName("fpv")[0].className = cl.replace(" show", "");
    }
    console.log(d);
}
//###################
checkClipPath();
//Only animate on mouseover ... animations cause performance issues
document.getElementById("me").addEventListener("mouseenter",function () {
    this.className = this.className + " anim";
});
document.getElementById("me").addEventListener("mouseleave",function () {
    this.className = this.className.replace(" anim", "");
});
//Scrolling
window.addEventListener("wheel",scr);
window.addEventListener("touchmove",scr);
window.addEventListener("resize",scr);
//Scroll help
var doscs = document.getElementsByClassName('doscroll');
for(var i = 0; i < doscs.length; i++){
    doscs[i].onclick = function () {
        scTo(document.getElementsByClassName("fly")[1],this.className.split("ds_")[1]*window.innerHeight,200);
    }
}
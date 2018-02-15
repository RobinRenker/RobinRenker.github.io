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
function scTo(el, to, du) {
    var di = to - el.scrollTop;
    var pt = di /du * 10;
    setTimeout(function() {
        el.scrollTop = el.scrollTop + pt;
        if (el.scrollTop === to) return;
        scTo(el, to, du - 10);
    }, 10);
}
function scCo() {
    clearTimeout(wheelTim);
    wheelTim = setTimeout(function () {
        var el = document.getElementsByClassName("fly")[1];
        var d = el.scrollTop / window.innerHeight;
        var w = Math.round(d);
        if(w-d > -0.25 && w-d < 0.25){
            scTo(el,w*window.innerHeight,200);
        }
    },500);
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
window.addEventListener("wheel",scCo);
window.addEventListener("touchmove",scCo);
window.addEventListener("resize",scCo);
//Scroll help
var doscs = document.getElementsByClassName('doscroll');
for(var i = 0; i < doscs.length; i++){
    doscs[i].onclick = function () {
        scTo(document.getElementsByClassName("fly")[1],this.className.split("ds_")[1]*window.innerHeight,200);
    }
}
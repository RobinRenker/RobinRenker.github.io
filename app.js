var scrCorTim = null;
//###################
function scr(i) {
    animScr(document.getElementsByClassName("fly")[1],window.innerHeight*i,200,null);
}
function animScr(el,aim,dur,speed) {
    if(dur != null){
        speed = (aim - el.scrollTop)/(dur / 10);
    }
    var interval = setInterval(function () {
        if(aim > el.scrollTop){
            if(aim < el.scrollTop + speed){
                el.scrollTop = aim;
            } else {
                el.scrollTop = el.scrollTop + speed;
            }
        } else if (aim < el.scrollTop) {
            if(aim > el.scrollTop - speed){
                el.scrollTop = aim;
            } else {
                el.scrollTop = el.scrollTop - speed;
            }
        } else {
            clearInterval(interval);
        }
    },10);
}
function checkClipPath() {
    var base = 'clipPath',
        prefixes = [ 'webkit', 'moz', 'ms', 'o' ],
        properties = [ base ],
        testElement = document.createElement( 'testelement' ),
        attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';

    for ( var i = 0, l = prefixes.length; i < l; i++ ) {
        var prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 ); // remember to capitalize!
        properties.push( prefixedProperty );
    }
    for ( var i = 0, l = properties.length; i < l; i++ ) {
        var property = properties[i];
        if ( testElement.style[property] === '' ) {
            testElement.style[property] = attribute;
            if ( testElement.style[property] === '' ) {
                var elements = document.getElementsByClassName("glitch");
                for (var y = 0; y < 4; y++) {
                    elements[0].className = "";
                }
            }
        }
    }
}
//###################
document.getElementsByClassName('fly')[1].addEventListener("scroll", function () {
    clearTimeout(scrCorTim);
    scrCorTim = setTimeout(function () {
        var el = document.getElementsByClassName("fly")[1];
        var aim = Math.round(el.scrollTop / window.innerHeight)*window.innerHeight;
        var maxdif = window.innerHeight*0.2;
        if(el.scrollTop - aim < maxdif && el.scrollTop - aim > -maxdif){
            animScr(el,aim,null,8);
        }
    },500);
});
//###################
checkClipPath();

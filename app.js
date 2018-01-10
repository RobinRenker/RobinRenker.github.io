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
//###################
document.getElementsByClassName('fly')[1].addEventListener("scroll", function () {
    clearTimeout(scrCorTim);
    scrCorTim = setTimeout(function () {
        var el = document.getElementsByClassName("fly")[1];
        var aim = Math.round(el.scrollTop / window.innerHeight)*window.innerHeight;
        animScr(el,aim,null,8);
    },1000);
});
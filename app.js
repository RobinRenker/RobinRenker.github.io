var i = 0;

function spawn() {
    var or = Math.round(Math.random() * 360);

    var el = document.createElement("div");

    el.className = "rail";
    el.id = "bean"+i;
    i++;
    el.style.transform = 'rotate('+or+'deg)';
    el.innerHTML = createBean();
    document.getElementsByClassName("beans")[0].appendChild(el);
    setTimeout(function () {document.getElementById(el.id).remove()},3000);
}

function createBean() {
    var hexnum = function () {
        var r = Math.round(Math.random()*255).toString(16);
        if(r.length == 1){
            r = "0"+r;
        }
        return r;
    }
    var col = "#"+hexnum()+hexnum()+hexnum();
    var p1 = '<svg width="100" height="100" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M25 25 C 40 50, 60 65, 75 75" stroke-width="50" stroke="black" fill="transparent" stroke-linecap="round"/><path d="M25 25 C 40 50, 60 65, 75 75" stroke-width="40" stroke="';
    var p2 = '" fill="transparent" stroke-linecap="round"/></svg>';
    return p1+col+p2;
}
document.getElementById("icecreamcone").onclick = function () {
    spawn();
};

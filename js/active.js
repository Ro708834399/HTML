//点击下选框显示
function select_down() {
    var x = document.getElementById("select_down_contain");
    if (x.style.opacity == "0") {
        x.style.animation = "select_come 0.2s"
        x.style.opacity = "1";
        x.style.top = "48";
    } else {
        x.style.animation = "select_back 0.2s"
        x.style.opacity = "0";
    }
}
//移动图标变色

function select_over() {
    document.getElementById("down").src = "images/down1.png";
}

function select_out() {
    document.getElementById("down").src = "images/down.png";
}

function phone_over() {
    document.getElementById("phone").src = "images/phone1.png";
}

function phone_out() {
    document.getElementById("phone").src = "images/phone.png";
}

function f_over() {
    document.getElementById("F").src = "images/f1.png";
}

function f_out() {
    document.getElementById("F").src = "images/f.png";
}

function s_over() {
    document.getElementById("S").src = "images/S1.png";
}

function s_out() {
    document.getElementById("S").src = "images/S.png";
}

function g_over() {
    document.getElementById("G").src = "images/g1.png";
}

function g_out() {
    document.getElementById("G").src = "images/g.png";
}
//点击下选框显示
function login_down() {
    var x = document.getElementById("client_contain");
    if (x.style.display == "none") {
        x.style.animation = "come 0.4s";
        x.style.marginTop = "20px";
        x.style.display = "block";
    } else {
        x.style.animation = "back 0.4s";
        x.style.marginTop = "80px";
        setTimeout(function() { x.style.display = "none"; }, 400);
    }
}
window.onload = function() {
    var cuscoms = document.getElementById('cus_coms');
    var btnLeft = document.getElementById('btnLeft');
    var btnRight = document.getElementById('btnRight');

    // 定义一个变量x，记录x轴的位置
    var x = 0;
    // 将slider_content中的图片复制一次
    cuscoms.innerHTML += cuscoms.innerHTML;

    btnLeft.onclick = function() {
        if (x == -1728) { //假如图片移动到最后一个时，将x设置为0；
            // 添加鼠标点击事件
            cuscoms.style.transitionDuration = '';
            x = 0;
            cuscoms.style.left = 0 + 'px';

        } else {
            // 添加鼠标点击事件
            cuscoms.style.transition = 'left 1s';
            x -= 576; //图片沿x轴方向向左移动400px
            cuscoms.style.left = x + 'px'; //图片左移
        }
    }

    btnRight.onclick = function() {
        if (x == 0) {
            x = -1728;
        }
        x += 576;
        cuscoms.style.left = x + 'px';
    }
}
// 设置轮播图的界面
let imglist = document.getElementById("imglist");
let imgArr = document.querySelectorAll("#imglist li img")
imglist.style.width = 1590 * imgArr.length + "px";
let imgNav = document.getElementById("imgNav");
let timer;
let dmBox = document.getElementById("dmBox");
let firstSt = document.documentElement.scrollTop;
let ausTitle = document.getElementById("ausTitle");
let aus = document.getElementsByName('aus');
let imgBox = document.getElementById("rightAusImgbox");
let tag = document.getElementsByClassName("tag");
let pjLeftBox = document.getElementById("pjLeftBox");
let pjRightTop = document.getElementById("pjRightTop");
let pjRightBottomBox = document.getElementById("pjRightBottomBox");
let names = document.getElementsByName("names");
imgNav.style.left = ((dmBox.offsetWidth - imgNav.offsetWidth) / 2) + "px";
let index = 0;
let allA = imgNav.querySelectorAll("#imgNav a");
allA[index].style.backgroundColor = "black";
// 设置鼠标悬停时切换图片并停止播放，移开时继续播放的效果
for (let i = 0; i < allA.length; i++) {
    allA[i].num = i;
    allA[i].onmouseover = function() {
        clearInterval(timer);
        index = this.num;
        imglist.style.left = -1590 * index + "px";
        setA();
    }
    allA[i].onmouseout = function() {
        autoChange();
    }
}
autoChange();
// 设置导航条样式
function setA() {
    if (index == (imgArr.length - 1)) {
        index = 0;
        imglist.style.left = 0;
    }
    for (let i = 0; i < allA.length; i++) {
        allA[i].style.backgroundColor = "";
        allA[i].style.width = "";
    }
    allA[index].style.backgroundColor = "black";
    allA[index].style.width = 50 + 'px';
}
// 设置轮播图自动切换图片
function autoChange() {
    timer = setInterval(function() {
        index++;
        move(imglist, "left", -1590 * index, 250, () => { setA(); })
    }, 5000)
}

function move(obj, attr, target, speed, callback) {
    // 关闭上一个定时器
    // clearInterval(timer);
    // 获取元素原来的属性值
    let current = parseInt(getStyle(obj, attr));
    // 判断速度的正负值
    if (current > target) {
        speed = -speed;
    }
    // 开启一个定时器，用来执行动画效果
    obj.objtimer = setInterval(() => {
        // 获取元素原来的属性值
        let oldValue = parseInt(getStyle(obj, attr));
        // 在旧值的基础上增加
        let newValue = oldValue + speed;
        if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
            newValue = target;
        }
        obj.style.left = newValue + 'px';
        if (newValue == target) {
            clearInterval(obj.objtimer);
            callback && callback();
        }
    }, 30)
}

function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];
    }
}


let xueyuan = document.getElementById("xySystem")
xySystem.onclick = function() {
    alert("即将上线,敬请期待!");
}


let backToTop = document.getElementById("backToTop");


function setbackToTop() {
    backToTop.style.display = "none";
}
setbackToTop();
backToTop.onclick = () => {
    document.documentElement.scrollTop = 0;
}

if (firstSt > 339) {
    ausTitle.style.animation = 'aus 1s linear forwards';
    aus[0].style.animation = 'aus 1.8s linear forwards';
    aus[1].style.animation = 'aus 1.8s linear forwards';
}
if (firstSt > 678) {
    imgBox.style.animation = 'picMove 1.5s ease forwards';
}
if (firstSt > 791) {
    tag[0].style.animation = "cxmove 1s linear forwards,float .5s .14s linear forwards infinite alternate";
    tag[1].style.animation = "nqmove 1s linear forwards, float .85s .14s linear forwards infinite alternate";
    tag[2].style.animation = "zhmove 1s linear forwards, float .6s .14s linear forwards infinite alternate";
    tag[3].style.animation = "fxrmove 1s linear forwards, float .7s .14s linear forwards infinite alternate";
    tag[4].style.animation = "hkmove 1s linear forwards, float 1.4s .14s linear forwards infinite alternate";
    tag[5].style.animation = "bmmove 1s linear forwards, float 1.2s .14s linear forwards infinite alternate";
    tag[6].style.animation = "rcmove 1s linear forwards, float .7s .14s linear forwards infinite alternate";
    tag[7].style.animation = "jsmove 1s linear forwards, float .9s .14s linear forwards infinite alternate";
}
if (firstSt > 1808) {
    pjLeftBox.style.animation = 'moveright 1s linear forwards';
    pjRightTop.style.animation = 'movedown 1s linear forwards';
    pjRightBottomBox.style.animation = 'moveleft 1s linear forwards';
}
if (firstSt > 2475) {
    for (let i = 0; i < names.length; i++) {
        names[i].style.animationPlayState = 'running';
    }
}
for (let i = 23; i < names.length; i++) {
    names[i].style.opacity = 0.5;
}


window.onscroll = function() {
    if (document.documentElement.scrollTop < 958) {
        backToTop.style.display = "none";

    } else {
        backToTop.style.display = "";
    }
    let St = document.documentElement.scrollTop;
    if (St > 339) {
        ausTitle.style.animation = 'aus 1s linear forwards';
        aus[0].style.animation = 'aus 1.8s linear forwards';
        aus[1].style.animation = 'aus 1.8s linear forwards';
    }
    if (St > 678) {
        imgBox.style.animation = 'picMove 1.5s ease forwards';
    }
    if (St > 791) {
        tag[0].style.animation = "cxmove 1s linear forwards,float .5s .14s linear forwards infinite alternate";
        tag[1].style.animation = "nqmove 1s linear forwards, float .85s .14s linear forwards infinite alternate";
        tag[2].style.animation = "zhmove 1s linear forwards, float .6s .14s linear forwards infinite alternate";
        tag[3].style.animation = "fxrmove 1s linear forwards, float .7s .14s linear forwards infinite alternate";
        tag[4].style.animation = "hkmove 1s linear forwards, float 1.4s .14s linear forwards infinite alternate";
        tag[5].style.animation = "bmmove 1s linear forwards, float 1.2s .14s linear forwards infinite alternate";
        tag[6].style.animation = "rcmove 1s linear forwards, float .7s .14s linear forwards infinite alternate";
        tag[7].style.animation = "jsmove 1s linear forwards, float .9s .14s linear forwards infinite alternate";
    }
    if (St > 1808) {
        pjLeftBox.style.animation = 'moveright 1s linear forwards';
        pjRightTop.style.animation = 'movedown 1s linear forwards';
        pjRightBottomBox.style.animation = 'moveleft 1s linear forwards';
    }
    if (St > 2475) {
        for (let i = 0; i < names.length; i++) {
            names[i].style.animationPlayState = 'running';
        }
    }
}
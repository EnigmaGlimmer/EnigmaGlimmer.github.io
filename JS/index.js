var loader = document.getElementById("preloader");
var preloaderremove = document.getElementsByClassName("preloaderremove");
var preloaderhide = document.getElementsByClassName(".preloaderhide");

setTimeout(function () {
    loader.classList.add("preloaderremove");
}, 1000);
setTimeout(function () {
    loader.classList.add("preloaderhide");
}, 1005);

var typed = new Typed("#element", {
    strings: ["Web Developer", "Full Stack Developer"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: Infinity,
});

$(window).on("mousemove", function (e) {
    $("#cursor").css("top", `${e.clientY}px`);
    $("#cursor").css("left", `${e.clientX}px`);
});
$("a").on("mouseleave", function () {
    $("#cursor").removeClass("cursor-big");
});
$("a").on("mouseenter", function () {
    $("#cursor").addClass("cursor-big");
});

$(".contactform").on("mouseleave", function () {
    $("#cursor").removeClass("black");
});
$(".contactform").on("mouseenter", function () {
    $("#cursor").addClass("black");
});
$(window).scroll(function (event) {
    var sc = $(window).scrollTop();
    if (sc > 40) {
        $("nav").addClass("hide");
        $(".bottomnavbar").removeClass("hide");
    } else {
        $("nav").removeClass("hide");
        $(".bottomnavbar").addClass("hide");
    }
    if (sc < 3981) {
        $("#icon-scroll").css("margin-top", `77vh`);
    }
    else {
        $("#icon-scroll").css("margin-top", `71vh`);
    }
});
let html = 0,
    css = 0,
    js = 0,
    php=0,
    jq = 0,
    react = 0,
    c = 0,
    ccc = 0,
    git = 0,
    express =0,
    nodejs =0,
    mysql = 0,
    mongodb =0,
    postgresql =0,
    angular = 0,
    ruby =0 ,
    sass = 0,
    typescript = 0,
    python = 0;
let numberhtml = document.getElementById("html");

setInterval(() => {
    if (html == 100) {
        clearInterval();
    } else {
        html += 1;
        numberhtml.innerHTML = html + "%";
    }
}, 30);

let numbercss = document.getElementById("css");
setInterval(() => {
    if (css == 100) {
        clearInterval();
    } else {
        css += 1;
        numbercss.innerHTML = css + "%";
    }
}, 30);

let numberjs = document.getElementById("javascript");
setInterval(() => {
    if (js == 100) {
        clearInterval();
    } else {
        js += 1;
        numberjs.innerHTML = js + "%";
    }
}, 30);

let numberphp = document.getElementById("php");
setInterval(() => {
    if (php == 95) {
        clearInterval();
    } else {
        php += 1;
        numberphp.innerHTML = php + "%";
    }
}, 30);

let numberjq = document.getElementById("jQurey");
setInterval(() => {
    if (jq == 100) {
        clearInterval();
    } else {
        jq += 1;
        numberjq.innerHTML = jq + "%";
    }
}, 30);

let numberreact = document.getElementById("react");
setInterval(() => {
    if (react == 80) {
        clearInterval();
    } else {
        react += 1;
        numberreact.innerHTML = react + "%";
    }
}, 30);

let number = document.getElementById("c");
setInterval(() => {
    if (c == 95) {
        clearInterval();
    } else {
        c += 1;
        number.innerHTML = c + "%";
    }
}, 30);

let numberccc = document.getElementById("ccc");
setInterval(() => {
    if (ccc == 95) {
        clearInterval();
    } else {
        ccc += 1;
        numberccc.innerHTML = ccc + "%";
    }
}, 30);

let numbergit = document.getElementById("git");
setInterval(() => {
    if (git == 98) {
        clearInterval();
    } else {
        git += 1;
        numbergit.innerHTML = git + "%";
    }
}, 30);

let numberexpress = document.getElementById("express");
setInterval(() => {
    if (express == 90) {
        clearInterval();
    } else {
        express += 1;
        numberexpress.innerHTML = express + "%";
    }
}, 30);

let numbernodejs = document.getElementById("nodejs");
setInterval(() => {
    if (nodejs == 95) {
        clearInterval();
    } else {
        nodejs += 1;
        numbernodejs.innerHTML = nodejs + "%";
    }
}, 30);

let numbermysql = document.getElementById("mysql");
setInterval(() => {
    if (mysql == 100) {
        clearInterval();
    } else {
        mysql += 1;
        numbermysql.innerHTML = mysql + "%";
    }
}, 30);

let numbermongodb = document.getElementById("mongodb");
setInterval(() => {
    if (mongodb == 95) {
        clearInterval();
    } else {
        mongodb += 1;
        numbermongodb.innerHTML = mongodb + "%";
    }
}, 30);

let numberpostgresql = document.getElementById("postgresql");
setInterval(() => {
    if (postgresql == 95) {
        clearInterval();
    } else {
        postgresql += 1;
        numberpostgresql.innerHTML = postgresql + "%";
    }
}, 30);


let numberangular = document.getElementById("angular");
setInterval(() => {
    if (angular == 85) {
        clearInterval();
    } else {
        angular += 1;
        numberangular.innerHTML = angular + "%";
    }
}, 30);

let numberruby = document.getElementById("ruby");
setInterval(() => {
    if (ruby == 85) {
        clearInterval();
    } else {
        ruby += 1;
        numberruby.innerHTML = ruby + "%";
    }
}, 30);

let numbersass = document.getElementById("sass");
setInterval(() => {
    if (sass == 90) {
        clearInterval();
    } else {
        sass += 1;
        numbersass.innerHTML = sass + "%";
    }
}, 30);

let numbertypescript = document.getElementById("typescript");
setInterval(() => {
    if (typescript == 85) {
        clearInterval();
    } else {
        typescript += 1;
        numbertypescript.innerHTML = typescript + "%";
    }
}, 30);

let numberpython = document.getElementById("python");
setInterval(() => {
    if (python == 85) {
        clearInterval();
    } else {
        python += 1;
        numberpython.innerHTML = python + "%";
    }
}, 30);



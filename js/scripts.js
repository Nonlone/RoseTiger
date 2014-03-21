/**
  Index Script
*/

function setProgress(precentage) {
    var charWidth = 75;
    if (precentage > 100) {
        return charWidth;
    }
    var width = precentage / 100 * charWidth;
    $(".textFront.char1").css("width", width + "px");
    $(".textFront.char2").css("width", width + "px");
    $(".textFront.char3").css("width", width + "px");
    $(".textFront.char4").css("width", width + "px");
    return width;
}

$(document).ready(function() {
    //render hook

    //scroll one page
    $("#main").onepage_scroll({
        sectionContainer: "section", // 标记标签
        easing: "ease", // 动画模式 有"ease", "linear", "ease-in", "ease-out", "ease-in-out"
        animationTime: 1000, //动画时间
        pagination: true, // 展示导航
        updateURL: false, // 是否更新url  		
        loop: false, // 时候循环展示
        responsiveFallback: 600 // 响应式宽度布局，小于此值不表示
    });

    var head = document.getElementsByTagName("head").item(0);
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.onload = function() {

        var windowHeight = $(window).height() + 20;
        var windowWidth = $(window).width();
        //init timeline
        createStoryJS({
            type: 'timeline',
            width: windowWidth,
            height: windowHeight,
            source: timelineData,
            embed_id: 'timeline'
        });

        var navNextLeft = $(".nav-next").css("left");
        console.log(navNextLeft);
    }
    script.setAttribute("src", "http://cdn.knightlab.com/libs/timeline/latest/js/storyjs-embed.js");
    head.appendChild(script);


    $(".collapse").on("show.bs.collapse", function() {
        console.log("collapse show");
    });


    /*
    //control-box
    $(".controller").hover(function() {

        $(".controller").css("background", "#808080");

        $(this).css("background", "#ffffff").prev("p").fadeIn(100);

        if ($(this).is("#go_home")) {
            $("#text_home").show();
        } else if ($(this).is("#go_work")) {
            $("#text_work").show();
        } else if ($(this).is("#go_about")) {
            $("#text_about").show();
        } else if ($(this).is("#go_contact")) {
            $("#text_contact").show();
        }

    });

    $(".controller").mouseleave(function() {
        $(".btn-text").fadeOut(100);
    });


    //发Email
    $("#sendmail").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var text = $("#text").val();
        $(this).attr("href", "mailto:team@rose-tiger.com?subject=Re:标题&body=" + name + email + text);
    });
    */

});
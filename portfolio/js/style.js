//-------------------------------------
// TOPの全画面背景をウィンドウサイズにあわせる
//-------------------------------------
var winH = $(window).height();
$('.box').outerHeight(winH);
 
$(window).on('load',function(){
    winH = $(window).height();
    $('.box').outerHeight(winH);
    setBgImg($('.fitImg'));
});
 
$(window).on('resize',function(){
    winH = $(window).height();
    $('.box').outerHeight(winH);
    setBgImg($('.fitImg'));
});

function setBgImg(object){
    //画像サイズ取得
    var imgW = object.width();
    var imgH = object.height();
        
    //ウィンドウサイズ取得
    var winW = $(window).width();
    var winH = $(window).height();  
    
    //幅・高さの拡大率取得
    var scaleW = winW / imgW;
    var scaleH = winH / imgH;
 
    //幅・高さの拡大率の大きいものを取得
    var fixScale = Math.max(scaleW, scaleH);

    //画像の幅高さを設定
    var setW = imgW * fixScale;
    var setH = imgH * fixScale;
 
    //画像の位置を設定
    var moveX = Math.floor((winW - setW) / 2);
    var moveY = Math.floor((winH - setH) / 2);
 
    //設定した数値でスタイルを適用
    object.css({
        'width': setW,
        'height': setH,
        'left' : moveX,
        'top' : moveY
    });     
}


/*------------------------------------------*
* global nav
*------------------------------------------*/
$( window ).on( 'scroll', function() {
    if ( winH < jQuery( this ).scrollTop() ) {
        jQuery( 'body' ).css( 'padding-top', 80 );      // 80:headerの高さ  
        jQuery( '#global-nav' ).addClass( 'm_fixed' );
    } else {
        jQuery( 'body' ).css( 'padding-top', 0 );
        jQuery( '#global-nav' ).removeClass( 'm_fixed' );
    }
});


function changeColor() {
    var timing = 40; // 変化するタイミングを微調整する
  
    var scrollY = window.pageYOffset;
    // var body = document.body;
    var body = document.global_item;
  
    var trigger1 = document.getElementById('about');
    var trigger2 = document.getElementById('service');
    var trigger3 = document.getElementById('works');
    var trigger4 = document.getElementById('contact');
  
    var trigger1Y = trigger1.getBoundingClientRect().top;
    var trigger2Y = trigger2.getBoundingClientRect().top;
    var trigger3Y = trigger3.getBoundingClientRect().top;
    var trigger4Y = trigger4.getBoundingClientRect().top;
  
    var navAbout    = document.getElementById("nav_about");
    var navService  = document.getElementById("nav_service");
    var navWorks    = document.getElementById("nav_works");
    var navContact  = document.getElementById("nav_contact");

    var doch = $(document).innerHeight(); //ページ全体の高さ
    var winh = $(window).innerHeight(); //ウィンドウの高さ
    var bottom = doch - winh; //ページ全体の高さ - ウィンドウの高さ = ページの最下部位置
    
    var activeColor = "rgba(202,151,13,255)";
    var inactiveColor = "rgba(202,151,13,0)";

    // 先に一番下の条件を判定する_
    if (trigger4Y - timing < 0 || bottom - timing <= $(window).scrollTop()) {
        navAbout.style.backgroundColor = inactiveColor;
        navService.style.backgroundColor = inactiveColor;
        navWorks.style.backgroundColor = inactiveColor;
        navContact.style.backgroundColor = inactiveColor;
        navContact.style.backgroundColor = activeColor;
    }
    else if(trigger2Y - timing > 0 && 0 >= trigger1Y - timing) {    
        navAbout.style.backgroundColor = activeColor;
        navService.style.backgroundColor = inactiveColor;
        navWorks.style.backgroundColor = inactiveColor;
        navContact.style.backgroundColor = inactiveColor;
    }
    else if(trigger3Y - timing > 0 && 0 >= trigger2Y - timing) {
        navAbout.style.backgroundColor = inactiveColor;
        navService.style.backgroundColor = activeColor;
        navWorks.style.backgroundColor = inactiveColor;
        navContact.style.backgroundColor = inactiveColor;
    } 
    else if(trigger4Y - timing > 0 && 0 >= trigger3Y - timing) {
        navAbout.style.backgroundColor = inactiveColor;
        navService.style.backgroundColor = inactiveColor;
        navWorks.style.backgroundColor = activeColor;
        navContact.style.backgroundColor = inactiveColor;
    }
    else {  
        navAbout.style.backgroundColor = inactiveColor;
        navService.style.backgroundColor = inactiveColor;
        navWorks.style.backgroundColor = inactiveColor;
        navContact.style.backgroundColor = inactiveColor;
        navContact.style.backgroundColor = inactiveColor;
    }

}
window.addEventListener('scroll', changeColor);

// スムーススクロール_
$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

// フェードトップボタン_
jQuery(function() {
    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });
});

// 下からフェードイン
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});


// 読み込んだらフェードアウト
$(function() {
    // 消えるタイミング
    $('.loading').delay(1500).fadeOut(500);
});

// 10秒待っても読み込みが終わらない時は強制的にローディング画面をフェードアウト
function stopload(){
    $('.loading').delay(1000).fadeOut(700);
}
setTimeout('stopload()',10000);


// ハンバーガーメニュー
(function($) {
    $(function(){
        $('.menu-btn').on('click', function(){
            $('.menu').toggleClass('is-active');
        }); 
    });
})(jQuery);
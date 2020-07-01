/*------------------------------------------*
* ハンバーガーメニュー切り替え処理
*------------------------------------------*/
$(function(){
    $(".btn-gnav").on("click", function(){
        // ハンバーガーメニューの位置を設定
        var rightVal = 0;
        if($(this).hasClass("open")) {
            // 位置を移動させメニューを開いた状態にする
            rightVal = -300;
            $(this).removeClass("open");
        } else {
            $(this).addClass("open");
        }
 
        $("#global-nav").stop().animate({
            right: rightVal
        }, 200);
    });
});


/*------------------------------------------*
* スムーススクロール
* ナビメニュータップ時のアニメーション
*------------------------------------------*/
$(function(){
    $('a[href^="#"]').click(function(){
        var navOffset = 280;
        // if ( winW < window.innerWidth ) {
        //     navOffset = 92;     // ナビバー用の調整値_
        // }

        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - navOffset;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
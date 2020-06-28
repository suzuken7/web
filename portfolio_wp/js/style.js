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



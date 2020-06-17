/*------------------------------------------*
* メインヴィジュアルフェード処理
*------------------------------------------*/
$(function() {
    $('#slides').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        speed: 1000,
        fade: true,
        arrows: false,
    });
});


/*------------------------------------------*
* ナビゲーションバー固定処理
*------------------------------------------*/
$( window ).on( 'scroll', function() {
    var winH = 550; // メインビジュアルのサイズ_   
    if ( winH < jQuery( this ).scrollTop() ) {
        jQuery( 'body' ).css( 'padding-top', 100);  
        jQuery( '#gNav' ).addClass( 'fixed' );
    } else {
        jQuery( 'body' ).css( 'padding-top', 0 );
        jQuery( '#gNav' ).removeClass( 'fixed' );
    }
});

/*------------------------------------------*
* スムーススクロール
* ナビメニュータップ時のアニメーション
*------------------------------------------*/
$(function(){
    $('a[href^="#"]').click(function(){
        var navOffset = 92;     // ナビバー用の調整値_
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - navOffset;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});


/*------------------------------------------*
* 特徴タブ切り替え処理
*------------------------------------------*/
$(function() {
    $('.feature__tab').click(function() {
        // 変更した文字色をリセット_
        $('.feature__tab.is-active').css({
            'color': '#ffffff'
        });

        $('.is-active').removeClass('is-active');
        $(this).addClass('is-active');
        $('.is-show').removeClass('is-show');
        // クリックしたタブからインデックス番号を取得
        const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
        $('.feature__panel').eq(index).addClass('is-show');

        switch (index) {
            case 0: // 特徴1
                ChangeBorderColor('#ff9000');
                break;
            case 1: // 特徴2
                ChangeBorderColor('#3ebc01');
                break;
            case 2: // 特徴3
                ChangeBorderColor('#1e1efc');
                break;
            case 3: // 特徴4
                ChangeBorderColor('#fc1e77');
                break;
        } 
    });
});

// ボーダーと文字の色変え用_
function ChangeBorderColor (colorCode) {
    $('.feature__panel_group').css({
        'border-color' : colorCode
    }); 
    
    // 「特徴」の文字色を変更_
    $('.feature__tab.is-active').css({
        'color': colorCode
    });
}


/*------------------------------------------*
* コンセプト画像切り替え処理
*------------------------------------------*/
function ChangeImg(url,e) {
    document.getElementById("img").src = url;
    let nodes = document.getElementById("thumb_img");
    let img_child = nodes.children;
    for (i = 0; i < img_child.length; i++) {
        img_child[i].classList.remove('active')
    }
    e.classList.add('active');
}


/*------------------------------------------*
* 均等割り付け
*------------------------------------------*/
$(function(){
    $('.justify').justify();
});
    

/*------------------------------------------*
* パララックス処理
*------------------------------------------*/
$(function(){
    
    let scrollPosi = 0;

    $(window).scroll(function () {
        scrollPosi = $(document).scrollTop();
        
        $('#parallax').stop(true, true).animate({
            'background-position-y': -scrollPosi / 6 + 'px'
        }, 100);
    });
 
});


/*------------------------------------------*
* トップ矢印フェード処理
* 100px進んだらふわっと浮き上がる
*------------------------------------------*/
$(function() {
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
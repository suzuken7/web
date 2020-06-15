/*------------------------------------------*
* メインヴィジュアルフェード処理
*------------------------------------------*/
$(function() {
    $("#slides").responsiveSlides();
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


$('.top_slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    pauseOnFocus: false,//フォーカスで一時停止
    pauseOnHover: false,//マウスホバーで一時停止
    pauseOnDotsHover: false,
    prevArrow: '<img src="assets/img/top/left_arrow.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="assets/img/top/right_arrow.svg" class="slide-arrow next-arrow">',
    responsive:[{
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      }]
});

$('.img_slider').slick({
    autoplay: true, //自動でスクロール
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 5000, //スライドが流れる速度を設定
    cssEase: "linear", //スライドの流れ方を等速に設定
    slidesToShow: 3, //表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, //矢印非表示
    pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false,
});

$('.serv01_slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    pauseOnFocus: false,//フォーカスで一時停止
    pauseOnHover: false,//マウスホバーで一時停止
    pauseOnDotsHover: false,
    rtl: true,
    nextArrow: '<img src="../assets/img/service/service_arrow.svg" class="slide-arrow next-arrow">',
    responsive:[{
        breakpoint: 767,
        settings: {
          slidesToShow: 1.5,
        }
      }]
});

$('.title_slider').slick({
    autoplay: true, //自動でスクロール
    autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
    speed: 5000, //スライドが流れる速度を設定
    cssEase: "linear", //スライドの流れ方を等速に設定
    slidesToShow: 3, //表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, //矢印非表示
    pauseOnFocus: false, //スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false,
});
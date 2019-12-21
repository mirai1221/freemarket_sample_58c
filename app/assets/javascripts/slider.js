$(document).on('turbolinks:load',function() {
  $('.toppage-slider__wrapper').slick({
  // ドットにクラスを追加
    dotsClass: 'slide-dots',
    // ドットを追加する要素を指定
    appendDots: $('.toppage-slider'),
    // スライダー矢印の指定
    prevArrow:'<i class="fas fa-chevron-left", id="prev-arrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right", id="next-arrow"></i>',
    // ドットの有無 インジケーター
    dots: true,
    // 自動再生
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
});

// ドットの操作
  $('.slide-dots li').on('mouseover', function() {
    $('.slider').slick('goTo', $(this).index());
  });
// ボタンスライド
  $('.toppage-main__logo').click(function(){
    alert("あああ")
  })

});
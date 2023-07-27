const swiper = new Swiper(".swiper", {
	loop: true, // ループ有効
  slidesPerView: 3, // 一度に表示する枚数
  spaceBetween: 30,// 画像の間にスペースあける。
	speed: 5000, // ループの時間
	allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }

});
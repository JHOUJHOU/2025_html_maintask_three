import './assets/scss/all.scss';

import './assets/js/collect';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.2,
      spaceBetween: 10,
      breakpoints: {
        375: {
          slidesPerView: 4,
          spaceBetween: 40,
        }
      },
});

const swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: "auto",
      spaceBetween: 10,
});


AOS.init();

AOS.init({
  // 全局設置：
  disable: false, // 禁用 AOS，可接受值：'phone', 'tablet', 'mobile', boolean, expression 或 function | 預設：false
  startEvent: 'DOMContentLoaded', // AOS 應該在哪個文檔事件上初始化 | 預設：'DOMContentLoaded'
  initClassName: 'aos-init', // 初始化後應用的類名 | 預設：'aos-init'
  animatedClassName: 'aos-animate', // 動畫時應用的類名 | 預設：'aos-animate'
  useClassNames: false, // 如果為 true，將 data-aos 的內容作為類添加 | 預設：false
  disableMutationObserver: false, // 禁用自動變異檢測（高級） | 預設：false
  debounceDelay: 50, // 調整窗口大小時的去抖延遲（高級） | 預設：50
  throttleDelay: 99, // 滾動頁面時的節流延遲（高級） | 預設：99

  // 可以通過 data-aos-* 屬性在每個元素基礎上覆蓋的設置：
  offset: 120, // 距離原始觸發點的偏移量（像素） | 預設：120
  delay: 0, // 延遲，值從 0 到 3000，步長為 50ms | 預設：0
  duration: 800, // 持續時間，值從 0 到 3000，步長為 50ms | 預設：400
  easing: 'ease', // AOS 動畫的默認緩動 | 預設：'ease'
  once: false, // 動畫是否應該只發生一次（向下滾動時） | 預設：false
  mirror: false, // 元素在滾動經過時是否應該反向動畫 | 預設：false
  anchorPlacement: 'top-bottom', // 定義元素相對於窗口的哪個位置應該觸發動畫 | 預設：'top-bottom'
});
<template>
  <div class="page-frame">
    <div class="title">
      <div class="title_name">
        <img src="../assets/img/Community.png" alt="" />
      </div>
      <div class="learnMore">
        <img src="../assets/img/LearnMore01.png" alt="" />
      </div>
    </div>
    <div class="examples">
      <div class="bannerBox">
        <div class="swiper-container swiper3">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in banner"
              :key="index"
            >
              <img :src="item.picture_path" alt="" />
              <img :src="item.icon_path" alt="" class="icon_btn" @click="changeIcon(index)" />
              <img :src="item.arrow_path" alt="" :class="['smallArrow', {changeIcon: index === bannerIndex ? changeArrow : ''}]">
            </div>
          </div>
        </div>
        <div class="m-dot-list" v-if="banner.length > 1">
          <div
            v-for="n of banner.length"
            :key="n"
            :class="['u-dot-item', { active: n - 1 === activeIndex }]"
            @mouseenter="onEnter(n - 1)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Pagination,
  Navigation,
} from "swiper";
Swiper.use([Autoplay, EffectCoverflow, EffectCube, Pagination, Navigation]);
import "swiper/swiper.min.css";
export default {
  data() {
    return {
      nodeType: "02",
      bannerIndex: 0,
      activeIndex: 0,
      timer: null,
      changeArrow: false,
      banner: [
        {
          picture_path: require("../assets/img/communityPic01.png"),
          icon_path: require("../assets/img/join.png"),
          arrow_path: require("../assets/img/smallArrow.png")
        },
        {
          picture_path: require("../assets/img/communityPic02.png"),
          icon_path: require("../assets/img/join.png"),
          arrow_path: require("../assets/img/smallArrow.png")
        },
        {
          picture_path: require("../assets/img/communityPic03.png"),
          icon_path: require("../assets/img/join.png"),
          arrow_path: require("../assets/img/smallArrow.png")
        },
        {
          picture_path: require("../assets/img/communityPic04.png"),
          icon_path: require("../assets/img/join.png"),
          arrow_path: require("../assets/img/smallArrow.png")
        },
        {
          picture_path: require("../assets/img/communityPic05.png"),
          icon_path: require("../assets/img/join.png"),
          arrow_path: require("../assets/img/smallArrow.png")
        },
        {
          picture_path: require("../assets/img/communityPic06.png"),
          icon_path: require("../assets/img/join.png"),
          arrow_path: require("../assets/img/smallArrow.png")
        },
        {
          picture_path: require("../assets/img/communityPic07.png"),
          icon_path: require("../assets/img/join.png"),
          arrow_path: require("../assets/img/smallArrow.png")
        },
        {
          picture_path: require("../assets/img/communityPic08.png"),
          icon_path: require("../assets/img/join.png"),
          arrow_path: require("../assets/img/smallArrow.png")
        },
      ],
    };
  },
  components: {},
  created() {},

  computed: {},

  mounted() {
    // let that = this;
    new Swiper(".swiper3", {
      direction: "horizontal", //滑动方向，可设置水平(horizontal)或垂直(vertical)。
      loop: true, // 设置为true 则开启loop模式
      autoplay: true, // 自动切换时间
      speed: 500, // 切换速度
      slidesPerView: "auto", // 设置slider容器能够同时显示的slides数量(carousel模式)。类型：number or auto
      centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
      spaceBetween: 28, // 在slide之间设置距离（单位px）。
      loopAdditionaSlider: 0, // loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });
    setTimeout(() => {
      this.onStart()
    }, 1000)
    window.onfocus = () => { // 页面激活
      this.onStart()
    }
    window.onblur = () => { // 页面失焦
      this.onStop()
    }
  },

  methods: {
    changeIcon(index) {
      this.bannerIndex = index
      this.changeArrow = !this.changeArrow
      console.log(this.changeArrow, '到底有没有变化');
    },
    onStart () {
      clearInterval(this.timer)
      if (this.banner.length > 1) {
        this.timer = setInterval(this.onMove, 3000)
      }
    },
    onStop () {
      clearInterval(3000)
    },
    onEnter (index) {
      clearInterval(3000)
      this.activeIndex = index
      this.onStart()
    },
    onMove () {
      if (this.activeIndex === this.banner.length - 1) {
        this.activeIndex = 0
      } else {
        this.activeIndex++
      }
    },
  },
};
</script>
<style lang='less' scoped>
.page-frame {
  margin: 0 50px 62px 52px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title_name {
      width: 230px;
      height: 45px;
      img {
        width: 100%;
      }
    }
    .learnMore {
      width: 105px;
      height: 23px;
      cursor: pointer;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      // text-decoration:underline
      img {
        width: 100%;
      }
    }
    .learnMore:hover {
      transform: scale(1.1);
    }
  }
  .examples {
    padding: 32px 50px 36px 42px;
    overflow: hidden;
  }
  .bannerTxt {
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #666666;
    font-size: 15px;
  }
  .bannerIndex {
    line-height: 40px;
    text-align: center;
    color: #666666;
    font-size: 15px;
    text-align: center;
    span {
      color: #b5654d;
    }
  }
  .bannerBox {
    position: relative;
    height: 564px;
  }
  .swiper3 {
    width: 100%;
    height: 100%;
  }
  .swiper3 .swiper-wrapper .swiper-slide {
    position: relative;
    width: 400px !important;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin-right: 20px !important;
  }
  .swiper3 .swiper-wrapper .swiper-slide img {
    width: 100%;
    height: 564px;
    border-radius: 5px;
  }
  .swiper3 .swiper-wrapper .swiper-slide .icon_btn {
    position: absolute;
    width: 102px;
    height: 42px;
    bottom: 20px;
    left: 20px;
    cursor: pointer;
  }
  .swiper3 .swiper-wrapper .swiper-slide .smallArrow {
    position: absolute;
    width: 18px;
    height: 10px;
    left: 85px;
    bottom: 36px;
  }
  .swiper3 .swiper-wrapper .swiper-slide .changeIcon {
    transform: scale(1.3);
  }
  .swiper3 .swiper-wrapper .swiper-slide-prev,
  .swiper3 .swiper-wrapper .swiper-slide-next {
    height: 564px !important;
    border-radius: 5px;
    // background: #000;
    // margin-top: 20px;
  }
  .swiper3 .swiper-wrapper .swiper-slide-prev img,
  .swiper3 .swiper-wrapper .swiper-slide-next img {
    opacity: 0.6;
    filter: alpha(opacity=60);
    width: 100%;
    height: 100%;
  }
  .swiper3 .swiper-pagination {
    color: #fff;
    -swiper-theme-color: #ff6600;
  }
  .m-dot-list {
    width: 100%;
    line-height: 2px;
    position: absolute;
    bottom: -36px;
    text-align: center;
    .u-dot-item { // 圆点样式
      display: inline-block;
      width: 52px;
      height: 2px;
      background: rgba(255, 255, 255, 0.2);;
      border-radius: 1px;
      vertical-align: bottom;
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
    .active { // 圆点选中样式
      background: rgba(255, 255, 255, 0.5);
      width: 104px;
    }
  }
}
</style>
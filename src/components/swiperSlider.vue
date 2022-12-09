<template>
  <div class="swiper-box">
    <swiper
      ref="mySwiper"
      :options="swiperOption"
      :class="{ 'swiper-no-swiping': disabledTouch }"
    >
      <swiper-slide v-for="(item, index) in data" :key="index">
        <slot v-bind:value="item" v-bind:index="index"></slot>
      </swiper-slide>
    </swiper>
    <!-- 自定义分页器 -->
    <div class="swiper-pagination tips" slot="pagination">
      <slot name="pagination" v-bind:imgIndex="imgIndex"></slot>
    </div>
  </div>
</template>
<!--自定义分页器模版-->
<!-- 常见的小圆点 -->
<!--      <div class="swiper-pagination"  v-for="(item,index) in data" :key="index" slot="pagination" ></div>-->
<!-- 显示数字 -->
<!--      <div class="number">{{imgIndex}}/{{data.length}}</div>-->
<script>
export default {
  name: "swiper-slider",
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
    options: {
      type: Object,
      default: () => {},
    },
    disabledTouch: {
      type: Boolean,
      defalut: false,
    },
  },
  watch: {
    options: {
      immediate: true,
      handler(n) {
        if (n) {
          this.swiperOption = {
            ...this.swiperOption,
            ...n,
          };
        }
      },
    },
  },
  data() {
    const that = this;
    return {
      imgIndex: 1,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "custom",
          bulletElement: "li",
        },
        loop: false,
        autoplay: {
          delay: 1500, // 自动播放的时长
          disableOnInteraction: false,
          stopOnLastSlide: false,
        },
        grabCursor: true,
        on: {
          //滑动之后回调函数
          slideChangeTransitionStart: function () {
            /* realIndex为滚动到当前的slide索引值 */
            that.imgIndex = this.realIndex + 1;
            that.change(that.imgIndex - 1);
          },
        },
        slidesPerView: 1.2, // 设置可视区一共显示几张图片,设置auto,设置auto为自适应;
        centeredSlides: true, // 设置为true时,带有active-slide类名的图片会居中
        spaceBetween: 20, //  每张图片之间的间隔
      },
    };
  },
  methods: {
    slideTo(num) {
      this.$refs.mySwiper.swiper.slideTo(num);
    },
    change(index) {
      this.$emit("change", index);
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-box {
  position: relative;
  .tips {
    display: flex;
    bottom: -40px;
    position: absolute;
    align-self: center;
    justify-content: center;

    .bottom-tip {
      width: 30px;
      height: 6px;
      background: #ebebeb;
      opacity: 0.5;
      border-radius: 3px;

      &:not(:first-of-type) {
        margin-left: 3px;
      }

      &.active {
        width: 20px;
        background: #626e89;
        opacity: 1;
      }
    }
  }
}
</style>

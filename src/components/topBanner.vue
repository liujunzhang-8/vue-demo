<template>
  <div class="m-banner-wrap" :style="`width: ${width}; height: ${height}`" v-if="bannerData.length">
    <div class="m-banner-list">
      <div
        class="u-banner-item fade"
        v-for="(item, index) in bannerData"
        :key="index"
        v-show="index===activeIndex"
        :style="`background: url(${item.imgUrl}) no-repeat center; background-size: 100% 100%`"
        @mouseenter="onStop" @mouseleave="onStart">
        <!-- <a :href="item.link" target="_blank"></a> -->
        <img src="../assets/img/topSearch.png" alt="" style="width: calc(100% - 92px); padding: 38px 20px 0 72px;">
      </div>
    </div>
    <div class="m-banner-learnMore" @click="learnMore">
      <img src="../assets/img/learnMore.png" alt="">
      <img src="../assets/img/arrow.png" alt="" :class="['arrow', {activeArrow: changeArrow}]">
    </div>
    <div class="m-dot-list" v-if="bannerData.length > 1">
      <div v-for="n of bannerData.length" :key="n" :class="['u-dot-item', {active: (n-1)===activeIndex}]" @mouseenter="onEnter(n-1)">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  props: {
    bannerData: { // banner数组
      type: Array,
      default: () => {
        return []
      }
    },
    interval: { // 切换间隔ms
      type: Number,
      default: 3000
    },
    width: { // 宽度
      type: String,
      default: '100%'
    },
    height: { // 高度
      type: String,
      default: '600px'
    }
  },
  data () {
    return {
      activeIndex: 0,
      timer: null,
      changeArrow: false
    }
  },
  mounted () {
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
    onStart () {
      clearInterval(this.timer)
      if (this.bannerData.length > 1) {
        this.timer = setInterval(this.onMove, this.interval)
      }
    },
    onStop () {
      clearInterval(this.timer)
    },
    onEnter (index) {
      clearInterval(this.timer)
      this.activeIndex = index
      this.onStart()
    },
    onMove () {
      if (this.activeIndex === this.bannerData.length - 1) {
        this.activeIndex = 0
      } else {
        this.activeIndex++
      }
    },
    learnMore() {
      this.changeArrow = !this.changeArrow
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>
<style lang="less" scoped>
@themeColor: rgba(255, 255, 255, 0.5);;
.m-banner-wrap {
  width: 100%;
  height: 600px;
  min-width: 100%;
  margin: 0 auto;
  // overflow-y: hidden;
  position: relative;
  z-index: 9;
  .m-banner-list {
    height: 100%;
    .u-banner-item {
      min-width: 1200px;
      height: 100%;
      width: 100%;
      a {
        display: block;
        height: 100%;
      }
    }
    .fade { // 切换banner时的过渡效果
      -webkit-animation: fadein 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
      animation: fadein 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    @-webkit-keyframes fadein {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    @keyframes fadein {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
  .m-banner-learnMore {
    // width: 100%;
    position: absolute;
    bottom: 50px;
    left: 52px;
    text-align: left;
    cursor: pointer;
    img {
      width: 200px;
      height: 62px;
      position: relative;
    }
    .arrow {
      width: 20px;
      height: 12px;
      position: absolute;
      bottom: 30px;
      right: 32px;
    }
    .activeArrow {
      transform: scale(1.3);
    }
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
      background: @themeColor;
      width: 104px;
    }
  }
}
</style>
<template>
  <div class="home">
    <div class="home_left">
      <img src="../assets/img/logo.png" class="logo" alt="" width="62px" height="62px">
      <div class="navList" v-for="(item, index) in navList" :key="index" :class="{active:index === findIndex}" @click="clickNav(index)">
        <img :src="item.noClick" alt="" width="42px" height="42px" v-if="index !== findIndex">
        <div v-if="index === findIndex" class="clickNav">
          <img :src="item.click" alt="" width="42px" height="42px" >
          <div class="float">
            {{item.title}}
          </div>
        </div>
      </div>
    </div>
    <div class="home_right">
      <top-banner :bannerData="bannerData" :interval="5000" :width="'100%'" :height="'600'" />
    </div>
  </div>
</template>

<script>
import TopBanner from "./topBanner.vue"
export default {
  data() {
    return {
      findIndex: 0,
      showNav: false,
      navList: [
        {title: 'Home', noClick: require("../assets/img/navImg01.png"), click: require("../assets/img/navClick01.png")},
        {title: 'Game', noClick: require("../assets/img/navImg02.png"), click: require("../assets/img/navClick02.png")},
        {title: 'Market', noClick: require("../assets/img/navImg03.png"), click: require("../assets/img/navClick03.png")},
        {title: 'Mint', noClick: require("../assets/img/navImg04.png"), click: require("../assets/img/navClick04.png")},
        {title: 'Community', noClick: require("../assets/img/navImg05.png"), click: require("../assets/img/navClick05.png")}
      ],
      bannerData: [
      {
        title: 'image-1',
        link: 'javascript:;',
        imgUrl: require('../assets/img/banner1.png')
    },
    {
        title: 'image-2',
        link: 'javascript:;',
        imgUrl: require('../assets/img/banner2.png')
    }
      ]
    };
  },
  components: {
    TopBanner
  },
  created() {
  },
  mounted() {
  },
  methods: {
    clickNav(index) {
      this.findIndex = index
      
      console.log(index,'获取到的图标');
    }
  },
  destroyed() {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  background: #222222;
}
.home_left {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 92px;
  min-height: 100vh;
  background: #000;
}
.logo {
  margin: 32px 0 52px 0;
}
.navList {
  margin-bottom: 38px;
  cursor: pointer;
}
.home_right {
  width: calc(100% - 92px);
  height: 100%;
}
.active {
  /* border-bottom: 2px solid #7f4395; */
  color: #fff;
}
.float {
  /* width: 100%; */
  height: 32px;
  margin-left: 54px;
  position: absolute;
  background: rgba(153, 153, 153, 0.3);
  backdrop-filter: blur(10px);
  line-height: 32px;
  padding: 0 14px;
  border-radius: 5px;
  z-index: 999;
}
.float::after {
      content: "";
      position: absolute;
      width: 0px;
      height: 0px;
      top: 0;
      bottom: 0;
      margin: auto;
      left: -6px;
      /* border: 0px; */
      border: 6px solid rgba(153, 153, 153, .3);
      transform: rotate(135deg);
      /* border-bottom: 6px solid transparent; */
      /* border-right: 6px solid rgba(153, 153, 153, 0.3); */
      border-bottom-left-radius: 2px;
      /* background: rgba(153, 153, 153, 0.3); */
      border-left: 6px solid transparent;
      border-top: 6px solid transparent;
      /* border-right: transparent;
      border-top: transparent; */
      /* border-left: transparent; */
      border-radius: 2px;
      z-index: 0;
    }
/* .float::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      left: -5px;
      z-index: 0;
      border: 0px solid rgba(153, 153, 153, 0.3);
      width: 10px;
      height: 10px;
      background: rgba(153, 153, 153, 0.3);
      transform: rotate(45deg);
      border-right: transparent;
      border-top: transparent;
      border-left: transparent;
    }  */
.clickNav {
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
</style>

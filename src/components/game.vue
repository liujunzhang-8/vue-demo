<template>
  <div class='page-frame'>
    <div class="title">
      <img src="../assets/img/game.png" alt="">
    </div>
    <transition name = "fade">
      <div class="gamePic fade-enter fade-enter-active">
        <div v-for="(item, index) in gamePicList" :key="index" class="gamePicShow" @click="clickPic(index)">
          <img v-if="(index !== findIndex)" :src=item.smallPic alt="" />
          <img v-if="(index === findIndex)" :src=item.bigPic alt="" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      findIndex: 0,
      gamePicList: [
        {smallPic: require("../assets/img/smallPic01.png"), bigPic: require("../assets/img/bigPic01.png")},
        {smallPic: require("../assets/img/smallPic02.png"), bigPic: require("../assets/img/bigPic02.png")},
        {smallPic: require("../assets/img/smallPic03.png"), bigPic: require("../assets/img/bigPic03.png")},
      ]
    }
  },

  created () {

  },

  computed: {},

  mounted () {},

  methods: {
    clickPic(index) {
      this.findIndex = index
    }
  },
}

</script>
<style lang='less' scoped>
.page-frame {
  margin: 98px 50px 62px 52px;
  .title {
    width: 121px;
    height: 35px;
    margin-bottom: 32px;
    img {
      width: 100%;
    }
  }
  .gamePic {
    width: 100%;
    height: 520px;
    display: flex;
    flex-direction:row;
    // align-items: center;
    justify-content: space-around;
    .gamePicShow {
      margin-right: 28px;
    }
    .gamePicShow:last-child {
      margin-right: 0px;
    }
    .fade-enter,.fade-leave-to {
      opacity: 0;
    }
    img {
      width: 100%;
    }

  }
}
</style>
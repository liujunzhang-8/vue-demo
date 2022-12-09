<template>
  <div class='page-frame'>
    <div class="title">
      <div class="title_name">
        <img src="../assets/img/latestNews.png" alt="" />
      </div>
      <div class="learnMore">
        <img src="../assets/img/LearnMore01.png" alt="" />
      </div>
    </div>
    <div class="content">
      <div class="content_left">
        <div>
          <img src="../assets/img/lertestNews01.png" alt="" class="pic">
          <img src="../assets/img/Vector.png" alt="" class="vector">
          <img src="../assets/img/Vector 321.png" alt="" class="pic">
        </div>
        <div>
          <img src="../assets/img/letestNews02.png" alt="" style="margin-top:18px" class="pic">
          <img src="../assets/img/Vector.png" alt="" class="vector">
          <img src="../assets/img/Vector 321.png" alt="" class="pic">
        </div>
        <div>
          <img src="../assets/img/letestNews03.png" alt="" style="margin-top:18px" class="pic">
          <img src="../assets/img/Vector.png" alt="" class="vector" style="margin-top:18px">
          <!-- <img src="../assets/img/Vector 321.png" alt="" class="pic"> -->
          <div style="height:18px"></div>
        </div>
      </div>
      <div class="content_right">
        <div>
          <img src="../assets/img/letestNews04.png" alt="" class="pic">
          <img src="../assets/img/Vector.png" alt="" class="vector">
          <img src="../assets/img/Vector 321.png" alt="" class="pic">
        </div>
        <div>
          <img src="../assets/img/letestNews05.png" alt="" style="margin-top:18px" class="pic">
          <img src="../assets/img/Vector.png" alt="" class="vector">
          <img src="../assets/img/Vector 321.png" alt="" class="pic">
        </div>
        <div>
          <img src="../assets/img/letestNews06.png" alt="" style="margin-top:18px" class="pic">
          <img src="../assets/img/Vector.png" alt="" class="vector">
          <!-- <img src="../assets/img/Vector 321.png" alt="" class="pic"> -->
          <div style="height:18px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  created () {

  },

  computed: {},

  mounted () {},

  methods: {

  },
}

</script>
<style lang='less' scoped>
.page-frame {
  margin: 0 50px 62px 52px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
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
  .content {
    display: flex;
    justify-content: space-between;
    .content_left {
      width: 48%;
      div {
        width: 818px;
        position: relative;
        .pic {
          width: 100%;
        }
        .vector {
          cursor: pointer;
          width: 33px;
          position: absolute;
          bottom: 30px;
          left: 360px;
        }
        .vector:hover {
          transform: scale(1.2);
        }
      }
    }
    .content_right {
      width: 48%;
      div {
        width: 818px;
        position: relative;
        .pic {
          width: 100%;
        }
        .vector {
          cursor: pointer;
          width: 33px;
          position: absolute;
          bottom: 30px;
          left: 360px;
        }
        .vector:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
<template>
  <div class="page-frame">
    <div class="footer">
      <div class="footer_left">
        <div class="logo">
          <img src="../assets/img/logo1.png" alt="" />
        </div>
        <div class="text">
          <img src="../assets/img/text.png" alt="" />
          <div class="icon">
            <img src="../assets/img/icon.png" alt="" />
          </div>
        </div>
      </div>
      <div class="footer_right">
        <div class="footer_right_top">
          <div class="footer_right_top_left">
            <img src="../assets/img/Roadmap.png" alt="" class="left_text" />
            <img
              src="../assets/img/singleArrow.png"
              alt=""
              class="left_singleArrow"
            />
          </div>
          <div class="footer_right_top_right">
            <img
              src="../assets/img/teamMembers.png"
              alt=""
              class="right_text"
            />
            <img
              src="../assets/img/singleArrow.png"
              alt=""
              class="right_singleArrow"
            />
          </div>
        </div>
        <div class="footer_right_bottom">
          <img src="../assets/img/Partner.png" alt="" class="bottom_text" />
          <img
            src="../assets/img/singleArrow.png"
            alt=""
            class="bottom_singleArrow"
          />
        </div>
      </div>
    </div>
    <div class="footer_nav">
      <img src="../assets/img/footerNav.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang='less' scoped>
.page-frame {
  background: #000000;
  .footer {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 92px);
    color: #fff;
    // height: 692px;
    padding: 62px 50px 90px 42px;
    .footer_left {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-right: 224px;
      .logo {
        width: 318px;
        margin-top: 31px;
        img {
          width: 100%;
        }
      }
      .text {
        margin-top: 168px;
        img {
          width: 306px;
        }
        .icon {
          margin-top: 50px;
        }
      }
    }
    .footer_right {
      width: 100%;
      .footer_right_top {
        width: 100%;
        display: flex;
        height: 202px;
        justify-content: space-between;
        .footer_right_top_left {
          position: relative;
          width: 48%;
          padding: 42px 52px 52px 42px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          margin-right: 20px;
          .left_text {
            width: 191px;
          }
          .left_singleArrow {
            cursor: pointer;
            position: absolute;
            bottom: 52px;
            right: 52px;
          }
          .left_singleArrow:hover {
            transform: scale(1.2);
          }
        }
        .footer_right_top_right {
          position: relative;
          width: 48%;
          padding: 42px 52px 52px 42px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          .right_text {
            width: 298px;
          }
          .right_singleArrow {
            cursor: pointer;
            position: absolute;
            bottom: 52px;
            right: 52px;
          }
          .right_singleArrow:hover {
            transform: scale(1.2);
          }
        }
      }
      .footer_right_bottom {
        position: relative;
        height: 106px;
        padding: 42px 52px 52px 42px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 20px;
        margin-top: 20px;
        .bottom_text {
          width: 152px;
        }
        .bottom_singleArrow {
          cursor: pointer;
          position: absolute;
          bottom: 52px;
          right: 52px;
        }
        .bottom_singleArrow:hover {
          transform: scale(1.2);
        }
      }
    }
  }
  .footer_nav {
    width: calc(100% - 92px);
    margin: 0 50px 0 42px;
    padding: 32px 0 62px 0;
    border-top: 0.5px solid rgba(255, 255, 255, 0.3);
    img {
      width: 100%;
    }
  }
}
</style>
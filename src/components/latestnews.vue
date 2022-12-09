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
}
</style>
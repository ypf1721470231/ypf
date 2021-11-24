<template>
  <div id="box">
    <div class="logo"></div>
    <button id="top-right" @click="showPopup"></button>
    <van-popup
      v-model="show"
      closeable
      close-icon="close"
      close-icon-position="top-left"
      position="right"
      :style="{ height: '100%',width: '50%'}"
    >
      <router-link to="#">首页</router-link>
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" @change="to" title="应用展示" />
      </van-dropdown-menu>
    </van-popup>
    <div class="decoratin">
      <div class="container">
        <h1>嘟噜噜</h1>
        <h4>欢迎使用</h4>
        <van-button round type="info" to="/menu">免费试用</van-button>
        <div @click="money">赞助</div>
      </div>
    </div>
    <van-overlay :show="aaa" @click="aaa= false">
      <van-image width="100%" height="100%" :src="require('../assets/images/1.jpg')"></van-image>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      aaa: false,
      show: false,
      value1: null,
      option1: [
        { text: "主页", value: 0 },
        { text: "问卷调查", value: 1 },
        { text: "在线考试", value: 2 },
      ],
    };
  },
  methods: {
    showPopup() {
      this.value1 = null;
      this.show = true;
    },
    to(value) {
      switch (value) {
        case 0:
          this.$router.replace({
            path: "/menu",
          });
          break;
      }
    },
    money() {
      this.aaa = true;
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
.van-dropdown-menu {
  margin-top: 21px;
}
#box {
  height: 100vh;
  position: absolute;
  left: 50%;
  width: 100%;
  max-width: 600px;
  background-image: url(../assets/images/index.jpg);
  background-repeat: no-repeat;
  transform: translateX(-50%);
}
#top-right {
  background-position: 0 0;
  background-image: url(../assets/images/home-top.png);
  background-size: 204px 89px;
  position: absolute;
  top: 14px;
  right: 12px;
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
}
.logo {
  position: absolute;
  top: 14px;
  left: 14px;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-image: url(../assets/images/favicon.png);
  background-size: 40px 40px;
}
img {
  height: 100vh;
}
.decoratin {
  position: relative;
  text-align: left;
  margin-top: 125px;
}
.container {
  text-align: center;
  color: #fff;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>
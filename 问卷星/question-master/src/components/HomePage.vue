<template>
  <div>
    <div class="centen">
      <img src="@/assets/images/bg.png" />
      <van-tabs v-model="$store.state.active">
        <!-- <van-tabs v-model="active"> -->
        <van-tab title="登录" to="/homepage/login" replace>
          <router-view></router-view>
        </van-tab>
        <van-tab title="注册" to="/homepage/singin" replace>
          <router-view></router-view>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      active: window.localStorage.getItem("active"),
    };
  },
  methods: {},
  watch: {
    active(newV) {
      console.log(newV);
    },
  },
};
</script>

<style>
.centen {
  text-align: center;
}
img {
  height: 186px;
  width: 100%;
}
</style>
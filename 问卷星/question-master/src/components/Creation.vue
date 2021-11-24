<template>
  <div>
    <van-search v-model="value" shape="round" background="#ffffff" placeholder="请输入搜索关键词" />

    <van-tabs v-model="active">
      <van-tab title="全部">
        <figure class="creatNewbox" @click="fuck">
          <van-icon name="plus" size="50" />
          <p>从空白开始</p>
        </figure>
        <figure class="creatNewbox"></figure>
      </van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      active: 0,
    };
  },
  methods: {
    fuck() {
      this.$router.push({ path: "/creat-title" });
    },
  },
};
</script>

<style>
.creatNewbox {
  flex: 0 1 auto;
  border-radius: 4px;
  padding: 13px 10px 14px;
  background-color: #fff;
  box-shadow: 2px 0px 10px rgb(196 197 204 / 20%);
  overflow: hidden;
  position: relative;
  margin-bottom: 15px;
  text-align: center;
  margin: 20px;
}
figure {
  display: inline-block;
  height: 108px;
  width: 146px;
}
</style>
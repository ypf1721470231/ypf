<template>
  <div id="box">
    <ul class="indexTypeWrap">
      <li @click="survey">
        <van-image width="44px" height="44px" :src="require('../assets/images/type-dc.png')" />
        <p class="nname">调查</p>
        <p class="detail_text">丰富题型，强大逻辑</p>
      </li>
      <li @click="exam">
        <van-image width="44px" height="44px" :src="require('../assets/images/type-ks.png')" />
        <p class="nname">考试</p>
        <p class="detail_text">题库抽题，限时作答</p>
      </li>
      <li @click="vote">
        <van-image width="44px" height="44px" :src="require('../assets/images/type-tp.png')" />
        <p class="nname">投票</p>
        <p class="detail_text">图文投票，选项随机</p>
      </li>
      <li @click="form">
        <van-image width="44px" height="44px" :src="require('../assets/images/type-bd.png')" />
        <p class="nname">表单</p>
        <p class="detail_text">信息登记，活动报名</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Mine",
  methods: {
    survey() {
      this.$router.push("/creation");
      console.log(6);
    },
    exam() {
      console.log(6);
    },
    vote() {
      console.log(6);
    },
    form() {
      console.log(6);
    },
  },
};
</script>

<style>
body {
  background-color: #f3f4f5;
}
.indexTypeWrap {
  padding: 30px 16px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.indexTypeWrap li {
  width: 47.8%;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px rgb(221 221 221 / 30%);
  border-radius: 7px;
  text-align: center;
  padding-top: 20px;
}
.nname {
  font-size: 16px;
  color: #222222;
}
.detail_text {
  margin-top: 8px;
  margin-bottom: 20px;
  font-size: 12px;
  color: #bfbfbf;
}
</style>
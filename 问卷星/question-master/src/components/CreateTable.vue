<template>
  <div>
    <van-field
      v-model="message"
      rows="3"
      type="textarea"
      maxlength="20"
      placeholder="请输入标题"
      show-word-limit
      :border="false"
      required
      @blur="first"
    />
    <van-row type="flex" justify="center"></van-row>
    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
      <van-row type="flex" justify="center">
        <van-col span="6">
          <div class="a2">
            <img src="../assets/images/单选题.png" @click="SingleChoice" />
            <div class="text" @click="SingleChoice">单选题</div>
          </div>
        </van-col>
        <van-col span="6">
          <div class="a2">
            <img src="../assets/images/多选题.png" @click="MultipleChoice" />
            <div class="text" @click="MultipleChoice">多选题</div>
          </div>
        </van-col>
        <van-col span="6">
          <div class="a2">
            <img src="../assets/images/填空题.png" @click="GapFilling" />
            <div class="text" @click="GapFilling">填空题</div>
          </div>
        </van-col>
        <van-col span="6">
          <div class="a2">
            <img src="../assets/images/滑动条.png" />
            <div class="text">滑动条</div>
          </div>
        </van-col>
      </van-row>
    </van-popup>
    <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item icon="add-o" @click="showPopup">题目</van-tabbar-item>
      <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
      <van-tabbar-item icon="eye-o">预览</van-tabbar-item>
      <van-tabbar-item icon="certificate">保存</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      active: 0,
      message: window.localStorage.getItem("TableTitle"),
    };
  },
  methods: {
    //创建单选题
    SingleChoice() {
      this.$router.push("/single-choice");
    },
    //创建多选题
    MultipleChoice() {
      this.$router.push("/multiple-choice");
    },
    GapFilling() {
      this.$router.push("/gap-filling");
    },
    showPopup() {
      this.show = true;
    },
    first() {
      window.localStorage.setItem("TableTitle");
    },
  },
};
</script>

<style>
.text {
  /* text-align: center; */
  transform: translateX(15px);
  padding-left: 3.5px;
}
.van-row--justify-center {
  margin: 0 20px;
}
.van-tabbar--fixed {
  height: 75px;
}

.a2 img {
  transform: translateX(28px);
  height: 100%;
  width: 25px;
  padding-top: 10px;
  align-content: center;
}
.van-col {
  border-right: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
}
</style>
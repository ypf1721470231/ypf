<template>
  <div>
    <h3>*调查标题</h3>
    <van-row type="flex" justify="center">
      <van-col span="24">
        <van-field
          v-model.trim="message"
          rows="2"
          type="textarea"
          maxlength="20"
          placeholder="请输入名称"
          show-word-limit
          required
        />
      </van-col>
      <van-col span="24">
        <van-button round type="info" block margin-top="20px" @click="creattitle">创建调查</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    creattitle() {
      if (this.message == "") {
        this.$toast.fail("标题不能为空");
      } else {
        window.localStorage.setItem("TableTitle", this.message);
        this.$router.push("/create-table");
      }
    },
  },
};
</script>

<style>
h3 {
  margin-left: 20px;
}
body {
  background-color: ffff;
}
.van-button--round {
  margin-top: 20px;
  border-radius: 20px;
}
.van-row--justify-center {
  margin: 0 20px;
}
</style>
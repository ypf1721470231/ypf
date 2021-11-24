<template>
  <van-form ref="loginForm" :show-error="false" size="large">
    <van-field
      left-icon="user-circle-o"
      v-model.lazy.trim="userid"
      name="账号"
      placeholder="账号"
      :rules="[{ required: true, message: '请填写正确的账号' }]"
    />
    <van-field
      left-icon="ellipsis"
      v-model.lazy.trim="password"
      type="password"
      name="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' },{pattern:/^[\dA-Za-z]{6,20}$/,message: '请填写正确密码'}]"
    />
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit" color="#91bafc" @click="onSubmit">登录</van-button>
    </div>
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="reset" color="#468ffd" @click="reset">重置</van-button>
    </div>
  </van-form>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      userid: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      this.$refs.loginForm.validate().then(async () => {
        //异步
        // this.$http({
        //   url: "http://ralphgodzilla.com:9003/api/v1/account/login",
        //   method: "post",
        //   data: {
        //     account: this.userid,
        //     password: this.password,
        //   },
        // })
        //   .then((res) => {
        //     console.log(res.data.access_token);
        //     window.localStorage.setItem("tokenlo", res.data.access_token);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        //同步
        try {
          const res = await this.$http({
            url: "http://ralphgodzilla.com:9003/api/v1/account/login",
            method: "post",
            data: {
              account: this.userid,
              password: this.password,
            },
          });
          console.log(res.access_token);
          window.localStorage.setItem("tokenlo", res.access_token);
          window.localStorage.setItem("username", this.userid);
          this.$router.replace({
            path: "/index",
          });
        } catch (err) {
          console.log(err);
        }
      });
    },
    reset() {
      this.$refs.loginForm.resetValidation();
    },
  },
};
// beforeEach(to,from,next){

//   next()
// }
</script>

<style>
.van-field__left-icon .van-icon {
  font-size: 23px;
}
</style>
<template>
  <van-form @submit="onSubmit" :show-error="false" ref="loginForm">
    <van-field
      left-icon="user-circle-o"
      v-model.lazy.trim.lazy.trim="username"
      name="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' },{pattern:/(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{3,15}/ , message: '请填写正确用户名'}]"
    />
    <van-field
      left-icon="manager-o"
      v-model.lazy.trim="userid"
      name="账号"
      placeholder="账号"
      :rules="[{ required: true, message: '请填写账号' },{pattern:/[0-9]{3,15}/,message: '请填写正确账号'}]"
    />

    <van-field
      left-icon="ellipsis"
      v-model.lazy.trim="password"
      type="password"
      name="密码"
      placeholder="6-20位密码"
      :rules="[{ required: true, message: '请填写正确密码' },{pattern:/^[\dA-Za-z]{6,20}$/,message: '请填写正确密码'}]"
    />
    <van-field
      left-icon="passed"
      v-model.lazy.trim="surepassword"
      type="password"
      name="确认密码"
      placeholder="确认密码"
      :rules="[{ validator, message: '请填写一致密码' }]"
    />
    <van-field
      left-icon="free-postage"
      v-model.lazy.trim="useremail"
      type="email"
      placeholder="邮箱"
      :rules="[{ required: true, message: '请填写正确邮箱' },{pattern:/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,message: '请填写正确邮箱'}]"
    />

    <van-field
      left-icon="comment-o"
      v-model.lazy.trim="sms"
      center
      clearable
      placeholder="请输入邮箱验证码"
    >
      <template #button>
        <van-button size="small" type="primary" @click.prevent="Sclick()">发送验证码</van-button>
      </template>
    </van-field>

    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit" color="skyblue">注册</van-button>
    </div>
  </van-form>
</template>

<script>
export default {
  name: "Singin",
  data() {
    return {
      username: "",
      userid: "",
      surepassword: "",
      password: "",
      useremail: "",
      sms: "",
    };
  },
  methods: {
    onSubmit() {
      if (window.localStorage.getItem("code") == this.sms) {
        //这是注册
        this.$refs.loginForm.validate().then(() => {
          this.$http({
            url: "http://ralphgodzilla.com:9003/api/v1/account/register",
            method: "put",
            data: {
              username: this.username,
              account: this.userid,
              password: this.password,
              email: this.useremail,
            },
          })
            .then((res) => {
              window.localStorage.setItem("tokenlo", res.access_token);
              this.$router.replace({
                path: "/index",
              });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      }
    },
    Sclick() {
      //这是邮箱验证码
      this.$refs.loginForm.validate().then(() => {
        this.$http({
          url: "http://ralphgodzilla.com:9003/api/v1/account/sendEmail/1",
          method: "post",
          data: {
            email: this.useremail,
          },
        })
          .then((res) => {
            window.localStorage.setItem("code", res.captcha);
            console.log(res.captcha);
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    validator(val) {
      return this.password === val;
    },
  },
};
</script>

<style>
</style>
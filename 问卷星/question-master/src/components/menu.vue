  <template>
  <div class="nav-bar">
    <van-nav-bar left-arrow @click-right="onClickRight">
      <template #left>
        <van-popover
          v-model="showPopover"
          trigger="click"
          :actions="actions"
          theme="dark"
          placement="bottom-start"
          @select="onSelect"
        >
          <template #reference>
            <van-button icon="wap-nav"></van-button>
          </template>
        </van-popover>
      </template>
      <template #title>
        <form action="/">
          <van-search shape="round" placeholder="搜索问卷" />
        </form>
      </template>
      <template #right>
        <van-button round type="info" to="/mine">创建</van-button>
      </template>
    </van-nav-bar>
  </div>
</template>

  <script>
export default {
  name: "Mune",
  data() {
    return {
      showPopover: false,
      // 通过 actions 属性来定义菜单选项
      actions: [
        { text: "个人中心", icon: "manager-o" },
        { text: "互问问卷", icon: "records" },
        { text: "回收站", icon: "delete-o" },
        { text: "退出", icon: "close" },
      ],
    };
  },
  methods: {
    onClickLeft() {
      console.log(1);
    },
    onClickRight() {
      console.log(2);
    },
    onSelect(actions, index) {
      switch (actions.text) {
        case "个人中心":
          this.$router.push("#");
          break;
        case "退出":
          this.$http({
            method: "patch",
            url: "http://ralphgodzilla.com:9003/api/v1/account/exit",
            data: {
              account: window.localStorage.getItem("username"),
              state: 1,
            },
            headers: {
              Authorization: localStorage.getItem("tokenlo"),
            },
          }).then((res) => {
            console.log(res);
            window.localStorage.clear();
            this.$router.push("/homepage/login");
          });
          break;
        case "回收站":
          this.$router.push("/recycle");
      }
      console.log(actions, " ", index);
    },
  },
};
</script>
 
<style>
.van-search {
  height: 36px;
}
.nav-bar .van-button {
  height: 30px;
}
.van-button--normal {
  padding: 5px !important;
}
</style>
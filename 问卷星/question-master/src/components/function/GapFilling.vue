<template>
  <div class="gap">
    <p class="text">标题:</p>
    <van-field
      rows="3"
      type="textarea"
      placeholder="请输入名称"
      v-model="text"
      clearable
      class="textarea"
    />

    <div class="chose">
      <p class="text">设置</p>

      <van-cell center title="文本验证">
        <template>
          <span @select="least">无></span>
        </template>
      </van-cell>

      <van-cell center title="输入框行数">
        <template>
          <span @click="max">2></span>
        </template>
      </van-cell>

      <van-cell center title="此题目必须回答">
        <template #right-icon>
          <van-switch v-model="checked" size="24" />
        </template>
      </van-cell>

      <van-cell center title="显示条件">
        <template>
          <span @click="set">未设置></span>
        </template>
      </van-cell>

      <van-cell center title="跳题设置">
        <template>
          <span @click="jump">未设置></span>
        </template>
      </van-cell>
    </div>
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit" @click="Post">确定</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gap-filling",
  data() {
    return {
      text: "",
      checked: true,
    };
  },
  methods: {
    least() {},
    max() {},
    set() {
      this.$dialog
        .alert({
          message: "第一题不能设置显示条件",
        })
        .then(() => {});
    },
    jump() {
      this.$dialog
        .alert({
          message: " 此题为最后一题，不能设置跳题!",
        })
        .then(() => {
          // on close
        });
    },
    Post() {
      this.$dialog
        .alert({
          message: " 请输入题目名称",
        })
        .then(() => {
          // on close
        });
    },
  },
};
</script>

<style scoped>
.gap {
  padding: 0 20px;
}
.gap .text {
  font-size: 12px;
  color: #abafb2;
}
.gap .textarea {
  border: 1px solid #dcdee0;
  font-size: 16px;
}
.gap .chose {
  padding-top: 20px;
}
.gap .van-cell__title {
  font-size: 16px;
}
.gap .van-cell::after {
  border-bottom: none;
}
</style>

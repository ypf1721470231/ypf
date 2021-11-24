<template>
  <div class="select">
    <p class="text">标题:</p>
    <van-field
      rows="3"
      type="textarea"
      placeholder="请输入名称"
      v-model="text"
      clearable
      class="textarea"
    />
    <p class="text">选项</p>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <el-input placeholder="输入选项" prefix-icon="el-icon-remove" v-model="input1"></el-input>
        <el-input placeholder="输入选项" prefix-icon="el-icon-remove" v-model="input2"></el-input>
      </van-cell-group>
    </van-radio-group>
    <div class="chose">
      <p class="text">设置</p>

      <van-cell center title="最少选择">
        <template>
          <span @select="least">不限></span>
        </template>
      </van-cell>

      <van-cell center title="最多选择">
        <template>
          <span @click="max">不限></span>
        </template>
      </van-cell>

      <van-cell center title="此题目必须回答">
        <template #right-icon>
          <van-switch v-model="checked" size="24" />
        </template>
      </van-cell>

      <van-cell center title="一行显示选项数">
        <template>
          <span @click="select">1></span>
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

      <van-cell center title="引用设置">
        <template>
          <span @click="have">未设置></span>
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
  name: "Multiple-choice",
  data() {
    return {
      radio: "1",
      checked: true,
      text: "",
      input1: "",
      input2: "",
      actions: [{ text: "选项一" }],
    };
  },
  methods: {
    max() {},
    least() {},
    select() {},
    set() {
      // alert('第一题不能显示条件')
      this.$dialog
        .alert({
          message: "第一题不能设置显示条件",
        })
        .then(() => {
          // on close
        });
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
    have() {
      this.$dialog
        .alert({
          message: " 第一题不能进行引用设置!",
        })
        .then(() => {
          // on close
        });
    },
    Post() {
      this.$dialog
        .alert({
          message: " 请至少输入两个选项内容",
        })
        .then(() => {
          // on close
        });
    },
  },
};
</script>

<style scoped>
.select {
  padding: 0 20px;
}
.select .text {
  font-size: 12px;
  color: #abafb2;
}
.select .textarea {
  border: 1px solid #dcdee0;
  font-size: 16px;
}
.select .chose {
  padding-top: 20px;
}
.select .van-cell__title {
  font-size: 16px;
}
.select .van-cell::after {
  border-bottom: none;
}
</style>

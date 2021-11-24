<template>
  <div>
    <div class="box">
      <h3>aaa</h3>
      <div class="ID">ID:111</div>
      <van-button round type="info" class="recover">恢复</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: ` 
      `,
    };
  },
};
</script>

<style>
h3 {
  display: inline-block;
  font-size: 18px;
  color: #000;
  margin-right: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.box {
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
}
.recover {
  position: absolute;
  top: 26px;
  right: 20px;
  width: 52px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  font-size: 14px;
  color: #1ea0fa;
  outline: none;
  border-radius: 4px;
  background-color: #f0f9ff;
  border: 1px solid #1ea0fa;
}
.ID {
  font-size: 14px;
  color: #999;
  margin-top: 12px;
}
</style>
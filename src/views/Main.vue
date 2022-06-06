<template>
  <div>
    <el-container style="height: 100%">
      <el-aside width="auto">
         <CommonAside></CommonAside>
      </el-aside>
      <el-container>
        <el-header>
          <CommonHeader></CommonHeader>
        </el-header>
        <CommonTag></CommonTag>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonTag from "../components/CommonTag.vue";
export default {
  name: "view-main",
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: rgb(38, 37, 37);
}

.el-main {
  padding-top: 0;
}
.el-aside{
   height: 100vh;
}
</style>
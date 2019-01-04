<template lang="html">
  <el-container id="index_main">
    <HeadFrame />
    <SideBar />
    <BreadCrumb />
    <el-main class="main-components">
      <router-view class="main-frame"></router-view>
    </el-main>
  </el-container>
</template>

<script>
  import SideBar from './frame/SideBar/index.vue';
  import HeadFrame from './frame/HeadFrame/index.vue';
  import BreadCrumb from './frame/BreadCrumb/index.vue';
  export default {
    components : {
      SideBar,
      HeadFrame,
      BreadCrumb
    }
  }
</script>

<style lang="scss">
  @import '../../../assets/style/public/index.scss';
  #index_main{
    width:100%;
    height:100%;
    .main-components{
      padding:$p-mn-main;
      width:100%;
      height:100%;
    }
  }
</style>

<template lang="html">
  <div class="bread-crumb" v-if="!$route.meta.hiddenBC">
    <transition name="fade">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <span class="iconfont icon-home my-icon l" ></span>
        <el-breadcrumb-item v-for="(value,key) in $route.matched || []" :to="{ path: value.path }" :key="key" v-if="value.meta.title">{{value.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </transition>
  </div>
</template>

<script>
  export default {
    mounted () {
    }
  }
</script>

<style lang="scss">
  @import '../../../assets/style/public/index.scss';
  .bread-crumb{
    overflow: hidden;
    width:100%;
    height:$h-bc-main;
    line-height: $h-bc-main;
    padding:$p-bc-padding;
    position: fixed;
    top:$p-bc-top;
    background-color: $c-bc-bg ;
    left:0;
    z-index: 96;
    border:1px solid $c-bc-border;
    border-right:0;
    .el-breadcrumb{
      line-height: $h-bc-main;
    }
  }
</style>

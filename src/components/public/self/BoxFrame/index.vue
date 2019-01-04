<template lang="html">
  <el-collapse v-model="activeNames" :style="bStyle" class="collapse-box">
    <el-collapse-item :title="title" name="1">
      <slot name="boxFrameSlot"></slot>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
  export default {
    props : {
      bStyle : {
        type : Object,
        default () {
          return {
          }
        }
      },
      title : {
        type : String,
        default : '标题'
      }
    },
    data () {
      return {
        activeNames : []
      }
    }
  }
</script>

<style lang="scss">
  @import './index.scss';
</style>

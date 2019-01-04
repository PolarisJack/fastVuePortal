<template>
  <div class="prompt-box" v-show="show">
    <span class="baseLine"></span><!--基准线-->
    <aside class="layer"></aside><!--遮罩-->
    <section :class="{'prompt-box-container':true,'prompt-box-container-show':show}" :style="{width:width+'px'}">
      <h2>
        <span class="l">{{title}}</span>
        <span class="r el-icon-close" @click="handleClose()"></span>
      </h2>
      <slot name="promptSlot"></slot>
    </section><!--弹层容器-->
  </div>
</template>
<script>
  export default {
    name: "prompt-box",
    props : {
      width : {//弹框宽度
        type : String,
        default : '500'
      },
      title : {//弹框标题
        type : String,
        default :'标题'
      }
    },
    data () {
      return {
        show : false,
      }
    },
    methods : {
      handleOpen (){//开启
        this.show = true;
      },
      handleClose () {//关闭
        this.show=false;
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import './index.scss'
</style>

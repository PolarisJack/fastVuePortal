<template lang="html">
  <div class="demo-home">
    <FrameDesc />
  </div>
</template>

<script>
  import FrameDesc from './extends/FrameDesc';
  export default {
    components : {
      FrameDesc
    },
    data () {
      return {};
    }
  }
</script>

<style lang="scss">
  .demo-home{
  .api-container{
      padding:30px;
      li{
        line-height: 30px;
        text-indent: 30px;
      }
    }
  }
</style>

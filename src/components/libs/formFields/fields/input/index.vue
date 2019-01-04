<template>
  <el-input
    @blur="handleBlur"
    @focus="focus"
    @change="change"
    @input="input"
    @keyup.enter.native="handleKeyUpEnter"
    v-model="defaultValue[field.prop]"
    v-bind="inputAttrs"
    :placeholder="placeholder">
  </el-input>
</template>
<script>
export default Object.assign(require('components/libs/formFields/fields/common/index').default('input'), {
  mixins : [{
    data () {
      const { inputAttrs = {}, placeholder = '请输入内容',blurEvent = null,keyupEnter =null  } = this.field;
      return {
        placeholder,
        inputAttrs,
        blurEvent,
        keyupEnter
      }
    },
    methods : {
      handleBlur () {
        this.blurEvent && this.blurEvent();
      },
      handleKeyUpEnter () {
        this.keyupEnter && this.keyupEnter()
      }
    }
  }]
})
</script>
<style lang="scss" scoped>
</style>

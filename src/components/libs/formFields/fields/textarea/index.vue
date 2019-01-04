<!-- 输入域 -->
<template lang="html">
  <el-input
    type="textarea"
    @blur="blur"
    @focus="focus"
    @change="change"
    v-model="defaultValue[field.prop]"
    v-bind="textareaAttrs"
    :placeholder="placeholder">
  </el-input>
</template>

<script>
export default Object.assign(require('components/libs/formFields/fields/common/index').default('input'),{
  mixins : [{
    computed : {

    },
    data(){
      const { textareaAttrs = {}, placeholder = '请输入内容' } = this.field;
      return {
        placeholder,
        textareaAttrs
      }
    }
  }]
})
</script>

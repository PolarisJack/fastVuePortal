<!-- 开关 -->
<template lang="html">
  <el-switch
    @change="change"
    :inactive-text="offText"
    :active-text="onText"
    v-bind="switchAttrs"
    v-model="defaultValue[field.prop]"></el-switch>
</template>

<script>
export default Object.assign(require('components/libs/formFields/fields/common/index').default('switch'),{
  mixins : [{
    data(){
      const { onText = '', offText = '', switchAttrs = {} } = this.field;
      return {
        onText,
        offText,
        switchAttrs
      }
    },
    methods : {

    }
  }]
})
</script>

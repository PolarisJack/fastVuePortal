<!-- 单纯日期 -->
<template lang="html">
  <el-date-picker
    @change="change"
    v-model="defaultValue[field.prop]"
    v-bind="datePickerAttrs"
    :start-placeholder="startDesc"
    :end-placeholder="endDesc"
    :placeholder="placeholder">
  </el-date-picker>
</template>

<script>
import { Obj } from 'js/utils/index';
const format = { //默认格式
  datetime : 'yyyy-MM-dd HH:mm:ss',
  datetimerange : 'yyyy-MM-dd HH:mm:ss',
}
export default Object.assign(require('components/libs/formFields/fields/common/index').default('dateTimePicker'),{
  mixins : [{
    data(){
      const {
        datePickerAttrs = {},
        startDesc = '开始日期',
        endDesc = '结束日期',
        placeholder = '选择日期'
      } = this.field;
      this.initDefaultAttrs(datePickerAttrs);
      return {
        placeholder,
        endDesc,
        startDesc,
        datePickerAttrs
      }
    },
    methods : {
      initDefaultAttrs(datePickerAttrs){
        const { type = "datetime" } = datePickerAttrs;
        if(type == 'datetimerange' && !Array.isArray(this.defaultValue[this.field.prop])){
          console.error('警告:对于具有范围的组件formFields的key必须绑定为数组')
        }
        let mat = format[type];
        Obj.cover(datePickerAttrs,{
          type : 'datetime',
          format : mat,
          valueFormat : mat,
          editable : false
        })
      }
    }
  }]
})
</script>

<style lang="css">
</style>

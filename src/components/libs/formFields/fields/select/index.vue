<!-- 下拉 -->
<template lang="html">
  <el-select
  @blur="blur"
  @clear="clear"
  @focus="focus"
  @change="changeMiddleware"
  @remove-tag="removeTag"
  @visible-change="visibleChange"
  v-bind="selectAttrs"
  v-model="defaultValue[field.prop]"
  :placeholder="field.placeholder || '请选择'">
    <el-option
      v-for="(item,index) in field.options"
      v-bind="computeSelfAttrs(item.attrs)"
      :key="index"
      :label="item[alias.bind.label]"
      :value="item[alias.bind.value]">
    </el-option>
  </el-select>
</template>

<script> 
  export default Object.assign(require('components/libs/formFields/fields/common/index').default('select'),{
  mixins : [{
    data(){
      const {
        selectAttrs = {},
        optionAttrs = {},
        placeholder = '请选择',
        axiosName,
        params = {},
        alias  = {
          list : 'data',
          bind : {
            label : 'label',
            value : 'value'
          }
        },
        success,
        error,
        click = (v) => {}} = this.field;
      return {
        placeholder,
        selectAttrs,
        optionAttrs,
        click,
        axiosName,
        success,
        error,
        alias,
        params
      }
    },
    beforeMount () {
      this.innerAxios();
    },
    watch : {
      'field.params' (n) {//监听参数变化请求
        this.innerAxios()
      }
    },
    methods : {
      computeSelfAttrs(value){//合并属性
        return Object.assign({},this.optionAttrs,value);
      },
      changeMiddleware (v) {//change事件
        this.click(v)
      },
      innerAxios () {//内部方式请求
        let {axiosName,params={}} = this.field;
        if(axiosName){
          this.$root.handleAxios({
            axiosName : axiosName,
            params   : params,
            success  : (res) => {
              this.field.options = res[this.alias.list];
              this.success && this.success()
            },
            error    : () => {
              this.error && this.error()
            }
          })
        }
      }
    }
  }]
})
</script>

<style lang="scss">
</style>

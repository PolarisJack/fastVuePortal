<!-- 级联下拉 -->
<template lang="html">
  <el-select
  @blur="blur"
  @clear="clear"
  @focus="focus"
  @change="changeMiddleware"
  @remove-tag="removeTag"
  @visible-change="visibleChange"
  v-bind="cascaderAttrs"
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
  export default Object.assign(require('components/libs/formFields/fields/common/index').default('cascader'),{
  mixins : [{
    data(){
      const {
        cascaderAttrs = {},
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
        init,
        click = (v) => {}} = this.field;
      return {
        placeholder,
        cascaderAttrs,
        optionAttrs,
        click,
        axiosName,
        success,
        error,
        alias,
        init,
        params
      }
    },
    created () {
      this.init && this.innerAxios();
    },
    watch : {
      'field.params' (n) {
        this.innerAxios()
      }
    },
    methods : {
      computeSelfAttrs(value){
        return Object.assign({},this.optionAttrs,value);
      },
      changeMiddleware (v) {
        this.click(v)
      },
      innerAxios () {
        let {axiosName,params={}} = this.field;
        if(axiosName){
          this.$root.handleAxios({
            axiosName : axiosName,
            params    : params,
            success   : (res) => {
              this.field.options = res[this.alias['list']];
              let firstKey = res[this.alias.list] ? res[this.alias.list][0][this.field.first] : '';//回绑第一个的model值
              if(this.field.first) this.defaultValue[this.field.prop] = firstKey;
              this.success && this.success(res);
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

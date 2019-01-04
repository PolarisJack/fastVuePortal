<!-- 多选 -->
<template>
  <div>
    <el-checkbox
      v-if="field.checkAll"
      v-model="checkAll"
      :indeterminate="isIndeterminate"
      @change="checkAllChange">
      全选
    </el-checkbox>
    <div></div>
    <el-checkbox-group
      v-bind="grounpAttrs"
      v-model="defaultValue[field.prop]"
      @change="change">
      <el-checkbox
        v-for="(item,key) in options"
        v-bind="computeSelfAttrs(item.attrs)"
        :name="field.prop"
        :label="item.prop"
        :key="key">
        {{item.label}}
    </el-checkbox>
  </el-checkbox-group>
  </div>
</template>
<script>
export default Object.assign(require('components/libs/formFields/fields/common/index').default('checkbox'),{
  mixins : [{
    data() {
      const { options = [], grounpAttrs ={}, checkboxAttrs = {} } = this.field;
      return {
        checkAll: options.length == this.defaultValue[this.field.prop].length,//全选框状态
        options,//选择项列表
        grounpAttrs,//选择项组的属性
        checkboxAttrs,//选择项的共有属性
      }
    },
    watch : {
      'field.options' : function(value){
        this.options = value;
      }
    },
    computed : {
      isIndeterminate(){//设置indeterminate 状态，只负责样式控制
        if(!this.field.checkAll) return;
        let ld = this.defaultValue[this.field.prop].length,
            lo = this.options.length;
        this.checkAll = ld == lo;
        if(!this.field.indeterminate) return;
        return ld > 0 && ld < lo;
      },
      checkAllItems(){//获取选中的value值
        return this.options.map(item => item.prop);
      }
    },
    methods: {
      computeSelfAttrs(value){
        return Object.assign({},this.checkboxAttrs,value);
      },
      checkAllChange(val) {//实现全选功能
        this.defaultValue[this.field.prop] = val ? this.checkAllItems : []
      }
    }
  }]
})

</script>

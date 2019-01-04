<template>
  <el-form
    class="form-fields"
    ref="formFields"
    v-bind="formFieldsAttrsTotal"
    :model="formFields"
    :rules="formRules">
    <el-form-item
      v-for="(field,key) in fields"
      v-if="field.prop"
      v-show="!field.hidden"
      v-bind="computeAttrs(formFieldItemAttrsTotal,field.attrs)"
      :class="{'form-fields-item':true,'l':field.float}"
      :key="key"
      :label="field.label"
      :prop="field.prop"><!-- 控件 -->
      <component
        :field="field"
        v-if="!field.slot"
        :class="`form-fields-item-${field.type}`"
        :defaultValue="formFields"
        :is="components[field.type] || 'formInput'">
      </component>
      <slot :name="field.prop" v-else></slot>
      <div class="field-errorMsg" v-show="field.explain">
        {{field.explain}}
      </div>
    </el-form-item>
    <div class="line-blank" v-else></div>
    <slot name="beforeBtnSlot"></slot>
    <div :class="{'form-act' : true,'line':(formFieldsAttrs.inline ? formFieldsAttrs.inline : false)}">
      <el-form-item><!-- 按钮 -->
        <el-button
          v-for="(item,key) in prefixButton"
          size="small"
          v-bind="item.attrs || {}"
          :key="key+'prefix'"
          :type="item.type || 'info' "
          @click='item.click && item.click()'>
          {{item.text}}
       </el-button><!-- 前置按钮 -->
       <el-button
          v-if="innerButtonOptions.resetMessage.show"
          size="small"
          :type="innerButtonOptions.resetMessage.type"
          @click='resetFields("formFields")'>
          {{innerButtonOptions.resetMessage.name}}
       </el-button><!-- 重置按钮 -->
       <el-button
          v-if="innerButtonOptions.submitMessage.show"
          size="small"
          :type="innerButtonOptions.submitMessage.type"
          @click='onSubmit("formFields")'>
          {{innerButtonOptions.submitMessage.name}}
        </el-button><!-- 提交按钮 -->
       <el-button
         v-for="(item,key) in suffixButton"
         size="small"
         v-bind="item.attrs || {}"
         :key="key+'suffix'"
         :type="item.type || 'info' "
         @click='item.click && item.click()'>
         {{item.text}}
      </el-button><!-- 后置按钮 -->
      </el-form-item>
    </div>
  </el-form>
</template>
<script>
  import { keys } from './fields/index';
  import {Obj} from 'js/utils/index';
  export default {
    name: "formFields",
    props : {
      formFields : Object,//表单数据对象
      formRules  : {//表单验证规则
        type :Object,
        default () {
          return {}
        }
      },
      fields : {//表单内容列表
        type :Array,
        default () {
          return []
        }
      },
      labelWidth : {//title宽度
        type : String,
        default : '100px'
      },
      formFieldsAttrs : {//自定义的formFields属性
        type : Object,
        default () {
          return {
            inline :false
          }
        }
      },
      formFieldItemAttrs : Object,//自定义的formFieldsItem属性
      prefixButton : Array,//前自定义按钮数组
      suffixButton : Array,//后自定义按钮数组
      innerButton  : Object,//内置按钮
    },
    data () {
      return {
        components : {
          ...keys
        }
      }
    },
    computed : {
      formFieldsAttrsTotal (){ // form 单独(element)属性
        return Object.assign({
          //默认属性
          labelWidth : '100px',
          inline : false,
        },this.formFieldsAttrs)
      },
      formFieldItemAttrsTotal(){ // form-item 单独(element)属性
        return Object.assign({
          // 默认属性
        },this.formFieldItemAttrs)
      },
      innerButtonOptions (){ // 融合属性
        return Obj.merge({
          resetMessage : {//重置按钮默认属性
            show : false,
            name : '重置',
            text : '你确定要重置这些信息？',
            type : 'info',
            title : '提示',
            resetToast : true,
            afterReset : void 0,
            beforeReset : void 0,
            cancelButtonText : "取消",
            confirmButtonText : "确定"
          },
          submitMessage : {//提交按钮默认属性
            show : true,
            name : '提交',
            type : 'primary',
            afterSubmit : void 0,
            beforeSubmit : void 0
          }
        },this.innerButton);
      }
    },
    methods: {
      resetFields(){//重置表单内容
        let reset = this.$refs.formFields.resetFields;
        let { text, title, confirmButtonText, beforeReset, afterReset,
              cancelButtonText, resetToast } = this.innerButtonOptions.resetMessage;
        resetToast ?
        this.$store.dispatch('handleConfirm',{//派发提示框
          msg : text,
          title : title,
          success (that) {
            if(typeof beforeReset === 'function' && beforeReset() === false)return;//重置前调用
            reset();//重置操作
            typeof afterReset === 'function' && afterReset();//重置后调用
          }
        }) : reset();
      },
      onSubmit() {//提交表单内容
        let { afterSubmit, beforeSubmit } = this.innerButtonOptions.submitMessage;
        this.$refs.formFields.validate((valid) => {//验证表单
          if (valid) {
            let temp = JSON.parse(JSON.stringify(this.formFields));
            if(typeof beforeSubmit === 'function' && beforeSubmit() === false){//提交前调用
              return;
            };
            this.$emit('success',temp);//提交成功派发
            typeof afterSubmit === 'function' && afterSubmit();//提交后调用
          } else {
            this.$emit('error');
            return false;
          }
        });
      },
      computeAttrs(arg0, arg1){ //计算属性  合并属性对象
        return Object.assign({},arg0,arg1);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .line{
    display: inline-block;
  }
</style>

<template lang="html">
  <box-frame :title="title">
    <form-fields
      ref="selfForm"
      slot="boxFrameSlot"
      :fields="fields"
      :formFields="formFields"
      :formFieldsAttrs="formFieldsAttrs"
      :innerButton="innerButtonOptions"
      :formRules="formRules"
      @success="handleSearch">
    </form-fields>
    <p slot="boxFrameSlot">获取到的查询条件：{{formFields}}</p>
  </box-frame>
</template>

<script>
  import {mapActions,mapGetters} from 'vuex';
  import FormFields from 'cpLibs/formFields/index.vue';
  export default {
    components :{
      FormFields
    },
    data () {
      return {
        title : '普通查询条件',
        fields : [
          {
              prop : 'type1',
              type : 'input',
              label : '输入框',
              placeholder : '请输入内容',
          },
          {
              prop : 'type2',
              type : 'input',
              label : '输入框',
              placeholder : '请输入内容',
          },
          {
              prop : 'type3',
              type : 'select',
              label : '下拉框1',
              placeholder : '请选择下拉框内容',
          },
          {
              prop : 'type4',
              type    : 'select',
              label   : '下拉框2',
              placeholder : '请选择下拉框内容',
              options : [
                {value:'1','name':'内容1'},
                {value:'2','name':'内容2'},
                {value:'3','name':'内容3'}
              ]
          },
          {
            prop : 'type5',
              type : 'select',
              label : '下拉框3',
              placeholder : '请选择下拉框内容',
              options : [
                {value:'1','name':'内容1'},
                {value:'2','name':'内容2'},
                {value:'3','name':'内容3'}
              ]
          },
        ],
        formFields : {
          type1 : '',
          type2 : '我是默认数据',
          type3 : '',
          type4 : '',
          type5 : '1'
        },
        formRules : {},
        formFieldsAttrs : {
          inline : true,
          labelWidth : '80px',
          labelPosition: 'right',
        },
        innerButtonOptions : {
          submitMessage : {
            name : '查询'
          }
        }
      }
    },
    computed : {
      ...mapGetters([
        'CACHE_TYPE'
      ])
    },
    methods : {
      ...mapActions([
        'getCacheSelect'
      ]),
      handleSearch (val) {
        console.log(val);
      }
    }
  }
</script>

<style lang="css">
</style>

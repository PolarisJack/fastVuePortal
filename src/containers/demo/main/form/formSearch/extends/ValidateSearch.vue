

<script>

  import NormalSearch from './NormalSearch.vue';
  export default {
    extends : NormalSearch,
    data () {
      const validateType1 = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入验证信息1'));
        } else {
          callback();
        }
      };
      const validateType2 = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入验证信息2'));
        } else {
          callback();
        }
      };
      const validateType3 = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入验证信息3'));
        } else {
          callback();
        }
      };
      const validateType4 = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入验证信息4'));
        } else {
          callback();
        }
      };
      return {
        title : '带验证的查询条件',
        fields : [
          {
            prop    : 'type1',
            type    : 'input',
            label   : '验证1',
            placeholder : '请输入内容'
          },
          {
            prop    : 'type2',
            type    : 'input',
            label   : '验证2',
            placeholder : '请输入内容'
          },
          {
            prop    : 'type3',
            type    : 'select',
            label   : '验证3',
            placeholder : '请选择下拉框内容',
            options : [{name:'全部',value:'1'}]
          },
          {
            prop    : 'type4',
            type    : 'select',
            label   : '验证4',
            placeholder : '请选择下拉框内容',
            options : [{name:'全部',value:'1'}]
          }
        ],
        formFields : {
          type1 : '',
          type2 : '',
          type3 : '',
          type4 : '',
        },
        formRules : {
          type1: [{
            required: true,
            validator: validateType1,
            trigger: 'blur'
          }],
          type2: [{
            validator: validateType2,
            trigger: 'blur'
          }],
          type3: [{
            required: true,
            validator: validateType3,
            trigger: 'blur'
          }],
          type4: [{
            validator: validateType4,
            trigger: 'blur'
          }]
        }
      }
    }
  }
</script>

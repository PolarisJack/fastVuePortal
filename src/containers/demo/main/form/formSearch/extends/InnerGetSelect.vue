
<script>

  import NormalSearch from './NormalSearch.vue';
  export default {
    extends : NormalSearch,
    data () {
      return {
        title : '下拉列表从内部获取以及联动方式',
        fields : [
          {
            prop    : 'innerType1',
            type    : 'select',
            label   : '下拉框1',
            placeholder : '请选择下拉框内容',
            axiosName : 'innerSelect',
            options : [],
            click   : (v) => {
              this.fields[1].axiosName ='innerSelect';
              this.fields[1].params = {
                code : v
              };
            }
          },
          {
            prop    : 'innerType2',
            type    : 'select',
            label   : '下拉框2',
            params  : {
              code : ''
            },
            placeholder : '请选择下拉框内容',
            options : []
          }
        ],
        formFields : {
          innerType1 : '',
          innerType2 : '',
        }
      }
    },
    watch : {

    }
  }
</script>

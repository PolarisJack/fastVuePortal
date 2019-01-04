

<script>
  import NormalSearch from './NormalSearch.vue';
  export default {
    extends : NormalSearch,
    data () {
      return {
        title : '带联动的查询条件',
        fields : [
          {
            prop    : 'type6',
            type    : 'select',
            label   : '下拉框6',
            placeholder : '请选择下拉框内容',
            options : [
              {value:'0','name':'全部'},
              {value:'1','name':'内容1'},
              {value:'2','name':'内容2'},
              {value:'3','name':'内容3'}
            ],
            click   : (v) => {
              let linkage = this.fields[1];
              switch (v) {
                case '1':
                  linkage.options = [{value:'0','name':'全部'},{value:'1','name':'联动内容1'}];
                  break;
                case '2':
                  linkage.options = [{value:'0','name':'全部'},{value:'2','name':'联动内容2'}]
                  break;
                case '3':
                  linkage.options = [{value:'0','name':'全部'},{value:'3','name':'联动内容3'}]
                  break;
                default:
                  linkage.options = [{value:'0','name':'全部'}]
              }
            }
          },
          {
            prop    : 'type7',
            type    : 'select',
            label   : '下拉框7',
            placeholder : '请选择下拉框内容',
            options : [{value:'0','name':'全部'}],
            click   : (v) => {
              console.log(v);
            }
          },
          {
            prop    : 'type8',
            type    : 'select',
            label   : '下拉框8',
            placeholder : '请选择下拉框内容',
            options : [],
          }
        ],
        formFields : {
          type1  : '注意选择合适的继承模板',
          type6 : '0',
          type7 : '0',
          type7 : ''
        }
      }
    },
    watch : {
      CACHE_TYPE (n) {
        this.fields[2].options = n;
      }
    }
  }
</script>

<script>
  import Table from 'cpPublic/extends/table/index.vue';
  export default {
    extends : Table,
    data () {
      return {
        tableHeader : [
          {showIndex:true},
          {label:'姓名',prop:'code1',fixed:true,width:200},
          {label:'电话号码',prop:'code2',width:100},
          {label:'注册时间',prop:'code3',width:200},
          {label:'状态',prop:'code4',width:200,temps:[
            {switch:true,change:() => {

            }}
          ]},
          {label:'表头5',prop:'code5'},
          {label:'表头6',prop:'code6'},
          {label:'特殊字段',prop:'code7'},
          {label:'操作',prop:'action',temps:[
            {label:'详情',class:'',click:(v) => {

            }},
            {label:'删除',class:'',click:(v) => {

            }}
          ]}
        ],
        setting : {
          axiosName : 'tableList',
          params : {}
        },
        alias : {
          list : 'list'
        },
        init : true
      }
    }
  }
</script>

<style lang="css">
</style>

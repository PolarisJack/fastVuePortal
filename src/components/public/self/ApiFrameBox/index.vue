<template lang="html">
  <div class="api-container">
    <h3>{{title}}</h3>
    <table-pagination
      :setting="table.setting"
      :alias="table.alias"
      :init="table.init"
      :pageHidden="table.pageHidden"
      :hiddenLoading="table.hiddenLoading"
      :search="table.search"
      :tableHeader="table.tableHeader"
      @tableSuccess="success"/>
  </div>
</template>

<script>
  import TablePagination from 'cpLibs/tablePagination/index.vue';
  export default {
    components : {
      TablePagination
    },
    data () {
      return {
        title : '',
        table : {
          init : false,//初始化请求
          search : true,//请求状态
          hiddenLoading : false,//关闭加载状态
          pageHidden:false,//隐藏分页
          normal : true,//通用状态，不用派发执行回调
          setting : {//配置
            axiosName : 'table',
            params : {}
          },
          tableHeader : [],//头部
          alias : {//数据解析
            totalRows : 'totalRows',
            curPage   : 'curPage',
            pageSize  : 'pageSize',
            list      : 'data'
          }
        }
      }
    },
    methods : {
      success () {}
    }
  }
</script>

<style lang="css">
</style>

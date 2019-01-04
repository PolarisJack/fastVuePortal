<template lang="html">
  <table-pagination
    :setting="setting"
    :alias="alias"
    :init="init"
    :pageHidden="pageHidden"
    :hiddenLoading="hiddenLoading"
    :search="innerSearch"
    :tableHeader="tableHeader"
    @tableSuccess="success"/>
</template>
<script>
  import TablePagination from 'cpLibs/tablePagination/index.vue';
  export default {
    props : {
      tParams : {
        type : Object,
        default () {
          return {}
        }
      },
      search : {
        type : Boolean,
        default : true
      }
    },
    components : {
      TablePagination
    },
    data () {
      return {
        init : false,//初始化请求
        innerSearch : true,//请求状态
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
    },
    watch : {
      search (n) {
        this.setting.params = this.tParams;
        this.innerSearch = !this.innerSearch;
      }
    },
    methods : {
      success (v) {}
    }
  }
</script>

<style lang="css">
</style>

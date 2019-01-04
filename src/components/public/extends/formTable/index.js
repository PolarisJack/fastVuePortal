export default () => {
  return {
    exportObj : {//导出
      exportId : false,
      label : '导出'
    },
    form    : {//查询条件配置
      fields             : [],
      formFields         : {},
      formRules          : {},
      formFieldsAttrs    : {
        inline : true,
        labelWidth : '100px',
        labelPosition: 'right',
      },
      innerButtonOptions : {
        submitMessage : {
          name : '查询'
        }
      }
    },
    table : {//table配置
      tableId : true,
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
}

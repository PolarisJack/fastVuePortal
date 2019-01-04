<template lang="html">
  <div class="form-table">
    <form-fields
    class="search-part"
    ref="selfForm"
    :fields="form.fields"
    :formFields="form.formFields"
    :formRules="form.formRules"
    :formFieldsAttrs="form.formFieldsAttrs"
    :innerButton="form.innerButtonOptions"
    @innerButtonSuccess="handleSearch" />
    <p style="height:50px;">
      <el-button
        type="danger"
        class="r" size="small"
        @click="handleExport"
        v-if="$root.regPermission(exportObj.exportId)">
        {{exportObj.label}}
      </el-button>
    </p>
    <table-pagination
      v-if="$root.regPermission(table.tableId)"
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
  import Data from './index';
  import FormFields from 'cpLibs/formFields/index.vue';
  import TablePagination from 'cpLibs/tablePagination/index.vue';
  export default {
    components : {
      FormFields,
      TablePagination
    },
    data () {
      return Data();
    },
    methods : {
      handleSearch (v){},//查询按钮成功回调
      handleExport (){},//导出
      success (v) {},//table成功回调
    }
  }
</script>

<style lang="css">
</style>

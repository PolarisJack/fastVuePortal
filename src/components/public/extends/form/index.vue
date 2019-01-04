<template lang="html">
  <form-fields
    class="search-part"
    ref="selfForm"
    :fields="fields"
    :formFields="formFields"
    :formRules="formRules"
    :formFieldsAttrs="formFieldsAttrs"
    :innerButton="innerButtonOptions"
    @innerButtonSuccess="handleSearch">
  </form-fields>
</template>

<script>
  import FormFields from 'cpLibs/formFields/index.vue';
  import {mapActions} from 'vuex';
  export default {
    components : {
      FormFields
    },
    data () {
      return {
        fields : [],
        formFields : {},
        formFieldsAttrs : {
          inline : true,
          labelWidth : '80px',
          labelPosition: 'right',
        },
        formRules : {},
        innerButtonOptions : {
          submitMessage : {
            name : '查询'
          }
        }
      }
    },
    methods : {
      ...mapActions([
        'handleAxios'
      ]),
      handleSearch (v) {//查询
        this.$emit('success',v)
      }
    }
  }
</script>

<style lang="css">
</style>

<template lang="html">
  <div id="demo_login">
    <el-row class="login-container">
      <el-col :span="12" class="c-logo">
        <img src="../../../../../static/images/jay.jpg">
      </el-col>
      <el-col :span="12" class="c-info">
        <h2>Web框架演示系统</h2>
        <FormFields
          :fields="fields"
          ref="loginForm"
          :formFields="formFields"
          :formRules="formRules"
          @success="handleLogin"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Data from './index';
  import {mapGetters,mapActions} from 'vuex';
  import axiosApi from 'apis/demo/index';
  import FormFields from 'cpLibs/formFields/index.vue';
  export default {
    components : {
      FormFields
    },
    data () {
      return Data(this)
    },
    mounted () {
    },
    methods : {
      ...mapActions([
        'login',
        'notifySuccess',
        'notifyWarn'
      ]),
      handleLogin (val) {
        this.login(val)
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../../assets/style/public/index.scss';
  @import './index.scss';
</style>

<template lang="html">
  <el-header class="header-frame">
    <h1 class="logo" @click="handleLink">
      <img src="../../../../../../static/images/jay.jpg" alt="web框架Demo" title="web框架Demo">
      <span>web框架模板</span>
    </h1>
    <div class="exit r">
      <el-dropdown>
        <span class="el-dropdown-link">
          Admin<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="handleModify">修改密码</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="logout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
  import {mapActions} from 'vuex';
  export default {
    methods : {
      ...mapActions([
        'logout'
      ]),
      handleLink (){
        this.$router.push('/main/home')
      },
      handleModify () {//修改密码
        console.log('修改密码操作');
        
      }
    }
  }
</script>

<style lang="scss">
  @import './index.scss';
</style>

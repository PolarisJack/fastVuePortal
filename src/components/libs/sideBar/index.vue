<template lang="html">
  <el-aside class="side-bar">
    <el-menu
     :default-active="$route.meta.active"
     unique-opened
     class="el-menu-container"
     style="border:0;"
     text-color="#BEC2CC"
     background-color="#283149">
      <el-submenu
       v-for="(value,key) in routerList"
       :key="key"
       v-if="value.children"
       :index="value.meta.active">
       <template slot="title">
         <i :class="value.meta.icon"></i>
         <span slot="title">{{value.meta.title}}</span>
       </template>
       <el-menu-item
          v-for="(item,index) in value.children || []"
          v-if="!item.meta.hidden"
          :index="item.meta.active"
          :key="index"
          class="hasIndent"
          @click="handleLink(item.path)">
         <span slot="title">{{item.meta.title}}</span>
       </el-menu-item>
      </el-submenu>
      <el-menu-item
        v-else-if="value.meta"
        :index="value.meta.active"
        @click="handleLink(value.path)">
       <i :class="value.meta.icon"></i>
       <span slot="title">{{value.meta.title}}</span>
     </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
  export default {
    beforeMount () {
      try {
        this.routerList = this.GET_PERMISSION_ROUTER[0].children;
      }
      catch (e) {
        this.notifyError('权限获取错误，请刷新或重新登录')
      }
    },
    data () {
      return {
        routerList : []
      }
    },
    computed : {
      ...mapGetters([
        'GET_PERMISSION_ROUTER'
      ])
    },
    methods : {
      ...mapActions([
        'notifyError'
      ]),
      handleLink (path) {
       this.$router.push(path)
     },
    }
  }
</script>

<style lang="scss">
  @import './index.scss';
</style>

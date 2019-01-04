<template lang="html">
  <div class="vue-components">
    <RegisterComponents />
    <parent-and-child
      ref="pAndcRef"
      msg="通过props传入的数据"
      class="outer-class"
      data-id="data-outer"
      :propsMehods="propsMehodsText"
      @emitMethods="handleEmitMehtods"
      @emitData="handleEmitData"/>
      <p slot="innerSlot">这是通过slot分发过去的数据</p>
      <p></p>
      <!-- <p slot="noName">这是通过slot分发过去的数据,未命名插槽</p> -->
    </parent-and-child>
  </div>
</template>

<script>
  import ParentAndChild from './extends/ParentAndChild.vue';
  import RegisterComponents from './extends/RegisterComponents.vue';
  export default {
    components : {
      ParentAndChild,
      RegisterComponents
    },
    data () {
      return {

      }
    },
    provide () {//注入方法
      return {
        textFunc () {//测试注入子组件的方法
          console.log('让子组件调用的方法');
          return '已经成功调用通过provide向子组件注入的方法'
        }
      }
    },
    mounted () {
      this.handleRefsData();
      this.handleRefsMethods();
    },
    methods : {
      propsMehodsText () {//props 方式传入的方法
        console.log('测试是否能通过props传递方法');
        return '显示则表示可以通过props传递方法'
      },
      handleEmitMehtods (v) {//通过emit派发的方法
        v()
      },
      handleEmitData (v){//通过emit派发的数据
        console.log(v);
      },
      handleRefsMethods () {//通过ref 访问子组件的方法
        this.$refs.pAndcRef.refsMethods();
      },
      handleRefsData () {
        console.log(this.$refs.pAndcRef.refData);
      }
    }
  }
</script>

<style lang="css">
</style>

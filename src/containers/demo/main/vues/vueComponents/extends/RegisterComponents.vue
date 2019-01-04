<template lang="html">
  <box-frame title="组件注册" class="inner-class" data-id="data-inner">
    <div slot="boxFrameSlot">
      <h2>注册方式</h2>
      <p>1、全局注册：Vue.component()</p>
      <p>2、局部注册：实例的components</p>
      <h2>组件继承</h2>
      <p>1、理解组件构造器（Extends）</p>
      <p>2、理解继承模式</p>
      <h2>组件模块</h2>
      <p>1、inline-template</p>
      <p>2、x-Templates</p>
      <p>3、组件内置template</p>
      <p>4、.vue template元素</p>
      <h2>注意事项：</h2>
      <p>1、递归引用（v-if等作为临界条件）</p>
      <p>2、循环引用（异步组件，生命周期）</p>
      <p>3、vue渲染render template</p>
    </div>
  </box-frame>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>

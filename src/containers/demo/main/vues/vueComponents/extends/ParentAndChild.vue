<template lang="html">
  <box-frame title="父子通信" class="inner-class" data-id="data-inner">
    <div slot="boxFrameSlot">
      <h2>父到子传递</h2>
      <p>1、{{textFunc()}}</p>
      <p>2、{{propsMehods()}}</p>
      <p>3、{{msg}}</p>
      <p><slot name="innerSlot"></slot></p>
      <p><slot>含有默认值</slot></p>
      <!-- <slot></slot> -->
      <h2>子到父</h2>
      <p>1、通过emit子组件可以向父组件传递数据和方法</p>
      <p>2、父组件通过refs可调用子组件的数据和方法</p>
      <h2>注意事项</h2>
      <p>1、vue2.0为单向数据流，父到子props传递数据是单向的，也就是说，父数据改变子数据也会发生改变，子改变不会逆向到父改变，这就要求不能在子组件中修改数据。如果修改，vue会做内部提示，也会导致很多数据流向问题（没有明显的数据来源）。</p>
      <p>2、传值的破坏特效和合并特性，当有些非props传入方式的值被绑定时，因为这些值是不能被预见的，除了class和style是合并以外，其他都是破坏性的替换</p>
      <p>3、可以通过inheritAttrs 决定是否继承根元素特效 默认true，这样就可以手动决定哪些需要继承，不导致意料之外的结果</p>
      <p>4、事件派发不存在大小写的转换，html对大小写不敏感，当作为属性名或变量名时会存在大小写转换</p>
      <p>5、具名slot和默认slot以及slot默认值得认识</p>
    </div>
  </box-frame>
</template>

<script>
  export default {
    //inheritAttrs: false,
    inject : ['textFunc'],//接收注入的方法
    props  : ['msg','propsMehods'],
    data () {
      return {
        refData : '我是通过父组件用refs访问到的数据'
      }
    },
    mounted () {
      this.textFunc();
      this.propsMehods();
      console.log(this.msg);
      this.emitMethodOrData();
    },
    methods : {
      refsUseMethods () {//通过refs 访问的方法
        console.log('我是通过refs访问到的方法');
      },
      emitMethodOrData () {//通过emit 派发给父组价的方法或数据
        this.$emit('emitMethods',this.emitMethods);
        this.$emit('emitData','我是通过emit传入的数据')
      },
      emitMethods () {//被emit传入的方法
        console.log('我是通过emit传入的方法');
      },
      refsMethods () {
        console.log('我在子组件中，被父组件通过refs所调用的方法');
      }
    }
  }
</script>

<style lang="css">
</style>

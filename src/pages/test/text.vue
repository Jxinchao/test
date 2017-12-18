<template>
  <div>
    <v-header></v-header>
    {{ name }}
  </div>
</template>

<script type="text/ecmascript-6">
  import header from "./header/header.vue";

  export default{
    name: '',
    components: {
      //模块
      "v-header": header,
    },
    data(){
      return {
          name:"我测试页面PC端444"
      }
    },
    mounted(){
    }, //初始化方法
    methods: {}   //内部函数
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>

<template>
  <div class="page-module-two">
    \{{ msg }}
    <module-ui></module-ui>
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  .page-module-two{

  }
</style>
<script>
  import ModuleUI from './components/module-ui.vue'

  export default {
    components: {
      'module-ui': ModuleUI
    },
    data: function () {
      return {
        msg: ' hello module-two'
      }
    }
  }
</script>

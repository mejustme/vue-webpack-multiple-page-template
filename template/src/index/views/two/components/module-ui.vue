<template>
  <div class="module-two-ui">
    \{{ msg }}
    {{#vuex}}
    当前订单个数： \{{ orderLength }}
    {{/vuex}}
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  .module-two-ui{

  }
</style>
<script>
  {{#vuex}}
  import { mapGetters } from 'vuex'

  {{/vuex}}
  export default {
    data: function () {
      return {
        msg: ' hello module-two-ui'
      }
    }{{#vuex}},
    computed: {
      ...mapGetters([
        'orderLength'
      ])
    }{{/vuex}}
  }
</script>

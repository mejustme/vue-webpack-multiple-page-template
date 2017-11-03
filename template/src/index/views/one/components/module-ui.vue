<template>
  <div class="module-one-ui">
    \{{ msg }}
    {{#vuex}}
    当前用户状态：\{{ userStateLabel }}
    {{/vuex}}
  </div>
</template>
<style lang="scss" rel="stylesheet/scss">
  .module-one-ui{

  }
</style>
<script>
  {{#vuex}}
  import { mapGetters } from 'vuex'

  {{/vuex}}
  export default {
    data: function () {
      return {
        msg: ' hello module-one-ui'
      }
    }{{#vuex}},
    computed: {
      ...mapGetters([
        'userStateLabel'
      ])
    }{{/vuex}}
  }
</script>

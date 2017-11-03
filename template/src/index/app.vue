<template>
  <div class="page">
    <page-ui></page-ui>
    {{#router}}
    <router-view class="router-box"></router-view>
    <router-link to="/one">模块 one</router-link>
    <router-link to="/two">模块 two</router-link>
    {{/router}}
  </div>
</template>

<style lang="scss" rel="stylesheet/scss">
  @import "../assets/icon/css/icons.css";
  @import "../common/common.css";

  .page {
    padding: 10px;
    {{#router}}
    .router-box{
      margin: 10px 0;
    }{{/router}}
  }
</style>

<script>
  import PageUI from './components/page-ui'

  export default {
    components: {
      'page-ui': PageUI
    },
    data: function () {
      return {}
    }
  }
</script>

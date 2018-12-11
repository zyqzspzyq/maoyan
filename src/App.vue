<template>
  <div id="app">
    <app-header></app-header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import AppHeader from '@components/layout/AppHead'
export default {

  name: 'app',
  components: {
    AppHeader
  }

};
</script>
<style lang="scss">
</style>



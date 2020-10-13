<template>
  <div id="app">
    <the-header/>
    <router-view/>
    <the-footer/>
  </div>
</template>
<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
export default {
  name: 'App',
  components: { TheHeader, TheFooter }
}
</script>
<style lang="stylus">
@import './styles/style.styl'
@font-face {
  font-family: 'Commissioner';
  src: url(./styles/fonts/Commissioner-VariableFont_wght.ttf);
}
  
</style>

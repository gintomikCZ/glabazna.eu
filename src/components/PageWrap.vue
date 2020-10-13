<template>
<main>
  <slot></slot>
</main>
</template>
<script>
export default {
  name: 'PageWrap',
}
</script>
<style lang="stylus">
main
  max-width: 600px;
  width: 90vw;
  margin: 0 auto;
  flex: 1 0 0;
  min-height: 0
  overflow-y: auto
</style>
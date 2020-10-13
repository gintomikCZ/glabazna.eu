<template>
  <page-wrap>
    <div class="container home-page">
      <p>Hello. My name is <strong>Tomas</strong>.</p>
      <p>I am a <strong>fullstack developer</strong>.</p>
    </div>
  </page-wrap>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

}
</script>
<style lang="stylus">
p
  font-size: 1.4rem
  line-height: 1.5
strong
  color: var(--primary200)
.home-page
  height: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
</style>

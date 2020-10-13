<template>
  <header>
    <h1><a href="/">glabazna.eu</a></h1>
    <div class="title-underline"></div>
    <div class="subtitle">developer's webpage</div>
  </header>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',

}
</script>
<style lang="stylus">
header
  margin: 2rem 0
  width: 90vw
  max-width: 600px
header > h1
  float: left
  margin-bottom: 0.1rem
  color: var(--primary200)
  font-weight: 80
  & > a, a:link, a:visited, a:hover, a:focus
    font-size: 1.8rem
.title-underline
  background: var(--secondary400)
  min-height: 2px
  display: inline-block
  width: 100%
header .subtitle
  float: right
  color: var(--primary200)
</style>

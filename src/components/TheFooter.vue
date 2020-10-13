<template>
<footer>
  <nav>
    <ul>
      <footer-link v-for="footerLink in links" :key="footerLink.name" :link="footerLink" />
    </ul>
  </nav>
</footer>
</template>
<script>
import FooterLink from '@/components/FooterLink.vue'
export default {
  name: 'TheFooter',
  computed: {
    links () {
      return this.$store.getters.getLinks
    }
  },
  components: { FooterLink }
}
</script>
<style lang="stylus">

footer
  width: 90vw
  max-width: 600px
  background: black
  margin: 2rem 0

nav
  padding: .5rem .75rem
  line-height: 1


nav > ul
  align-items: center
  padding: 0
  display: flex
  justify-content: space-around
  & > li:not(:last-child)
    padding: 0.35rem 0.75rem
    margin-right: 1rem

</style>
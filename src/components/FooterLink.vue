<template>
  <li>
    <template v-if="!active">
    <a class="active-link" :href="link.path">{{ link.label }}</a>
    </template>
    <template v-else>
      <div class="inactive-link">{{ link.label }}</div>
    </template>
  </li>
</template>
<script>
export default {
  name: 'FooterLink',
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  computed: {
    active () {
      return this.$route.path === this.link.path
    }
  }
}
</script>
<style lang="stylus">
.inactive-link {
  font-size: 1.2rem
  color: var(--secondary400)
  cursor: default
  pointer-events: none
}
.active-link {
  cursor: pointer
}

</style>

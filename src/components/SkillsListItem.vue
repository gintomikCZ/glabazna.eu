<template>
  <li :class="{'subtitle': item.subtitle }">
    <icon-base
      v-if="item.icon"
      :name="item.icon"
      class="left-icon"
      :class="{
        'icon-heart': item.icon === 'heart',
        'icon-book': item.icon === 'book',
        'icon-arrow': item.icon === 'arrowAltDown'
      }" />
    <span>{{ item.name }}</span>
  </li>
</template>
<script>
export default {
  name: 'SkillsListItem',
  props: {
    item: {
      type:  Object,
      required: true
    }
  }
}
</script>
<style lang="stylus">


</style>
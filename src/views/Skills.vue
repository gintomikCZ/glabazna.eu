<template>
  <page-wrap>
    <div class="container">
      <h1 class="page-header">my skills</h1>
    </div>
    <div class="container full-width">
      <ul class="explanatory">
        <li>
          <icon-base name="heart" class="icon-heart left-icon"/>
          <span class="left-icon">-</span>
          <span>my favourite technologies</span>
        </li>
        <li>
          <icon-base name="book" class="icon-book left-icon"/>
          <span class="left-icon">-</span>
          <span>technologies I'm currently intensively learning</span>
        </li>
        <li>
          <icon-base name="arrowAltDown" class="icon-arrow left-icon"/>
          <span class="left-icon">-</span>
          <span> I don't use these technologies anymore, although I used to do so and I am quite familiar with them</span>
        </li>
      </ul>
    </div>
    <div class="container">
      <skills-list title="frontend"/>
      <skills-list title="backend"/>
      <skills-list title="others"/>
    </div>
  </page-wrap>
</template>
<script>
import SkillsList from '@/components/SkillsList.vue'
export default {
  name: 'Skills',
  components: { SkillsList }
}
</script>
<style lang="stylus">
ul.explanatory
  list-style: none
  margin: 0
  padding: 0
  & > li
    padding: 0.35em 0.75em
    font-size: 1rem
    display: flex
    align-items: flex-start
</style>

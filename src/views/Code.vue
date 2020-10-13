<template>
  <page-wrap>
    <div class="container">
      <h1 class="page-header">my code</h1>
    </div>
    <div class="container">
      <h2 class="page-subtitle">this page</h2>
      <p>the source code of this webpage can be found here:</p>
      <a class="text-link" href="https://github.com/gintomikCZ/glabazna.eu">https://github.com/gintomikCZ/glabazna.eu</a>

    </div>
    <div class="container text-long">
      <h2 class="page-subtitle">iHen</h2>
      <p>iHen is a funny web application I wrote in pure Vue 2 (no additional UI framework or library).
        Its backend is powered by a simple REST API written in PHP 7. The data is stored in a PostgreSQL database.
      </p>
      <p>The original purpose of this app was to take daily records about the production of eggs in our little poultry farm.</p>
      <p>When I was coding iHen, I've got an idea to present it here as a showcase of my Vue web application and the code.</p>
      <p>Clicking the link below you'll enter a fully functional demo version of iHen.
        Feel free to play with it without any limitation, to add new records as well as to modify or delete the existing ones.
        Anything you do doesn't affect the real iHen containing the true data from our poultry farm. It is just deployed to a different place.</p>
      <p>iHen says: <span class="blue-color">"po po pooo po po ..."</span> (in English: enjoy playing with me!). She also says: <span class="blue-color">"poooo po po poooo po ..."</span>, which means: find my source code here:</p>
      <a class="text-link" href="https://github.com/gintomikCZ/ihen">https://github.com/gintomikCZ/ihen</a>
    </div>
    <div class="container ihen-link-container">
      <a class="ihen-link" href="https://ihendemo.glabazna.eu">
        <icon-base name="gallina" size="24" class="left-icon"/>
        <span>iHen</span>
      </a>
    </div>

  </page-wrap>
</template>
<script>
export default {
  name: 'Code',
  props: {
  
  },
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
  }
}
</script>
<style lang="stylus">

.ihen-link-container
  margin-top: 1rem
  display: flex
  justify-content: center
a.ihen-link
  text-decoration: none
  background: var(--secondary400)
  padding: 0.5em 1em
  font-weight: 800
  color: black
  display: flex
  align-items: center
  border-radius: 3px
  margin-bottom: 3rem
  transition: all 0.3s ease-in-out
  border: 1px solid transparent
  & svg
    color: black
    transition: color 0.3s ease-in-out
  &:hover, &:focus
    border-color: var(--secondary400)
    background: #434343
    color: var(--secondary400)
    & svg
      color: var(--secondary400)
  & > span
    font-size: 1.8rem
a.text-link
  font-weight: 700
  font-size: 1.2rem
.blue-color
  color: #65def1
.text-long
  padding-right: 2rem
  font-size: 1rem
  & > p
    text-align: justify
</style>
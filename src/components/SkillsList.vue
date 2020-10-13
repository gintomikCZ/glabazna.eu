<template>
  <div class="container">
    <div
      class="list-title"
      @click="toggleList"
    >
      <span>{{ title }}</span>
      <div
        class="rotating-caret"
        tabindex="0"
        @click="toggleList"
      >
        <icon-base
          name="caretUp"
          size="20"
          :class="{'caret-rotated': !showList}"
        />
      </div>
    </div>
    <div>
    <transition-grow>
      <ul
        v-if="showList"
        class="skills-list"
      >
        <skills-list-item
          v-for="item in items"
          :item="item"
          :key="item.name"
        />
      </ul>
    </transition-grow>
    </div>
  </div>

</template>
<script>
import SkillsListItem from './SkillsListItem.vue'
export default {
  name: 'SkillsList',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    items () {
      return this.$store.getters.getItems(this.title)
    }
  },
  data () {
    return {
      showList: false
    }
  },
  methods: {
    toggleList (e) {
      e.stopPropagation()
      this.showList = !this.showList
    }
  },
  components: {
    SkillsListItem
  }
}
</script>
<style lang="stylus">
.list-title {
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  background: var(--primary200);
  color: #434343;
  margin-bottom: 0.3rem;
  justify-content: space-between;
  padding: 0.35em 1.5em;
  align-items: center;
  line-height: 1;
}

ul.skills-list {
  list-style: none;

  & > li {
    display: block;
    padding: 0.35em 1.5em;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }

  & > li.subtitle {
    font-weight: 700;
    color: var(--primary200);
    font-size: 1.2rem;
    padding-left: 0;

    & > span {
      border-bottom: 1px solid var(--primary200);
      padding-bottom: 0.2rem;
    }
  }
}

.rotating-caret {
  padding: 0.5rem;
  transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & svg {
    color: #434343;
    transition: color 0.3s ease-in-out, transform 0.5s linear;
  }
  &:hover {
    background: #434343;
  }
  &:focus {
    outline: none
    box-shadow: 0px 0px 0px 2px #434343
  }
  &:hover svg {
    color: var(--primary200);
  }
}

.caret-rotated
  transform: rotate(180deg)
</style>
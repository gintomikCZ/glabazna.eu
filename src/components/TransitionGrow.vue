<template>
  <transition
    name="grow"
    @enter="onEnter"
    @after-leave="$emit('after-leave')"
    @after-enter="$emit('after-enter')"
    @before-enter="$emit('before-enter')"
    @before-leave="$emit('before-leave')"
    @leave="onLeave">
    <slot></slot>
  </transition>
</template>
<script>
export default {
  name: 'TransitionGrow',
  methods: {
    onEnter (el) {
      const width = getComputedStyle(el).width
      el.style.width = width
      el.style.position = 'absolute'
      el.style.visibility = 'hidden'
      el.style.height = 'auto'

      const height = getComputedStyle(el).height
      el.style.width = null
      el.style.position = null
      el.style.visibility = null
      el.style.height = 0
      // this forces the browser repaint
      /* eslint-disable */
      getComputedStyle(el).height
      /* eslint-disable */
      // using requestAnimationFrame we can be sure the browser finished painting
      requestAnimationFrame(() => {
        el.style.height = height
      })
    },
    onLeave (el) {
      const height = getComputedStyle(el).height
      el.style.height = height
      /* eslint-disable */
      getComputedStyle(el).height;
      /* eslint-disable */
      requestAnimationFrame(() => {
        el.style.height = 0;
      });
    },
    afterEnter (el) {
      el.style.height = 'auto'
    }
  }
}
</script>

<style scoped>
.grow-enter-active,
.grow-leave-active {
  transition: height 1s ease-in-out;
  overflow: hidden;
}
.grow-enter,
.grow-leave-to {
  height: 0;
}
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>

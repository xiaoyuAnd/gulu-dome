<template>
  <div class="tabsItem" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabs-item",
  data() {
    return {
      active: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [String, Number],
      require: true
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected',
        (name) => {
          this.active = name === this.name
        })
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected', this.name)
    }
  }
}
</script>

<style scoped lang="scss">
.tabsItem {
  height: 50px;
  display: flex;
  padding: 0 2em;
  align-items: center;
  &.active {
    background: red;
  }
}


</style>
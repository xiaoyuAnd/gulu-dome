<template>
  <div class="tabsItem" @click="onclick" :class="classes">
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
        active: this.active,
        disabled: this.disabled
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
    onclick() {
      if(this.disabled){return}
      this.eventBus.$emit('update:selected', this.name, this)
    }
  }
}
</script>

<style scoped lang="scss">
.tabsItem {
  height: 100%;
  display: flex;
  padding: 0 2em;
  align-items: center;

  &.active {
    color: skyblue;
  }
  &.disabled{
    color: gray;
    cursor: not-allowed;
  }
}


</style>
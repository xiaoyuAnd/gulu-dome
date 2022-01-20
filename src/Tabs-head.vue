<template>
  <div class="tabsHead">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="tabsHeadIcon">
      <slot name='actions'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs-head",
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected',
        (name,vm) => {
          console.log(vm.$el)
          let {width,bottom,left,right} = vm.$el.getBoundingClientRect()
          // console.log(width,bottom,left,right)
          this.$refs.line.style.width = `${width}`+'px'
          this.$refs.line.style.left = `${left-20}`+'px'
        })
  },
}
</script>

<style scoped lang="scss">
.tabsHead {
  display: flex;
  height: 36px;
  border-bottom: 1px solid #ddd;
  justify-content: left;
  align-items: center;
  position: relative;
  > .tabsHeadIcon {
    margin-left: auto;
    margin-right: 5em;
  }
  >.line{
    position: absolute;
    bottom: 0;
    height: 1px;
    //width: 84px;
    border-bottom: 2px solid skyblue;
    transition: all .3s;
  }
}
</style>
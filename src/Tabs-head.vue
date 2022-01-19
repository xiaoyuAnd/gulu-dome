<template>
  <div class="tabsHead">
    <slot></slot>
    <div class="tabsHeadIcon">
      <slot name='actions'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs-head",
  inject: ['eventBus'],
  created() {
    // console.log("爷爷给head的eventBus")
    // console.log(this.eventBus)
  }
}
</script>

<style scoped lang="scss">
.tabsHead {
  display: flex;
  height: 50px;
  //border: 1px solid red;
  justify-content: left;
  align-items: center;

  > .tabsHeadIcon {
    margin-left: auto;
    margin-right: 5em;
  }
}
</style>
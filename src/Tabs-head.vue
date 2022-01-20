<template>
  <div class="tabsHead">
    <slot></slot>
    <div class="line"></div>
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
  position: relative;
  > .tabsHeadIcon {
    margin-left: auto;
    margin-right: 5em;
  }
  >.line{
    position: absolute;
    bottom: 0;
    height: 1px;
    width: 84px;
    border-bottom: 1px solid green;
  }
}
</style>
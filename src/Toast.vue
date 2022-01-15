<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Toast"
}
</script>

<style scoped lang="scss">
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  $toast-bg: rgba(0, 0, 0, 0.75);
  color: #fff;
  background: $toast-bg;
  border-radius: 4px;
  padding: 0 16px;
  box-shadow: 0 0 3px rgba(0,0,0,.5);
}
</style>
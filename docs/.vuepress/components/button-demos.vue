<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    111

    <pre>
      <code>
{{ content }}
      </code>
    </pre>
  </div>
</template>

<script>
import Button from '../../../src/Button.vue';
// import Icon from '../../../src/Icon.vue'


export default {
  name: "button-demos",
  data() {
    return {
      content: `
     <g-button>默认按钮</g-button>
     <g-button icon="settings">默认按钮</g-button>
     <g-button :loading="true">默认按钮</g-button>
     <g-button disabled>默认按钮</g-button>
      `
    }
  },
  components: {
    'g-button': Button,
    // 'g-icon':Icon
  }
}
</script>

<!--<style scoped>-->

<!--</style>-->
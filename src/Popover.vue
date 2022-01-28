<template>
  <div class="popover" @click="onclick">
    <div v-show="visible" class="content" @click ref="contentWrapper">
      <slot name="header"></slot>
    </div>
    <span ref="spanWrapper">
          <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "g-popover",
  data() {
    return {
      visible: false
    }
  },
  methods: {
    onclick(event) {
      if (this.$refs.spanWrapper.contains(event.target)) {
        this.visible = !this.visible
        if (this.visible === true) {
          setTimeout(() => {
            let {width, height, top, left} = this.$refs.spanWrapper.getBoundingClientRect()
            console.log(width, height, top, left)
            document.body.appendChild(this.$refs.contentWrapper)
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
            this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            let eventHandler = (e) => {
              if(!this.$refs.contentWrapper.contains(e.target)){
                this.visible = false
                console.log('隐藏了popover')
                document.removeEventListener('click', eventHandler)
              }
            }
            document.addEventListener('click', eventHandler)
          })
        }
      }
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content {
  border: 1px solid red;
  position: absolute;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  //bottom: 100%;
  //left: 0;
  white-space: nowrap;
  transform: translateY(-100%);
}
</style>
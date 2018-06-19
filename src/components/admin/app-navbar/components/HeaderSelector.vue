<template>
     <span class="header-selector"
           :class="{ 'i-menu-expanded': !isOpen, 'i-menu-collapsed': isOpen }"
           @click="$emit('update:isOpen', !isOpen)"
     ></span>
</template>

<script>
export default {
  name: 'HeaderSelector',
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss">

    @import "../../../../sass/mixins";

    .header-selector {
        @include flex-center();
        cursor: pointer;
    }

</style>


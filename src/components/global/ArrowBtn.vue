<script setup>
const props = defineProps({
  textBtn: {
    type: String,
  },
});
</script>

<template>
  <div class="arrow-btn">
    <span v-html="textBtn" class="text-14 lg:text-24" />
  </div>
</template>

<style lang="scss" scoped>
.arrow-btn {
}
</style>

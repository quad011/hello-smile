<script setup>
const props = defineProps({
  textBtn: {
    type: String,
  },
  theme: {
    type: String,
  },
});

const themeClass = computed(() => {
  return props.theme === "black" ? "black" : "white";
});
</script>

<template>
  <div :class="`btn-component flex justify-center items-center ${themeClass}`">
    <span v-html="textBtn" class="text-12 lg:text-24" />
  </div>
</template>

<style lang="scss" scoped>
.btn-component {
  border: 1px solid #282930;
  border-radius: 50px;
  min-width: 18vw;
  padding: 0.75rem 2rem;
  @media (min-width: 600px) {
    padding: 1rem 2rem;
  }

  &.white {
    background-color: white;
    color: black;
    &:hover {
      background-color: black;
      color: white;
    }
  }

  &.black {
    background-color: black;
    color: white;

    &:hover {
      background-color: white;
      color: black;
    }
  }
}
</style>

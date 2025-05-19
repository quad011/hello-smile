<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <div
    class="hero-header h-[80vw] sm:h-[56.25vw] max-h-screen flex flex-col justify-end items-center relative overflow-hidden"
  >
    <ScrollingElement
      fromY="0"
      :toY="'-10vw'"
      startPosition="0"
      endPosition="top top"
      :fromScale="1"
      :toScale="0"
      style="will-change: transform, opacity"
    >
      <h1
        v-html="`Hi, I am`"
        class="text-black text-40 whitespace-nowrap font-bold uppercase"
      ></h1>
    </ScrollingElement>

    <ScrollingElement
      :fromY="0"
      :toY="'-100vw'"
      startPosition="0"
      endPosition="bottom top"
    >
      <h1
        v-html="title"
        class="text-black text-[10.5vw] whitespace-nowrap font-bold uppercase leading-none"
      ></h1>
    </ScrollingElement>
  </div>
</template>

<style lang="scss" scoped></style>

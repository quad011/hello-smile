<script setup>
import { ref } from "vue";
const props = defineProps({
  date: {
    type: String,
  },
  company: {
    type: String,
  },
  companyLinks: {
    type: Object,
  },
  ocupation: {
    type: String,
  },
  text: {
    type: String,
  },
});
</script>

<template>
  <div class="text-box">
    <h3 v-if="date" v-html="date" class="text-18 lg:text-24 mb-3" />
    <h3 v-if="company" v-html="company" class="text-18 lg:text-24 mb-3" />

    <div class="flex flex-col mb-3">
      <div v-for="link in companyLinks" class="mb-2">
        <a target="_blank" :href="link" v-html="link" class="link regular" />
      </div>
    </div>

    <h3 v-if="ocupation" v-html="ocupation" class="text-18 lg:text-24 mb-3" />

    <p v-if="text" v-html="text" class="text-16 lg:text-base pr-7" />
  </div>
</template>

<style lang="scss" scoped>
.text-box {
}
</style>

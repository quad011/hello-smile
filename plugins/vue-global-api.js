import { onMounted, onUnmounted, ref } from "vue";

export default {
  beforeCreate() {
    this.$onMounted = onMounted;
    this.$onUnmounted = onUnmounted;
    this.$ref = ref;
  },
};
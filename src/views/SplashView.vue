<script setup lang="ts">
import { RouterView } from 'vue-router'

import ZdfAnimatedLogo from '@/components/ZdfAnimatedLogo.vue'
</script>

<template>
  <div>
    <div
      class="pointer-events-none absolute top-0 left-0 w-full h-full flex justify-center items-center z-100 splash"
    >
      <ZdfAnimatedLogo class="w-40" />
    </div>
    <RouterView />
  </div>
</template>

<style scoped>
.splash {
  opacity: 0;
  background-color: #ffffff;
  animation: opacity-fade-out 5.5s ease-in-out;
}

@keyframes opacity-fade-out {
  from,
  34% {
    opacity: 1;
  }

  60%,
  to {
    opacity: 0;
  }
}
</style>

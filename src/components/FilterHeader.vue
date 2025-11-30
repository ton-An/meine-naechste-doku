<script setup lang="ts">
import CategorySelector from './CategorySelector.vue'
import GenreSelector from './GenreSelector.vue'
</script>

<template>
  <div>
    <div
      class="bg-gray-400/30 mx-20 rounded-xl backdrop-blur-lg flex flex-row justify-center gap-4 p-4"
    >
      <div class="w-1/2 flex justify-end">
        <CategorySelector />
      </div>
      <div class="w-1/2">
        <GenreSelector />
      </div>
    </div>
  </div>
</template>

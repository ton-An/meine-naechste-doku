<template>
  <div class="shape blur-xl opacity-20">
    <!-- ko here -->
  </div>
</template>

<style>
.shape {
  animation: morph 8s ease-in-out infinite;
  border-radius: 90% 40% 60% 70% / 60% 60% 70% 70%;
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    rotate: 0deg;
    transform: scale(1);
    background: linear-gradient(250deg, red 0%, orange 100%);
  }

  50% {
    border-radius: 50% 60% 70% 40% / 50% 60% 60% 70%;
    rotate: 180deg;
    transform: scale(1.3);
    background: linear-gradient(250deg, red 1%, orange 100%);
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    rotate: 360deg;
    transform: scale(1);
    background: linear-gradient(250deg, red 0%, orange 100%);
  }
}
</style>

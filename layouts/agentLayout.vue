<template>
  <div>
    <TheHeadline />
    <TheAppBar />

    <section>
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
import TheAppBar from "~/components/agents/TheAppBar.vue";
</script>

<style scoped></style>

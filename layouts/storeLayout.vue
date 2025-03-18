<template>
  <div>
    <TheHeadline/>
    <TheAppBar/>

    <section>
      <slot/>
    </section>
  </div>
</template>

<script setup lang="ts">
import TheAppBar from '~/components/website/TheAppBar.vue';
import TheHeadline from '~/components/website/TheHeadline.vue';
</script>

<style scoped>

</style>
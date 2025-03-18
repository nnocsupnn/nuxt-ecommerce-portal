<template>
  <UBreadcrumb
    divider="/"
    :links="props.links"
    :ui="{ active: 'text-blue-500 dark:text-blue-400' }"
  />
</template>

<script setup lang="ts">
type IPropsDisplay = {
  label: string
  to?: string
}

const props = defineProps<{
  links: IPropsDisplay[];
}>();
</script>

<!-- { label: 'Home', to: '/' }, { label: 'Navigation' }, { label: 'Breadcrumb' } -->

<style scoped>

</style>
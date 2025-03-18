<template>
  <div v-if="isOpen">
    <UModal v-model="isOpen">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <slot name="modal-header"/>
        </template>

        <section>
          <slot name="modal-content"/>
        </section>
      </UCard>
    </UModal>
  </div>
</template>

<script setup lang="ts">
type TPropsDisplay = {
  isOpen: boolean;
}

const emit = defineEmits(['onEmitClick'])

const props: TPropsDisplay = defineProps({
  isOpen: {
    typ: Boolean,
    default: false,
  },
})

onMounted(() => {
  isOpen.value = props.isOpen
})

const isOpen = ref<boolean>(true)

const closeModal = () => {
  isOpen.value = false
  emit('onEmitClick')
}

watch(() => props.isOpen, (newValue) => {
  isOpen.value = newValue
})
</script>

<style scoped>

</style>
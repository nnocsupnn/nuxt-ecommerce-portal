<template>
  <UCheckbox :id="props.id" color="blue" :label="props.label" v-model="checkboxValue" :ui="{ label: 'font-normal'}"/>
</template>

<script setup lang="ts">
type TPropsDisplay = {
  id: string
  label: string
  value: boolean
}

const emit = defineEmits(['onEmitClick'])

const props: TPropsDisplay = defineProps({
  id: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  value: {
    type: Boolean,
    default: false
  }
})

const checkboxValue = ref<boolean>(false)

onMounted(() => (checkboxValue.value = props.value))

watch(checkboxValue, newValue => {
  emit('onEmitClick', newValue)
})

watch(() => props.value, newValue => {
  checkboxValue.value = newValue
})
</script>

<style scoped>

</style>
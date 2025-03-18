<template>
  <UButton
  :id="props.id"
  :color="props.color"
  :size="props.size"
  :icon="props.icon"
  :variant="props.variant"
  :disabled="props.disabled"
  class="h-fit"
  :class="customClass"
  @click="emit('onEmitClick')"/>
</template>

<script setup lang="ts">
type ButtonColor = 'blue' | 'orange' | 'red';
type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'soft';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

type TButtonDisplay = {
  id: string;
  color: ButtonColor;
  variant: ButtonVariant;  
  disabled: boolean;
  loading: boolean;
  size: ButtonSize;
  icon: string;
  customClass: string;
}

const emit = defineEmits(['onEmitClick'])

const props: TButtonDisplay = defineProps({
  id: {
    type: String,
    default: 'btn-default'
  },
  color: {
    type: String as () => ButtonColor,
    default: 'blue'
  },
  variant: {
    type: String as () => ButtonVariant,
    default: 'solid'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String as () => ButtonSize,
    default: 'md'
  },
  icon: {
    type: String,
    default: ''
  },
  customClass: {
    type: String,
    default: ''
  },
})
</script>

<style scoped>

</style>
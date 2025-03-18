<template>
  <UFormGroup
    :label="props.label"
    :ui="{
      label: {
        base: 'block font-normal text-gray-700 dark:text-gray-200',
      },
    }"
  >
    <UInput
      :id="props.id"
      color="gray"
      size="md"
      variant="outline"
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      v-model="input"
      :ui="{
        color: {
          gray: {
            outline: 'bg-white focus:ring-blue-500 dark:focus:ring-blue-400',
          },
        },
      }"
    />
  </UFormGroup>
</template>

<script setup lang="ts">
type TPropsDisplay = {
  id: string;
  placeholder: string;
  value: string | number | undefined;
  disabled: boolean;
  label: string;
};

const emit = defineEmits(["onInputChange"]);

const props: TPropsDisplay = defineProps({
  id: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Number, undefined] as PropType<string | number | undefined>,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
});

const input = ref<string | number | undefined>("");

onMounted(() => {
  input.value = props.value;
});

watch(
  () => props.value,
  (newValue) => {
    input.value = newValue;
  }
);

watch(
  () => input.value,
  (newValue) => {
    emit("onInputChange", newValue);
  }
);
</script>

<style scoped></style>

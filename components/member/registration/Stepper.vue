<template>
  <section class="grid grid-cols-5 gap-2">
    <section
      v-for="item in props.tabItems"
      :key="item.key"
      class="flex flex-col gap-2 px-6 py-2 border rounded-2xl"
      :class="
        props.tabActive == item.key
          ? 'border-blue-300 shadow-lg'
          : item.key < props.tabActive
          ? 'border-green-200'
          : 'border-gray-200'
      "
    >
      <section class="flex justify-between">
        <section class="flex gap-2 items-center">
          <UIcon
            :name="item.icon"
            class="w-[1.5rem] h-[1.5rem]"
            :class="
              props.tabActive == item.key
                ? 'text-blue-400'
                : item.key < props.tabActive
                ? 'text-green-300'
                : 'text-gray-400'
            "
          />

          <span
            class="font-semibold"
            :class="
              props.tabActive == item.key
                ? 'text-blue-400'
                : item.key < props.tabActive
                ? 'text-green-300'
                : 'text-gray-400'
            "
            >{{ item.label }}</span
          >
        </section>

        <UIcon
          v-if="item.key < props.tabActive"
          name="material-symbols:check-box"
          class="w-[1.5rem] h-[1.5rem] text-green-500"
        />
      </section>

      <span class="text-xs text-gray-500">
        {{ item.content }}
      </span>
    </section>
  </section>
</template>

<script setup lang="ts">
type TPropsDisplay = {
  tabActive: number;
  tabItems: TPropsItemDisplay[];
};

type TPropsItemDisplay = {
  key: number;
  label: string;
  icon: string;
  content: string;
  disabled: boolean;
};

const props: TPropsDisplay = defineProps({
  tabActive: {
    type: Number,
    default: 0,
  },
  tabItems: {
    type: Array as PropType<TPropsItemDisplay[]>,
    default: [],
  },
});
</script>

<style scoped></style>

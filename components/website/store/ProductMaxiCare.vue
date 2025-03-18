<template>
  <div
    class="grid grid-cols-1 gap-8 rounded-2xl border border-gray-300 p-6 shadow hover:shadow-xl hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out bg-white h-full"
  >
    <section class="flex flex-col gap-4 justify-center h-[22rem]">
      <img :src="props.data.image" class="col-span-1 object-contain" />
      <img
        v-if="props.data.rewards"
        :src="props.data.rewards"
        class="col-span-1 object-contain"
      />
    </section>

    <section class="col-span-1">
      <section class="flex flex-col justify-between gap-8 min-h-[12rem]">
        <section class="flex flex-col gap-6">
          <section class="flex justify-between items-center">
            <div class="flex flex-col">
              <span class="text-lg font-medium text-gray-700">
                {{ props.data.title }}
              </span>
              <span class="text-xs text-gray-600">By MaxiCare</span>
            </div>

            <span>{{ `Php ${props.data.amount}` }}</span>
          </section>

          <p class="text-sm text-gray-600">
            {{ props.data.description }}
          </p>
        </section>

        <section class="flex gap-2">
          <section class="w-full">
            <Button
              :id="`btn-view-details-${props.data.id}`"
              label="Mode Details"
              variant="outline"
              custom-class="flex justify-center w-full"
              @on-emit-click="
                fnSetProduct(props.data.id, {
                  quantity: 1,
                  is_gift: false,
                  ...props.data,
                })
              "
            />
          </section>

          <ButtonIcon
            :id="`btn-add-to-cart-${props.data.id}`"
            icon="material-symbols:shopping-cart"
            @on-emit-click="fnSetProductToCart(props.data)"
          />
        </section>
        <!-- <UButton :id="`btn-view-details-${props.data.id}`" size="md" color="blue" variant="solid" icon="material-symbols-light:arrow-right-alt" :ui="{ font: 'font-normal' }" @click="navigateTo(`/product/1`)">
          <div class="flex justify-between gap-2 px-1 w-full">
            <span>View Details</span>

            
          </div>
        </UButton> -->
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from "~/components/elements/Button.vue";
import ButtonIcon from "~/components/elements/ButtonIcon.vue";
import useProducts from "~/composables/website/useProducts";

type TPropsDataItemDisplay = {
  id: number;
  type: string;
  title: string;
  description: string;
  amount: string;
  image: string;
  email: string;
  rewards: string;
};

const props = defineProps<{
  data: TPropsDataItemDisplay;
}>();

const { fnSetProduct, fnSetProductToCart } = useProducts();
</script>

<style scoped></style>

<template>
  <div
    class="flex flex-col rounded-2xl border border-gray-300 shadow hover:shadow-xl hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out bg-white h-full"
  >
    <img :src="props.data.image" class="col-span-1 object-contain" />

    <section class="flex flex-col justify-between gap-8 p-6 h-full">
      <section class="flex flex-col gap-8">
        <section class="flex flex-col gap-6">
          <section class="flex justify-between items-center">
            <div class="flex flex-col">
              <span class="text-lg font-medium text-gray-700">
                {{ props.data.title }}
              </span>
              <span class="text-xs text-gray-600">By MaxiLife</span>
            </div>
          </section>

          <p class="text-sm text-gray-600 min-h-[8rem]">
            {{ props.data.description }}
          </p>
        </section>

        <section class="flex flex-col gap-6">
          <section
            v-for="benefit in props.data.benefits"
            :key="benefit.id"
            class="flex gap-2"
          >
            <UIcon
              :name="benefit.icon"
              class="text-red-400 w-[1.5rem] h-[1.25rem]"
            />

            <span class="text-sm text-gray-600 min-w-[6rem]">
              {{ benefit.name }}
            </span>

            <section class="flex flex-col w-full">
              <ul class="list-disc pl-5">
                <li
                  v-for="item in benefit.items"
                  :key="item.id"
                  class="text-sm text-gray-600"
                >
                  {{ item.name }}
                </li>
              </ul>

              <span
                v-if="benefit.sub_description"
                class="text-xs text-gray-500 pl-5"
              >
                {{ benefit.sub_description }}
              </span>
            </section>
          </section>
        </section>
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
                id: props.data.id,
                type: props.data.type,
                title: props.data.title,
                description: props.data.description,
                amount: props.data.amount.toString(),
                image: props.data.image,
                quantity: 1,
                is_gift: false,
                email: '',
              })
            "
          />
        </section>

        <ButtonIcon
          :id="`btn-add-to-cart-${props.data.id}`"
          icon="material-symbols:shopping-cart"
          @on-emit-click="
            fnSetProductToCart({
              id: props.data.id,
              title: props.data.title,
              description: props.data.description,
              amount: props.data.amount.toString(),
              image: props.data.image,
            })
          "
        />
      </section>
      <!-- <UButton :id="`btn-view-details-${props.data.id}`" size="md" color="blue" variant="solid" icon="material-symbols-light:arrow-right-alt" :ui="{ font: 'font-normal' }" @click="navigateTo(`/product/1`)">
          <div class="flex justify-between gap-2 px-1 w-full">
            <span>View Details</span>

            
          </div>
        </UButton> -->
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
  image: string;
  benefits: [
    {
      id: number;
      name: string;
      icon: string;
      items: [
        {
          id: string;
          name: string;
        }
      ];
      sub_description: "";
    }
  ];
  amount: number;
};

const props = defineProps<{
  data: TPropsDataItemDisplay;
}>();

const { fnSetProduct, fnSetProductToCart } = useProducts();
</script>

<style scoped></style>

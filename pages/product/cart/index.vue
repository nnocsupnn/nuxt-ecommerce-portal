<template>
  <Container>
    <template #content>
      <section class="flex flex-col gap-4">
        <section class="flex gap-2 items-center">
          <ButtonIcon
            id="btn-back"
            icon="material-symbols-light:arrow-left-alt"
            variant="solid"
            custom-class="rounded-full"
            @on-emit-click="navigateTo('/product/1')"
          />
          <Breadcrumb
            v-if="store.product"
            :links="[
              { label: 'Products', to: '/' },
              { label: 'Details', to: `/product/${store.product.id}` },
              { label: 'Cart' },
            ]"
          />
        </section>

        <section class="cols-span-1 xl:col-span-5">
          <UCard>
            <template #header>
              <section class="flex justify-between">
                <span class="text-lg font-medium text-gray-700">Summary</span>

                <Button
                  id="btn-checkout"
                  label="Procced to Checkout"
                  custom-class="flex justify-center"
                  @on-emit-click="navigateTo('/product/checkout')"
                />
              </section>
            </template>

            <section class="flex flex-col gap-6">
              <section class="grid grid-cols-9 gap-2">
                <section class="col-span-3">
                  <span class="text-base text-gray-600"> Product </span>
                </section>

                <section class="col-span-2 text-end">
                  <span class="text-base text-gray-600"> Price </span>
                </section>

                <section class="col-span-2 text-end">
                  <span class="text-base text-gray-600"> Qty </span>
                </section>

                <section class="col-span-2 text-end">
                  <span class="text-base text-gray-600"> Total </span>
                </section>
              </section>

              <section class="flex flex-col gap-4">
                <section
                  v-for="summary in storeCart.fnGetSummary.data"
                  :key="summary.id"
                  class="grid grid-cols-9 gap-4"
                >
                  <section class="col-span-3">
                    <span class="text-sm text-gray-500">
                      {{ summary.title }}
                    </span>
                  </section>

                  <section class="col-span-2 text-end">
                    <span class="text-sm text-gray-500">
                      {{ `Php ${moneyFormat(summary.price)}` }}
                    </span>
                  </section>

                  <section class="col-span-2 text-end">
                    <span class="text-sm text-gray-500">
                      {{ summary.quantity }}
                    </span>
                  </section>

                  <section class="col-span-2 text-end">
                    <span class="text-base text-gray-500">
                      {{ `Php ${moneyFormat(summary.total)}` }}</span
                    >
                  </section>
                </section>
              </section>

              <section
                class="flex justify-between border border-gray-200 bg-gray-50 rounded p-2"
              >
                <span class="text-base text-gray-700">Sub Total</span>
                <span class="text-base text-gray-700">
                  {{
                    `Php ${moneyFormat(storeCart.fnGetSummary.subTotal.value)}`
                  }}
                </span>
              </section>
            </section>
          </UCard>
        </section>

        <section
          v-if="storeCart.cart.maxicare.gift.length"
          class="flex flex-col gap-8 p-6"
        >
          <section
            v-for="product in storeCart.cart.maxicare.gift"
            class="grid grid-cols-1 sm:grid-cols-6 items-center gap-6"
          >
            <section class="col-span-1 sm:col-auto flex flex-col gap-2">
              <img
                :src="product.image"
                class="w-fit w-[6rem] h-[6rem] object-contain"
              />
            </section>

            <section class="col-span-1 sm:col-span-2 flex flex-col gap-2">
              <p class="text-sm font-thin text-gray-500">
                {{ product.description }}
              </p>

              <span class="text-sm font-thin text-gray-700">
                {{ `Is this gift?: Yes` }}
              </span>

              <span class="text-sm font-thin text-gray-700">
                {{ `Email of Gift Recipient: ${product.email}` }}
              </span>
            </section>

            <section class="col-span-1 sm:col-auto flex justify-end">
              <span class="text-base text-gray-500">
                {{ product.quantity }}
              </span>
            </section>

            <section class="col-span-1 sm:col-auto flex justify-end">
              <span class="text-base text-gray-500">
                {{ `Php ${moneyFormat(product.total)}` }}
              </span>
            </section>

            <section class="col-span-1 sm:col-auto flex justify-end">
              <Button
                :id="`btn-remove-${product.id}`"
                label="Remove"
                icon="solar:trash-bin-trash-outline"
                variant="outline"
                color="red"
                @on-emit-click="storeCart.fnRemoveProduct('gift', product.id)"
              />
            </section>
          </section>
        </section>

        <section class="flex flex-col gap-8 p-6">
          <section
            v-for="product in storeCart.cart.maxicare.not_gift"
            class="grid grid-cols-1 sm:grid-cols-6 items-center gap-6"
          >
            <section class="col-span-1 sm:col-auto flex flex-col gap-2">
              <img
                :src="product.image"
                class="w-fit w-[6rem] h-[6rem] object-contain"
              />
            </section>

            <section class="col-span-1 sm:col-span-2 flex flex-col gap-2">
              <p class="text-sm font-thin text-gray-500">
                {{ product.description }}
              </p>
            </section>

            <section class="col-span-1 sm:col-auto flex justify-end">
              <span class="text-base text-gray-500">
                {{ product.quantity }}
              </span>
            </section>

            <section class="col-span-1 sm:col-auto flex justify-end">
              <span class="text-base text-gray-500">
                {{ `Php ${moneyFormat(product.total)}` }}
              </span>
            </section>

            <section class="col-span-1 sm:col-auto flex justify-end">
              <Button
                :id="`btn-remove-${product.id}`"
                label="Remove"
                icon="solar:trash-bin-trash-outline"
                variant="outline"
                color="red"
                @on-emit-click="
                  storeCart.fnRemoveProduct('notGift', product.id)
                "
              />
            </section>
          </section>
        </section>

        <!-- <section
          class="relative grid grid-cols-1 xl:grid-cols-12 gap-4 xl:gap-6"
        >
          <section class="col-span-1 xl:col-span-7 flex flex-col gap-6">
            <section
              v-if="storeCart.cart"
              v-for="product in storeCart.cart.maxicare.not_gift"
              :key="product.id"
              class="flex flex-col gap-6 p-6 rounded-xl border border-gray-200 shadow bg-white"
            >
              <section class="grid grid-cols-1 xl:grid-cols-3 gap-4">
                <section
                  class="flex justify-center items-center col-span-1 px-4"
                >
                  <img
                    :src="product.image"
                    class="w-fit min-h-[12rem] object-contain"
                  />
                </section>

                <section
                  class="col-span-2 flex flex-col gap-4 justify-center p-4"
                >
                  <section class="flex justify-between items-center">
                    <span class="font-medium text-lg text-gray-700">
                      {{ product.title }}
                    </span>

                    <Button
                      id="btn-remove"
                      label="Remove"
                      color="red"
                      icon="solar:trash-bin-trash-outline"
                      variant="outline"
                      size="xs"
                    />
                  </section>

                  <section class="flex flex-col gap-2">
                    <section class="flex justify-between">
                      <span class="text-sm text-gray-600">Is Gift?</span>
                      <span class="text-sm text-gray-600">No</span>
                    </section>

                    <section class="flex justify-between">
                      <span class="text-sm text-gray-600">Email</span>
                      <span class="text-sm text-gray-600">-</span>
                    </section>

                    <section class="flex justify-between">
                      <span class="text-sm text-gray-600">Quantity</span>
                      <span class="text-sm text-gray-600">{{
                        product.quantity
                      }}</span>
                    </section>

                    <section class="flex justify-between">
                      <span class="text-sm text-gray-600">Price</span>
                      <span class="text-sm text-gray-600">{{
                        `₱${moneyFormat(product.price)}`
                      }}</span>
                    </section>

                    <section class="flex justify-between">
                      <span class="text-sm text-gray-600">Total</span>
                      <span class="text-sm text-gray-600">{{
                        `₱${moneyFormat(product.total)}`
                      }}</span>
                    </section>
                  </section>
                </section>
              </section>
            </section>

            <section
              v-if="storeCart.cart"
              v-for="product in storeCart.cart.maxicare.gift"
              :key="product.id"
              class="flex flex-col gap-6 p-6 rounded-xl border border-gray-200 shadow bg-white"
            >
              <section class="grid grid-cols-1 xl:grid-cols-3 gap-4">
                <section
                  class="flex justify-center items-center col-span-1 px-4"
                >
                  <img
                    :src="product.image"
                    class="w-fit min-h-[12rem] object-contain"
                  />
                </section>

                <section
                  class="col-span-2 flex flex-col gap-4 justify-center p-4"
                >
                  <span class="font-medium text-lg text-gray-700">
                    {{ product.title }}
                  </span>

                  <p class="text-base text-gray-600">
                    {{ product.description }}
                  </p>
                </section>
              </section>

              <UTable
                :columns="columns"
                :rows="[
                  {
                    gift: 'Yes',
                    email: product.email,
                    quantity: product.quantity,
                    price: `₱${moneyFormat(product.price)}`,
                    total: `₱${moneyFormat(product.total)}`,
                    action: '',
                  },
                ]"
                :ui="{
                  th: {
                    padding: 'py-2',
                    color: 'text-gray-700',
                    font: 'font-normal',
                  },
                }"
                class="border border-gray-300 rounded-xl"
              >
                <template #action-data>
                  <Button
                    id="btn-remove"
                    label="Remove"
                    color="red"
                    icon="solar:trash-bin-trash-outline"
                    variant="outline"
                  />
                </template>
              </UTable>
            </section>
          </section>
        </section> -->
      </section>
    </template>
  </Container>
</template>

<script setup>
import Container from "~/components/elements/Container.vue";
import ButtonIcon from "~/components/elements/ButtonIcon.vue";
import Breadcrumb from "~/components/elements/Breadcrumb.vue";
import Button from "~/components/elements/Button.vue";
import { useStore } from "~/stores/store/product";
import { useCartStore } from "~/stores/store/cart";
import { moneyFormat } from "~/utilities/helpers";

definePageMeta({
  layout: "store-layout",
});

const store = useStore();
const storeCart = useCartStore();

const columns = [
  {
    key: "gift",
    label: "Gift",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "quantity",
    label: "Quantity",
  },
  {
    key: "price",
    label: "Price",
  },
  {
    key: "total",
    label: "Total",
  },
  {
    key: "action",
    label: "Action",
  },
];
</script>

<style scoped></style>

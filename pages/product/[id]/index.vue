<template>
  <Container>
    <template #content>
      <!-- <section class="flex flex-col gap-4">
        <section class="flex gap-2 items-center">
          <ButtonIcon
            id="btn-back"
            icon="material-symbols-light:arrow-left-alt"
            variant="solid"
            custom-class="rounded-full"
            @on-emit-click="navigateTo('/')"
          />
          <Breadcrumb
            :links="[{ label: 'Products', to: '/' }, { label: 'Details' }]"
          />
        </section>

        <section
          v-if="store.product"
          class="grid grid-cols-1 xl:grid-cols-5 gap-4"
        >
          <section
            class="col-span-1 xl:col-span-3 flex justify-center items-center py-8 border border border-gray-300 bg-white rounded-xl"
          >
            <img :src="store.product.image" class="object-contain" />
          </section>

          <section
            class="col-span-1 xl:col-span-2 flex flex-col justify-between gap-8 px-4 sm:px-8 py-4 sm:py-8 border border-gray-300 shadow bg-white rounded-xl"
          >
            <section class="flex justify-between items-center">
              <span
                v-if="store.product"
                class="text-xl font-medium text-gray-700"
              >
                {{ store.product.title }}
              </span>

              <div class="flex gap-8">
                <div v-if="store.product.quantity > 1" class="flex flex-col">
                  <span class="text-xs text-gray-400">Price</span>
                  <span class="text-xl font-medium text-gray-700">
                    {{
                      `₱${moneyFormat(store.product.amount.replace(",", ""))}`
                    }}
                  </span>
                </div>

                <div class="flex flex-col">
                  <span
                    v-if="store.product.quantity > 1"
                    class="text-xs text-gray-400"
                  >
                    Total</span
                  >
                  <span
                    v-if="store.product"
                    class="text-xl font-medium text-gray-700"
                  >
                    {{
                      `₱${moneyFormat(
                        (
                          store.product.quantity *
                          parseFloat(store.product.amount.replace(",", ""))
                        ).toString()
                      )}`
                    }}
                  </span>
                </div>
              </div>
            </section>

            <p v-if="store.product" class="text-base text-gray-600">
              {{ store.product.description }}
            </p>

            <section class="flex flex-col gap-2">
              <Checkbox
                id="chckbox-gift"
                label="Is this intended as a gift, or would you like it to be a gift?"
                :value="store.product.is_gift"
                @on-emit-click="store.product.is_gift = $event"
              />
              <Input
                v-if="store.product.is_gift"
                id="input-quantity"
                custom-class="flex justify-center"
                placeholder="Please provide the recipient's email address."
                @on-input-change="store.product.email = $event"
              />
            </section>

            <section class="flex flex-col gap-4">
              <section class="flex flex-col gap-1">
                <span class="text-sm text-gray-600">Quantity</span>
                <section class="flex gap-2">
                  <ButtonIcon
                    id="btn-minus"
                    icon="ic:outline-minus"
                    variant="soft"
                    :disabled="store.product.quantity == 1"
                    @on-emit-click="store.fnDeductQuantity"
                  />

                  <section class="w-[5rem]">
                    <Input
                      id="input-quantity"
                      :disabled="true"
                      custom-class="flex justify-center"
                      :value="store.product.quantity"
                    />
                  </section>

                  <ButtonIcon
                    id="btn-plus"
                    icon="material-symbols:add-2-rounded"
                    variant="soft"
                    @on-emit-click="store.fnAddQuantity"
                  />
                </section>
              </section>

              <section class="section flex gap-4">
                <div class="w-full">
                  <UButton
                    :id="`btn-add-to-cart`"
                    size="md"
                    color="blue"
                    variant="solid"
                    label="Add To Cart"
                    icon="material-symbols-light:shopping-cart-outline-sharp"
                    :ui="{ font: 'font-normal' }"
                    class="h-fit w-full flex justify-center"
                    @click="fnAddProductToCart"
                  />
                </div>

                <div class="w-full">
                  <UButton
                    :id="`btn-buy-now`"
                    size="md"
                    color="blue"
                    variant="outline"
                    icon="tdesign:undertake-transaction-filled"
                    label="Buy Now"
                    :ui="{ font: 'font-normal' }"
                    class="h-fit w-full flex justify-center"
                  />
                </div>
              </section>
            </section>
          </section>
        </section>
      </section> -->

      <section class="flex flex-col gap-4">
        <section class="flex gap-2 items-center">
          <ButtonIcon
            id="btn-back"
            icon="material-symbols-light:arrow-left-alt"
            variant="solid"
            custom-class="rounded-full"
            @on-emit-click="navigateTo('/')"
          />
          <Breadcrumb
            :links="[{ label: 'Products', to: '/' }, { label: 'Details' }]"
          />
        </section>

        <div class="grid grid-cols-1 sm:grid-cols-12 gap-8">
          <div
            class="col-span-1 sm:col-span-4 flex flex-col gap-4 rounded-2xl border border-gray-300 p-6 shadow hover:shadow-xl hover:transition hover:delay-150 hover:duration-300 hover:ease-in-out bg-white h-full"
          >
            <img :src="store.product.image" class="col-span-1 object-contain" />

            <section class="col-span-1">
              <section
                class="flex flex-col justify-between gap-8 min-h-[12rem]"
              >
                <section class="flex flex-col gap-6">
                  <section class="flex justify-between items-center">
                    <div class="flex flex-col">
                      <span class="text-lg font-medium text-gray-700">
                        {{ store.product.title }}
                      </span>
                      <span class="text-xs text-gray-600">By MaxiCare</span>
                    </div>

                    <span>{{
                      `Php ${moneyFormat(
                        parseFloat(store.product.amount.replace(",", ""))
                      )}`
                    }}</span>
                  </section>

                  <p class="text-sm text-gray-600">
                    {{ store.product.description }}
                  </p>
                </section>

                <section class="flex flex-col gap-2">
                  <Checkbox
                    id="chckbox-gift"
                    label="Is this intended as a gift, or would you like it to be a gift?"
                    :value="store.product.is_gift"
                    @on-emit-click="store.product.is_gift = $event"
                  />
                  <Input
                    v-if="store.product.is_gift"
                    id="input-quantity"
                    custom-class="flex justify-center"
                    placeholder="Please provide the recipient's email address."
                    @on-input-change="store.product.email = $event"
                  />
                </section>

                <section class="flex flex-col gap-4">
                  <section class="flex flex-col gap-1">
                    <span class="text-xs text-gray-600">Quantity</span>
                    <section class="flex items-center gap-4">
                      <ButtonIcon
                        id="btn-minus"
                        icon="ic:outline-minus"
                        variant="soft"
                        size="xs"
                        :disabled="store.product.quantity == 1"
                        @on-emit-click="store.fnDeductQuantity"
                      />

                      <span class="text-sm text-gray-600">
                        {{ store.product.quantity }}
                      </span>

                      <ButtonIcon
                        id="btn-plus"
                        icon="material-symbols:add-2-rounded"
                        variant="soft"
                        size="xs"
                        @on-emit-click="store.fnAddQuantity"
                      />
                    </section>
                  </section>

                  <section class="section flex gap-4">
                    <div class="w-full">
                      <UButton
                        :id="`btn-add-to-cart`"
                        size="md"
                        color="blue"
                        variant="solid"
                        label="Add To Cart"
                        icon="material-symbols-light:shopping-cart-outline-sharp"
                        :ui="{ font: 'font-normal' }"
                        class="h-fit w-full flex justify-center"
                        @click="fnAddProductToCart('addToCart')"
                      />
                    </div>

                    <div class="w-full">
                      <UButton
                        :id="`btn-buy-now`"
                        size="md"
                        color="blue"
                        variant="outline"
                        icon="tdesign:undertake-transaction-filled"
                        label="Buy Now"
                        :ui="{ font: 'font-normal' }"
                        class="h-fit w-full flex justify-center"
                        @click="fnAddProductToCart('proceedToCheckOut')"
                      />
                    </div>
                  </section>
                </section>
              </section>
            </section>
          </div>

          <div class="col-span-1 sm:col-span-8 flex flex-col gap-4">
            <span class="text-base font-medium text-gray-700">
              Highlights
            </span>

            <ul class="list-disc pl-5 text-gray-500">
              <li v-for="(list, index) in lists" :key="index">
                <span class="text base text-gray-600">
                  {{ list }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </template>
  </Container>
</template>

<script setup>
import Input from "~/components/elements/Input.vue";
import ButtonIcon from "~/components/elements/ButtonIcon.vue";
import Container from "~/components/elements/Container.vue";
import Breadcrumb from "~/components/elements/Breadcrumb.vue";
import Checkbox from "~/components/elements/Checkbox.vue";
import useProductItem from "~/composables/website/useProductItem";
import { moneyFormat } from "~/utilities/helpers";
import { useStore } from "~/stores/store/product";

definePageMeta({
  layout: "store-layout",
});

const store = useStore();
const { fnAddProductToCart } = useProductItem();

const lists = reactive([
  "Unlimited Laboratory Tests and Diagnostic Procedures as prescribed by a Maxicare-affiliated physician",
  "Unlimited consultations with Maxicare Primary Care Clinic (PCC) dctors:",
  "Cardiologist",
  "Endocrinologist",
  "Obstetrician Gynecologist (OB-GYN)",
  "Pediatrician",
  "Ear-Nose-Throat (ENT)",
  "Medical Dermatologist",
  "Ophtamologist",
  "General Surgeon",
  "Internal Medicine (IM)",
  "General Practitioner (GP)",
  "Family Medicine (FM)",
  "Valid at any Maxicare Primary Care Clinic (PCC)",
  "Eligible for new borns up to Seniors",
  "Emergency room coverage of up to 20,000 across all Maxicare-affiliated hospitals nationwide",
  "Sinle usage per type of dental service with Metro Dental",
  "Valid for 1 year from activation date",
  "Covers pre-existing conditions",
  "No preliminary checkups and paperwork needed",
  "Group lfe with Accidental Death, Dismemberment & Disablement (ADD&D) of up to 50,000",
]);
</script>

<style scoped>
#img-container {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='10' stroke-dasharray='15%2c 15%2c 1' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
}
</style>

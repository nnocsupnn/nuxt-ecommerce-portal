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
            @on-emit-click="navigateTo('/product/cart')"
          />
          <Breadcrumb
            :links="[
              { label: 'Products', to: '/' },
              { label: 'Cart', to: '/product/cart' },
              { label: 'Checkout' },
            ]"
          />
        </section>

        <section class="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <section class="col-span-1 xl:col-span-7">
            <BillingInfo />
          </section>

          <section class="col-span-1 xl:col-span-5">
            <section class="sticky top-[6rem] pt-1">
              <UCard>
                <template #header>Summary</template>

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
                      <section class="col-span-2">
                        <span class="text-sm text-gray-500">
                          {{ summary.title }}
                        </span>
                      </section>

                      <section class="col-span-3 text-end">
                        <span class="text-sm text-gray-500">
                          {{ `₱${moneyFormat(summary.price)}` }}
                        </span>
                      </section>

                      <section class="col-span-2 text-end">
                        <span class="text-sm text-gray-500">
                          {{ summary.quantity }}
                        </span>
                      </section>

                      <section class="col-span-2 text-end">
                        <span class="text-sm text-gray-500 pr-2">
                          {{ `₱${moneyFormat(summary.total)}` }}</span
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
                        `₱${moneyFormat(storeCart.fnGetSummary.subTotal.value)}`
                      }}
                    </span>
                  </section>
                </section>

                <template #footer>
                  <section class="flex flex-col gap-4">
                    <section class="flex text-end items-end gap-2">
                      <Input
                        placeholder="Agenct Code"
                        class="w-full"
                        label="Agent Code"
                        :disabled="true"
                        :value="storeAgentCode.agentCode"
                      />
                      <Input
                        placeholder="Discount Code"
                        class="w-full"
                        label="Discount Code"
                      />
                      <Button id="btn-apply" label="Apply" variant="outline" />
                    </section>

                    <Button
                      id="btn-pay-now"
                      label="Pay Now"
                      custom-class="flex justify-center"
                      @on-emit-click="navigateTo('/product/checkout')"
                    />
                  </section>
                </template>
              </UCard>
            </section>
          </section>
        </section>
      </section>
    </template>
  </Container>
</template>

<script setup>
import Container from "~/components/elements/Container.vue";
import Breadcrumb from "~/components/elements/Breadcrumb.vue";
import ButtonIcon from "~/components/elements/ButtonIcon.vue";
import Button from "~/components/elements/Button.vue";
import Input from "~/components/elements/Input.vue";
import BillingInfo from "~/components/website/checkout/BillingInfo.vue";
import { useCartStore } from "~/stores/store/cart";
import { useAgentStore } from "~/stores/store/agentCode";
import { moneyFormat } from "~/utilities/helpers";

definePageMeta({
  layout: "store-layout",
});

const storeCart = useCartStore();
const storeAgentCode = useAgentStore();
</script>

<style scoped></style>

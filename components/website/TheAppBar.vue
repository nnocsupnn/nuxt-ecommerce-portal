<template>
  <div class="sticky top-0 transition-all duration-300 bg-white z-40">
    <Container>
      <template #content>
        <section class="flex flex-col sm:flex-row justify-between gap-4">
          <img
            :src="Logo"
            class="w-[10rem] h-[3rem] object-contain cursor-pointer"
          />

          <section class="flex items-center gap-2">
            <Input
              id="input-search"
              placeholder="Search Product..."
              class="w-full"
            />

            <section class="relative">
              <ButtonIcon
                id="btn-cart"
                :icon="
                  storeCart.fnsumQuantities < 1
                    ? 'material-symbols:shopping-cart-outline-rounded'
                    : 'material-symbols:shopping-cart-rounded'
                "
                variant="soft"
                custom-class="relative rounded-full"
                :disabled="storeCart.fnsumQuantities < 1"
                @on-emit-click="navigateTo('/product/cart')"
              />

              <div
                v-if="storeCart.fnsumQuantities"
                class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-medium text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
              >
                {{ storeCart.fnsumQuantities }}
              </div>
            </section>
          </section>
        </section>
      </template>
    </Container>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/public/images/logo.jpg";
import Container from "../elements/Container.vue";
import Input from "../elements/Input.vue";
import ButtonIcon from "../elements/ButtonIcon.vue";
import { useCartStore } from "~/stores/store/cart";

const storeCart = useCartStore();
</script>

<style scoped></style>

<template>
  <div class="sticky top-0 transition-all duration-300 bg-white z-40">
    <Container>
      <template #content>
        <section
          class="flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <img
            :src="Logo"
            class="w-[10rem] h-[3rem] object-contain cursor-pointer"
          />

          <ButtonIcon
            id="btn-cart"
            icon="material-symbols:account-circle-full"
            variant="soft"
            custom-class="relative rounded-full"
            :disabled="storeCart.fnsumQuantities < 1"
            @on-emit-click="navigateTo('/product/cart')"
          />
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

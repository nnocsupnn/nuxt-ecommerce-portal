<template>
  <div>
    <Container>
      <template #content>
        <section class="flex flex-col gap-4">
          <!-- <span class="sticky top-[5rem] z-1 bg-white">maxicare</span> -->
          <section class="grid grid-cols-1 sm:grid-cols-12 gap-8">
            <section
              v-for="product in store.products.maxicare"
              class="col-span-1 sm:col-span-4"
            >
              <Product :data="product" />
            </section>
          </section>

          <UDivider size="xs" />

          <!-- <span class="sticky top-[4rem] z-4 bg-white">maxilife</span> -->

          <section class="grid grid-cols-1 sm:grid-cols-12 gap-8">
            <section
              v-for="product in store.products.maxilife"
              class="col-span-1 sm:col-span-4"
            >
              <ProductMaxiLife :data="product" />
            </section>
          </section>
        </section>
      </template>
    </Container>
  </div>
</template>

<script setup>
import Container from "~/components/elements/Container.vue";
import Product from "~/components/website/store/ProductMaxiCare.vue";
import ProductMaxiLife from "~/components/website/store/ProductMaxiLife.vue";
import { useStore } from "@/stores/store/product";
import { useAgentStore } from "~/stores/store/agentCode";

definePageMeta({
  layout: "store-layout",
});

const store = useStore();
const storeAgentCode = useAgentStore();

onMounted(() => {
  if (useRoute().query.q) storeAgentCode.agentCode = useRoute().query.q;
});
</script>

<style scoped></style>

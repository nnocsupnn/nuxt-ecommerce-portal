<template>
  <section class="grid grid-cols-12 gap-8 p-8 bg-white border rounded-2xl">
    <section class="col-start-3 col-end-11">
      <section class="grid grid-cols-12 gap-4">
        <Input id="input-province" label="Province" class="col-span-4" />

        <Input
          id="input-municipality"
          label="Municipality"
          class="col-span-4"
        />

        <Input id="input-zipcode" label="Zipcode" class="col-span-4" />

        <Input
          id="input-st"
          label="House Number / Street / Subdivision / Village"
          class="col-span-12"
        />

        <Input
          id="input-mobile-number"
          label="Mobile Number"
          class="col-span-4"
        />

        <Input id="input-email" label="Email Address" class="col-span-4" />
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import Input from "~/components/elements/Input.vue";
import Button from "~/components/elements/Button.vue";
</script>

<style scoped></style>

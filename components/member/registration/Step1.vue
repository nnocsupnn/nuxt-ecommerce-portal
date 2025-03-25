<template>
  <section class="grid grid-cols-12 p-8 bg-white border rounded-2xl">
    <section class="col-start-5 col-end-9 flex flex-col items-start gap-4">
      <Input id="input-card-number" label="Card Number" class="w-full" />
      <Input id="input-policy-number" label="Policy Number" class="w-full" />

      <UDivider label="OR" />

      <Input id="input-reference-code" label="Reference Code" class="w-full" />

      <Button
        id="btn-verify"
        label="Verify"
        class="flex justify-center w-full"
      />
    </section>
  </section>
</template>

<script setup lang="ts">
import Input from "~/components/elements/Input.vue";
import Button from "~/components/elements/Button.vue";
</script>

<style scoped></style>

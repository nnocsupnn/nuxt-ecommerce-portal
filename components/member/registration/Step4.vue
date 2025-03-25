<template>
  <section class="grid grid-cols-12 p-8 bg-white border rounded-2xl">
    <section class="col-start-5 col-end-9 flex flex-col items-start gap-4">
      <Checkbox
        id="chk-1"
        label="You have read and agree to Maxicare's Terms and Conditions and Privacy Policy"
      />
      <Checkbox
        id="chk-2"
        label="You agree to receive account-related announcements and updates from Maxicare."
      />
      <Checkbox
        id="chk-3"
        label="You provided true and correct details of the member to comply with Know Your Customer requirements"
      />
    </section>
  </section>
</template>

<script setup lang="ts">
import Checkbox from "~/components/elements/Checkbox.vue";
</script>

<style scoped></style>

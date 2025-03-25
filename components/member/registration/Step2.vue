<template>
  <section class="grid grid-cols-12 gap-8 p-8 bg-white border rounded-2xl">
    <p class="col-start-3 col-end-11 text-sm text-gray-600">
      In line with Maxicare's terms and conditions, we would like to remind you
      to kindly check and ensure that the membership details you have provided
      us, such as your full name and birthdate, among others, are true and
      correct. This is to avoid any potential inconvenience in the future. Thank
      you!
    </p>

    <section class="col-start-3 col-end-11">
      <section class="grid grid-cols-12 gap-4">
        <Input id="input-firstname" label="First Name" class="col-span-4" />

        <Input id="input-middlename" label="Middle Name" class="col-span-4" />

        <Input id="input-lastname" label="Last Name" class="col-span-4" />

        <Input id="input-suffix" label="Suffix" class="col-span-4" />

        <Input id="input-birthdate" label="Birthdate" class="col-span-4" />

        <Input id="input-gender" label="Gender" class="col-span-4" />

        <Input
          id="input-civil-status"
          label="Civil Status"
          class="col-span-4"
        />
      </section>
    </section>
  </section>
</template>

<script setup lang="ts">
import Input from "~/components/elements/Input.vue";
import Button from "~/components/elements/Button.vue";
</script>

<style scoped></style>

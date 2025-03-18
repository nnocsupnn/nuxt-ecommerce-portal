<template>
  <div class="flex flex-col gap-6">
    <section
      class="flex flex-col gap-6 p-6 rounded-xl border border-gray-200 bg-white"
    >
      <section class="flex gap-2 items-center">
        <UIcon name="ic:twotone-contact-mail" class="w-6 h-6 text-gray-600" />
        <span class="text-xl font-medium text-gray-700"> Contact </span>
      </section>

      <section class="flex flex-col gap-4">
        <section class="grid grid-cols-1 xl:grid-cols-2 gap-4 items-center">
          <Input id="input-email" placeholder="Email" />
          <Checkbox
            id="chckbox-offers-and-news"
            label="Email me with news and offers?"
          />
        </section>

        <section class="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <Input id="input-Phone" placeholder="Phone" />
        </section>
      </section>
    </section>

    <section
      class="flex flex-col gap-6 p-6 rounded-xl border border-gray-200 bg-white"
    >
      <section class="flex gap-2 items-center">
        <UIcon
          name="material-symbols:inbox-text-person-outline-rounded"
          class="w-6 h-6 text-gray-600"
        />
        <span class="text-xl font-medium text-gray-700">
          Customer Information
        </span>
      </section>

      <section class="flex flex-col gap-4">
        <section class="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <Input id="input-firstname" placeholder="First Name" />
          <Input id="input-lastname" placeholder="Middle Name" />
        </section>

        <Input id="input-address1" placeholder="Address1" />
        <Input id="input-address2" placeholder="Address2 (Optional)" />

        <section class="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <Input id="input-region" placeholder="Region" />
          <Input id="input-city" placeholder="City" />
        </section>

        <section class="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <Input id="input-postal-code" placeholder="Postal Code" />
          <Input id="input-Phone" placeholder="Phone" />
        </section>
      </section>
    </section>

    <section
      class="flex flex-col gap-6 p-6 rounded-xl border border-gray-200 bg-white"
    >
      <section class="flex gap-2 items-center">
        <UIcon
          name="material-symbols:local-shipping-sharp"
          class="w-6 h-6 text-gray-600"
        />
        <span class="text-xl font-medium text-gray-700">
          Shipping Address
        </span>
      </section>

      <section class="flex flex-col gap-4">
        <section class="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <Input id="input-region" placeholder="Region" />
          <Input id="input-city" placeholder="City" />
        </section>

        <Input id="input-address1" placeholder="Address1" />
        <Input id="input-address2" placeholder="Address2 (Optional)" />
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import Input from "~/components/elements/Input.vue";
import Checkbox from "~/components/elements/Checkbox.vue";
</script>

<style scoped></style>

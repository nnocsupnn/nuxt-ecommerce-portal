<template>
  <section class="grid place-content-center h-screen">
    <UCard
      :ui="{
        base: 'w-[20.5rem]',
        rounded: 'rounded-2xl',
        body: { padding: 'pt-0 sm:pt-0' },
        header: { base: 'grid place-content-center' },
        divide: 'divide-y-0',
      }"
      class="border border-gray-300 custom-shadow"
    >
      <template #header>
        <img
          :src="Logo"
          class="w-[10rem] h-[3rem] object-contain cursor-pointer"
        />
      </template>

      <section class="flex flex-col gap-4">
        <Input id="input-username" label="Username" />

        <section class="flex flex-col gap-2">
          <Input id="input-password" label="Password" />

          <Button
            id="btn-forgot-password"
            label="Forgot Password?"
            size="xs"
            variant="ghost"
            class="w-fit"
          />
        </section>

        <Button id="btn-submit" label="Submit" class="flex justify-center" />
      </section>
    </UCard>
  </section>
</template>

<script setup lang="ts">
import Logo from "@/public/images/logo.jpg";
import Input from "~/components/elements/Input.vue";
import Button from "~/components/elements/Button.vue";

useHead({
  title: "Agent | Login",
});
</script>

<style scoped></style>

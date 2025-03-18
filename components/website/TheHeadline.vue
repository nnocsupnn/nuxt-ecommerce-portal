<template>
  <Modal :isOpen="modalData.isOpen">
    <template #modal-header>
      <section class="flex justify-between items-center gap-2">
        <span class="text-lg text-gray-700">{{ modalData.title }}</span>

        <ButtonIcon
          id="btn-close"
          icon="material-symbols-light:close"
          variant="ghost"
          @on-emit-click="modalData.isOpen = false"
        />
      </section>
    </template>

    <template #modal-content>
      <Signin v-if="modalData.title == 'Signin'" />
      <CreateAccount v-else />
    </template>
  </Modal>

  <div class="bg-blue-100">
    <section
      class="flex flex-col sm:flex-row justify-between gap-2 max-w-screen-xl mx-auto px-4 py-2 sm:px-6 lg:px-8"
    >
      <section class="flex flex-col sm:flex-row gap-2">
        <section class="flex gap-1 items-center">
          <UIcon
            name="material-symbols-light:phone-android"
            class="text-gray-600"
          />
          <span class="text-base text-gray-600">+63 (2) 7798 - 7770</span>
        </section>

        <section class="flex gap-1 items-center">
          <UIcon
            name="material-symbols-light:mail-outline"
            class="text-gray-600 mt-1"
          />
          <span class="text-base text-gray-600"
            >customercare@maxicare.com.ph</span
          >
        </section>
      </section>

      <section class="flex items-center gap-2">
        <Button
          id="btn-signin"
          label="Sign In"
          variant="ghost"
          @on-emit-click="fnSetModalData('signin')"
        />
        <Button
          id="btn-signin"
          label="Create Account"
          variant="solid"
          @on-emit-click="fnSetModalData('new')"
        />
      </section>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from "../elements/Button.vue";
import Modal from "../elements/Modal.vue";
import ButtonIcon from "../elements/ButtonIcon.vue";
import Signin from "./headline/Signin.vue";
import CreateAccount from "./headline/CreateAccount.vue";
import useHeadline from "@/composables/website/useHeadline";

const { modalData, fnSetModalData } = useHeadline();
</script>

<style scoped></style>

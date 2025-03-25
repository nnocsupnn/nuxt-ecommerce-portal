<template>
  <div>
    <Container>
      <template #content>
        <section class="flex flex-col gap-8">
          <img
            :src="Logo"
            class="w-[10rem] h-[3rem] object-contain cursor-pointer mt-[3rem]"
          />

          <span class="text-xl text-gray-700">
            Register your Maxicare Prepaid Card Now!
          </span>

          <Stepper :tab-active="tabActive" :tab-items="tabItems" />

          <Step1 v-if="tabActive == 1" />
          <Step2 v-if="tabActive == 2" />
          <Step3 v-if="tabActive == 3" />
          <Step4 v-if="tabActive == 4" />

          <div class="flex justify-end">
            <section class="flex gap-2">
              <Button
                id="btn-back"
                label="Back"
                custom-class="px-6"
                variant="outline"
                :disabled="tabActive == 1 ? true : false"
                @on-emit-click="fnBack"
              />
              <Button
                id="btn-next"
                label="Next"
                custom-class="px-6"
                :disabled="tabActive == 5 ? true : false"
                @on-emit-click="fnNext"
              />
            </section>
          </div>
        </section>
      </template>
    </Container>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/public/images/logo.jpg";
import Container from "~/components/elements/Container.vue";
import Button from "~/components/elements/Button.vue";
import Stepper from "~/components/member/registration/Stepper.vue";
import Step1 from "~/components/member/registration/Step1.vue";
import Step2 from "~/components/member/registration/Step2.vue";
import Step3 from "~/components/member/registration/Step3.vue";
import Step4 from "~/components/member/registration/Step4.vue";
import useRegistration from "~/composables/member/useRegistration";

const { tabActive, tabItems, fnBack, fnNext } = useRegistration();
</script>

<style scoped></style>
